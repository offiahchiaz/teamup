import { useState } from "react"
import { v4 as uuid } from 'uuid'
import { timestamp } from "../../firebase/config"
import { useAuthContext } from "../../hooks/useAuthContext"


export default function ProjectComments() {
  const commentID = uuid()
  const { user } = useAuthContext()
  const [newComment, setNewComment] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const commentToAdd = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      content: newComment,
      createdAt: timestamp.fromDate(new Date()),
      id: commentID
    }
    console.log(commentToAdd)
  }

  return (
    <div className="project-comments">
      <h4>Project Comments</h4>

      <form onSubmit={handleSubmit} className="add-comment">
        <label>
          <span>Add new comment:</span>
          <textarea
            required
            onChange={(e) => setNewComment(e.target.value) }
            value={newComment}
          ></textarea>
        </label>
        <button className="btn">Add Comment</button>
      </form>
    </div>
  )
}