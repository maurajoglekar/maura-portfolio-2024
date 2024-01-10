import {
  CodedWith,
  FooterNav,
  SyledFooter,
} from "../styles/layout/Footer.styled";

export const Footer = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <>
      <SyledFooter>
        <FooterNav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </FooterNav>
        <CodedWith>Coded with React and Styled Components 💅</CodedWith>
        <div>
          &copy; December 2024 - {months[new Date().getMonth()]}{" "}
          {new Date().getFullYear()}
        </div>
      </SyledFooter>
    </>
  );
};
