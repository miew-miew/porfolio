import { Col } from "react-bootstrap";

function ProjectCard({title, description, imgUrl}) {
    return(
        <Col sm={6} md={4}>
            <div className="projects-imagebox">
                <img src={imgUrl} alt="" />
                <div className="projects-text">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}

export default ProjectCard;