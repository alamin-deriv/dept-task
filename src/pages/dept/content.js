/* eslint-disable no-restricted-globals */
import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import {Filter} from './../../components/';
import Main from './../../components/Content/main';
import FilteredContent from './../../components/Content/filteredContent';
import device from './../../utils/device'
import PolygonBlue from './../../assets/Polygon-blue.png'
import qs from 'query-string';



const StyledDiv = styled.div`
  padding: 30px 50px 50px 50px;

  @media ${device.tabletL} {
        padding: 30px 20px 50px 20px;
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




const Content = ({listOfContents}) => {
    const [category, setCategory] = useState('all work')
    const [industry, setIndustry] = useState('all industries')

    const [contents, setContents] = useState(listOfContents)

     const [viewType, setViewType] = useState('grid');


    useEffect(() => {
       const {category, industry} = qs.parse(location.hash.substring(1))

       if (category) {
           const filteredData = listOfContents.filter(content => content.category === category)

           setContents(filteredData)
           setCategory(category)
        }
        
       if (industry) {
           const filteredData = listOfContents.filter(content => content.industry === industry)

           setContents(filteredData)
           setIndustry(industry)
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const filterindustry = (industry) => { 
        if (industry === "all industries" && category !== "all work") {
            filterCategory(category)
        } else {
            const filteredData = listOfContents.filter(content => content.industry === industry)

        setContents(filteredData)
        }
        

    }

    const filterCategory = (category) => {

        if (category === "all work" && industry !== "all industries") {
            filterindustry(industry)
        } else {
            const filteredData = listOfContents.filter(content => content.category === category)

        setContents(filteredData)
        }

        

    }

    const filterProps = {
        category,
        setCategory,
        industry,
        setIndustry,
        filterindustry,
        filterCategory,
        viewType,
        setViewType
    }

    return (
        <StyledDiv data-testid="content-div">
            <Filter {...filterProps}/>
            {category === 'all work' && industry === 'all industries' ? <Main listOfContents={listOfContents} viewType={viewType} /> : <FilteredContent listOfContents={contents} viewType={viewType} />}

            <QuoteSection data-testid="quote-section">
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