import { CTAButton } from "../styles/common/CTAButton.styled";
import {
  HeroContent,
  HeroSocialIcons,
  StyledArrowDown,
  StyledHeroSection,
  SocialIcon,
} from "../styles/sections/HeroSection.styled";
import { FaArrowDown, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";

export const HeroSection = () => {
  return (
    <StyledHeroSection id="hero-section">
      <HeroContent>
        <h1>Maura Joglekar</h1>
        <h3>{"{Front-End Web Developer}"}</h3>
        <p>HTML . CSS . JavaScript . React </p>
        <div>
          <CTAButton href="#projects">Projects</CTAButton>
          <CTAButton href="#contact" primary margin="0 0 0 20px">
            Hire Me
          </CTAButton>
        </div>
      </HeroContent>
      <StyledArrowDown href="#about">
        <FaArrowDown />
      </StyledArrowDown>
      <HeroSocialIcons>
        <SocialIcon href="#" target="_blank">
          <FaYoutube />
        </SocialIcon>
        <SocialIcon href="#" target="_blank">
          <FaGithub />
        </SocialIcon>
        <SocialIcon href="#" target="_blank">
          <FaTwitter />
        </SocialIcon>
      </HeroSocialIcons>
    </StyledHeroSection>
  );
};
