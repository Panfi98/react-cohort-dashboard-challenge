
import Comment from "./Comment"

export default function Comments({ users, comments }) {


    return (
        <>
            {comments.map((comment, index) => (<Comment comment={comment} users={users} key={index} />))}
            <div className="sumbitcommentbutton">
                <form >
                    <div >
                        <label>
                            <textarea name='newPost' />
                        </label>
                        <input type="submit" />
                    </div>
                </form>
            </div>
        </>
    )

}