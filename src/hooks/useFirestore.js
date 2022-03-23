import { useEffect, useReducer, useState } from "react";
import { projectFirestore } from "../firebase/config";

let initialState = {
  document: null,
  isPending: false,
  error: null,
  success: null
}

const firestoreReducer = (state, action) => {
  switch (action.type) {
    case '':
      return ''
    default:
      return state
  }
}

export const useFirestore = (collection) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState)
  const [isCancelled, setIsCancelled] = useState(false)

  // collection ref
  const ref = projectFirestore.collection(collection)

  // add a document 
  const addDocument = (doc) => {

  }

  // delete a document
  const deleteDocument = (id) => {

  }

  useEffect(() => {
    // return a cleanup fucntion
    return () => setIsCancelled(true)
  }, [])

  return { addDocument, deleteDocument, response }
}