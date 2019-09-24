import React, { useState, useEffect } from 'react';
import StudentsForm from './StudentsForm';
import StudentsList from './StudentsList';
import service from "./Service";
import axios from "axios";
import { StyleSheet, View } from 'react-native';

export default function Students() {

    var [students, setStudents] = useState([]);

    async function getDataTodos(){
        var students;
        try {
            students = await service.getTodos()
        } catch(e) { 
            console.error(e); 
            students = null 
        }
        setStudents(students)
    }
    
    useEffect(() => {
        // fetch('http://localhost:3000/api/students/')
        //     .then(res => res.json())
        //     .then(todos => 
        //             // setTodos(todos)
        //             console.log(todos)
        //         )
        //     .catch(err => console.log(err))

        axios.get('http://192.168.0.9:4000/api/students/')
            .then(response => setStudents(response.data))
            .catch(err => console.log(err))

        getDataTodos();
    },[]);



    async function handleDelete(id){
        // var todos;
        // try {
        //     todos = await service.deleteTodo(id)
        // } catch(e) { 
        //     console.error(e); 
        //     todos = null 
        // }
        // getDataTodos();
        
        // console.log(id)
        
        fetch(`http://192.168.0.9:4000/api/students/${id}`, {
            headers: {"Content-Type": "application/json"},
            method:"DELETE"
        })
        .then(res => res.json())
        .then(students => setStudents(students))
        .catch(err => console.log(err))
        // console.log(id)
        // getDataTodos();
    }

    function onDeleteStudent(id){
        fetch(`http://192.168.0.9:4000/api/students/${id}`, {
            headers: {"Content-Type": "application/json"},
            method:"DELETE"
        })
        .then(res => res.json())
        .then(students => setStudents(students))
        .catch(err => console.log(err))
    }

    function onPostStudent(student){
        fetch(`http://192.168.0.9:4000/api/students/`, {
            headers: {"Content-Type": "application/json"},
            method:"POST",
            body: JSON.stringify(student)
        })
        .then(res => res.json())
        .then(students => setStudents(students))
        .catch(err => console.log(err))
    }

    return (
        <View>
            
            <StudentsForm onPostStudent={onPostStudent}/>
            
            <StudentsList   students={students} 
                            onDeleteStudent={onDeleteStudent}
                            // onUpdateStudent={onUpdateStudent}
                            // onGetStudent={onGetStudent}
                            />
            
        </View>
    );
}

// "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT986Bl7fLtH-2aOFmAhJ-umpoEHlMBHVIn652V95DaqEuyBM4T" muzza
// "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1GYTaq356i6WaBoxyQStWiHRfhQulwv96IPlXB2HVWauRlbFnFg" napo
// "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3DTzzhoML3iNZa_g5WVpymyPt6Ph1wSEYiIzW62KP2pv6KVQR" jamon
//  "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWF6aCvblz5LqFii_Uf2_ToGiq2JTm55A2jLIXQTcNCoNsxAVqCg" cebolla
//  "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCV4FaIU6_9MY8j1JTfz7O6Zq2PnbT2wvtH-9EfzbR8HNx2ERjAA" rucula