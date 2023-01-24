import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Container, Navbar } from 'react-bootstrap';
import { slide as Menu } from 'react-burger-menu'

import './Header.scss';
import { MainMenu } from './MainMenu';

import logo from '../img/logo.png';
import menuButton from '../img/list.svg';

import useResizeObserver from '@react-hook/resize-observer'

import { useLitteraMethods } from "@assembless/react-littera";
import { useLittera } from "@assembless/react-littera";
import { headerTranslations } from "../localization/HeaderTranslation";

import Select from 'react-select';

const languageOptions = [{
    label: '🇺🇦',
    value: 'uk_UA'
}, {
    label: '🇬🇧',
    value: 'en_US'
}
]

const customStyles = {
    option: (provided, state) => ({
        backgroundColor: '#363636'
    }),
    control: (provided) => ({
        ...provided,
        backgroundColor: '#363636',
        border: 'none'
    }),
    menu: (provided) => ({
        ...provided,
        backgroundColor: '#363636'
    }),
    singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';
        return { ...provided, opacity, transition };
    }
}

const useSize = (target) => {
    const [size, setSize] = React.useState()

    React.useLayoutEffect(() => {
        setSize(target.current.getBoundingClientRect())
    }, [target])

    // Where the magic happens
    useResizeObserver(target, (entry) => setSize(entry.contentRect))
    return size
}

function Header() {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const target = React.useRef(null)
    const size = useSize(target)

    const methods = useLitteraMethods();

    const handleLocaleChange = (languageOption) => {
        methods.setLocale(languageOption.value);
    }

    const onLogout = () => {
        localStorage.removeItem('user');
        navigate(0)
    }

    const translated = useLittera(headerTranslations);
    return (
        <header className="App-header" ref={target}>
            <Navbar className="App-navbar">
                <Container>
                    <Link to="/" className='navbar-brand'>
                        <img src={logo} className="App-logo" alt="logo_img" />
                    </Link>
                    {
                        size?.width < 992
                            ? <Menu
                                right
                                customCrossIcon={<></>}
                                isOpen={isMenuOpen}
                                onOpen={() => setIsMenuOpen(true)}
                                onClose={() => setIsMenuOpen(false)}
                                width={500}
                                customBurgerIcon={<img src={menuButton} alt="menu_img" />}
                            >

                                <div className="routes">
                                    <Link id="home" className="Nav-item" to="/">{translated.home}</Link>
                                    <Link id="menu" className="Nav-item" to="/about">{translated.about}</Link>
                                    <ul>
                                        <li className="List-menu">
                                            <Link id='LinkItem' className="CdMenu-item" to="/film">{translated.film}</Link>
                                        </li>
                                        <li className="List-menu">
                                            <Link id='LinkItem' className="CrDish-item" to="/pipes">{translated.pipes}</Link>
                                        </li>
                                    </ul>
                                    <Link id="price" className="Dir-item" to="/price">{translated.price}</Link>
                                    <Link id="contact" className="Contact-item" to="/contact">{translated.contact}</Link>
                                </div>
                                <Select
                                    className="Footer__langOptions"
                                    // placeholder="Змінити мову"
                                    defaultValue={languageOptions[0]}
                                    onChange={handleLocaleChange}
                                    options={languageOptions}
                                    isSearchable={false}
                                    styles={customStyles}
                                />

                            </Menu>
                            : <>
                                <MainMenu user={user} onLogout={onLogout} />
                                <Select
                                    className="Footer__langOptions"
                                    defaultValue={languageOptions[0]}
                                    onChange={handleLocaleChange}
                                    options={languageOptions}
                                    isSearchable={false}
                                    styles={customStyles}
                                />
                            </>
                    }
                </Container>
            </Navbar>
        </header >
    );
}

export {
    Header
}
