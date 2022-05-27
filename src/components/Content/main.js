import React, {Fragment} from 'react';
import styled from 'styled-components'
import device from '../../utils/device'

import ListCard from './listCard'


import PolygonBlue from '../../assets/Polygon-blue.png'

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


const Main = ({listOfContents, viewType}) => {
    return (
        <section>
            {viewType === 'list' ? (
                <div style={{ margin: "50px 0"}}>
                   {listOfContents.map((content => <ListCard key={content.name} name={content.name} description={content.description} img={content.image} />))}
                </div>
            ) : (
                <Fragment> 
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

                </Fragment>
            )}
           

        </section>
    );
}

export default Main;