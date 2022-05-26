import styled from 'styled-components';
import LogoBlack from '../../assets/logoBlack.png';
import MenuBar from '../../assets/menuBar.svg';

import device from './../../utils/device'



const HeaderContainer = styled.div`
    width: 90%;
    margin: 0 auto;
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
    return (
        <HeaderContainer>
           <img src={LogoBlack} alt="Logo" className="logo" />
           <div className="menu">
           <h2 >MENU</h2>
           <img src={MenuBar} alt="menu"  />
           </div>
        </HeaderContainer>
    )
}
