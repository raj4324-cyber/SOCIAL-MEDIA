import { useContext, useRef } from "react"
import { PostListContext } from "../store/post-list-store";
const CreatePost=()=>{
  const { addPost }=useContext(PostListContext)
  const userIdElement=useRef();
  const postTitleElement=useRef();
  const postBodyElement=useRef();
  const ReactionsElement=useRef();
  const tagsElement=useRef();
  const handlesubmit=(event)=>{
   event.preventDefault(); 
    const userId=userIdElement.current.value;
    const  postTitle=postTitleElement.current.value; 
    const postBody=postBodyElement.current.value;
    const reaction=ReactionsElement.current.value;
    const tags=tagsElement.current.value.split(' ');
    userIdElement.current.valu=""
    postTitleElement.current.value=""
    postBodyElement.current.value=""
    ReactionsElement.current.value=""
    tagsElement.current.value=""
    addPost(userId,postTitle,postBody,reaction,tags);
  }
return(
  <>
  <form className="create-post" onSubmit={handlesubmit}>
  <div className="mb-3">
    <label htmlFor="userId" className="htmlForm-label">Enter your user Id here</label>
    <br />
    <input type="text" className="form-control" id="userId" placeholder="Your user Id" ref={userIdElement}/> 
  </div>
  <div className="mb-3">
    <label htmlFor="title" className="htmlForm-label">Post Title</label>
    <br />
    <input type="text" className="htmlForm-control" id="title" placeholder="How are you feeling today..." ref={postTitleElement}/> 
  </div>
  <div className="mb-3">
    <label htmlFor="body" className="htmlForm-label">Post Content</label>
    <br />
    <textarea type="text" rows="4" className="form-control" id="body" placeholder="Tell us more about it" ref={postBodyElement}></textarea>
  </div>
  <div className="mb-3">
    <label htmlFor="reaction" className="form-label">Number of reaction</label>
    <br />
    <input type="text" className="form-control" id="reactions" placeholder="How many people reacted to this post" ref={ReactionsElement}/> 
  </div>
  <div className="mb-3">
    <label htmlFor="tags" className="form-label">Enter your hashtag here</label>
    <br />
    <input type="text" className="form-control" id="tags" placeholder="Please enter tags using space" ref={tagsElement }/> 
  </div>
  <button type="submit" className="btn btn-primary">Post</button> 
</form>
  </>
)
}
export default CreatePost