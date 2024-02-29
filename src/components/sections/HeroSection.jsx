import { CTAButton } from "../styles/common/CTAButton.styled";
import {
  HeroContent,
  HeroSocialIcons,
  StyledArrowDown,
  StyledHeroSection,
  SocialIcon,
} from "../styles/sections/HeroSection.styled";
import { FaArrowDown, FaGithub, FaLinkedin } from "react-icons/fa";
// import { TfiJsfiddle } from "react-icons/tfi";

export const HeroSection = () => {
  return (
    <StyledHeroSection id="hero-section">
      <HeroContent>
        <h1>Maura Joglekar</h1>
        <h3>{"{Principal FrontEnd Developer}"}</h3>
        <p>React . JavaScript . Redux . Saga . HTML . CSS </p>
        <div>
          <CTAButton href="#projects">Projects</CTAButton>
          <CTAButton href="#contact" primary margin="0 0 0 20px">
            Contact Me
          </CTAButton>
        </div>
      </HeroContent>
      <StyledArrowDown href="#about">
        <FaArrowDown />
      </StyledArrowDown>
      <HeroSocialIcons>
        <SocialIcon
          href="https://www.linkedin.com/in/maura-joglekar/"
          target="_blank"
        >
          <FaLinkedin />
        </SocialIcon>
        <SocialIcon href="https://github.com/maurajoglekar" target="_blank">
          <FaGithub />
        </SocialIcon>
        {/* <SocialIcon href="https://jsfiddle.net/user/fiddles/public/" target="_blank">
          <TfiJsfiddle />
        </SocialIcon> */}
      </HeroSocialIcons>
    </StyledHeroSection>
  );
};
