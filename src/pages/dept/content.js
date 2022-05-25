import React from 'react';
import styled from 'styled-components'
import device from './../../utils/device'

import Polygon from './../../assets/polygon.png'
import PolygonBlue from './../../assets/Polygon-blue.png'


const StyledDiv = styled.div`
  padding: 30px 50px 50px 50px;

  @media ${device.tabletL} {
        padding: 30px 20px 50px 20px;
    }
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

  @media ${device.tabletL} {
        margin-top: 70px;
        display: block;
        font-size: 24px;
        line-height: 34px;

        & .industries {
         margin-bottom: 20px;
  }
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

  @media ${device.tabletL} {
        display: block;
        
        & div {
        & .viewCase {
          display: none;
      }

      & .companyName {
          font-size: 12px;
          line-height: 14px;
      }

      & .description {
          margin-bottom: 30px;
      }
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

  @media ${device.tabletL} {
        display: block;

        & div:first-child {
            width: 100%;
            margin-right: 0;
      }

  & div:last-child {
      width: 100%;
      border-top: 1px solid #DDDDDD;
      margin-right: 0;
      font-size: 24px;
      line-height: 34px;
      
  }
        
        & div {
        & .viewCase {
          display: none;
      }

      & .companyName {
          font-size: 12px;
          line-height: 14px;
      }

      & .description {
          margin-bottom: 30px;
      }
    }
}
`

const QuoteSection = styled.div`
  border-top: 1px solid #DDDDDD;
  padding: 50px;
  text-align: center;
  
  & .innerDiv {
     width: 85%;
     margin: 0 auto;
  }

  & .quote {
      font-size: 50px;
      line-height: 52px;
      color: #0E0E0E;
  }

  & .author {
      font-family: 'Arial';
      font-style: normal;
      font-weight: 700;
      font-size: 13px;
      line-height: 15px;
      color: #272727;
  }

  @media ${device.tabletL} {
        padding: 0;
        text-align: left;
        border-bottom: 1px solid #DDDDDD;
        padding-bottom: 15px;

        & .innerDiv {
            width: 100%;
            margin: 0;
        }

        & .quote {
            font-size: 24px;
            line-height: 34px;
        }
    }
`


const Content = ({listOfContents, isLoading}) => {
    return (
        <StyledDiv>
            <Filter>
              <div className="industries"><p>in <span>all industries <img src={Polygon} alt="arrow"  height="6px"/></span></p></div>
              <div className="work"><p>Show me <span>all work <img src={Polygon} alt="arrow"  height="6px"/></span></p></div>
            </Filter>

           <ProjectsDiv>
           {listOfContents.slice(0, 4).map((content, index) => (
            <div key={index}>
                <img src={content.image} alt={content.name} width="100%" />
                <p className="companyName">{content.name}</p>
                <p className="description">{content.description}</p>
                <p className="viewCase"><img src={PolygonBlue} alt="arrow"  height="12px"/> VIEW CASE</p>
            </div>
           ))}
           

           </ProjectsDiv>
           <ProjectsDiv2>
                {listOfContents.slice(4, 5).map((content, index) => (
            <div key={index}>
                <img src={content.image} alt={content.name} width="100%" />
                <p className="companyName">{content.name}</p>
                <p className="description">{content.description}</p>
                <p className="viewCase"><img src={PolygonBlue} alt="arrow"  height="12px"/> VIEW CASE</p>
            </div>
           ))}
                <div>
                {listOfContents.slice(5, 7).map((content, index) => (
                    <div className="innerDiv" key={index}>
                     <p className="companyName">{content.name}</p>
                     <p className="description">{content.description}</p>
                     <p className="viewCase"><img src={PolygonBlue} alt="arrow"  height="12px"/> VIEW CASE</p>
                   </div>
           ))}
                </div>
           </ProjectsDiv2>
           <ProjectsDiv>
           {listOfContents.slice(7, 9).map((content, index) => (
            <div key={index}>
                <img src={content.image} alt={content.name} width="100%" />
                <p className="companyName">{content.name}</p>
                <p className="description">{content.description}</p>
                <p className="viewCase"><img src={PolygonBlue} alt="arrow"  height="12px"/> VIEW CASE</p>
            </div>
           ))}
           </ProjectsDiv>

            <ProjectsDiv2 reverse={true}>
                     {listOfContents.slice(4, 5).map((content, index) => (
            <div key={index}>
                <img src={content.image} alt={content.name} width="100%" />
                <p className="companyName">{content.name}</p>
                <p className="description">{content.description}</p>
                <p className="viewCase"><img src={PolygonBlue} alt="arrow"  height="12px"/> VIEW CASE</p>
            </div>
           ))}
                <div>
                {listOfContents.slice(5, 7).map((content, index) => (
                    <div className="innerDiv" key={index}>
                     <p className="companyName">{content.name}</p>
                     <p className="description">{content.description}</p>
                     <p className="viewCase"><img src={PolygonBlue} alt="arrow"  height="12px"/> VIEW CASE</p>
                   </div>
           ))}
                </div>
           </ProjectsDiv2>

           <ProjectsDiv>
                    {listOfContents.slice(9, 13).map((content, index) => (
                    <div key={index}>
                        <img src={content.image} alt={content.name} width="100%" />
                        <p className="companyName">{content.name}</p>
                        <p className="description">{content.description}</p>
                        <p className="viewCase"><img src={PolygonBlue} alt="arrow"  height="12px"/> VIEW CASE</p>
                    </div>
                    ))}
           </ProjectsDiv>

           <QuoteSection>
             <div className="innerDiv">
               <p className="quote">“Dept helped us tell our story through a bold new identity and a robust online experience. To the tone of 60% growth in online bookings in just one month”</p>
               <p className="author">MATTIJS TEN BRINK - CEO, TRANSAVIA</p>
             </div>
           </QuoteSection>

            <ProjectsDiv>
                         {listOfContents.slice(13, 15).map((content, index) => (
                    <div key={index}>
                        <img src={content.image} alt={content.name} width="100%" />
                        <p className="companyName">{content.name}</p>
                        <p className="description">{content.description}</p>
                        <p className="viewCase"><img src={PolygonBlue} alt="arrow"  height="12px"/> VIEW CASE</p>
                    </div>
                    ))}
           </ProjectsDiv>

        </StyledDiv>
    );
}

export default Content;