import { NextResponse } from "next/server";
import dbConnect from "../../../../lib/mongodb";
import Todo from "../../model/Todo";

export async function POST(req) {
    try{
        await dbConnect()

        const {title, todo} = await req.json()
        const existingTodo = await Todo.findOne({todo}) || await Todo.findOne({title})

        if (existingTodo) {
            return NextResponse.json({message: 'todo already exists'}, {status: 201})
        }
        const doc = {title, todo}
        await Todo.create(doc)
        return NextResponse.json({message: 'todo created'}, {status: 200})
    } catch(err) {
        console.log(err)
        return NextResponse.json({message: 'error creating todo'}, {status: 500})
    }
}

export async function GET(req, res) {
    try {
        await dbConnect()

        const todos = await Todo.find({})
        return  NextResponse.json({todos})
    } catch(err) {
        throw new Error('Error getting all todos')
    }
}

export async function DELETE(req) {
    try {
        const id = req.nextUrl.searchParams.get('id')
        await dbConnect()
        await Todo.findByIdAndDelete(id)
        return NextResponse.json({message: 'todo was successfully deleted'}, {status: 200})
    } catch(err) {
        throw new Error('error deleting todo')
    }
}

