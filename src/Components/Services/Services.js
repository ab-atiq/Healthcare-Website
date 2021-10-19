import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./data.services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div>
            <h1>This is services section.</h1>
            <div className="container-fluid services-container mb-5">
                {
                    services.map(service => <Service key={Service.title} service={service} ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;