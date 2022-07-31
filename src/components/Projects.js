import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles.css';
import { portfolioWork } from './portfolio.js';
const Projects = () => {
    return (
        <section className='project' data-aos="fade-up" id="Projects">
            <Container>
                <h1 className="project_title">
                    Projects
                </h1>
            <Row>
                {
                    portfolioWork.projects.map((work,i)=>{
                      return(
                        <Col key={i} md={6}  className="imageCol">
                          <a href={work.link}  target='_blank' rel="noopener noreferrer">
                            <img src={work.projectImage} alt={work.projDes} className="projImg"/>
                          </a>
                        
                        </Col>
                      );
                    })
                }
            </Row>
            </Container>
        </section>
    )

}

export default Projects;