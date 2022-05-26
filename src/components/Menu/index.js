import React, {useEffect} from 'react'
import styled, {css} from 'styled-components'
import PropTypes from 'prop-types'
import {transparentize, darken} from 'polished'

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

        & li {
            color: #fff;
            border-bottom: 1px solid #fff;
            line-height: 86px;
            margin-top: 11px;

            & span {
                text-transform: uppercase;
                font-size: 60px;
                font-weight: 400;
            }
        }
    }
    
    ${props => props.open && css`
        transform: translateX(0);
    `}

    /* ${props => props.left && css`
      top: 0;
      left: 0;
      box-shadow: -20px 0px 20px rgba(0,0,0,0.5); 
      transform: translateX(-100%);

      ${props => props.open && css`
        transform: translateX(0);
      `}

    `}

    ${props => props.bottom && css`
      bottom: 0;
      top: auto;
      width: 100vw;
      height: auto;
      min-height: ${(props) => props.height};
      position: fixed;
      box-shadow: 0 3px 20px rgba(0,0,0,0.5);
      transform: translateY(100%);

      ${props => props.open && css`
        transform: translateY(0);
      `}

    `}

    ${props => props.top && css`
      bottom: auto;
      top: 0;
      width: 100vw;
      height: auto;
      min-height: ${(props) => props.height};
      position: fixed;
      box-shadow: 0 -3px 20px rgba(0,0,0,0.5);
      transform: translateY(-100%);

      ${props => props.open && css`
        transform: translateY(0);
      `}

    `} */
    
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

    /* ${props => props.left && css`
        top: 26px;
        right: -50px;
        left: auto;
    `}

    ${props => props.bottom && css`
        top: -50px;
        right: 26px;
        left: auto;
    `}

    ${props => props.top && css`
        bottom: -50px;
        right: 26px;
        left: auto;
        top: auto;
    `} */
  `;

export const SheetContainer = styled("div")`
    margin: 2% auto;
    width: 95%;
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
            {/* {props.open ? <SheetClose onClick={props.onClose}> &times; </SheetClose> : null} */}
            <SheetBody open={props.open} bottom={props.bottom} top={props.top} left={props.left} width={props.width} height={props.height} >
                {props.open ? (
                    <>
                    {props.closeBtn ? 
                        <SheetClose onClick={props.onClose} bottom={props.bottom} top={props.top} left={props.left}> <span style={{ marginTop: '5px', fontSize: '30px'  }}>&times;</span> </SheetClose> : null
                    }
                    </>
                ) : null}
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
  