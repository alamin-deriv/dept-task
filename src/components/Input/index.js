import React, {forwardRef} from 'react';
import styled from 'styled-components'

const InputContainer = styled.div`
    border-radius: ${(props) => props.round ? `${props.height / 2}px` : '5px'};
    position: relative;
    width: 100%;

    & .input-wrapper {
      position: relative;

      & .input {
        width: 100%;
        height: ${props=> props.height}px;
        line-height: 150%;
        border: none ;
        border-bottom: 1px solid #DDDDDD;
        outline: none;
        font-family: 'montserrat', sans-serif;


        &:focus {
          border-color: #0E0E0E
        }

        &:disabled {
          border: 1px dashed #d1d1d1;
          background-color: lighten(0.3, '#d1d1d1');
        }

      
      }
      
      & .label {
          font-family: 'Arial';
          font-style: normal;
          font-weight: 700;
          font-size: 15px;
          line-height: 17px;
          color: #000000;
      }
    }

    & .error {

    display: block;
    margin-top: 4px;
    font-family: 'Arial';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 15px;
/* identical to box height */


color: #FF2929;
  }
`

export const Input = forwardRef((props,ref) => {
   const {label, name, error, ...rest} = props
    return (
        <InputContainer {...props}>
          <div className="input-wrapper">
            <p className="label">{label}</p>
            <input ref={ref} name={name} className="input" {...rest}/>
            {error && <span className="error">{error}</span>}
          </div>
        </InputContainer>
    )
}
)

export const TextArea = forwardRef((props,ref) => {
   const {label, name, error, ...rest} = props
    return (
        <InputContainer {...props}>
          <div className="input-wrapper">
            <p className="label">{label}</p>
            <textarea ref={ref}  name={name} className="input" {...rest}/>
            {error && <span className="error">{error}</span>}
          </div>
        </InputContainer>
    )
}
)
   

