import React from 'react'
import { HeroContainer, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, ResumeButton } from './HeroStyle'
import HeroImg from '../../Images/HeroImage.png'
import Typewriter from 'typewriter-effect';
import { Bio } from "../../data/constants"


const Hero = () =>{
    return(
        <div id = "about">
            <HeroContainer>
                <HeroInnerContainer>
                    <HeroLeftContainer id="Left">
                        <Title>Hi, I'm<br/>{Bio.name}</Title>
                        <TextLoop>
                            Iam a
                            <Span>
                            <Typewriter 
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ResumeButton href={Bio.resume} target='display'>View Resume</ResumeButton>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">
                          <Img src={HeroImg} alt= 'hero image' />
                    </HeroRightContainer>
                </HeroInnerContainer>
            </HeroContainer>
        </div>
    )
}

export default Hero