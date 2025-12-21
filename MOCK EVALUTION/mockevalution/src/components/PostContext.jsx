import { createContext, useEffect, useState } from "react";


export const PostContext=createContext();
export function PostsProvider({children}){
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=>res.json())
        .then(data=>setPosts(data.slice(0,20)));
    },[])
    const deletePost=(id)=>{
        setPosts(posts.filter(post=>post.id!==id))
    };
    const editPost=(id, newTitle, newBody)=>{
        setPosts(posts.map(post=>post.id===id?{...post,title:newTitle,body:newBody}:post));
    };
    return(
        <PostContext.Provider value={{posts,deletePost,editPost}}>{children}</PostContext.Provider>
    );
}