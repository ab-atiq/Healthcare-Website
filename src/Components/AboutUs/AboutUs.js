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
            <h1 className='text-primary my-3'>About us</h1>
            {
                about.map(ab => <About key={ab.name} about={ab} ></About>)
            }
        </div>
    );
};

const About = (props) => {
    const { name, image, specialist, degree } = props.about;
    return (
        <div className="single-about p-3">
            <img src={image} alt="" />
            <div className='my-3'>
                <h1>{name}</h1>
                <h3>{degree}</h3>
                <h4>{specialist}</h4>
            </div>
        </div>
    )
}

export default AboutUs;