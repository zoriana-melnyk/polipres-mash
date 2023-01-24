import React from 'react'
import './Footer.scss';

import { Button } from 'react-bootstrap';
import { ArrowBarUp } from 'react-bootstrap-icons';

import { Link } from "react-router-dom";


function Footer() {

    const callHandleClick = () => {
        window.open('tel:0677110030');
    };

    return (
        <div className="Footer">
            <div className="Footer--conteinInfo">
                <div className="Footer--conteinInfo--shortInfo">
                    <Link to="/" className='Footer--conteinInfo--shortInfo--link'>
                        Головна
                    </Link>
                    <Link to="/about" className="Footer--conteinInfo--shortInfo--link">
                        Про нас
                    </Link>
                    <Link to="/product" className="Footer--conteinInfo--shortInfo--link">
                        Продукція
                    </Link>
                </div>
                <div className="Footer--conteinInfo--shortInfo">
                    <Link to="/price" className="Footer--conteinInfo--shortInfo--link">
                        Ціни
                    </Link>
                    <Link to="/contact" className="Footer--conteinInfo--shortInfo--link">
                        Контакти
                    </Link>
                </div>
                <div className="Footer--conteinInfo--shortInfo">
                    <Link className="Footer--conteinInfo--shortInfo--link" onClick={callHandleClick}>
                        067 711 0030
                    </Link>
                </div>
                <div className="Footer--conteinInfo--shortInfo">
                    <p className="Footer--conteinInfo--shortInfo--text">
                        с. Жовтанці, Львівська область
                    </p>
                    <a href='https://goo.gl/maps/MEXiTj8QqnPxkzBK7' target='_blank' rel='noreferrer' className="Footer--conteinInfo--shortInfo--link">
                        вул. Загаївська, буд. 2А
                    </a>
                </div>
            </div>
            <div className="Footer--button my-4">
                <Button className="GoToUp" onClick={e => {
                    window.scrollTo({ top: 0 })
                }}>
                    <ArrowBarUp />
                </Button>
            </div>
        </div>
    );
}

export { Footer }
