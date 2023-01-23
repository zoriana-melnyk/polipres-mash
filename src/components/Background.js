import React from "react";
import ReactCardCarousel from "react-card-carousel";

//style
import './Background.scss';

//myfile
import film from '../img/film.jpeg';
import tube1 from '../img/tube.jpeg';
import tube2 from '../img/tube2.jpeg'


function Background() {
    return (
        <div className="Background">
            <div className="Background--carousel-wapper">
                <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
                    <div className="cardStyle">
                        <img src={film} alt="img_product" />
                    </div>
                    <div className="cardStyle">
                        <img src={tube1} alt="img_product" />
                    </div>
                    <div className="cardStyle">
                        <img src={tube2} alt="img_product" />
                    </div>
                </ReactCardCarousel>
            </div>
            <p className="Info">
                Наша продукція
            </p>
        </div>
    );
}

export { Background };