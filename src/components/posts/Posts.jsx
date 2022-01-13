import Post from "../post/Post"
import "./posts.css";
import { useEffect } from "react";
import { useState } from "react";

export default function Posts(props) {

    const [tamere, setTamere] = useState([]);

    useEffect(() => {
        const lulzFunc = async () => {
            try {
                const res = await fetch('https://fred-dev.fr/api/article', {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                })
                .then(res => res.json()); 
                setTamere(res.map((value, key) => {
                    return (
                        <Post
                            title={value.title}
                            text_body={value.text_body}
                            description={value.description}
                            fkid={value.id}
                        />
                    )
                }));
            } catch(error) {
                return error;
            }
        };
        lulzFunc();
    }, []);

    return (
        <div className="posts">
            {tamere}
        </div>
    )
}