
import React from "react";
import axios from "axios";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

async function getAllTodos() {
    try{
        const response = await fetch('http://localhost:3000/api/todo', {
            cache: 'no-store'
        })
        console.log('todos successfully retrived from database', response.data)
        return response.json()
    } catch(err) {
        throw new Error('Error getting todos')
    }
}



export default async function Todos() {
    const {todos} = await getAllTodos()

    return (
        <ul key='todo_list'>
            {todos.map(t => (
                <li key={t.id}>
                    <h1>{t.title}</h1>
                    <h2>{t.todo}</h2>
                    <EditButton id={t._id} />
                    <DeleteButton id={t._id} />
                </li>
            ))}
        </ul>
    )
}