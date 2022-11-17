import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
/*
import { FaBars } from 'react-icons/fa'
*/

export const Nav = styled.div`
    background: grey;
    /*
    margin-top: -80px;
    */
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem:
    position: sticky;
    overflow: hidden;
    top: 0;
    z-index: 10;
    width: 100%;

    @media screen and (max-width: 960px) {
        transtion: 0.8s all ease;
        width: 500px;
        height: 50px;
    }

`



export const NavbarContainer = styled.div`
    display: flex;
    background: #d6e4e5;
    justify-content: space-between;
    height: 50px;
    z-index: 10;
    width: 100%;
    padding: 0 30px;
    position: fixed;
    overflow: hidden;
    max-width: 100%;

    @media screen and (max-width: 768px){
        padding: 0 14px;
        height: 60px;
    }
`


export const NavLogo = styled(LinkR)`
    color: black;
    display: flex;
    justify-self: flex-start;
    cursor: pointer;
    align-items: center;
    margin-left: 20px;
    height: 100%;
    z-index: 11;
`


export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #f76301;
    }
`
export const NavMenu = styled.ul` 
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -15px;

    @media screen and (max-width: 768px) {
        display: none;
    }

`


export const NavItem = styled.li`
    height: 80px;
`



export const NavLinks = styled(LinkS)`
    color: grey;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-family: arial;
    

    &.active{
        border-bottom: 3px solid #fff;
    }

    &:hover{
        transition: all 0.2s ease-in-out;
        color: #f76301;
        background: #fff;
        border-bottom: 0px solid #f76301;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtnLink = styled(LinkR)`
    background: #f76301;
    white-space: nowrap;
    padding: 5px 15px;
    color: black;
    font-size: 12px;
    outline: none;
    cursor: pointer;
    text-decoration: none;
    font-family: arial;
    
    

    &:hover{
        color: #f76301;
        background: #fff;
        border-bottom: 0px solid #f76301;
    }
`