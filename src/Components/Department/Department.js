import React from 'react';

const Department = (props) => {
    const {name,image,description}=props.department;
    return (
        <div className='depatment-container p-5 my-2'>
            <img className='img-fluid' src={image} alt="" />
            <h1>{name}</h1>
            <p>{description}</p>
        </div>
    );
};

export default Department;