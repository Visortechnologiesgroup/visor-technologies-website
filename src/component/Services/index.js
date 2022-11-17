import React from 'react'
import pic5 from '../../images/pakage 1.jpg'
import pic6 from '../../images/pakage 2.jpg'
import pic7 from '../../images/pakage 3.jpg'
import { ServicesContainer,ServicesWrapper,ServicesIcon,ServicesH2,ServicesP,ServicesCard, ServicesMain  } from './ServiceElement'

const Services = () => {
    return (

        <ServicesMain>
        <ServicesContainer id='Packages'>
            
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={pic5} />
                    <ServicesH2></ServicesH2>
                    <ServicesP></ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={pic6} />
                    <ServicesH2></ServicesH2>
                    <ServicesP></ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={pic7} />
                    <ServicesH2></ServicesH2>
                    <ServicesP></ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={pic7} />
                    <ServicesH2></ServicesH2>
                    <ServicesP></ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
        </ServicesMain>
    )
}

export default Services
