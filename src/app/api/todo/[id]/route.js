import { NextResponse } from "next/server";
import dbConnect from "../../../../../lib/mongodb";
import Todo from "@/app/model/Todo";



export async function PUT(req, { params }) {
    const { newTitle: title, newTodo: todo } = await req.json()
    const { id } = params
    await dbConnect()
    await Todo.findByIdAndUpdate(id, {title, todo})
    const doc = {title, todo}
    return NextResponse.json({doc}, {status: 200})
}

export async function GET(req, { params }) {
    const { id } = params
    await dbConnect()  
    const data = await Todo.findById(id)
    return NextResponse.json({data}, {status: 200})
}