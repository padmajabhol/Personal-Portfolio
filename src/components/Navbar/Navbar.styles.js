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
`;

const Logo = styled.div`
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
   gap-4
   text-lg
   items-center 
   mr-16
   text-primary
   font-roboto
   uppercase
   font-medium
`}
`;

const Resume = styled.div`
  ${tw`
  border-2
  border-primary
  rounded-lg
  text-base
  px-2
  py-1
`}
`;

export { Navbar, Logo, NavList, Resume };
