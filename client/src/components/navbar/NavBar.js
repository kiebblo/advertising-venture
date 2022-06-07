import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import AuthContext from '../context/AuthContext';

export default function NavBar() {

    const { token, setToken } = useContext(AuthContext);

    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
    }

    return (
        <nav>
            <NavLink to="/" >Home Page</NavLink><br />
            {token === "" ? (
                <>
                    <NavLink to="/connection" >Connection</NavLink><br />
                    <NavLink to="/registration" >Registration</NavLink>
                </>
            ) : (
                <>
                    <NavLink to="/shoppingCart" >Shopping Cart</NavLink><br />
                    <NavLink to="/advertisements" >Advertisements</NavLink><br />
                    <NavLink to="/" onClick={logout} >Logout</NavLink>
                </>
            )}
        </nav>
    );
};
