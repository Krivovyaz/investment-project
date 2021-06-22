import React from 'react'
import styled from 'styled-components'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import './stylesForAdditionalComponents/SliderProjectPage.css'
import nextArrow from '../../photo/right-arrow.png'
import prevArrow from '../../photo/left-arrow.png'
function SliderProjectPage({project}) {

    const  settings = {

        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };


    return (
        <Container>
            <Slider {...settings} prevArrow={ <img  src={prevArrow}></img> } nextArrow={ <img  src={nextArrow}></img> }>
                {
                    project.additionalPhotos.map((photo) => {
                        return (
                            <SliderPhoto>
                                <img className ="slide-photo-custom" src={photo}></img>
                            </SliderPhoto>
                        )
                    })
                }
            </Slider>
        </Container>
    )
}

export default SliderProjectPage

const Container = styled.div`
    width: 56%;
    margin-left: 100px;
    background-color: #054163;
    padding: 20px 40px;
`
const SliderPhoto = styled.div`
    display-flex;
    align-items: center;
    justify-content: center;
    width: 30%;
`
