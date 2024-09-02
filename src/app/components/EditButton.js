'use client'

import React from "react";
import { useRouter } from "next/navigation";
export default function EditButton(props) {
    const router = useRouter()

    function editTodoRoute() {
        router.push(`/edit/${props.id}`)
    }
    return (
        <button onClick={editTodoRoute}>edit</button>
    )
}