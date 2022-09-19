import React from "react";
import {
  ServicesContainer,
  ServicesCard,
  ServicesH1,
  ServicesWrapper,
  ServicesIcon,
  ServicesP,
  ServicesH2,
} from "./ServicesElements";
import Icon1 from "../../images/img-2.jpg";
import Icon2 from "../../images/img-1.png";
import Icon3 from "../../images/img-2.jpg";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Reduce expenses</ServicesH2>
          <ServicesP>We help to save you time</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Analytics</ServicesH2>
          <ServicesP>track projections of your players</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Premium Benefits</ServicesH2>
          <ServicesP>Everything football </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
