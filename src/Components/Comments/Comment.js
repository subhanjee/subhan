import React from 'react';
import { Checkbox } from 'antd';
import "./comment.css"
 

function Comments() {
    return (
     
        <div>
        <div className=" ">
        <div className="get-in-touch  ">
         
        </div>
        <div className="d-flex align-items-end p-3  ">
          <form className="text-center">
            <div>
              <input
                className="input"
                type="text"
                placeholder="Name"
                size="35"
              />
            </div>
            <div>
              <input
                className="input"
                type="text"
                placeholder="Email"
                size="35"
              />
            </div>
            <div>
            <input
              className="input"
              type="text"
              placeholder="Website"
              size="35"
            />
          </div>
            <div>
              <textarea
                className="input"
                type="text"
                placeholder="Comment"
                rows="5"
                cols="35"
              />
            </div>
            <div className="send-message mt-3">
              <button className="btn btn-primary">Post Comment</button>
            </div>
          </form>
        </div>
      </div>
      <div>
      <Checkbox >Save my name, email, and website in this browser for the next time I comment.</Checkbox>
      </div>
        </div>
    )
}

export default Comments


 