import React from 'react';
import styled from 'styled-components'
import device from '../../utils/device'


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




const FilteredContent = ({listOfContents, isLoading}) => {
    return (
        <section>
            
           <ProjectsDiv>
           {listOfContents.map((content, index) => (
            <div key={index}>
                <img src={content.image} alt={content.name} width="100%" />
                <p className="companyName">{content.name}</p>
                <p className="description">{content.description}</p>
                <p className="viewCase"><img src={PolygonBlue} alt="arrow"  height="12px"/> VIEW CASE</p>
            </div>
           ))}
           </ProjectsDiv>
        </section>
    );
}

export default FilteredContent;