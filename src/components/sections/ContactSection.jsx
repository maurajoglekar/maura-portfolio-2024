import { FaEnvelope } from "react-icons/fa";
import { SectionHeading } from "../styles/common/SectionHeading.styled";
import {
  ContactInfo,
  DetailsWrapper,
  ImageWrapper,
  StyledContactSection,
} from "../styles/sections/ContactSection.styled";

export const ContactSection = () => {
  return (
    <>
      <StyledContactSection id="contact">
        <SectionHeading>
          <h1>Contact</h1>
          <p>Get in touch</p>
        </SectionHeading>
        <DetailsWrapper>
          <ContactInfo>
            <p>
              I'd love if you reached out to me. Even if it's just to say
              "Hey!". Don't hesitate! Drop me a line and I’ll get back to you
              ASAP!
            </p>
            <p>
              <i>
                For gig and advertising opportunities, begin your subject with{" "}
                <strong>"Gig"</strong>
              </i>
            </p>
            <div>
              <a href="mailto:maurajoglekar@gmail.com">
                <FaEnvelope /> <span>maurajoglekar@gmail.com</span>
              </a>
            </div>
          </ContactInfo>
          <ImageWrapper>
            <img src="./images/proud_coder.svg" alt="contact" />
          </ImageWrapper>
        </DetailsWrapper>
      </StyledContactSection>
      <hr />
    </>
  );
};
