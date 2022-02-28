import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SliderStyle.css';

const BooksSlider = () => {

    const [current, SetCurrent] = useState(0);
    const data = [
        {
            title: "We are open to hearing your problems and suggestions",
            desc: "feel free to contact us",
            buttonLable: "Conect Us",
            buttonLink: "/Connect"
        },
        {
            title: "Our blog made to discuss books and authors",
            desc: "support our blog by giving your opinion",
            buttonLable: "Share you experiance",
            buttonLink: "/blog"
        },
        {
            title: "About BOOKREADERS our objectives and more about us",
            desc: "",
            buttonLable: "About Us",
            buttonLink: "/About"
        },
    ]
    const timeout = useRef(null);

    useEffect(() => {
        const nextSlide = () => {
            SetCurrent(current => (current === data.length - 1 ? 0 : current + 1))
        }

        timeout.current = setTimeout(nextSlide, 10000);

        return function () {
            if (timeout.current) {
                clearTimeout(timeout.current);
            }
        }

    }, [current, data.length])

    return (
        <div className="slider">

            {
                data.map((item, index) => {
                    return (
                        <div className="slide" key={index}>
                            {
                                index === current &&
                                <div className="mainSlider">

                                    <img
                                        className="sliderImg"
                                        src="https://images.unsplash.com/photo-1518336751805-17d4ea1ba5a0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                                        alt={item.title} />
                                    <div className="sliderContent">
                                        <h1>{item.title}</h1>
                                        <p>{item.desc}</p>
                                        <Link className="buttonLink" to={item.buttonLink}><button className="button">{item.buttonLable}</button></Link>
                                    </div>

                                </div>
                            }
                        </div>
                    )
                })
            }

        </div>
    )
}

export default BooksSlider;
