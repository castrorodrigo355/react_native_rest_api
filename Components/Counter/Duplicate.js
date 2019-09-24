import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Duplicate(props) {
  
  const duplicate = () => {
    props.onDuplicate()
  }

  return (
      <View>
          <Button onPress={duplicate} title="Duplicate"/>
      </View>
  );
}