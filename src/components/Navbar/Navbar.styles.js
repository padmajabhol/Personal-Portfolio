import styled from "styled-components";
import tw from "twin.macro";

const Navbar = styled.div`
  ${tw`
     flex
     justify-between
     text-white
     ml-16
     justify-items-center
`}

 @media only screen and (min-width: 960px) {
   .fa-bars {
  color: #fff;
  }

  .nav-links-mobile {
    display: none;
  }

  .menu-icon {
    display: none;
  }
 }
`;

const Logo = styled.a`
  ${tw`
   font-lobster
   md:text-6xl
   sm:text-5xl
   text-primary
`}
 @media screen and (max-width: 960px) {
     position: absolute;
     font-size: 3rem;
     left: 0;
     transform: translate(10%, 6%);
 }
`;

const NavList = styled.div`
  ${tw`
     flex
     gap-5
     text-lg
     mr-4
     items-center
     text-primary
     font-roboto
     uppercase
     font-medium
`}

 @media screen and (max-width: 960px) {
  /* .NavbarItems {
    position: relative;
  } */

  .nav-menu{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: -100%;
    opacity: 1;
    transition: all 0.5s ease;
  }

  .nav-menu.active {
    background: black;
    left: 0;
    opacity: 1;
    overflow-x: hidden;
    overflow-y: hidden;
    transition: all 0.5s ease;
    z-index: 1;
  }

  .nav-links {
    text-align: center;
    padding: 1rem;
    width: 100%;
    display: table;
  }

  .nav-links:hover {
  }

  .fa-times {
    color: #fff;
    font-size: 2rem;
  }

  .nav-links-mobile {
    display: block;
    text-align: center;
    margin: 2rem auto;
    border-radius: 4px;
    width: 80%;
    text-decoration: none;
    font-size: 1.5rem;
    background-color: transparent;
    color: #fff;
    padding: 14px 20px;
    border: 1px solid #fff;
    transition: all 0.3s ease-out;
  }

  .menu-icon{
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }

  .fa-bars {
  color: #fff;
  font-size: 2rem;
  }

`;

const List = styled.ul`
  ${tw`
    justify-items-center
    flex
    gap-5
    mr-8
`}
`;

const Resume = styled.button`
  ${tw`
    border-2
    border-primary
    rounded-lg
    text-base
    px-2
`}
`;



export { Navbar, Logo, NavList, Resume, List };
