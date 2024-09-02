'use client'

import React from "react";
import { useRouter } from "next/navigation";

export default function DeleteButton(props) {
    const router = useRouter()
    async function deleteTodo() {
        try{
            const confirmed = confirm('Are you sure?')
            if (confirmed) {
                const res = await fetch(`http://localhost:3000/api/todo?id=${props.id}`, {
                    method: 'DELETE',
                })
                alert('Todo Deleted')
                    router.refresh()
                


            }
        } catch(err) {
            throw new Error("error deleting todo")
        }
    }
        
    return (
        <button onClick={deleteTodo}>delete</button>
    )
}