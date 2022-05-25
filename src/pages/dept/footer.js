import React from 'react';
import styled from 'styled-components'

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
`
const TopDiv = styled.div`
   display: flex;

   & .whiteLogo {
          margin-right: 70px;
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
`

const Social = styled.div`
   display: flex;
   gap: 10px;
   justify-content: right;
   padding-top: 10px;
   width: 100%;
`


const Footer = () => {
    const scrollToTop = () =>{
        window.scrollTo({
        top: 0, 
        behavior: 'smooth'
        });
  };

    return (
        <StyledDiv>
          <div className="mainFooter">
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
                <img src={facebook} alt="facebook" width="18px" height="18px"/>
                <img src={twitter} alt="twitter" width="18px" height="18px"/>
                <img src={instagram} alt="instagram" width="18px" height="18px"/>
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
          <div className="toUp">
            <div className="wrapper" onClick={scrollToTop}>
                <img src={upArrorw} alt="upArrorw" />
                <p>TOP</p>
            </div>
          </div>
        </StyledDiv>
    );
}

export default Footer;