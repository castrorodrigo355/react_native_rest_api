// const todosURL = 'https://jsonplaceholder.typicode.com/todos';
// const todosURL = 'https://pizzaquick.herokuapp.com/pizzas/';
const todosURL = 'http://192.168.0.9:4000/api/students/';

export default {
    getTodos,
    deleteTodo,
    post
}

async function getTodos() {
    const request = await fetch(`${todosURL}`);
    const data = (await request.json())
    return data;
}

async function deleteTodo(id) {
    // const request = await fetch(`${todosURL}id`);
    // const data = await request.json();
    // return data;
    const response = await fetch(`${todosURL}/${id}`, {
        headers: {
            "Content-Type": "application/json"
        },
        method:"DELETE"
    })
    const data = await response.json();
    return data
}

async function post(student){
    const response = await fetch(`${todosURL}`, {
        method:"POST",
        body: student
    });
    const data = await response.json();
    return data
}