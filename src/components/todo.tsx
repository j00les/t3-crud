import React, { useState } from "react";
import { type RouterOutputs } from "~/utils/api";

import { api } from "~/utils/api";

//move later
type TodoData = RouterOutputs["todo"]["getAll"][number];
const Todo = (props: TodoData) => {
	const { name, id } = props
	const [edit, setEdit] = useState(false)
	const [input, setInput] = useState({ name: '' })
	const ctx = api.useContext();

	const { mutate } = api.todo.deleteTodo.useMutation({
		onSuccess: () => {
			setInput({ name: '' })
		},
		onError: (e) => {
			const errorMessage = e.data?.zodError?.fieldErrors.content;
			if (errorMessage && errorMessage[0]) {
				console.log(errorMessage[0])
			} else {
				console.log('ISE')
			}
		},
	})

	const { mutate: editMutate } = api.todo.editTodo.useMutation({
		onSuccess: () => {
			void ctx.todo.getAll.invalidate()
		},
		onError: (e) => {
			const errorMessage = e.data?.zodError?.fieldErrors.content;
			if (errorMessage && errorMessage[0]) {
				console.log(errorMessage[0])
			} else {
				console.log('ISE')
			}
		},
	})

	const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		mutate(e.currentTarget.id)
	}

	const toggleEdit = () => {
		if (edit === false) setEdit(true)
		if (edit === true) setEdit(false)
	}

	const handleEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		console.log(e.currentTarget.id)

		editMutate({ id: e.currentTarget.id, name: input.name })
		setEdit(false)
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const name = e.target.name;
		const value = e.target.value;

		setInput({ ...input, [name]: value });
	};

	return (
		<div className="border border-blue-400 p-2">
			<section className="flex justify-between mb-3">
				<h1 className="font-bold">lorem todo title</h1>
				<div>
					<button className="bg-blue-400 mr-2" onClick={toggleEdit}>edit</button>
					<button className="bg-red-400" id={id} onClick={handleDelete} >delete</button>
				</div>
			</section>
			<section className="flex justify-between">
				{edit ?
					<input name="name"
						onChange={handleChange} type='text' />
					: <p className="">{name}</p>}
				{edit ? <button id={id} onClick={handleEdit}>Submit</button> : <input type="checkbox" />}
			</section>
		</div >
	)
}

export default Todo
