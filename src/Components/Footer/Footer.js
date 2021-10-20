import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHospital,faCopyright } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div className='bg-dark text-white'>
            <h1 className='text-white py-3'><FontAwesomeIcon icon={faHospital}></FontAwesomeIcon> ARM Hospital</h1>
            <h4>Owner of this hospital is Atiqur Rahman.</h4>
            <p>This is <FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon> Copyright Website.</p>
        </div>
    );
};

export default Footer;