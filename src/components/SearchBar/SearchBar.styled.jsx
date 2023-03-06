import styled from '@emotion/styled';

export const Button = styled.button`
  width: 100%;
  border: 0px;
  background-color: lightgrey;
  cursor:pointer;
  text-align:left;
  padding:1px 2px;
  line-height: 20px;
`;

export const Form = styled.form`


// position:relative
`;

export const SubmitButton = styled.button`
position: relative;
top: 1px;
right: 27px; 
border:0;
padding-top: 2px;
`;

export const Container = styled.div`
margin-left:auto;
margin-right:auto;
padding:15px;
padding-bottom:30px;
background-color:blue;
`;

export const Input = styled.input`
  border-radius: 3px;
  border:0;
  :focus{
    background-color: lightblue;
  }
`;