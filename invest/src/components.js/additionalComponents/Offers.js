import React from 'react'
import styled from 'styled-components'
import { ProjectsInfo } from '../tempData/ProjectInfo'
import ProjectCard from './ProjectCard'
import './stylesForAdditionalComponents/Offers.css';

function Offers({projectsTitle, amountOfProjects}) {
    return (
        <Container>
            <div className="header">
                <h3>{projectsTitle}</h3>
            </div>
            <div className="allCards">
                {
                    ProjectsInfo.map((item, index) => {
                        if(index < amountOfProjects) {
                            return(
                                <ProjectCard item={item}/>
                            )
                        }
                    })
                }
            </div>
        </Container>
    )
}

export default Offers

const Container = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    text-align: center;
`