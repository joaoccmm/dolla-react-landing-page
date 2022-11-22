import React from "react";
import SaveMoney from "../../img/pig-money.svg";
import virtual from "../../img/online-work.svg";
import card from "../../img/card.svg";

import {
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
} from "./ServicesElements";

const Services = () => {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={SaveMoney} />
            <ServicesH2>Reduce Expensive</ServicesH2>
            <ServicesP>
              We help reduce your fees and increase your overall reveune.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={virtual} />
            <ServicesH2>Virtual Offices</ServicesH2>
            <ServicesP>
              You can access our platform online anywhere in the world.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={card} />
            <ServicesH2>Premium Benefits</ServicesH2>
            <ServicesP>
              Unlock our especial membership card that returns 5% cash back.
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
