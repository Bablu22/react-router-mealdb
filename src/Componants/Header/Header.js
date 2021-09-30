import React, { useState } from 'react';
import './Header.css'
import Navbar from "@material-tailwind/react/Navbar";
import NavbarContainer from "@material-tailwind/react/NavbarContainer";
import NavbarWrapper from "@material-tailwind/react/NavbarWrapper";
import NavbarBrand from "@material-tailwind/react/NavbarBrand";
import NavbarToggler from "@material-tailwind/react/NavbarToggler";
import NavbarCollapse from "@material-tailwind/react/NavbarCollapse";
import Nav from "@material-tailwind/react/Nav";
import NavItem from "@material-tailwind/react/NavItem";
import NavLink from "@material-tailwind/react/NavLink";
import NavbarInput from "@material-tailwind/react/NavbarInput";
import { Link } from 'react-router-dom';




const Header = (props) => {
    const [openNavbar, setOpenNavbar] = useState(false);
    return (
        <div>
            <Navbar color="indigo" navbar>
                <NavbarContainer>
                    <NavbarWrapper>
                        <NavbarBrand><h2 className="text-2xl tracking-wider	normal-case	">TheMealDB</h2></NavbarBrand>
                        <NavbarToggler
                            color="white"
                            onClick={() => setOpenNavbar(!openNavbar)}
                            ripple="light"
                        />
                    </NavbarWrapper>

                    <NavbarCollapse open={openNavbar}>
                        <Nav rightSide>
                            <NavItem ripple="light">
                                <Link to="/home">Home</Link>
                            </NavItem>
                            <NavLink href="#navbar" ripple="light">
                                <Link to="/food">Food</Link>
                            </NavLink>
                            <NavItem ripple="light">
                                <Link to="/account">Account</Link>
                            </NavItem>
                        </Nav>

                        <input type="text" className="w-2/5 p-1 bg-white-600 rounded px-5 border-0	outline-none" onChange={e => props.handele(e)} placeholder="search here" />

                    </NavbarCollapse>
                </NavbarContainer>
            </Navbar>
        </div>
    );
};

export default Header;