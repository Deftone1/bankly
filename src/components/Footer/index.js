import React from "react";
import {animateScroll as scroll} from "react-scroll";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo, 
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {

  const toggleHome = () => {
    scroll.scrollToTop();
  }
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterTitle style={{ "margin-bottom": 20, color: "#01bf71" }}>
                About us
              </FooterTitle>
              <FooterLink to="signin">How it works</FooterLink>
              <FooterLink to="signin">Testimonials</FooterLink>
              <FooterLink to="signin">Careers</FooterLink>
              <FooterLink to="signin">Investors</FooterLink>
              <FooterLink to="signin">Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterTitle style={{ "margin-bottom": 20, color: "#01bf71" }}>
                Contact us
              </FooterTitle>
              <FooterLink to="signin">Contact</FooterLink>
              <FooterLink to="signin">Support</FooterLink>
              <FooterLink to="signin">Destinations</FooterLink>
              <FooterLink to="signin">Sponsorships</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterTitle style={{ "margin-bottom": 20, color: "#01bf71" }}>
                Videos
              </FooterTitle>
              <FooterLink to="signin">Submit Video</FooterLink>
              <FooterLink to="signin">Ambassadors</FooterLink>
              <FooterLink to="signin">Agency</FooterLink>
              <FooterLink to="signin">Influencer</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterTitle style={{ "margin-bottom": 20, color: "#01bf71" }}>
                Social Media
              </FooterTitle>
              <FooterLink to="signin">Instagram</FooterLink>
              <FooterLink to="signin">Facebook</FooterLink>
              <FooterLink to="signin">Youtube</FooterLink> 
              <FooterLink to="signin">Twitter</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/bankly" onClick={toggleHome}
            smooth={true} duration={500} spy={true} exact={true} offset={-80}
            >Bankly</SocialLogo>
            <WebsiteRights>
              Bankly © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="//www.facebook.com" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="//www.instagram.com" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="//www.youtube.com" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="//www.twitter.com" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="//www.linkedin.com" target="_blank" aria-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
