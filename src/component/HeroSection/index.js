import React from 'react';
import Video from '../../images/video1.mp4';
import { HeroContainer, HeroBg, HeroContent, HeroH1, VideoBg, HeroH2 } from './HeroElements';
import { Buttun } from '../Buttun';


const HeroSection = () => {



    return (
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>

            <HeroContent>
                <HeroH1>
                    IN A WORLD OF UNCERTIANTY YOU HAVE TO TAKE CONTROL OF YOUR POWER AND EVERYTHING AROUND YOU
                </HeroH1>
                
                <Buttun>GET STARTED</Buttun>

                <HeroH2></HeroH2>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
