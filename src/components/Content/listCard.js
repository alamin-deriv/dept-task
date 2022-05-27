import React from 'react';
import styled from 'styled-components'
import PolygonBlue from '../../assets/Polygon-blue.png'

const StyledCard = styled("div")`
    text-decoration: none;
    position: relative;
    height: ${(props) => (props.height ? props.height : 'auto')};
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    overflow: hidden;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid #DDDDDD;

     & .companyName {
          font-family: 'Arial';
          font-style: normal;
          font-weight: 700;
          font-size: 15px;
          line-height: 17px;
          color: #939393;
          margin-top: 5px;
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

`

const ImageWrapper = styled.div`
    height: 100%;
    width: 200px;
`

const StyledContent = styled.div`
    padding: 16px;
    width: 100%;
`

const ListCard = ({img, name, description}) => {
    return (
    <StyledCard>
        <ImageWrapper>
            <img src={img} height="144px" width="100%" alt={img} />
        </ImageWrapper>
        <StyledContent>
            <p className="companyName">{name}</p>
            <p className="description">{description}</p>
            <p className="viewCase"><img src={PolygonBlue} alt="arrow"  height="12px"/> VIEW CASE</p>
        </StyledContent>
    </StyledCard>
    );
}

export default ListCard;