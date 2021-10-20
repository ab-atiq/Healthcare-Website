import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHospital } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div className='bg-dark text-white'>
            <h1 className='text-white py-3'><FontAwesomeIcon icon={faHospital}></FontAwesomeIcon> ARM Hospital</h1>
        </div>
    );
};

export default Footer;