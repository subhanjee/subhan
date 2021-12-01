import React from 'react'
import Blog2 from '../../Components/Blog2/Index';
import Index from '../../Components/Nabar/Index';
import "./blog.css";

function Blog() {
    return (
        <div>
      <Index/>
        <div className="MainBlog"> 
            <div className="img" >
           <p className="heading">explore</p>
           <h2 className="heading1">Blog</h2>
            </div>
        </div>
   
        <Blog2/>
        </div>
    )
}
 
export default Blog
