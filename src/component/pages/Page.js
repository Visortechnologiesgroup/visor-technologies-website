import React, { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Navbar from '../Navbar/Navbar'
import HeroSection from '../HeroSection';
import InfoSection from '../InfoSection/InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree} from '../InfoSection/Data';
import Services from '../Services';
import Footer from '../Footer';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };


    return (

        
        <>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <HeroSection />
            <InfoSection {...homeObjOne}/>
            
            <InfoSection {...homeObjThree}/>
            <InfoSection {...homeObjTwo}/>
            <Footer />
        </>
    )
}

export default Home;
