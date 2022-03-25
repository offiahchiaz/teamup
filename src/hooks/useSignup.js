import { useEffect, useState } from "react"
import { projectAuth, projectStorage } from "../firebase/config"
import { useAuthContext } from "./useAuthContext"

export const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()

  const signup = async (email, password, displayName, thumbnail) => {
    setError(null)
    setIsPending(true)

    try {
      // signup user
      const res = await projectAuth.createUserWithEmailAndPassword(email, password)
      console.log(res.user)

      if (!res) {
        throw new Error('Could not complete signup')
      }

      // upload user thumbnail
      const uplaodPath = `thumbnails/${res.user.uid}/${thumbnail.name}`
      const img = await projectStorage.ref(uplaodPath).put(thumbnail)
      const imgUrl = await img.ref.getDownloadURL()

      // add display name to user
      await res.user.updateProfile({ displayName, photoURL: imgUrl })

      // dispatch login action
      dispatch({ type: 'LOGIN', payload: res.user })

       // update state
      if (!isCancelled) {
        setIsPending(false)
        setError(null)
      }
    } 
    catch (err) {
      if (!isCancelled) {
        console.log(err.message)
        setError(err.message)
        setIsPending(false)  
      }
      
    }
  }

  useEffect(() => {
    // return a cleanup fucntion
    return () => setIsCancelled(true)
  }, [])

  return { error, isPending, signup }
}