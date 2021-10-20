import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const {service_id,title,image,shortDescription,fullDescription}=props.service;
    return (
        <div className='service-section'>
            {/* <p>{service_id}</p> */}
            <img className='img-fluid' src={image} alt="" />
            <h1>{title}</h1>
            <p>{shortDescription}</p> 
            <Link to={`/service/${service_id}`}><Button>See Details</Button></Link>
        </div>
    );
};

export default Service;