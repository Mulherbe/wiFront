import Post from "../post/Post"
import "./posts.css";
import { useEffect } from "react";
import { useState } from "react";

export default function Posts(props) {

    const [Articlo, setArticlo] = useState([]);
    const [currentPage, setCurrentPage] = useState('');
    const [lastPage, setLastPage] = useState('');

    const [nextPage, setNextPage] = useState('');
    const [previousPage, setPreviousPage] = useState('');


    const lulzFunc = async (fetchUrl) => {
        try {
            const res = await fetch(fetchUrl).then(res => res.json());
            setCurrentPage(res.current_page);
            setLastPage(res.last_page);
            setNextPage(res.next_page_url);
            setPreviousPage(res.prev_page_url);
            setArticlo(res.data.map((value, key) => {
                return (
                    <Post
                        title={value.title}
                        text_body={value.text_body}
                        description={value.description}
                        fkid={value.id}
                        key={key}
                    />
                )
            }));
        } catch(error) {
            return error;
        }
    }

    useEffect(() => {
        lulzFunc('http://localhost/wi/wicode-api/public/api/article?page=1');
    }, []);

    return (
        <>

            <div className="posts">
                {Articlo}
            </div>
            <div>{`${currentPage} / ${lastPage}`}</div>
            <button 
                className="prevnext"
                onClick={() => {lulzFunc(previousPage);}}
            >
                previous
            </button>

            <button 
                className="prevnext"
                onClick={() => {lulzFunc(nextPage);}}
            >
                next
            </button>
        </>
    )
}