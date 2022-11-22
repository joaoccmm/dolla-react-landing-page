import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import {
  FooterContainer,
  FooterLinksWrapper,
  FooterWrap,
  FooterLinkItens,
  FooterLinkTitle,
  FooterLink,
  FooterLinkContainer,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebSiteRights,
  SocialIcons,
  SocialIconLink,
} from "./footerElements";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinkContainer>
            <FooterLinksWrapper>
              <FooterLinkItens>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="/">How it works</FooterLink>
                <FooterLink to="/">Testemonials</FooterLink>
                <FooterLink to="/">Carrers</FooterLink>
                <FooterLink to="/">Investers</FooterLink>
                <FooterLink to="/">Term of Service</FooterLink>
              </FooterLinkItens>

              <FooterLinkItens>
                <FooterLinkTitle>Videos</FooterLinkTitle>
                <FooterLink to="/">Submit Video</FooterLink>
                <FooterLink to="/">Ambassadors</FooterLink>
                <FooterLink to="/">Agency</FooterLink>
                <FooterLink to="/">Influencer</FooterLink>
              </FooterLinkItens>
            </FooterLinksWrapper>

            <FooterLinksWrapper>
              <FooterLinkItens>
                <FooterLinkTitle>Contact Us</FooterLinkTitle>
                <FooterLink to="/">Contact</FooterLink>
                <FooterLink to="/">Support</FooterLink>
                <FooterLink to="/">Destinations</FooterLink>
                <FooterLink to="/">Sponsership</FooterLink>
                <FooterLink to="/">Term of Service</FooterLink>
              </FooterLinkItens>

              <FooterLinkItens>
                <FooterLinkTitle>Social Media</FooterLinkTitle>
                <FooterLink to="/">Instagram</FooterLink>
                <FooterLink to="/">Facebook</FooterLink>
                <FooterLink to="/">Youtbe</FooterLink>
                <FooterLink to="/">Twitter</FooterLink>
              </FooterLinkItens>
            </FooterLinksWrapper>
          </FooterLinkContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to="/">dolla</SocialLogo>
              <WebSiteRights>
                dolla © {new Date().getFullYear()} All rights reserved.
              </WebSiteRights>
              <SocialIcons>
                <SocialIconLink href="/" target="_blank" arial-label="Facebook">
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink
                  href="/"
                  target="_blank"
                  arial-label="Instagram"
                >
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" arial-label="Youtube">
                  <FaYoutube />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" arial-label="Twitter">
                  <FaTwitter />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
