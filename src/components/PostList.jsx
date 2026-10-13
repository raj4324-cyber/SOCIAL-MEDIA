import { useContext } from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
const PostList=()=>{
 const {postList}= useContext(PostListContext)
return(
  <>
  {postList.length==0 &&<WelcomeMessage></WelcomeMessage>}
  {postList.map((post)=>( 
    <Post key={post.id} post={post} />
  ))}

  </>
)
}
export default PostList;