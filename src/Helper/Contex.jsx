import { createContext, useEffect, useState } from "react"

export const ContentContext = createContext();

export default function PostContext({ children }) {
    const [posts, setPosts] = useState([])
    const [newPost,setNewPost] = useState()
    const [users, SetUsers] = useState([])

    const url = 'https://boolean-uk-api-server.fly.dev/panfi98/post'
    const userUrl = 'https://boolean-uk-api-server.fly.dev/panfi98/contact/'



    const createPost = async (data) => {
        await fetch(url, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(data)
        })
        getPosts()
    }

    const getPosts = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setPosts(data)
    }

    const getUserData = async () => {
        const response = await fetch(userUrl)
        const data = await response.json()
        SetUsers(data)
    }

    useEffect(() => {
        getUserData()
    }, [])
  

    


    return (
        <ContentContext.Provider
            value={{
                posts: posts,
                newPost: newPost,
                setNewPost:setNewPost,
                getPosts: getPosts,
                createPost: createPost,
                getUserData: getUserData,
                users: users
            }}>
            {children}
        </ContentContext.Provider>
    )
}