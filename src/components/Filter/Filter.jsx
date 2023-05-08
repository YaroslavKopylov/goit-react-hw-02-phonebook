import { Formik } from 'formik';
import { StyledInput, StyledForm, Wrapper } from './Filter.styled';
export const Filter = ({ filter, find }) => {
  return (
    <Wrapper>
      <Formik>
        <StyledForm>
          <StyledInput
            type="text"
            name="filter"
            value={filter}
            onChange={find}
          />
        </StyledForm>
      </Formik>
    </Wrapper>
  );
};
