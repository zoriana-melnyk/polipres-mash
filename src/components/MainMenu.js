import React from 'react'

import { Container, Nav, NavDropdown } from 'react-bootstrap';

import './MainMenu.scss';

import { Link } from 'react-router-dom';

import { useLittera } from "@assembless/react-littera";
import { headerTranslations } from "../localization/HeaderTranslation";

function MainMenu({ user, onLogout }) {
    const translated = useLittera(headerTranslations);

    return (
        <Container id='NavContainer'>
            <Nav className="Navigation">
            <Link to="/" id='DropMenu'>{translated.home}</Link>
            <Link to="/about" id='DropMenu'>{translated.about}</Link>
                <NavDropdown className="Navigation--dropdown" title={translated.product} id='DropMenu'>
                    <Link to="/film" className="DropItem" id='LinkItem'>{translated.film}</Link>
                    <Link to="/pipes" className="DropItem" id='LinkItem'>{translated.pipes}</Link>                  
                </NavDropdown>
                <Link to="/price" id='DropMenu'>{translated.price}</Link>
                <Link to="/contact" id='DropMenu'>{translated.contact}</Link>
            </Nav>
        </Container >
    );
}

export { MainMenu };