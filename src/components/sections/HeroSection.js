import React from 'react'
import { Link } from "gatsby"
import styled from 'styled-components'
import { themes } from "../styles/ColorStyles"
import { H1, H3, SmallText2 } from '../styles/TextStyles';
import PurchaseButton from '../buttons/PurchaseButton';
import MockupAnimation from '../animations/MockupAnimation';

function HeroSection (){
    return(
        <Wrapper>
         <ContentWrapper>
                <TextWrapper>
                    <Title>A.L.I
                        <SubTitle>Personal Assistant <br /> & Best Friend</SubTitle>
                    </Title>
                    <Description>"Good Evening Sir, the weather is 28 and Sunny."</Description>
                    <PurchaseButton title="Start System" subtitle="Begin Todays Analysis"/>
                </TextWrapper>
                <MockupAnimation />
          </ContentWrapper>
        </Wrapper>
    )
}


export default HeroSection;

const Wrapper = styled.div`
background: linear-gradient(180deg, #4316DB 0%, #9076E7 100%);
overflow: hidden;

// Can remove in future once more content is added
height: 100vh;
`

const ContentWrapper = styled.div`
max-width: 1234px;
margin: 0 auto;
padding: 200px 30px;
display: grid;
grid-template-columns: 360px auto;
`

const TextWrapper = styled.div`
max-width: 360px;
display: grid;
gap: 30px;
`

const Title = styled(H1)`
color: ${themes.dark.text1};
`

const SubTitle = styled(H3)`
text-transform: uppercase;
`

const Description = styled(SmallText2)`
font-size: 17px;
line-height:130%; 
`