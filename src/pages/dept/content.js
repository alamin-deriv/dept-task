import React from 'react';
import styled from 'styled-components'

import Polygon from './../../assets/polygon.png'
import Bol from './../../assets/BOL.png'
import Kampen from './../../assets/KEMPEN.png'
import PHILIPS from './../../assets/PHILIPS.png'
import GEMEENTEMUSEUM from './../../assets/GEMEENTEMUSEUM.png'
import PolygonBlue from './../../assets/Polygon-blue.png'
import heroImage from './../../assets/heroImage.png'
import BELIGHTNING from './../../assets/BELIGHTNING.png'
import TUI from './../../assets/TUI.png'
import CHOCOMEL from './../../assets/CHOCOMEL.png'
import JBL from './../../assets/JBL.png'
import ZALANDO from './../../assets/ZALANDO.png'
import KONINKLIJKEBIBLIOTHEEK from './../../assets/KONINKLIJKE-BIBLIOTHEEK.png'
import LIBERTYGLOBAL from './../../assets/LIBERTY-GLOBAL.png'
import ARLA from './../../assets/ARLA.png'

const StyledDiv = styled.div`
  padding: 30px 50px 50px 50px;
`

const Filter = styled.div`
  display: flex;
  justify-content: right;

  font-weight: 400;
  font-size: 30px;

  color: #A3A3A3;

  & .industries {
      margin-right: 10px;
  }
 
  & p {
      margin-top:0;
      margin-bottom:0;
  }
  & span {
      color: #0E0E0E;
      border-bottom: 1px solid #0E0E0E;
  }

  & img {
       margin-bottom: 8px;
  }
`

const ProjectsDiv = styled.div`
  display: inline-grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px 80px;
  width: 100%;
  margin-top: 50px;

  & div {
      & .companyName {
          font-family: 'Arial';
          font-style: normal;
          font-weight: 700;
          font-size: 15px;
          line-height: 17px;
          color: #939393;
      }

      & .description {
          font-weight: 400;
          font-size: 30px;
          line-height: 43px;
          margin-top: 10px;
          margin-bottom: 10px;
          color: #0E0E0E;
      }

      & .viewCase {
          font-family: 'Arial';
          font-style: normal;
          font-weight: 700;
          font-size: 14px;
          line-height: 16px;
          color: #1A18F7;
          cursor: pointer;
      }

      & img {
          margin-right: 10px;
          margin-bottom: -2px;
      }
  }
`

const ProjectsDiv2 = styled.div`
  display: flex;
  width: 100%;
  margin-top: 50px;
  flex-direction: ${props => props.reverse ? "row-reverse" : "row"};

  & div:first-child {
      width: 60%;
      margin-right: ${props => props.reverse ? 0 : "60px"};
      
  }
  & div:last-child {
      width: 35%;
      border-top: 1px solid #DDDDDD;
      margin-right: ${props => props.reverse ? "60px" : 0};
      
  }

  & div {
      & .companyName {
          font-family: 'Arial';
          font-style: normal;
          font-weight: 700;
          font-size: 15px;
          line-height: 17px;
          color: #939393;
      }

      & .description {
          font-weight: 400;
          font-size: 30px;
          line-height: 43px;
          margin-top: 10px;
          margin-bottom: 10px;
          color: #0E0E0E;
      }

      & .viewCase {
          font-family: 'Arial';
          font-style: normal;
          font-weight: 700;
          font-size: 14px;
          line-height: 16px;
          color: #1A18F7;
          cursor: pointer;
      }

      & img {
          margin-right: 10px;
          margin-bottom: -2px;
      }

      & .innerDiv {
          width: 100%;
          padding: 30px 0;
          border-bottom: 1px solid #DDDDDD;
          border-top: none;
      }
  }
`

const QuoteSection = styled.div`
  border-top: 1px solid #DDDDDD;
  padding: 50px;
  text-align: center;

  & .quote {
      font-size: 50px;
      line-height: 52px;
      

/* Black */

     color: #0E0E0E;
  }

  & .author {
      font-family: 'Arial';
font-style: normal;
font-weight: 700;
font-size: 13px;
line-height: 15px;
/* identical to box height */


color: #272727;
  }
`


