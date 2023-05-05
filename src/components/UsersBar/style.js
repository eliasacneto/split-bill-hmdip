import styled from 'styled-components';

export const RangeContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-top: 25px;
    width: 85%;
    height: 40px;
    background-color:  #00BA40;
    padding: 0 10px;
`;

export const CurrentValue = styled.Text`
    font-size: 17px;
    font-weight: bold;
    color: white;
`;
