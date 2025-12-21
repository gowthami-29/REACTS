
import { ThemeContext } from "./components/ThemeContext";
import { PostsProvider } from "./components/PostContext";
import { ThemeProvider } from "./components/ThemeContext";
import Posts from "./components/Posts";
import { useContext } from "react";
function ThemeButton(){
  const {toggleTheme}=useContext(ThemeContext);
  return <button onClick={toggleTheme}>Switch Theme</button>
}


export default  function App(){
  return(
    <ThemeProvider>
      <PostsProvider>
        <ThemeButton/>
        <Posts/>
      </PostsProvider>
    </ThemeProvider>
  )
}