const Content = () => {
    return (
        <StyledDiv>
            <Filter>
              <div className="industries"><p>in <span>all industries <img src={Polygon} alt="arrow"  height="6px"/></span></p></div>
              <div className="work"><p>Show me <span>all work <img src={Polygon} alt="arrow"  height="6px"/></span></p></div>
            </Filter>

           <ProjectsDiv>
           <div>
                <img src={Bol} alt="Bol" width="100%" />
                <p className="companyName">BOL.COM</p>
                <p className="description">A Summer island in the Netherlands</p>
                <p className="viewCase"><img src={PolygonBlue} alt="arrow"  height="12px"/> VIEW CASE</p>
            </div>
           <div>
                <img src={Kampen} alt="Kampen" width="100%" />
                <p className="companyName">KEMPEN</p>
                <p className="description">Not some average banking website</p>
                <p className="viewCase"><img src={PolygonBlue} alt="arrow"  height="12px"/> VIEW CASE</p>
            </div>
           <div>
                <img src={PHILIPS} alt="PHILIPS" width="100%" />
                <p className="companyName">PHILIPS</p>
                <p className="description">Beautiful design meets innovative technology</p>
                <p className="viewCase"><img src={PolygonBlue} alt="arrow"  height="12px"/> VIEW CASE</p>
            </div>
           <div>
                <img src={GEMEENTEMUSEUM} alt="GEMEENTEMUSEUM" width="100%" />
                <p className="companyName">GEMEENTEMUSEUM</p>
                <p className="description">A 100 years of Mondriaan & De Stijl</p>
                <p className="viewCase"><img src={PolygonBlue} alt="arrow"  height="12px"/> VIEW CASE</p>
            </div>
           </ProjectsDiv>
           <ProjectsDiv2>
                <div>
                    <img src={heroImage} alt="Bol" width="100%" />
                    <p className="companyName">BOL.COM</p>
                    <p className="description">Rethinking the entire online ecosystem</p>
                    <p className="viewCase"><img src={PolygonBlue} alt="arrow"  height="12px"/> VIEW CASE</p>
                </div>
                <div>
                   <div className="innerDiv">
                     <p className="companyName">MICROSOFT</p>
                     <p className="description">Tapping into Ireland’s unique gaming culture and bringing a fresh flavour to their Xbox social media channels</p>
                     <p className="viewCase"><img src={PolygonBlue} alt="arrow"  height="12px"/> VIEW CASE</p>
                   </div>
                   <div className="innerDiv">
                     <p className="companyName">O’NEILL</p>
                     <p className="description">Integrating existing content into O’Neills’s new e-commerce platform</p>
                     <p className="viewCase"><img src={PolygonBlue} alt="arrow"  height="12px"/> VIEW CASE</p>
                   </div>
                </div>
           </ProjectsDiv2>
           <ProjectsDiv>
           <div>
                <img src={BELIGHTNING} alt="BELIGHTNING" width="100%" />
                <p className="companyName">BE LIGHTNING</p>
                <p className="description">Delivering clarity on a global scale</p>
                <p className="viewCase"><img src={PolygonBlue} alt="arrow"  height="12px"/> VIEW CASE</p>
            </div>
           <div>
                <img src={TUI} alt="TUI" width="100%" />
                <p className="companyName">TUI</p>
                <p className="description">Swipe to find your next holiday destination</p>
                <p className="viewCase"><img src={PolygonBlue} alt="arrow"  height="12px"/> VIEW CASE</p>
            </div>
           </ProjectsDiv>

            <ProjectsDiv2 reverse={true}>
                <div>
                    <img src={heroImage} alt="Bol" width="100%" />
                    <p className="companyName">BOL.COM</p>
                    <p className="description">Rethinking the entire online ecosystem</p>
                    <p className="viewCase"><img src={PolygonBlue} alt="arrow"  height="12px"/> VIEW CASE</p>
                </div>
                <div>
                   <div className="innerDiv">
                     <p className="companyName">MICROSOFT</p>
                     <p className="description">Tapping into Ireland’s unique gaming culture and bringing a fresh flavour to their Xbox social media channels</p>
                     <p className="viewCase"><img src={PolygonBlue} alt="arrow"  height="12px"/> VIEW CASE</p>
                   </div>
                   <div className="innerDiv">
                     <p className="companyName">O’NEILL</p>
                     <p className="description">Integrating existing content into O’Neills’s new e-commerce platform</p>
                     <p className="viewCase"><img src={PolygonBlue} alt="arrow"  height="12px"/> VIEW CASE</p>
                   </div>
                </div>
           </ProjectsDiv2>

           <ProjectsDiv>
           <div>
                <img src={CHOCOMEL} alt="CHOCOMEL" width="100%" />
                <p className="companyName">CHOCOMEL</p>
                <p className="description">A campaign for the limited edition letter packs</p>
                <p className="viewCase"><img src={PolygonBlue} alt="arrow"  height="12px"/> VIEW CASE</p>
            </div>
           <div>
                <img src={JBL} alt="JBL" width="100%" />
                <p className="companyName">JBL</p>
                <p className="description">Live like a champion with Jerome Boateng</p>
                <p className="viewCase"><img src={PolygonBlue} alt="arrow"  height="12px"/> VIEW CASE</p>
            </div>
           <div>
                <img src={ZALANDO} alt="ZALANDO" width="100%" />
                <p className="companyName">ZALANDO</p>
                <p className="description">Innovative SEO and content strategy for Zalando</p>
                <p className="viewCase"><img src={PolygonBlue} alt="arrow"  height="12px"/> VIEW CASE</p>
            </div>
           <div>
                <img src={KONINKLIJKEBIBLIOTHEEK} alt="KONINKLIJKEBIBLIOTHEEK" width="100%" />
                <p className="companyName">KONINKLIJKE BIBLIOTHEEK</p>
                <p className="description">The search of the most influential book ever</p>
                <p className="viewCase"><img src={PolygonBlue} alt="arrow"  height="12px"/> VIEW CASE</p>
            </div>
           </ProjectsDiv>

           <QuoteSection>
            <p className="quote">“Dept helped us tell our story through a bold new identity and a robust online<br /> experience. To the tone of 60% growth in online bookings in just one month”</p>
            <p className="author">MATTIJS TEN BRINK - CEO, TRANSAVIA</p>
           </QuoteSection>

            <ProjectsDiv>
           <div>
                <img src={LIBERTYGLOBAL} alt="LIBERTYGLOBAL" width="100%" />
                <p className="companyName">LIBERTY GLOBAL</p>
                <p className="description">Delivering complex commerce solutions</p>
                <p className="viewCase"><img src={PolygonBlue} alt="arrow"  height="12px"/> VIEW CASE</p>
            </div>
           <div>
                <img src={ARLA} alt="ARLA" width="100%" />
                <p className="companyName">ARLA</p>
                <p className="description">Swipe to find your next holiday destination</p>
                <p className="viewCase"><img src={PolygonBlue} alt="arrow"  height="12px"/> VIEW CASE</p>
            </div>
           </ProjectsDiv>

        </StyledDiv>
    );
}

export default Content;