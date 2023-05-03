import styled from 'styled-components';

export const GreenCard = styled.View`
    background-color: #00BA40;
    width: 95%;
    height: 20%;
    margin-top: 25px;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const BillInfo = styled.Text`
    font-size: 16px;
    color: #fff;
    margin-top: 10px;
`;

export const TextTotal = styled.Text`
    font-size: 22px;
    text-transform: uppercase;
    color: #FFF;
    font-weight: 700;
    text-align: center;
`;

export const TextInput = styled.Text`
    font-size: 24px;
    color: #FFF;
    margin-left: 10px;
    margin-top: 10px;
    font-weight: 700;
    `;

export const Info = styled.View`
    display: flex;
    flex-direction: row;
    gap: 6px;
    margin-right: 20px;
`;

export const Total = styled.View`
    display: flex;
    margin-left: 10px;
`;