import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Restart from "./Restart";
import Increment from "./Increment";
import Decrement from "./Decrement";
import Duplicate from "./Duplicate";

export default function Index() {

  const[counter, setCounter] = useState(0)
  const onRestart = () => { setCounter(0) }
  const onIncrement = () => { setCounter(counter + 1) }
  const onDecrement = () => { setCounter(counter - 1) }
  const onDuplicate = () => { setCounter(counter * 2) }

  return (
    <View style={{padding: 25}}
    // style={styles.container}
    >        
        <View>
          <Restart onRestart={onRestart}/>
          <Increment onIncrement={onIncrement}/>
          <Decrement onDecrement={onDecrement}/>
          <Duplicate onDuplicate={onDuplicate}/>
          <Text>{counter}</Text> 
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
