import React from 'react';
import styled from 'styled-components'
import device from './../../utils/device'

import nivea from './../../assets/icons/nivea.png'
import mona from './../../assets/icons/mona.png'
import transavia from './../../assets/icons/transavia.png'
import zalando from './../../assets/icons/zalando.png'
import tomtom from './../../assets/icons/tomtom.png'
import unilever from './../../assets/icons/unilever.png'
import adidas from './../../assets/icons/adidas.png'
import pathe from './../../assets/icons/pathe.png'
import amro from './../../assets/icons/amro.png'
import triumph from './../../assets/icons/triumph.png'
import microsoft from './../../assets/icons/microsoft.png'
import oxxio from './../../assets/icons/oxxio.png'
import nationale from './../../assets/icons/nationale.png'
import ziggo from './../../assets/icons/ziggo.png'
import walibi from './../../assets/icons/walibi.png'
import klm from './../../assets/icons/klm.png'

const StyledDiv = styled.div`
  background: #F0F4F4;
  padding: 100px ;
  text-align: center;

   
  

  & h1 {
      font-weight: 400;
      font-size: 60px;
      line-height: 86px;
      margin-top: 0;
  }

  & p {
      font-family: 'Arial';
      font-style: normal;
      font-weight: 400;
      font-size: 17px;
      line-height: 27px;
      letter-spacing: 0.02em;

      color: #000000;
  }

  & .innerDiv {
      width:50%;
      margin: 0 auto;
  }

  & .icons {
      
      width:70%;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: 100px 50px;
      margin-top: 50px;
  }

  & .iconsMobile {
      display: none;

  }

  @media ${device.tabletL} {
        padding: 25px;

        & h1 {
            font-size: 30px;
            line-height: 43px;
        }

        & .innerDiv {
            width: 90%;
        }

        & .icons {
            display: none;
        }

        & .iconsMobile {
            width: 80%;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 50px;
            margin-top: 50px;
            margin-bottom: 30px;
  }
    }
`


const Client = () => {
    return (
        <StyledDiv data-testid="client-div">
          <div className="innerDiv">
           <h1>CLIENTS</h1>
           <p>We value a great working relationship with our clients above all else. It’s why they often come to our parties. It’s also why we’re able to challenge and inspire them to reach for the stars.</p>
          </div>

          <div className="icons" data-testid="list-of-icons">
           <img src={nivea} alt="nivea" width="82.35px" height="23px"/>
           <img src={mona} alt="mona" width="62.93px" height="30px"/>
           <img src={transavia} alt="transavia" width="117.33px" height="22px"/>
           <img src={zalando} alt="zalando" width="122.67px" height="23px" />
           <img src={tomtom} alt="tomtom" width="118.22px" height="21px"/>
           <img src={unilever} alt="unilever" width="123.43px" height="27px"/>
           <img src={adidas} alt="adidas" width="67.12px" height="45px"/>
           <img src={pathe} alt="pathe" width="66.45px" height="44px"/>
           <img src={amro} alt="amro" width="131.02px" height="34px"/>
           <img src={triumph} alt="triumph" width="112.08px" height="31px"/>
           <img src={microsoft} alt="microsoft" width="110px" />
           <img src={oxxio} alt="oxxio" width="88.83px" height="26px"/>
           <img src={nationale} alt="nationale" width="122.11px" height="29px"/>
           <img src={ziggo} alt="ziggo" width="92.71px" height="33px"/>
           <img src={walibi} alt="walibi" width="72.86px" height="25px"/>
           <img src={klm} alt="klm" width="68.07px" height="40px"/>
          </div>

          <div className="iconsMobile">
           <img src={nivea} alt="nivea" width="71.61px" height="20px"/>
           <img src={mona} alt="mona" width="62.93px" height="30px"/>
           <img src={transavia} alt="transavia" width="106.67px" height="20px"/>
           <img src={zalando} alt="zalando" width="106.67px" height="20px" />
           <img src={tomtom} alt="tomtom" width="101.33px" height="18px"/>
           <img src={unilever} alt="unilever" width="114.29px" height="25px"/>
          </div>
            
        </StyledDiv>
    );
}

export default Client;