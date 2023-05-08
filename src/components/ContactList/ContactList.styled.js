import styled from 'styled-components';
export const Button = styled.button`
  border: 1px solid #e6e6fa;
  background-color: #fff0f5;
  border-radius: 4px;
  padding: 4px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 22px;
`;

export const ContactsText = styled.p`
  padding-bottom: 10px;
  :last-child {
    padding-bottom: 0;
  }
`;

export const ContactSpan = styled.p`
  margin-right: 40px;

  display: inline-block;
`;
