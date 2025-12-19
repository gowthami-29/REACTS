function TodoCard({userId,title,completed}){
return(
    <div>
        <p>User Id: {userId}</p>
        <p>Title : {title}</p>
        <p>Status: {completed ? "completed":"pending"}</p>
    </div>
)
}
export default TodoCard;