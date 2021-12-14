import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import { OurSerivce } from "../../components/ourService";
import { SectionTitle } from "../../components/sectionTitle";

import Service1Img from "../../assets/illustrations/web_development_.png";
import Service2Img from "../../assets/illustrations/mobile_phone.png";
import Service3Img from "../../assets/illustrations/bug_fixed.png";

const ServicesContainer = styled(Element)`
  width: 100%;
  min-height: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
`;

export function ServicesSection(props) {
  return (
    <ServicesContainer name="servicesSection">
      <SectionTitle>--Course Details--</SectionTitle>
      <Marginer direction="vertical" margin="3em" />

      <OurSerivce
        title="🙂 MS-OFFICE SKILLS:"
        description="DURATION: 3 months
FEE: 4000/- (including certificate and study material)
SYLLABUS: Word, Excel, PowerPoint, Internet application,
fund transfer, resume making."
        imgUrl={Service1Img}
      />
      <OurSerivce
        title="🙂TALLY ERP 9:"
        description="DURATION: 3 Months
FEE: 4000/-
SYLLABUS: Accounting theory, Journal entries, Financial
statements, GST, TDS, TCS.
"
        imgUrl={Service2Img}
        isReversed
      />
      <OurSerivce
        title="🙂ADVANCE EXCEL: "
        description="DURATION: 1 MONTH
FEE: 2000/-
SYLLABUS: Basic level, Advance level, Industrial level
"
        imgUrl={Service3Img}
      />

      <OurSerivce
        title="🙂DTP (DESKTOP PUBLISHING):"
        description="DURATION: 3 Month
Fee: 6000/-
SYLLABUS: MS Paint, Photoshop, Corel draw
"
        imgUrl={Service2Img}
        isReversed
      />

      <Marginer direction="vertical" margin="3em" />
      <OurSerivce
        title="🙂DCA (DIPLOMA IN COMPUTER APPLICATION):"
        description="DURATION: 6 Months
FEE: 8000/-
SYLLABUS: MS-Office, internet application, Tally ERP 9,
HTML, Coding"
        imgUrl={Service1Img}
      />
      <OurSerivce
        title="🙂TYPING MASTER:"
        description="FEE: 2000/-
SYLLABUS: ENGLISH TYPING
"
        imgUrl={Service2Img}
        isReversed
      />

      <SectionTitle>--COMBO COURSE DETAILS--</SectionTitle>
      <OurSerivce
        title="➢ MS-OFFICE SKILLS & TALLY ERP 9"
        description="DURATION: 4 MONTHS
FEES: 6500/-
"
        imgUrl={Service3Img}
      />

      <OurSerivce
        title="➢ MS-OFFICE SKILLS & ADVANCE EXCEL"
        description="DURATION: 3 MONTHS
FEES: 5000/-

"
        imgUrl={Service2Img}
        isReversed
      />
      <OurSerivce
        title="➢ TALLY ERP 9 & ADVANCE EXCEL"
        description="DURATION: 3 MONTHS
FEES: 5000/-
"
        imgUrl={Service3Img}
      />

      <OurSerivce
        title="➢ DCA & ADVANCE EXCEL"
        description="DURATION: 6 MONTHS
FEES: 9000/-
"
        imgUrl={Service2Img}
        isReversed
      />

      <Marginer direction="vertical" margin="3em" />
      <OurSerivce
        title="➢ DTP & MS-OFFICE SKILLS"
        description="DURATION: 4.5 MONTHS
FEES: 8000/-"
        imgUrl={Service1Img}
      />
      <OurSerivce
        title="➢ DTP & TALLY ERP 9"
        description="DURATION: 4.5 MONTHS
FEES: 8000/-
"
        imgUrl={Service2Img}
        isReversed
      />
      <OurSerivce
        title="➢ DTP & ADVANCE EXCEL"
        description="DURATION: 3.5 MONTHS
FEES: 7000/-"
        imgUrl={Service1Img}
      />
    </ServicesContainer>
  );
}
