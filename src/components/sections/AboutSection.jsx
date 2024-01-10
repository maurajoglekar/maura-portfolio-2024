
import {
  AboutContent,
  DarkCircle,
  GradientCircle,
  ImageContainer,
  StyledAboutSection,
  StyledEmoji,
  StyledHeading,
  StyledImage,
} from "../styles/sections/AboutSection.styled";

export const AboutSection = () => {
  return (
    <>
      <StyledAboutSection id="about">
        <ImageContainer>
          <StyledImage src="./images/profile-pic.jpg" alt="Maura Joglekar" />
          <DarkCircle />
          <GradientCircle />
        </ImageContainer>
        <AboutContent>
          <StyledHeading>
            Hello <StyledEmoji>👋</StyledEmoji>
          </StyledHeading>
          <p>
            I'm an experienced front-end developer with a passion for learning and applying technical skills to build applications.
          </p>
          <p>
          I have excellent hands-on software development experience in various enterprise applications including a SaaS-based product. I am an experienced developer that can be relied upon to take ownership of large projects. I have great collaboration and communication skills that enabled me to work well with product management, quality assurance, and frontend/backend engineers. I am very passionate about ensuring a good customer experience and I take extreme pride in my work. I also enjoy mentoring junior developers and interns.
          </p>
        </AboutContent>
      </StyledAboutSection>
      <hr />
    </>
  );
};
