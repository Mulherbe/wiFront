import "./header.css"
import header from "../../img/header.jpg"

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">Wicode</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImg"
            src={header}
            alt=""
            />
        </div>
    );
}
