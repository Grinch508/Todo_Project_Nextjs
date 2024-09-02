import React from "react";
import EditTodoForm from "./components/EditTodoForm";

async function getTodoById(id) {
    try {
        const res = await fetch(`http://localhost:3000/api/todo/${id}`, {
            cache: 'no-store'
        })

        if (!res.ok) {
            throw new Error('failed to fetch todo')
        }
        return res.json()
    } catch(err) {
        throw new Error('error updating todo')
    }
    

}


export default async function Edit( { params }) {
/*
    fetch data and update 
*/

    const {id} = params
    const {data} = await getTodoById(id)
    const {title, todo} = data
    return (
        <EditTodoForm id={id} title={title} todo={todo}/>
    )
}