import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles.css';
import {skillsSection} from './portfolio.js';
const Skills = () =>{
     
   
    return(
        <section className='skills'>
            <Container>
               <h1 className='skills_title'>
                  Skills
               </h1>
            <Row>
                { skillsSection.softwareSkills.map((skills,i)=>{
                    return(
                        <Col key={i} md={4}>
                         <div style={{'text-align':'center'}}>
                          <img src={skills.skillIcon} alt="Skills Icon" className='icon_image'/>
                          <p className='icon_text'>{skills.skillName}</p>
                          </div>
                        </Col>
                    );
                })
                }
            </Row>
            
            </Container>
           
        </section>
    )


}
export default Skills;