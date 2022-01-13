import "./singlePost.css"
import postImg from "../../img/post.jpg"

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img
                className="singlePostImg"
                src={postImg}
                alt=""
                />
                <h1 className="singlePostTitle">
                    Lorem, ipsum dolor sit amet
                    <div className="singlePostEdit">
                    <i className="singlePostIcon far fa-edit"></i>
                    <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Fabrice</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc"> 
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Harum vero, quis expedita ratione sed recusandae consequatur ea odio libero suscipit!
                  Delectus minus totam ratione, quasi optio velit commodi suscipit officiis?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Harum vero, quis expedita ratione sed recusandae consequatur ea odio libero suscipit!
                  Delectus minus totam ratione, quasi optio velit commodi suscipit officiis?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Harum vero, quis expedita ratione sed recusandae consequatur ea odio libero suscipit!
                  Delectus minus totam ratione, quasi optio velit commodi suscipit officiis?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Harum vero, quis expedita ratione sed recusandae consequatur ea odio libero suscipit!
                  Delectus minus totam ratione, quasi optio velit commodi suscipit officiis?
                </p>
            </div>
        </div>
    )
}
