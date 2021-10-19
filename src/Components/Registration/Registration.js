import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Registration = () => {
    const {signInUsingGoogle}=useAuth();
    return (
        <div>
            <h1>This is Registration</h1>
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
                    <Link className='text-white' style={{ textDecoration: 'none' }} to='/logIn'><Button>Log In</Button></Link>
                </Form>
            </div>
        </div>
    );
};

export default Registration;