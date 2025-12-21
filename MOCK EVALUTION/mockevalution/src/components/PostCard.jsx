import { useContext, useState } from "react";
import { PostContext } from "./PostContext";
import { ThemeContext } from "./ThemeContext";


export default function PostCard({post}){
    const {deletePost, editPost}=useContext(PostContext);
    const {theme}=useContext(ThemeContext);
    const [editing,setEditing]=useState(false);
    const [title,setTitle]=useState(post.title)
    const [body,setBody]=useState(post.body);
    const saveEdit=()=>{
        editPost(post.id,title,body);
        setEditing(false)
    };
    return(
        <div className={`caed ${theme}`}>
            {editing ?
            (
                <>
                <input type="text" value={title} onChange={e=>setTitle(e.target.value)} />
                <textarea value={body} onChange={e=>setBody(e.target.value)}/>
                <button onClick={saveEdit}>Save</button>

                </>
            ):(
                <>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <button onClick={()=>{setEditing(true)}}>Edit</button>
                <button onClick={()=>deletePost(post.id)}>Delete</button>
                </>
            )}
           
        </div>
    );

}