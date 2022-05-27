import React from 'react';
import styled from 'styled-components'

import device from './../../utils/device'

import upArrorw from './../../assets/upArrorw.svg'
import DEPTWhite from './../../assets/DEPTWhite.png'
import facebook from './../../assets/social/facebook.svg'
import twitter from './../../assets/social/twitter.svg'
import instagram from './../../assets/social/instagram.svg'

const StyledDiv = styled.div`
  display: flex;

  & .mainFooter {
      width: 95%;
      background: #0E0E0E;
      padding: 100px 50px;

  }

  & .toUp {
      padding: 200px 50px 100px 55px;
      font-weight: 400;
      font-size: 22px;
      line-height: 32px;
      color: #1A18F7;

      & p {
          margin-top: 10px;
      }

      & .wrapper {
          cursor: pointer;
      }
  }

  @media ${device.tabletL} {
      display: block;

      & .mainFooter {
        padding: 40px 30px;
        width: auto;
        
    }

      & .toUp {
        display: none;
      }
    }

`
const TopDiv = styled.div`
   display: flex;

   & .whiteLogo {
          margin-right: 70px;
      }

      @media ${device.tabletL} {
        justify-content: space-between;
        & .whiteLogo {
          display: none;
      }
    }
`

const BottomDiv = styled.div`
   display: flex;
   gap: 25px;
   border-top: 1px solid #3E3E3E;
   margin-top: 50px;
   padding-top: 50px;

   font-family: 'Arial';
   font-style: normal;
   font-weight: 400;
   font-size: 13px;
   line-height: 15px;
   color: #808080;
   

   & .copyright {
       text-align: right;
       width: 50%;
   }

   @media ${device.tabletL} {
        display: block;
        margin-top: 25px;
        padding-top: 25px;

        & p {
          margin-top: 5px;
          margin-bottom: 5px;
        }

        & .copyright {
          text-align: left;
          margin-top: 20px;
   }
    }
`
const Nav = styled.div`
   display: flex;
   gap: 25px;

   font-weight: 400;
   font-size: 18px;
   line-height: 26px;
   color: #FFFFFF;

   & p {
       margin-top: 10px;
   }

   @media ${device.tabletL} {
        display: block;
        gap: 25px;

        font-size: 32px;
        line-height: 46px;

        & p {
          margin-top: 10px;
          margin-bottom: 15px;
        }
    }
`

const Social = styled.div`
   display: flex;
   gap: 10px;
   justify-content: right;
   padding-top: 10px;
   width: 100%;

   & img {
          width: 18px;
          height: 18px;
        }

   @media ${device.tabletL} {
        display: block;
        width: 0;
      
        padding-top: 15px;
        padding-right: 25px;

        & img {
          margin-bottom: 40px;
          width: 25px;
          height: 25px;
        }
    }
`


const Footer = () => {
    const scrollToTop = () =>{
        window.scrollTo({
        top: 0, 
        behavior: 'smooth'
        });
  };

    return (
        <StyledDiv data-testid="footer-div">
          <div className="mainFooter" data-testid="mainFooter">
          <TopDiv>
          <img src={DEPTWhite} className="whiteLogo" alt="DEPTWhite" width="100" height="27.98px"/>
            <Nav>
            <p>WORK</p>
            <p>SERVICES</p>
            <p>STORIES</p>
            <p>ABOUT</p>
            <p>CAREERS</p>
            <p>CONTACT</p>
          </Nav>
          <Social>
                <img src={facebook} alt="facebook" />
                <img src={twitter} alt="twitter" />
                <img src={instagram} alt="instagram"/>
            </Social>
          </TopDiv>
          
          <BottomDiv>
          <p>Chamber of Commerce: 63464101</p>
          <p>VAT: NL 8552.47.502.B01</p>
          <p>Terms and conditions</p>
          <div className="copyright">
            <p>© 2018 Dept Agency</p>
          </div>
          
          </BottomDiv>
          </div>
          <div className="toUp" data-testid="toUp">
            <div className="wrapper" onClick={scrollToTop}>
                <img src={upArrorw} alt="upArrorw" />
                <p>TOP</p>
            </div>
          </div>
        </StyledDiv>
    );
}

export default Footer;