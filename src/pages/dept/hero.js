import React from 'react';
import styled from 'styled-components'
import {Header} from './../../components/';
import device from './../../utils/device'

import heroImage from './../../assets/heroImage.png'

const StyledDiv = styled.div`
  background-image: url(${heroImage});
  background-repeat: no-repeat;
  background-size: cover;
  height: 950px;

  width: 100vw;

  & h1 {
      font-weight: 400;
      font-size: 550px;
      margin-top: 0;
      margin-bottom: 0;
      margin-left: 10%;
  }

  @media ${device.tabletL} {
        background-size: contain;
        padding: 0;
        background-position: center bottom;
        height: 320px;

        & h1 {
          font-weight: 400;
          font-size: 170px;
          line-height: 244px;
          margin-left: 25px;
          margin-top: -25px;
        }
    }

`

const ViewCaseDiv = styled.div`
background: #0C0C0C;

float: right;
padding: 20px 60px;
margin-top: -50px;
margin-right: 5%;
font-family: 'Arial';
font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 17px;


cursor: pointer;

/* FWhite */

color: #FFFFFF;

@media ${device.tabletL} {
        weight: 80%;
        float: none;
        margin: 0 auto;
        margin: 20px;
        text-align: center;
    }
`

const Hero = () => {
    return (
        <StyledDiv>
            <Header />
            <h1>WORK</h1>
            <ViewCaseDiv>
              VIEW CASE
            </ViewCaseDiv>
        </StyledDiv>
    );
}

export default Hero;