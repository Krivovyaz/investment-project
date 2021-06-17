import React from 'react'
import styled from 'styled-components'
import "./stylesForAdditionalComponents/ProjectCard.css"
import ProgressBar from './ProgressBar';
import { Link } from 'react-router-dom';

function ProjectCard({item}) {

    console.log(item);

    return (
        <Container>
            <div className="card-wrap">
                <div className="card-image">
                    <img src={item.mainPhoto}></img>
                </div>
                <div className="card-body">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <div className="card-info">
                        <span className="loan">
                            <h5>{item.loan}</h5>
                            <span className="label">Loan amount</span>
                        </span>
                        <hr/>
                        <span className="month">
                            <h5>{item.month}</h5>
                            <span className="label">Month</span>
                        </span>
                        <hr/>
                        <span className="roi">  
                            <h5>{item.roi}</h5>
                            <span className="label">YR Estimated ROI</span>
                        </span>
                    </div>
                    <div className="progress-bar">
                        <ProgressBar progress={item.progress}/>
                    </div>
                    <div className="progress-info">
                        <span>{item.investors} investors,{item.filled}$ filled</span>
                        <span>€{item.left}left</span>
                    </div>
                    <Link className="learnBtn" to="/Authorisation">
                        <LearnBtn>Learn more</LearnBtn>
                    </Link>
                </div>
            </div>
        </Container>
    )
}

export default ProjectCard

const Container = styled.div`
    flex-basis: 370px;
    display: inline-block;
    padding: 25px;
`

const LearnBtn = styled.div`
    background-color: #00aae1;
    padding: 17px 30px;
    outline: none;
    border-radius: 5px;
    margin-top: 30px;
    : hover{
        background-color: #35c4f2;
        transition-duration: 0.3s;
    }
`