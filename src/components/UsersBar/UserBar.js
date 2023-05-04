import React, { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { RangeContainer, CurrentValue } from './style';
import UserAddImg from '../../../assets/group_add.png';
import GreenThumb from '../../../assets/Green-thumb.png';
import Slider from '@react-native-community/slider';

export const UserBar = () => {

    const [value, setValue] = useState(2)

    return (
        <RangeContainer>
            <Image
            source={UserAddImg}
            />
            <Slider
                style={{ width: 280 }}
                minimumValue={2}
                maximumValue={20}
                value={2}
                onValueChange={value => setValue(value)}
                step={1}
                minimumTrackTintColor='#fff'
                maximumTrackTintColor='#fff'
                thumbTintColor='#fff'
            />
            <CurrentValue>{value}</CurrentValue>
        </RangeContainer>
    )
}
