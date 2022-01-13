import "./post.css"
import postImg from "../../img/post.jpg"

export default function Post(props) {
    return (
        <div className="post">
           <img
           className="postImg"
           src={postImg}
           alt=""
           />
           <div className="postInfo">
               <div className="postCats">
                   <span className="postCat">Code</span>
                   <span className="postCat">frameworks</span>
               </div>
               <span className="postTitle">
                <strong><b>{props.fkid}</b></strong>
                -{props.title}
               </span>
                <span><i><small>{props.description}</small></i></span>
               <hr/>
               <span className="postDate">1 hour ago</span>
           </div>
           <p className="postDesc">
               {props.text_body}
            </p>
        </div>
    )
}