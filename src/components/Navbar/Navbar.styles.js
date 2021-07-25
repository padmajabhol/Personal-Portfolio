import styled from "styled-components";
import tw from "twin.macro";

const Navbar = styled.div`
  ${tw`
     flex
     grid grid-cols-8
     justify-between
     text-white
     ml-16
     justify-items-center
`}
`;

const Logo = styled.a`
  ${tw`
   font-lobster
   md:text-6xl
   sm:text-5xl
   text-primary
`}
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
     col-start-6
     col-end-8
`}
`;

const MenuIcon = styled.div`
  ${tw`
   block
   absolute
   object-right-top
   transform-translate(-100%, 60%);
   text-3xl
   cursor-pointer
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

export { Navbar, Logo, NavList, Resume, MenuIcon };
