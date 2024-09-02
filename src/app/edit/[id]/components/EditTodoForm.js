'use client'

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function EditTodoForm({title, todo, id}) {

    const [newTitle, setNewTitle] = useState(title)
    const [newTodo, setNewTodo] = useState(todo)
    const router = useRouter()

    function handleTitleChange(e) {
        setNewTitle(e.target.value)
    }

    function handleTodoChange(e) {
        setNewTodo(e.target.value)
    }


    async function handleUpdate(e) {
        e.preventDefault()
        try {
            const res = await axios.put(`http://localhost:3000/api/todo/${id}`,{id, newTitle, newTodo})

            if (!res.ok) {
                alert('failed to updated todo')
            }

            await router.push('/')

        } catch(err) {
            console.log('error updating todo')
            alert('error updating todo')
        }
        
    }
    return (
        <form onSubmit={handleUpdate}>
            <h1>Edit Todo</h1>
            <input type='text' onChange={handleTitleChange} value={newTitle} placeholder={title}/>
            <input type='text' onChange={handleTodoChange} value={newTodo} placeholder={todo} />
            <button type='submit'>update</button>
        </form>
    )
}