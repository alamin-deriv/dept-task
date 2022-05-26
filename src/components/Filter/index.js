import React, {useState} from 'react';

import styled from 'styled-components';
import {getPath, findIndexInArray} from './../../utils/utils';


import Polygon from '../../assets/polygon.png'

import device from './../../utils/device'

const FilterDiv = styled.div`
  display: flex;
  justify-content: right;

  font-weight: 400;
  font-size: 30px;

  color: #A3A3A3;

  & .industries {
      margin-right: 10px;

    &  .dropdown-content {
        display: block;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
        padding-left: 10px;
        cursor: pointer;

        & p:hover {background-color: #f1f1f1}
    }

  }

  & .work {
      &  .dropdown-content {
        display: block;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
        padding-left: 10px;
        cursor: pointer;

        & p:hover {background-color: #f1f1f1}
    }
  }
 
  & p {
      margin-top:0;
      margin-bottom:0;
  }
  & span {
      color: #0E0E0E;
      border-bottom: 1px solid #0E0E0E;
      cursor: pointer;
  }

  & img {
       margin-bottom: 5px;
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

const industries = ['all industries', 'financial', 'e-commerce', 'technology', 'electronic', 'agriculture','travelling', 'art']
const categories = ['all work', 'shopping', 'entertainment', 'food', 'health', 'banking']

export const Filter = ({category, setCategory, industry, setIndustry, filterindustry, filterCategory}) => {
    
    const [showCategories, setShowCategories] = useState(false)

    const [showIndustry, SetShowIndustry] = useState(false)

    const [reload, setReload] = useState(false)
    const [params, setParams] = useState([])

    const handleIndustryFilter = () => {
        SetShowIndustry(!showIndustry)
        setShowCategories(false)
    }

    const handleCategoryFilter = () => {
        setShowCategories(!showCategories)
        SetShowIndustry(false)
    }

    const handleSetIndustry = (industry) => {
        setIndustry(industry)
        setReload(!reload)
        SetShowIndustry(false)
        filterindustry(industry)


    
          const index = findIndexInArray(params, 'industry');

           if (index !== -1) {
             params.splice(index, 1, {industry});
             getPath([{category},...params])
             setParams(params)
           } else {
             getPath([...params, {industry}])
             setParams([{industry}])
           }
    }

    const handleSetCategory = (category) => {
        setCategory(category)
        setReload(!reload)
        setShowCategories(false)
        filterCategory(category)

        

        const index = findIndexInArray(params, 'category');

        if (index !== -1) {
             params.splice(index, 1, {category});
             getPath([{industry},...params])
             setParams(params)
           } else {
             getPath([...params, {category}])
             setParams([{category}])
             
           }
    }
    return (
        <FilterDiv>
              <div className="industries"><p>in <span onClick={handleIndustryFilter}>{industry} <img src={Polygon} alt="arrow"  height="6px"/></span></p>
              {showIndustry && (
                <div className="dropdown-content">
                {industries.map((industry) => <p key={industry} onClick={() => handleSetIndustry(industry)}>{industry}</p>)}
              </div>
              )}
              </div>
              <div className="work"><p>Show me <span onClick={handleCategoryFilter}>{category} <img src={Polygon} alt="arrow"  height="6px"/></span></p>
              {showCategories && (
                <div className="dropdown-content">
                {categories.map((category) => <p key={category} onClick={() => handleSetCategory(category)}>{category}</p>)}
              </div>
              )}
              </div>
            </FilterDiv>
    )
}