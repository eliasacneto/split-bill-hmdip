import React from "react";
import { GreenCard, BillInfo, TextTotal, TextInput, Info, Total, DetailContainer } from "./style";
import { View } from "react-native";

export const SummaryMenu = () => {
    return (
        <GreenCard>

            <Total>
                <TextTotal>Total</TextTotal>
                <TextInput>R$160,00</TextInput>
            </Total>

            <DetailContainer>
                <Info>
                    <BillInfo>Comanda:</BillInfo>
                    <BillInfo>R$160,00</BillInfo>
                </Info>

                <Info>
                    <BillInfo>Taxa(10%):</BillInfo>
                    <BillInfo>R$16,00</BillInfo>
                </Info>

                <Info>
                    <BillInfo>Pessoas:</BillInfo>
                    <BillInfo>7</BillInfo>
                </Info>
            </DetailContainer>
            
        </GreenCard>
    )
}