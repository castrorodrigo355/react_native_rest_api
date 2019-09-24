import React from 'react'
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';

function StudentsList(props) {

    const handleDelete = id => {
        props.onDeleteStudent(id)
    }

    return (
        <FlatList   data={props.students}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item, index}) => {
                    return(
                        <View style={{margin: 10, padding: 5, backgroundColor: "beige"}}>
                            <Text>{item.name}</Text>
                            <Text>{item.age}</Text>
                            <Button onPress={() => handleDelete(item._id)} title="Delete"/>
                        </View>
                        )
                    }
                }
        />
    )
}

export default StudentsList
