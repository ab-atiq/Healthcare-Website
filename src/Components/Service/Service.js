import React from 'react';
import { Button } from 'react-bootstrap';

const Service = (props) => {
    const {title,image,shortDescription,fullDescription}=props.service;
    return (
        <div className='service-section'>
            <img className='img-fluid' src={image} alt="" />
            <h1>{title}</h1>
            <p>{shortDescription}</p> 
            <Button>See Details</Button>
        </div>
    );
};

export default Service;