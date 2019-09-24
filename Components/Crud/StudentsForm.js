import React, { useState } from 'react';
import { StyleSheet, View, Button, TextInput } from 'react-native';

export default function StudentsForm(props) {

    const [student, setStudent] = useState({name: '', age: ''})

    const changeName = (name) => {
        setStudent({...student, name})
        console.log(student)
    }

    const changeAge = (age) => {
        setStudent({...student, age})
        console.log(student)
    }

    const postStudent = () => {
        props.onPostStudent(student)
        setStudent({ name: '', age: '' });
    }

    return (
        <View style={styles.containerView}>
            <TextInput  placeholder="Enter name..."
                        style={styles.containerInput}
                        value={student.name}
                        onChangeText={changeName}/>
            <TextInput  placeholder="Enter age..."
                        style={styles.containerInput}
                        value={student.age}
                        onChangeText={changeAge}/>
            <Button onPress={postStudent}
                    title="Add Student"/>
        </View>
    )
}

const styles = StyleSheet.create({
    containerInput: {
        backgroundColor:"white", 
        color:"black", 
        borderColor: "black",
        borderWidth: 2,
        padding:10
    },
    containerView: {
        backgroundColor:"beige"
    }
  });