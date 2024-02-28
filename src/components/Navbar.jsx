import React from 'react'
import { getAuth, signOut } from "firebase/auth";

function Navbar() {

    const auth = getAuth();
    const handleLogout = async() => {
        try {
            await signOut(auth);
        } catch (e) {
            console.log(e.message);
        }
    }
    return ( <
        div >
        <
        div className = "navbar bg-base-100" >
        <
        div className = "flex-1" >
        <
        a className = "font-bold normal-case text-xl" > Img.World📸 < /a> <
        /div> <
        div className = "flex-none" >
        <
        ul className = "menu menu-horizontal px-1" >
        <
        li >
        <
        button onClick = { handleLogout } > Logout < /button> <
        /li> <
        /ul> <
        /div> <
        /div> <
        /div>
    )
}

export default Navbar