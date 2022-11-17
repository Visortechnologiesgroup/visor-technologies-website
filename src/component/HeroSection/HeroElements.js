import styled from 'styled-components'

export const HeroContainer = styled.div`
    background: #eff5f5;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 850px;
    position: relative;
    z-index: 1;

    
    @media screen and (max-width: 768px) {
        width: 500px;
        height: 850px;
    }

    /* Add before styles */
`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 95%;
    overflow: hidden;

    @media screen and (max-width: 768px) {
        width: 500px;
        height: 100%;
    }
`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`

export const HeroContent = styled.div`
    z-index: 3;
    max-width; 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 70px;
`

export const HeroH1 = styled.h1`
    color: #eff5f5;
    margin-bottom: 10px;
    max-width: 1000px;
    font-size: 40px;
    font-weight: 800;
    text-align: center;
    font-family: arial;
    padding: 20px;

    @media screen and (max-width: 768px){
        font-size: 40px
    }
    @media screen and (max-width: 480px){
        font-size: 32px
    }
` 


export const HeroH2 = styled.h2`
    margin-bottom:50px;
    color: #fff;
    font-size: 22px;
    text-align-center;
    max-width: 1000px;
    font-family: ocr a;

    
    @media screen and (max-width: 768px){
        font-size: 24px
    }
    @media screen and (max-width: 480px){
        font-size: 18px
    }
`
