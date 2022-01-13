import Sidebar from "../../components/sidebar/Sidebar"
import "./settings.css"

export default function Settings() {
    return (
        <div className="settings">
                <div className="settingsWrapper">
                    <div className="settingsTitle">
                        <span className="settingsTitleUpdate">Update your account</span>
                        <span className="settingsTitleDelete">Delete account</span>
                    </div>
                    <form className="settingsForm">
                        <label>Profile Picture</label>
                        <div className="settingsPP">
                            <img
                            src=""
                            alt=""
                            className=""
                            />
                            <label htmlFor="fileInput">
                            <i className="settingsPPIcon far fa-user-circle"></i>
                            </label>
                            <input type="file" id="fileInput" style={{display:"none"}}/>
                        </div>
                        <label>Username</label>
                        <input type="text" placeholder="Fabrice"/>
                        <label>Email</label>
                        <input type="email" placeholder="fabrice@gmail.com"/>
                        <label>Password</label>
                        <input type="password"/>
                        <button className="settingsSubmit">Update</button>    
                    </form>
                    </div>
                    <Sidebar />
                
            </div>
            
        
    )
}
