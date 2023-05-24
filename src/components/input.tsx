import { useState } from "react";

import { api } from "~/utils/api";

const Input = () => {
	const [input, setInput] = useState('')
	const ctx = api.useContext();

	const { mutate } = api.todo.addTodo.useMutation({
		onSuccess: () => {
			setInput("");
			//invalidate in order to get updated data
			void ctx.todo.getAll.invalidate();
		},
		onError: (e) => {
			const errorMessage = e.data?.zodError?.fieldErrors.content;
			if (errorMessage && errorMessage[0]) {
				console.log(errorMessage[0])
			} else {
				console.log('ISE')
			}
		},
	});

	return (
		<div className="border border-yellow-400 p-2 flex flex-col">
			<div>
				<label htmlFor="todo-input">add some more</label>
				<input
					className="border border-yellow-700"
					type="text"
					id="todo-input"
					onChange={(e) => setInput(e.target.value)}
					value={input}
				/>
				<button
					className="border border-yellow-700"
					type="submit"
					id="todo-button"
					onClick={() => mutate({ name: input, isDone: false })}
				>
					Add todo
				</button>
			</div>
		</div>
	)
}

export default Input
