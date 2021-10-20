import React, { useEffect, useState } from 'react';
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
            <h1 className='text-primary my-5'>Services:</h1>
            <div className="container-fluid services-container mb-5">
                {
                    services.map(service => <Service key={Service.service_id} service={service} ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;