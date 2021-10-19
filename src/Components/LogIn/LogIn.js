import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './LogIn.css';

const LogIn = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div>
            <h1>Please Login</h1>
            <div className="logIn-container mb-5">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>{' '}
                    <Button variant="primary" type="reset">
                        Reset
                    </Button>
                    <br />
                    <br />
                    <Button onClick={signInUsingGoogle}>
                        Sign In Google
                    </Button>{' '}
                    <Link className='text-white' style={{ textDecoration: 'none' }} to='/registration'><Button>Registration</Button></Link>
                </Form>
            </div>
        </div>
    );
};

export default LogIn;