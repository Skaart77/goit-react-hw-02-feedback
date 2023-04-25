import styled from '@emotion/styled';

export const ListButton = styled.ul`
  display: flex;
  gap: 15px;
  list-style: none;
  justify-content: center;
`;

export const Button = styled.button`
  background-color: #4caf50;
  border-radius: 8px;
  border: none;
  color: white;
  padding: 10px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  &:hover,
  :focus {
    background-color: #3e8e41;
  }
`;
