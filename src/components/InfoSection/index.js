import React from "react";
import { Button } from "../Button/ButtonElements";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Column2,
  Img,
  ImgWrap,
} from "./infoElements";

const InfoSection = (data) => {
  //   console.log(data.lightBg);
  return (
    <>
      <InfoContainer lightBg={data.lightBg} id={data.id}>
        <InfoWrapper>
          <InfoRow imgStart={data.imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{data.topLine}</TopLine>
                <Heading lightText={data.lightText}>{data.headLine}</Heading>
                <Subtitle darkText={data.darkText}>{data.descrition}</Subtitle>
                <BtnWrap>
                  <Button
                    to="home"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={data.primary}
                  >
                    {data.buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={data.img} alt={data.alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
