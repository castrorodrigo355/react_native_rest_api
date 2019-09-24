import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Decrement(props) {

    const decrement = () => {
        props.onDecrement()
    }

    return (
        <View>
            <Button onPress={decrement} title="Decrement"/>
        </View>
    );
}