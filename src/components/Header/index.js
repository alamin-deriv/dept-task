import React, {useState} from 'react'
import styled from 'styled-components';
import LogoBlack from '../../assets/logoBlack.png';
import LogoWhite from '../../assets/logoWhite.svg';
import MenuBar from '../../assets/menuBar.svg';

import device from './../../utils/device'

import {SideSheet, SheetContainer} from '../Menu'



const HeaderContainer = styled.div`
    height: 100px;
    border-bottom: 1px solid black;
    box-sizing: border-box;
    z-index: 4;
    align-items: center;
    padding-top: 30px;

    & .menu {
        float: right;
        display: flex;
        margin-top: -12px;
        cursor: pointer;
        & h2 {
            margin-right: 15px;
        }
    }

    & .logo {
        width:139.27px
    }

    @media ${device.tabletL} {
        padding: 20px 15px;
        border-bottom: none;

        & .logo {
            width: 52.82px;
            height: 15px;
    }

     & .menu {
        margin-top: -25px;
    }
    }

`

export const Header = () => {
    const [basic, setBasic] = useState(false)
    return (
        <>
        <SideSheet width="100vw" open={basic} onClose={() => setBasic(false)}>
            <SheetContainer>
                <div>
                    <img src={LogoWhite} alt="Logo" className="logo" height="38px"/>
                </div>
                <ul>
                    <li>
                        <span>Home</span>
                    </li>
                    <li>
                        <span>Work</span>
                    </li>
                    <li>
                        <span>Culture</span>
                    </li>
                    <li>
                        <span>Services</span>
                    </li>
                    <li>
                        <span>Partners</span>
                    </li>
                    <li>
                        <span>Stories</span>
                    </li>
                    <li>
                        <span>Careers</span>
                    </li>
                    <li>
                        <span>Events</span>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                </ul>
            </SheetContainer>
        </SideSheet>
        <HeaderContainer>
           <img src={LogoBlack} alt="Logo" className="logo" />
           <div className="menu" onClick={() => setBasic(!basic)}>
            <h2 >MENU</h2>
            <img src={MenuBar} alt="menu"  />
           </div>
        </HeaderContainer>
        </>
    )
}
