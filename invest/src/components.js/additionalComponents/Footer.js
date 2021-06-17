import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logo from '../../photo/LogoFooter.svg'
import skypeImg from '../../photo/skype.svg'
import telegramImg from '../../photo/telegram.svg'
import viberImg from '../../photo/viber.png'
import whatsappImg from '../../photo/whatsapp.svg'
import './stylesForAdditionalComponents/Footer.css';


function Footer() {

    const socialMedias = [
        {
            img: skypeImg,
            path: "/Authorisation"
        },
        {
            img: telegramImg,
            path: "/Authorisation"
        },
        {
            img: viberImg,
            path: "/Authorisation"
        },
        {
            img: whatsappImg,
            path: "/Authorisation"
        }    
    ];

    const navInformation = [
        {
            title: "SERVICES",
            information: [
                {
                title: "Timeshare investment",

            }
        ]
        }
    ]


    return (
        <Container>
            <div className="left-part-footer">
                <Link to="/" className="footer-logo">
                    <img src={logo}></img>
                </Link>
                <div className="social-medias">
                    {
                        socialMedias.map((item) => {
                            return(
                                <Link className="social-linck" to={item.path}>
                                    <img src={item.img}></img>
                                </Link>
                            )
                        })
                    }
                </div>
                <p className="footer-social-text">Estate Together, 2020, All rights are reserved.</p>
            </div>
            <div className="right-part-footer">
                <div className="footer-nav">
                </div>
                <div className="footer-nav">
                    
                </div>
                <div className="footer-nav">
                    
                </div>
            </div>
        </Container>
    )
}

export default Footer

const Container = styled.div`
display: flex;
background-color: #054163;
padding: 0 5%;
`