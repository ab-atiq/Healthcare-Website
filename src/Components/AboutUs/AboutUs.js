import React, { useEffect, useState } from 'react';
import './About.css'

const AboutUs = () => {
    const [about, setAbout] = useState([]);
    useEffect(() => {
        fetch('./data.about.json')
            .then(res => res.json())
            .then(data => setAbout(data));
    }, [])
    return (
        <div>
            <h1>About us</h1>
            {
                about.map(ab => <About key={ab.name} about={ab} ></About>)
            }
        </div>
    );
};

const About = (props) => {
    const { name, image, specialist, degree } = props.about;
    return (
        <div className="single-about">
            <img src={image} alt="" />
            <h1>{name}</h1>
            <h2>{degree}</h2>
            <h3>{specialist}</h3>
        </div>
    )
}

export default AboutUs;