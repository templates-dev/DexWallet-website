import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  left: auto;
  top: auto;
  right: 2%;
  bottom: 4%;
  z-index: 200;
  display: block;
  width: 390px;
  height: auto;
  margin-top: 0px;
  margin-right: 0%;
  margin-bottom: 0%;
  padding: 20px 10px 16px 10px;
  border-radius: 10px;
  background-color: #7289da;
  box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.15);
  cursor: pointer;
  display: flex;
  flex-direction: row;
  color: #fff;

  @media (max-width: 926px) {
    display: none;
  }
`;

const IMG = styled.img`
  margin-right: 20px;
`;

const TextContainer = styled.span`
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  font-weight: 700;
`;

const Sub = styled.span`
  font-weight: 300;
`;

const Close = styled.img`
  position: absolute;
  left: auto;
  top: 12%;
  right: 3%;
  bottom: 0%;
  z-index: 300;
  margin-top: 0px;
  margin-right: 0px;
  margin-left: 0px;
  opacity: 1;
  cursor: pointer;
`;

const Linked = styled.a`
  color: #fff;
  &:hover {
    color: #fff;
    opacity: 0.8;
  }
`;

const DiscordBanner = () => {
  return (
    <Container>
      <Linked>
        <IMG
          src="../img/DiscordLogoFull.png"
          height="50"
          alt="Built on Ethereum"
        />
      </Linked>
      <TextContainer>
        <Linked>
          <Title>Join the conversation!</Title>
        </Linked>
        <Linked>
          <Sub>Meet among the smartes people on DeFi!</Sub>
        </Linked>
      </TextContainer>
      <Close
        src="https://assets.website-files.com/5c73e3cf2d05ce73f79a3d10/5d8dddc086d4c075ee18cdff_Group.svg"
        width="14"
        data-w-id="b6636422-88c3-3400-406f-7e63a027fe17"
        alt=""
        class="image-65"
      />
    </Container>
  );
};

export default DiscordBanner;
