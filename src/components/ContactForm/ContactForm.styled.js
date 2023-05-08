import styled from 'styled-components';
import { Field, Form } from 'formik';
export const StyledForm = styled(Form)`
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  align-items: center;
`;
export const Button = styled.button`
  border: 1px solid #e6e6fa;
  background-color: #fff0f5;
  border-radius: 4px;
  padding: 4px;
`;

export const FormLabel = styled.button`
  margin-bottom: 10px;
`;

export const StyledInput = styled(Field)`
  margin-bottom: 12px;
  padding: 4px;
  border-radius: 4px;
  border: 1px solid black;
  :focus {
    border: 1px solid blue;
  }
`;
