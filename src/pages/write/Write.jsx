import "./write.css"

export default function Write() {
    return (
        <div className="write">
            <img
            src="../img/header.png"
            alt=""
            className="writeImg"
            />
           <form className="writeForm">
               <div className="writeFormGroup">
                   <label htmlFor="fileInput" >
                        <i class="writeIcon fas fa-plus"></i> 
                   </label>
                   <input type="file" id="fileInput" style={{display:"none"}}/>
                   <input type="text" placeholder="Title" className="writeInput" autofocus={true}/>
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Tell your post..."
                    type="text"
                    className="writeInput writeText"
                    ></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>

        </div>
    )
}
