import { nanoid } from 'nanoid';
import { Formik, ErrorMessage } from 'formik';
import {
  StyledForm,
  StyledInput,
  Button,
  FormLabel,
} from './ContactForm.styled';
import * as Yup from 'yup';

const ContactsSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').required('Required'),
  number: Yup.number().min(2, 'Too Short!').required('Required'),
});
export const ContactForm = ({ onAdd }) => {
  return (
    <Formik
      initialValues={{
        contacts: [],
        name: '',
        number: '',
      }}
      validationSchema={ContactsSchema}
      onSubmit={(values, actions) => {
        onAdd({ ...values, id: nanoid() });
        actions.resetForm();
      }}
    >
      <StyledForm>
        <FormLabel> Name</FormLabel>
        <StyledInput name="name" type="text" />
        <ErrorMessage name="name" />
        <FormLabel> Number</FormLabel>
        <StyledInput name="number" type="tel" />
        <ErrorMessage name="number" />
        <Button type="submit">Submit</Button>
      </StyledForm>
    </Formik>
  );
};
