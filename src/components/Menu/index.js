import React, {useEffect} from 'react'
import styled, {css} from 'styled-components'
import PropTypes from 'prop-types'
import {transparentize, darken} from 'polished'

import device from './../../utils/device'


const SheetBody = styled("div").attrs({ className: "flexi-sheet-body" })`
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: ${(props) => props.width};
    background-color: #0C0C0C;
    z-index: 1000;
    box-shadow: 20px 0px 20px rgba(0,0,0,0.5); 
    transform: translateX(100%);
    transition: transform 0.3s ease-out;
    overflow: auto;

    & ul {
        list-style: none;
        text-align: right;
        width: auto;
        margin-left: -40px;
        margin-top: 100px;

        & li {
            color: #fff;
            border-bottom: 1px solid #A3A3A3;
            font-size: 60px;
            line-height: 86px;
            margin-top: 11px;
            

            & span {
                text-transform: uppercase;
                font-size: 60px;
                font-weight: 400;
            }

            & .countries {
              z-index: 1;
              background-color: #0C0C0C;
              width: 10%;
              margin-top: -35px;
              font-family: 'Arial';
              font-style: normal;
              font-weight: 700;
              font-size: 12px;
              line-height: 14px;
              float: left;
              text-align: left;

              & p:first-child {
                color: rgba(255, 255, 255, 0.5);
              }

              & p {
                margin-top: 6px;
                margin-bottom: 6px;
              }
            }

            & .social {
              font-family: 'Arial';
              font-style: normal;
              font-weight: 700;
              font-size: 12px;
              line-height: 14px;
              float: left;
              text-align: left;

              & p {
                margin-top: 6px;
                margin-bottom: 6px;
              }
            }
        }
    }
    
    ${props => props.open && css`
        transform: translateX(0);
    `}

    @media ${device.tabletL} {
        padding: 20px 10px;
        
        & ul {
          margin-left: -25px;
          margin-top: 50px;

          & li {
            

            & p {
              font-weight: 400;
              font-size: 50px;
              line-height: 72px;
        }
          }
        }

        & .countries {
          display: none;
        }

        & .social {
          display: none;
        }
        
        


    }
   
`
const SheetOverlay = styled("div")`
    top: 0;
    right: 0;
    position: fixed;
    width: 100%;
    height: 100%;
    opacity: ${(props) => props.overlayOpacity};
    background-color: ${(props) => props.overlayColor};
    z-index: 999;
`

export const SheetClose = styled("div")`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    height: 30px;
    width: 30px;
    top: 26px;
    right: 50px;
    font-weight: 600;
    transition: all 0.3s ease-out;
    cursor: pointer;
    color: ${transparentize(0.6, '#454545')};
    z-index: 1000;
    background-color: #fff;
    border-radius: 50%;
  
    &:hover {
      color: ${darken(0.4, '#454545')};
    }

  `;

export const SheetContainer = styled("div")`
    margin: 2% auto;
    width: 95%;

    & .logo {
      height: 38px;
    }

    & .cancel {
      float: right;
      margin-top: 10px;
      cursor: pointer;
      height: 16.74px;
    }

    & .polygon {
      margin-right: 20px;
      margin-bottom: 7px;
    }

    & .polygon2 {
      margin-right: 10px;
      margin-top: 4px;
    }

    @media ${device.tabletL} {
        & .logo {
          height: 15px;
          margin-left: 10px;
        }

        & .cancel {
          margin-top: 5px;
        }


    }
`

export const SideSheet = props => {
    useEffect (() => {
        if (props.open === true ) {
          document.querySelector('body').style.overflow = 'hidden'
        } else {
          document.querySelector('body').style.overflow = 'auto'
        }
      })
    return (
        <div {...props}>
            {props.open ? <SheetOverlay
                onClick={props.onClose}
                overlayColor={props.overlayColor}
                overlayOpacity={props.overlayOpacity}
            /> : null}
            <SheetBody open={props.open} bottom={props.bottom} top={props.top} left={props.left} width={props.width} height={props.height} >
                {props.children}
            </SheetBody>
        </div>
    )
}

SideSheet.defaultProps = {
    overlayColor: "#000",
    overlayOpacity: 0.4,
    open: false,
    bottom: false,
    left: false,
    width: "40vw",
    height: "30vh",
    closeBtn: true,
    // auto: false,
};
  
SideSheet.propTypes = {
    overlayColor: PropTypes.string,
    overlayOpacity: PropTypes.number,
    open: PropTypes.bool,
    onClose: PropTypes.any,
    bottom: PropTypes.bool,
    left: PropTypes.bool,
    width: PropTypes.string,
    height: PropTypes.string,
    closeBtn: PropTypes.bool,
    // auto: PropTypes.bool,
};
  