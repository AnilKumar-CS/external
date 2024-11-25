import React from "react";
import { Outlet,Link } from "react-router-dom";
const Layout=()=>{
    return(
        <div>
            <center>
                <h1>about router</h1>
            </center>
            <nav>
                <ul>
                    <li>
                        <Link to="/">home</Link>
                    </li>
                    <li>
                        <Link to="/Blogs">blogs</Link>
                    </li>
                    <li>
                        <Link to="/Contact">contact</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </div>
    )
}
export default Layout;