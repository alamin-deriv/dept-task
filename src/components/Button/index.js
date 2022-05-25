import styled from 'styled-components'
import device from './../../utils/device'

const StyledDiv = styled.div`
  width: 154px;
  background: #1A18F7;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  & p {
    font-family: 'Arial';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 17px;
    color: #FFFFFF;
    
  }

   @media ${device.tabletL} {
      width: 130px;
      padding: 5px;

    }

`

export const Button = ({submit}) => {

  return (
    <StyledDiv onClick={submit}>
    <p>SEND</p>
    </StyledDiv>
  );
};