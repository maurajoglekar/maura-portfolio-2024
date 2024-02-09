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
          <StyledImage src="./images/profile-pic.png" alt="Maura Joglekar" />
          <DarkCircle />
          <GradientCircle />
        </ImageContainer>
        <AboutContent>
          <StyledHeading>
            Hello <StyledEmoji>👋</StyledEmoji>
          </StyledHeading>
          <p>
            My name is Maura Joglekar. I'm originally from Mexico, lived in
            Colorado during my school years and now live in California.
          </p>
          <p>
            Most recently, I worked at F5 as a principal frontend developer in
            two different products building them from the ground up:
          </p>
          <ol>
            <li>
              As part of the F5 Cloud services, I was a main contributor for the
              login flow, account management, subscription flows, services
              onboarding, and the billing enablement. Used UI technologies
              Javascript ES6, ReactJS, redux and styled components. Also did UI
              QA automation with selenium and python.
            </li>
            <li>
              As part of the Nginx NMS product, I built beautiful analytics
              dashboards to help customers identify, diagnose and solve issues.
              Also I implemented the instance metrics, notifications and events
              features. Used UI technologies Typescript, ReactJS, and styled
              components. Also did UI QA automation with playwright and
              javascript.
            </li>
          </ol>

          <p>
            Prior to that, I worked at Oracle as a experienced developer. I was
            granted a patent for one of my projects and I worked closely with
            their biggest customer of that product to migrate billions of
            documents using that patented feature.
          </p>
          <p>
            I have great collaboration and communication skills that enabled me
            to work well with product management, quality assurance, and backend
            engineers. I am very passionate about ensuring a good customer
            experience and I take extreme pride in my work. I also enjoy
            mentoring junior developers and interns.
          </p>
        </AboutContent>
      </StyledAboutSection>
      <hr />
    </>
  );
};
