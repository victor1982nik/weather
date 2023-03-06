import styled from '@emotion/styled';

export const Ul = styled.ul`
  width:100%;
  display:flex;
  flex-direction:column;
  justify-content: center;  
  margin-left:auto;
  margin-right:auto;  
`;

export const Container = styled.div`
  margin-left:auto;
  margin-right:auto;
  padding:15px;
  padding-bottom:30px;
`;

export const Item = styled.li`
  display:flex;
  justify-content: center;
  align-items: center;
  gap:10px;
  padding: 15px;
  border: 1px solid grey;
  border-radius: 4px;
  font-weight: 500;
  :hover {
    background-color: lightgrey;
  }
  `;