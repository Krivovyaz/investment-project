import React from 'react'
import styled from 'styled-components'
import { ProjectsInfo } from '../tempData/ProjectInfo'
import ProjectCard from './ProjectCard'
import './stylesForAdditionalComponents/Offers.css';

function Offers({projectsTitle, amountOfProjects, searchCriteria}) {

    let counterOfCheckedCards = 0,
          counterOfShowedCards = 0;

    const checkCriteris = (item, index) => {
        counterOfCheckedCards++;
        if( counterOfShowedCards < amountOfProjects && +item.loan <= +searchCriteria[0] && +item.month <= +searchCriteria[1]  && Math.ceil(item.roi) <= +searchCriteria[2]) {
            counterOfShowedCards++;
            return true;
        } else {
            return false;
        }
    }
    return (
        <Container>
            <div className="header">
                <h3>{projectsTitle}</h3>
            </div>
            <div className="allCards">
                {
                    searchCriteria ? (
                        ProjectsInfo.map((item, index) => {
                            if(checkCriteris(item, index)) {
                                console.log('yes');
                                return(
                                    <ProjectCard item={item}/>
                                )
                            }
                        })):
                        (
                            ProjectsInfo.map((item, index) => {
                                if(index < amountOfProjects) {
                                    console.log('fuck');
                                    return(
                                        <ProjectCard item={item}/>
                                    )
                                }
                            })
                        )
                };
                
            </div>
        </Container>
    )
}

export default Offers

const Container = styled.div`
    max-width: 1400px;
    margin: 120px auto 0 auto;
    text-align: center;
`