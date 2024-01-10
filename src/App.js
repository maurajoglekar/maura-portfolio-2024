import { ThemeProvider } from "styled-components";
import { Footer } from "./components/layout/Footer";
import { NavBar } from "./components/layout/NavBar";
import { TopBanner } from "./components/layout/TopBanner";
import { AboutSection } from "./components/sections/AboutSection";
import { ContactSection } from "./components/sections/ContactSection";
import { HeroSection } from "./components/sections/HeroSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { Container } from "./components/styles/common/Container.styled";
import { GlobalStyles } from "./components/styles/Globals.styled";

function App() {
  const theme = {
    colors: {
      white: "rgba(240, 247, 255,1)",
      navyBlue: "rgba(2, 12, 27, 1)",
      lightNavyBlue: "rgba(4, 22, 48, 1)",
      green: "rgba(0, 206, 158,1)",
      orange: "rgba(249, 105, 14, 1)",
      purple: "rgba(102, 51,153, 1)",
    },
    mobile: "768px",
    transition: "all 650ms ease-in-out",
  };

  return (
    <>
       <ThemeProvider theme={theme}>
       <GlobalStyles />
       <TopBanner />
        <NavBar />
        <HeroSection />
        <Container>
          <AboutSection />
          <ProjectsSection />
          <ContactSection />
        </Container>
        <Footer />
       </ThemeProvider>
    </>
  );
}

export default App;
