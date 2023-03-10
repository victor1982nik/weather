import styled from '@emotion/styled';

export const Title = styled.div`
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 10px;
`;
export const BoxTitle = styled.div`
    display: flex;    
    align-items: center;
    border-radius:18px;
    padding: 3px 20px;
    margin: 5px;
    background-color: #e4e4a1;
    cursor:pointer;
`;

export const BoxWeekDay = styled.span`
    margin-left: 15px;
    text-align:left;
    color: grey;
    font-weight: 500;    
`;

export const BoxDescription = styled.span`
margin-left:auto;
margin-right: 10px;
`;

export const BoxTemperature = styled.span`
color: #757575
`;

export const List = styled.ul`
display: flex;
flex-direction: column;
align-items: center;
`;

export const ListItem = styled.li`
display: flex;
justify-content: space-between;
width: 300px;
:nth-child(-n + 4)  label{
    color:green;
}
`;
