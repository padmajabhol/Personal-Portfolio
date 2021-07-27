import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import HeroImage from "../assets/images/HomeImage.png";

const Container = styled.div`
  ${tw`
   
     pt-28
     w-full
     flex 
     justify-center
     items-center
     flex-col
     lg:flex-row
     lg:justify-around 
     overflow-hidden
     bg-black
  `}
`;

const Section = styled.div`
  ${tw`
    /* text-white
    justify-center
    flex-col
    mt-40
    w-full
    ml-10
    block
    items-start */
    mt-5
    /* text-center */
    text-left
  `}
`;

const Heading1 = styled.h2`
  ${tw`
    font-black
    text-5xl
    lg:text-6xl
    font-raleway
    font-extrabold
    text-white
  `}
`;

const Heading2 = styled.span`
  ${tw`
    font-lobster
    text-primary 
    lg:text-8xl sm:text-7xl
  `}
`;

const Body = styled.p`
  ${tw`
    font-roboto
    text-white
    text-2xl
  `}
`;

const Image = styled.img`
  ${tw`
  w-screen
  lg:max-w-lg
  max-w-md
    
  `}
`;

function Landing() {
  return (
    <Container>
      <Section>
        <Heading1>
          Angela Simon
          <br />
          <Heading2>I make websites</Heading2>
        </Heading1>
        <Body>
          I’m lead front-end developer at Codista, a software <br />
          studio in Vienna.
          <br />I also write about the web on my Blog and on Twitter.
        </Body>
      </Section>
      <Image alt="Hero" src={HeroImage} />
    </Container>
  );
}

export default Landing;
