import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ServiceDetails.css'

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        fetch('/data.services.json')
            .then(res => res.json())
            .then(data => {
                const matchedService = data.find(sinPro => sinPro.service_id == serviceId)
                setService(matchedService)
            });
    }, [])

    return (
        <div className='service-details-container m-3 p-5'>
            <h1>Details id : {serviceId} </h1>
            <img className='img-fluid my-3' src={service.image} alt="" />
            <h1 className='text-primary mb-3'>Department: {service.title}</h1>
            <h3>Short Description: </h3>
            <h6>{service.shortDescription}</h6>
            <h3 className='mt-3'>Full Information: </h3>
            <p>{service.fullDescription}</p>
        </div>
    );
};

export default ServiceDetails;