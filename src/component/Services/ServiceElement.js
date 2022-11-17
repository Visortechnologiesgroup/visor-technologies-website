import styled from 'styled-components'


export const ServicesMain = styled.div`
    display: grid;
    place-items: center;
    background: #fff;
`

export const ServicesContainer = styled.div`
    height: 750px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;


    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1880px;
    }
`


export const ServicesWrapper = styled.div`
    max-width: 1600px;
    margin-top: 150px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 20px;
    padding: 0 50px;
    background: #fff;

    
    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }


    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        width: 500px;
    }

`


export const ServicesCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 1px;
    height: 500px;
    width: 320px;
    margin-top: -150px;
    padding: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.08);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
        background: #fff;
    }


    
    @media screen and (max-width: 480px) {
        margin: 5px 5px 5px 5px;
        margin-top: 55px;
        height: 420px;
        width: 350px;
    }
`


export const ServicesIcon = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;

    @media screen and (max-width: 480px) {
        height: 400px;
    }
`


export const ServicesH1 = styled.h1`
    font-size: 1.8rem;
    margin-bottom: 180px;
    font-family: Arial;
    -webkit-text-stroke: 1px white;

    @media screen and (max-width: 480px) {
        font-size: 1.5rem;

`


export const ServicesH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`

export const ServicesP = styled.p`
    font-size: 1rem;
    text-align: center;
`