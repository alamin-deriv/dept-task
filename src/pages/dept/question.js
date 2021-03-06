import React, {useState} from 'react';
import styled from 'styled-components'
import { createForm } from "rc-form";
import device from './../../utils/device'

import {Input, TextArea, Button} from './../../components/';


const StyledDiv = styled.div`
 padding: 100px 100px 100px 50px;
 display: flex;
 gap: 0 50px;
 
 & .questionWords {
     width: 18%;

     & p {
        font-weight: 400;
        font-size: 60px;
        line-height: 86px;
        margin-top: 0;
     }
     

/* Black */

color: #0E0E0E;
 }
 & .form {
     width: 82%;
     

     & .innderDiv {
         width: 100%;
         display: flex;
         gap: 40px;
         margin-bottom: 30px;

         & .visibility {
             visibility: hidden;
             width: 100%;
         }
         & br {
                display: none;
         }
     }
 }

 @media ${device.tabletL} {
        padding: 50px;
        display: block;

        & .questionWords {
            width: 100%;

            & p {
                font-size: 30px;
                line-height: 43px;
            }
        }

         & .form {
     width: 100%;
     

     & .innderDiv {
         width: 100%;
         display: block;
         margin-bottom: 30px;

         & .visibility {
             display: none;
         }

         & br {
             display: block;
         }
     }
 }
    }

    & .success {
        font-weight: 400;
        font-size: 36px;
        line-height: 52px;
        color: 	#198754;
        margin-bottom: 0;
    }
`



const Question = ({form}) => {
    const { getFieldProps, getFieldError, validateFields, } = form;

    const [success, setSuccess] = useState(false)

    const submit = () => {
         validateFields((err, values) => {
             if (!err) {
                setSuccess(true);
             }
         })
     }

     let errors
    return (
        <StyledDiv data-testid="question-section">
            <div className="questionWords">
             <p>QUESTION? WE ARE HERE TO HELP!</p>
            </div>
            <div className="form" data-testid="form">
            <div className="innderDiv" >
                <Input 
                    type="text" 
                    label="NAME"
                    required
                    name="name"
                    data-testid="name-input"
                    error={
                        (errors = getFieldError('name')
                            ? 'This field is required'
                            : null)
                            }
                            {...getFieldProps('name', {
                                rules: [{ required: true }],
                     })}
                />
                <br />
                <Input 
                  type="email" 
                  label="EMAIL"
                  required
                  name="email"
                  data-testid="email-input"
                 error={
                            (errors = getFieldError("email"))
                            }
                            {...getFieldProps(`email`, {
                            rules: [{ required: true, type: 'email' }],
                        })}
                />
            </div>
            <div className="innderDiv">
                <TextArea 
                    rows="3" 
                    label="MESSAGE"
                    required
                    name="message"
                    data-testid="message-input"
                    error={
                        // eslint-disable-next-line
                        (errors = getFieldError('message')
                            ? 'This field is required'
                            : null)
                            }
                            {...getFieldProps('message', {
                                rules: [{ required: true }],
                     })}
                />
                <div className="visibility"/>
            </div>
            <Button submit={submit}/>
            {success ? <p className="success">Message sent successfully</p> : null}
            </div>
        </StyledDiv>
    );
}

export default createForm()(Question)