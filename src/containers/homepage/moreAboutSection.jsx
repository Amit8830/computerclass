import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { SectionTitle } from "../../components/sectionTitle";

import AboutImgUrl from "../../assets/illustrations/rocket_launch_.png";

const MoreAboutContainer = styled(Element)`
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1em;
`;

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1000px;

  @media screen and (max-width: 480px) {
    max-width: 100%;
    flex-direction: column-reverse;
  }
`;

const AboutText = styled.p`
  font-size: 21px;
  color: #2f2f2f;
  font-weight: normal;
  line-height: 1.4;
`;

const AboutImg = styled.img`
  width: 600px;
  height: 500px;
  margin-left: 2em;

  @media screen and (max-width: 480px) {
    width: 370px;
    height: 290px;
    margin-left: 0;
  }
`;

export function MoreAboutSection(props) {
  return (
    <MoreAboutContainer>
      <SectionTitle>Our Company </SectionTitle>
      <AboutContainer>
        <AboutText>
          *Our institute situated in bhiwandi is engaged in providing high level
          computer education at an affordable fee so that even weaker section of
          the society can take it’s benefit and make their career bright. <br />
          *Certificate is provided from government recognized and ISO certified
          board which is applicable all over India
          {<br />}
          <br />
          <h3>
            <b>Address:</b>{" "}
          </h3>
          <p>
            {" "}
            STALWARTS COMPUTER INSTITUTE.
            Bondaya Building, shop no: 1, BNN college road, opp. Of Andra-Union
            Bank, Near 90-degree cake shop. Bhiwandi, 421302.
          </p>
          {<br />} <b>😊FACULTY DETAILS😊 </b> {/* {<br />} */}
          {<br />}*High educated faculty is provided for training QUALIFICATION:
          BCA Graduate (Bachelor of computer application) MS-CIT. TALLY ERP 9,
          ADVANCE EXCEL, WEB DESIGNING, GRAPHIC DESIGNING. Having more than 2
          years of experience <br /> <br />
          <br />
          <b>😊FACILITY FOR STUDENTS😊 </b>
          <br />
          *Extra practice time is provided every week. (FREE) <br />
          *Regular quiz and assignment for better understanding. *Mock test
          before examination <br />
          *Three free courses are provided (without certificate)
        </AboutText>
        <AboutImg src={AboutImgUrl} />
      </AboutContainer>
    </MoreAboutContainer>
  );
}
