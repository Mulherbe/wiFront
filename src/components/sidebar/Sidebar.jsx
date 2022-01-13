import "./sidebar.css"
import profileImg from "../../img/profile.jpg"
export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src={profileImg}
                alt=""
                />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestias, maiores praesentium deleniti modi.
                </p>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Code</li>
                <li className="sidebarListItem">Frameworks</li>
                <li className="sidebarListItem">Server</li>
                <li className="sidebarListItem">Techno</li>
                <li className="sidebarListItem">IdeaBox</li>
            </ul>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fab fa-facebook-square"></i>
                <i className="sidebarIcon fab fa-twitter-square"></i>
                <i className="sidebarIcon fab fa-instagram-square"></i>
           </div> 
            </div>
        </div>
    )
}
