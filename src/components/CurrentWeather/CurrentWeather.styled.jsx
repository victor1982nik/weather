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
  padding: 15px;
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

export const Card = styled.div`
margin: 30px auto 30px auto;
padding: 10px 20px 20px 20px;
width: 300px;
border-radius:6px;
box-shadow: 8px -2px 16px 2px rgb(0 0 0 / 0.2);
color: #fff;
background-color: #333;
`;

export const BoxTop = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;

export const BoxCity = styled.p`
font-size:24px;
font-weight: 600;
letter-spacing: 0.5px;
`;

export const BoxWeatherDescr = styled.p`
font-size:16px;
font-weight: 400;
letter-spacing: 0.5px;
`;

export const Img = styled.img`
width: 60px;
`;

export const BoxBottom = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;

export const BoxTemperature = styled.p`
font-size:54px;
font-weight: 700;
margin-left: 4px;
letter-spacing: -1px;
`;

export const BoxWeatherDetails = styled.div`
width: 50%;
padding: 10px
`;

export const BoxRow = styled.div`
display: flex;
`;