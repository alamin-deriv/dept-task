import styled from 'styled-components';
import LogoBlack from '../../assets/logoBlack.png';
import MenuBar from '../../assets/menuBar.svg';



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

`

export const Header = () => {
    return (
        <HeaderContainer>
           <img src={LogoBlack} alt="Logo"  width="139.27px"/>
           <div className="menu">
           <h2 >MENU</h2>
           <img src={MenuBar} alt="menu"  />
           </div>
        </HeaderContainer>
    )
}
