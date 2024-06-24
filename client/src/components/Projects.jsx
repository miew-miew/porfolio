import { Col, Container, Nav, Row, Tab } from "react-bootstrap"
import project1 from "../assets/img/project-img1.jpg"
import project2 from "../assets/img/project-img2.png"
import project3 from "../assets/img/project-img3.png"
import colorSharp2 from "../assets/img/color-sharp2.png"
import ProjectCard from "./ProjectCard"

function Projects() {

    const projects = [
        {
            title: "HealthCare",
            description: "Application de gestion de santé avec JAVA",
            imgUrl: project1
        },
        {
            title: "HealthCare",
            description: "Application de gestion de santé avec JAVA",
            imgUrl: project2
        },
        {
            title: "HealthCare",
            description: "Application de gestion de santé avec JAVA",
            imgUrl: project3
        }
    ]
    return(
        <div>
            <section className="projects" id="projects">
                <Container>
                    <Row>
                        <Col>
                            <h2>Réalisations</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni blanditiis vel veritatis, ratione incidunt deleniti.</p>
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