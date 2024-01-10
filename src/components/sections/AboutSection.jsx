import { CTAButton } from "../styles/common/CTAButton.styled";
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus nam itaque maiores iusto repudiandae laborum
            aspernatur optio eaque dolor, asperiores est ipsum repellat
            molestias fugiat repellendus quibusdam ipsam. Corporis, facilis.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. A aut
            assumenda, ratione, enim est voluptate modi perspiciatis dolor
            consequatur maiores, veritatis corporis tempore placeat sit natus
            asperiores excepturi. Quos, eum.
          </p>
          <CTAButton href="#" target="_blank">
            Get Portfolio Course
          </CTAButton>
        </AboutContent>
      </StyledAboutSection>
      <hr />
    </>
  );
};
