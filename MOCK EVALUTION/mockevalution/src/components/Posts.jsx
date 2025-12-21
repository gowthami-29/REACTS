import { useContext } from "react";
import { PostContext } from "./PostContext";
import PostCard from "./PostCard";



export default function Posts(){
    const {posts}=useContext(PostContext);
    return(
        <div className="grid">
            {
                posts.map(post=>(
                    <PostCard key={post.id} post={post}/>
                ))
            }
        </div>
    )
}