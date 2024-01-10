
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
            My name is Maura Joglekar.  I'm originally from Mexico, lived in Colorado during my school years and now live in California.
          </p>
          <p>
          Most recently,  I worked at F5 as a principal frontend developer in two different products building them from the ground up. 
          </p>
          <ul>
            <li>As part of the F5 Cloud services, I was a main contributor for the login flow, account management, subscription flows, services onboarding, and the billing enablement. 
 </li>
 <li>
 As part of the NGINX product, I was the only frontend lead in the Analytics platform team building beautiful analytics dashboards to help customers identify, diagnose and solve issues.   

 </li>
          </ul>

           <p>
             Prior to that, I worked at Oracle as a experienced developer.  I was granted a patent for one of my projects and I worked closely with their biggest customer of that product to migrate billions of documents using that patented feature. 
          </p>
          <p>
            I have great collaboration and communication skills that enabled me to work well with product management, quality assurance, and backend engineers. I am very passionate about ensuring a good customer experience and I take extreme pride in my work. I also enjoy mentoring junior developers and interns.
          </p>
        </AboutContent>
      </StyledAboutSection>
      <hr />
    </>
  );
};
