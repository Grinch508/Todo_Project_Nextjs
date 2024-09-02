'use client'

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function TodoList() {
    const [title, setTitle] = useState('')
    const [todo, setTodo] = useState('')
    const router = useRouter()

    function handleTitleChange(e) {
        setTitle(e.target.value)
    }

    function handleTodoChange(e) {
        setTodo(e.target.value)
    }

    async function handleSubmit(e) {
        e.preventDefault()
        const data = {title, todo}
        const create = await axios.post('/api/todo', data)
        console.log(create.data)
        if(create.status === 200) {
            setTitle('')
            setTodo('')
            router.refresh()
            console.log(`Todo Created: Title: ${title}   Todo: ${todo}`)
            return alert(`Todo Created: Title: ${title}   Todo: ${todo}`)
        }

        return alert('failed to create todo')   
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Todo</h1>
            <label>title</label>
            <input type='text' onChange={handleTitleChange} value={title} />
            <label>todo</label>
            <input type="text" onChange={handleTodoChange} value={todo} />
            <button>submit</button>
        </form>
    )
}