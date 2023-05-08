import styled from 'styled-components';
import { Field, Form } from 'formik';

export const StyledInput = styled(Field)`
  padding: 4px;
  margin-bottom: 12px;
  border-radius: 4px;
  border: 1px solid black;
  :focus {
    border: 1px solid blue;
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
