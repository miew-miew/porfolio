import { Col, Container, Nav, Row, Tab } from "react-bootstrap"
import project1 from "../assets/img/project1.png"
import project2 from "../assets/img/project2.png"
import colorSharp2 from "../assets/img/color-sharp2.png"
import ProjectCard from "./ProjectCard"

function Projects() {

    const projects = [
        {
            title: "Portfolio",
            description: "Un portfolio responsive avec React",
            imgUrl: project1
        },
        {
            title: "HealthCare",
            description: "Une application de gestion de santé réalisée avec JAVA",
            imgUrl: project2
        }
    ]
    return(
        <div>
            <section className="projects" id="projects">
                <Container>
                    <Row>
                        <Col>
                            <h2>Réalisations</h2>
                            <Row>
                                {
                                    projects.map((project, index) => {
                                        return(
                                            <ProjectCard 
                                            key={index} 
                                            {...project}/>
                                        )
                                    })
                                }
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <img className="background-image-right" src={colorSharp2} alt="" />
            </section>
        </div>
    )
}

export default Projects