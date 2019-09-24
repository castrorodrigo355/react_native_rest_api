import React from 'react';
import { StyleSheet, View } from 'react-native';
import Counter from './Components/Counter/Index';
import Students from './Components/Crud/Students';

export default function App() {

  return (
    <View style={styles.container}>
      {/* <Counter/> */}
      <Students/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: "black",
    backgroundColor: 'tomato',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 23
  },
});