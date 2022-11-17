import styled from 'styled-components'

export const InfoContainer = styled.div`
    color: black;
    background: ${({lightBg}) => (lightBg ? '#eff5f5' : '#d6e4e5' ) };
    display: grid;
    place-items: center;

    @media screen and (max-width: 768px) {
        padding: 100px 0;
        width: 500px;
    }
`

export const InfoWrapper = styled.div`
    display: grid;
    z-grid: 1;
    height: 750px;
    width: 100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;


`


export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax( 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }

    
    @media screen and (max-width: 480px) {
        margin-bottom: -50px;    
    }
`


export const Column1 = styled.div`
    margin-bottom: -50px;
    padding: 0 15px;
    grid-area: col1;
`

export const Column2 = styled.div`
    margin-bottom: -50px;
    padding: 0 15px;
    grid-area: col2;
`

export const TextWrapper = styled.div`
    max-width: 600px;
    padding-top: 0;
    padding-bottom: 60px;
`

export const TopLine = styled.p`
    color:  ${({ mainText}) => (mainText ? '#f76301' : '#010606' )};
    font-size: 20px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    margin-bottom: 5px;
    font-family: arial;

    @media screen and (max-width: 480px) {
        font-size: 14px;
    }

`

export const Heading = styled.h1`
    margin-bottom: 14px;
    font-size: 70px;
    line-height: 1.1;
    font-weight: 800;
    color: ${({ lightText}) => (lightText ? '#f7f8fa' : '#010606' )};
    font-family: arial;


    @media screen and (max-width: 480px) {
        font-size: 25px;
    }
`

export const Subtitle = styled.p`
    max-width: 1500px;
    margin-bottom: 10px;
    font-size: 25px;
    line-height: 24px;
    font-weight: 500;
    font-family: arial;
    color: ${({darkText}) => (darkText ? 'gray' : '#fff')};

    @media screen and (max-width: 480px) {
        font-size: 16px;
    }

`


export const ImgWrap = styled.div`
    max-width: 3000px;
    height: 80%;
`

export const Img = styled.img`
    width: 95%;
    height: 600px;
    margin: 40px 0px 50px 0;
    padding-right: 0;

    @media screen and (max-width: 480px) {
        height: 300px;
    }

`