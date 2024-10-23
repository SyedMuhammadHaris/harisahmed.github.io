import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from './images/programmer.png';
import './styles.css';

// import Image from './images/programmer.jpg'

const Intro = () => {
    return (
        <section className='home' data-aos="fade-up">
            <Container>
                <Row>
                    <Col sm={12} md={12} lg={6}>
                        <h1 className="home__title">Hi,<br />I'am <span className="home__title-color">Haris</span><br />Software Engineer</h1>

                        
                        {/* <a href={Resume} className='button' target='_blank' rel="noopener noreferrer">Resume</a> */}
                    </Col>
                    <Col sm={12} md={12} lg={6}>
                        <div className="home__img">
                            <img src={Image} alt='Programmer' />
                            </div>
                    </Col>
                </Row>
                </Container>

        </section>
    )
}

export default Intro;