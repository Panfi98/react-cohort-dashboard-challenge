
import { useState } from "react"
import Comment from "./Comment"

export default function Comments({ postId, users, comments, fetchComments }) {
    const [newComment, setNewComment] = useState({
        postId: postId,
        content: '',
        contactId: 1
    })

    const url = 'https://boolean-uk-api-server.fly.dev/panfi98/post/' + `${postId}` + '/comment'

    const submit = async (event)=> {
        event.preventDefault()
        await fetch(url, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(newComment)
        })
        fetchComments(postId)
        setNewComment({
            ...newComment,
            content: ''
        })
    }

    const onChange = (event) =>{
        event.preventDefault()
        const text = event.target.value
        setNewComment({
            ...newComment, 
            content: text 
        });
    }

    return (
        <>
            {comments.map((comment, index) => (<Comment comment={comment} users={users} key={index}/>))}
            <div className="sumbitcommentbutton">
                <form onSubmit={submit}>
                    <div >
                        <label>
                            <textarea name='newPost' value={newComment.content} onChange={onChange}/>
                        </label>
                        <input type="submit" />
                    </div>
                </form>
            </div>
        </>
    )

}