import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <div>
                <Container fluid>
                    <Carousel variant="dark">
                        <Carousel.Item interval={1000}>
                            <img className="d-block w-100" src="https://i.ibb.co/VSLBd4B/bgn-slider-01.jpg" alt="First slide" />
                            <Carousel.Caption>
                                <Row>
                                    <Col className='py-5 my-5'>
                                        <div className='bg-dark mb-5' >
                                            <h3>INSPIRING BETTER HEALTH</h3>
                                            <h1>Healthy heart,healthy family</h1>
                                            <p>Globally harness multimedia based collaboration and idea-sharing with backend products. Continually whiteboard superior opportunities via covalent scenarios.</p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='mb-5'>
                                            <h1> </h1>
                                        </div>
                                    </Col>
                                </Row>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <img className="d-block w-100" src="https://i.ibb.co/BZSCYY8/bgn-slider-02.jpg" alt="Second slide" />
                            <Carousel.Caption>
                                <Row>
                                    <Col className='py-5 my-5'>
                                        <div className='bg-dark mb-5' >
                                            <h3>Third slide Left</h3>
                                            <h2>GROWING TO MEET YOUR NEEDS</h2>
                                            <h1>Your wealth,is your health</h1>
                                            <p>Compellingly embrace empowered e-business after user friendly intellectual capital. Interactively actualize front-end processes with effective convergence.</p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='mb-5'>
                                            <h1> </h1>
                                        </div>
                                    </Col>
                                </Row>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src="https://i.ibb.co/6b885N4/banner-3.jpg" alt="Third slide" />
                            <Carousel.Caption className='' style={{ display: 'flex' }}>
                                <Row>
                                    <Col className='py-5 my-5'>
                                        <div className='bg-dark mb-5' >
                                            <h3>Third slide Left</h3>
                                            <h2>THE RIGHT PEDIATRICIAN</h2>
                                            <h1>Your wealth,is your health</h1>
                                            <p>We at MediCare are always fully focused on helping your child and you to overcame any hurdle, whether it’s chicken pox or just a seasonal flue.</p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='mb-5'>
                                            <h1> </h1>
                                        </div>
                                    </Col>
                                </Row>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Container>
            </div>
            <Services></Services>
        </div>
    );
};

export default Home;