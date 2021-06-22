import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import './stylesForAdditionalComponents/FirstSeenInformationProjectPage.css'
import ProgressBar from './ProgressBar';
import SliderProjectPage from './SliderProjectPage';

function FirstSeenInformationProjectPage({project}) {

    console.log(project.mainPhotoForPage);

    return (
        <Container>
            <BackgroundPhoto>
                <img src={project.mainPhotoForPage}></img>
            </BackgroundPhoto>
            <Description>
                <h1>{project.title}</h1>
                <p>{project.description}</p>
                <Link className="sign-up" to="/">
                    <StartInvestBtn>Start invest now</StartInvestBtn>
                </Link>
            </Description>
            <SlidesContent>
                <ProgressBarContent>
                    <div className="card-info-page"> 
                        <span className="loan-page">
                            <h5>{project.loan}$</h5>
                            <span className="label-page">Loan amount</span>
                        </span>
                        <hr/>
                        <span className="month-page">
                            <h5>{project.month}</h5>
                            <span className="label-page">Month</span>
                        </span>
                        <hr/>
                        <span className="roi-page">  
                            <h5>{project.roi}%</h5>
                            <span className="label-page">YR Estimated ROI</span>
                        </span>
                    </div>
                    <Bar>
                        <ProgressBar progress={project.progress}/>
                        <div className="progress-info-page">
                            <span>{project.investors} investors,{project.filled}$ filled</span>
                            <span>€{project.left}left</span>
                        </div>
                    </Bar>
                </ProgressBarContent>
                <SliderProjectPage project={project}/>
            </SlidesContent>
        </Container>
    )
}

export default FirstSeenInformationProjectPage

const Container = styled.div`
    box-sizing: border-box;
    margin-top: 120px;

    h1{
        text-align: left;
        color: #fff;
        font-size: 48px;
        font-weight: 700;
        line-height: 65px;
        padding-bottom: 10px;
    }
    
    p{
        color: #fff;
        font-size: 18px;
        font-weight: 400;
        text-align: left;
        padding-bottom: 14px;
    }
`

const BackgroundPhoto = styled.div`
width: 100%;

img{
    position: absolute;
    top:0;
    left: 0;
    // height: 100vh;
    width: 100%;
    z-index: -100;
    object-fit: cover;
    background-size: cover;
    margin-top: 120px;
  }

`
const Description = styled.div`
    margin: 21% 0 30px 120px;
    max-width: 650px;
`

const StartInvestBtn = styled.div`
    font-size: 20px;
    text-decoration: none;
    background: #00AAE1;
    color: #fff;
    border-radius: 5px;
    display: inline-block;
    padding: 20px 60px;
    font-weight: 600;
    transition: 0.2s all;
    margin: 30px 0 ;
    : hover{
        background-color: #35c4f2;
        transition-duration: 0.3s;
    }
`

const SlidesContent = styled.div`
    display: flex;
    margin-left: 5%;

`

const ProgressBarContent = styled.div`
    background-color: #054163;
    padding: 20px 40px;
    width: 400px;
    box-sizing: border-box;
`

const Bar = styled.div``