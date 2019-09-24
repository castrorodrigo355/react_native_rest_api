import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Restart(props) {

  const Restart = () => {
    props.onRestart()
  }

  return (
      <View>
          <Button onPress={Restart} title="Restart"/>
      </View>
  );

}