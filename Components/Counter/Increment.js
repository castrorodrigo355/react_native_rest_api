import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Increment(props) {

    const increment = () => {
        props.onIncrement()
    }

    return (
        <View>
            <Button onPress={increment} title="Increment"/>
        </View>
    );
}