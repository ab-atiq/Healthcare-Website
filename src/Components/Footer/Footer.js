import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faAddressBook } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div className='bg-dark text-white'>
            <h1 className='text-danger'>Hospital</h1>
            <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faAddressBook}></FontAwesomeIcon>
        </div>
    );
};

export default Footer;