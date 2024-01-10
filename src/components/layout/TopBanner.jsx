import {
  BannerSection,
  StyledTopBanner,
} from "../styles/layout/TopBanner.styled";

export const TopBanner = () => {
  return (
    <>
      <StyledTopBanner>
        <BannerSection showOnMobile>
          <a href="mailto:maurajoglekar@gmail.com"> maurajoglekar@gmail.com</a>
        </BannerSection>
        <BannerSection>⚡ Available for Hire</BannerSection>
      </StyledTopBanner>
    </>
  );
};
