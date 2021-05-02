import React from "react"
import { Link } from "gatsby"
import styled, { keyframes } from "styled-components"
import { themes } from "../styles/ColorStyles"
import { H1, H3, SmallText2 } from "../styles/TextStyles"
import PurchaseButton from "../buttons/PurchaseButton"
import MockupAnimation from "../animations/MockupAnimation"
import WaveBackground from "../backgrounds/WaveBackground"

function HeroSection() {
  return (
    <Wrapper>
      <WaveBackground />
      <ContentWrapper>
        <TextWrapper>
          <Title>
            A.L.I
            <SubTitle>
              Personal Assistant <br /> & Best Friend
            </SubTitle>
          </Title>
          <Description>
            "Good Evening Sir, the weather is 28 and Sunny."
          </Description>
          <PurchaseButton
            title="Start System"
            subtitle="Begin Todays Analysis"
          />
        </TextWrapper>
        <MockupAnimation />
      </ContentWrapper>
    </Wrapper>
  )
}

export default HeroSection

const animation = keyframes`
    from { opacity: 0; transform: translateY(-10px); filter: blur(10px);}
    to { opacity: 1;  transform: translateY(0px); filter: blur(0px);}
`

const Wrapper = styled.div`
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

  // Select only the immediate children
  > * {
    opacity: 0;
    animation: ${animation} 1s forwards;

    :nth-child(1) {
      animation-delay: 0s;
    }
    :nth-child(2) {
      animation-delay: 0.2s;
    }
    :nth-child(3) {
      animation-delay: 0.4s;
    }
  }
`

const Title = styled(H1)`
  color: ${themes.dark.text1};
  opacity: 0;
  animation: ${animation} 1s 0.2s forwards;
`

const SubTitle = styled(H3)`
  text-transform: uppercase;
`

const Description = styled(SmallText2)`
  font-size: 17px;
  line-height: 130%;
`
