import "./singlePost.css"
import { useEffect } from "react";
import { useState } from "react";
import postImg from "../../img/post.jpg"

export default function SinglePost() {

    const [Articlo, setArticlo] = useState([]);
    const [User, setUser] = useState([]);

    const getArticle = async (fetchUrl) => {
        try {
            const res = await fetch(fetchUrl).then(res => res.json());
            setArticlo(res);
        } catch(error) {
            return error;
        }
    }
    

    const getUser = async (fetchUrl) => {
        try {
            const res = await fetch(fetchUrl).then(res => res.json());
            setUser(res);
        } catch(error) {
            return error;
        }
    }



    useEffect(async () => {

                // const tralala = getArticle('http://localhost/wi/wicode-api/public/api/article/1');
                // setUser(getUser('http://localhost/wi/wicode-api/public/api/user/' + tralala.user_id));

                // console.log('poulet',User);
                // {console.log(tralala)}
        const trala = await fetch('http://localhost/wi/wicode-api/public/api/article/1').then(res => res.json());
        const tarace = await fetch('http://localhost/wi/wicode-api/public/api/user/' + trala.user_id).then(res => res.json());
        console.log(tarace);
    }, []);








    return (
        <div className="singlePost">
            {/* {console.log(Articlo.user_id)} */}
            {/* {console.log(User)} */}
            <div className="singlePostWrapper">
                <img
                className="singlePostImg"
                src={postImg}
                alt=""
                />
                <h1 className="singlePostTitle">
                {Articlo.title}
                    <div className="singlePostEdit">
                    {/* <i className="singlePostIcon far fa-edit"></i>
                    <i className="singlePostIcon far fa-trash-alt"></i> */}
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Fabrice</b></span>
                    <span className="singlePostDate"> {Articlo.posted_at}</span>
                </div>
                {/* {console.log(User)} */}
                <p className="singlePostDesc"> 
                 {Articlo.text_body}
                </p>
            </div>
        </div>
    )
}
