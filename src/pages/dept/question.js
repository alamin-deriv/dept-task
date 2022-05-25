import React from 'react';
import styled from 'styled-components'
import { createForm } from "rc-form";

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
     }
 }
`



const Question = ({form}) => {
    const { getFieldProps, getFieldError, validateFields, } = form;

    const submit = () => {
         validateFields((err, values) => {
             if (!err) {
                console.log(values);
             }
         })
     }

     let errors
    return (
        <StyledDiv>
            <div className="questionWords">
             <p>QUESTION? WE ARE HERE TO HELP!</p>
            </div>
            <div className="form">
            <div className="innderDiv">
                <Input 
                    type="text" 
                    label="NAME"
                    required
                    name="name"
                    error={
                        (errors = getFieldError('name')
                            ? 'This field is required'
                            : null)
                            }
                            {...getFieldProps('name', {
                                rules: [{ required: true }],
                     })}
                />
                <Input 
                  type="email" 
                  label="EMAIL"
                  required
                  name="email"
                  value="email"
                 error={
                            (errors = getFieldError("email")
                                        ? "This field is required"
                            : null)
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
            

            </div>
        </StyledDiv>
    );
}

export default createForm()(Question)