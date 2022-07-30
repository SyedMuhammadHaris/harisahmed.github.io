import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles.css'
import programmerImage from './images/programmer2.png'
const About = () => {
  return (
    <section className='About'>
      <Container>
        <h1 className='about_title'>About</h1>
        <Row>
          <Col sm={12} md={6}>
            <div className="about_image">
              <img src={programmerImage} alt="This is programmer two" />

            </div>

          </Col>
          <Col sm={12} md={12} lg={6}>
            <div className='about_2'>
              <h2 className="about__subtitle">I'am Haris</h2>
              <p className="about__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate cum expedita quo culpa tempora, assumenda, quis fugiat ut voluptates soluta, aut earum nemo recusandae cumque perferendis! Recusandae alias accusamus atque.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About;