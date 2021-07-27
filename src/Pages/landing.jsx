import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import HeroImage from "../assets/images/HomeImage.png";

const Container = styled.div`
  ${tw`
    text-white
    p-10
    w-full
    flex
    items-start
    justify-between
  `}
`;

const Section = styled.div`
  ${tw`
    text-white
    justify-center
    flex-col
    mt-40
    w-full
    ml-10
    block
    items-start
  `}
`;

const Section2 = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    justify-end
    ml-10
    sm:justify-center
  `}
`;

const Heading1 = styled.h2`
  ${tw`
    flex
    font-raleway
    leading-7
    font-extrabold
    text-7xl
    text-left
  `}
`;

const Heading2 = styled.h2`
  ${tw`
    flex
    font-lobster
    text-primary
    leading-8
    text-8xl
    font-normal
    text-left
  `}
`;

const Body = styled.p`
  ${tw`
    flex
    font-roboto
    leading-relaxed
    text-3xl
    font-normal
    text-left
  `}
`;

const Image = styled.img`
  ${tw`
    block
  `}
`;

function Landing() {
  return(
    <Container>
      <Section>
        <Heading1>Angela Simon</Heading1>
        <Heading2>I make websites</Heading2>
        <Body>I’m lead front-end developer at Codista, a software <br />studio in Vienna.
              <br />I also write about the web on my Blog and on Twitter.</Body>
       </Section>
      <Section2>
        <Image src={HeroImage} alt="HeroImage" />
      </Section2>
    </Container>
  )
}

export default Landing;
