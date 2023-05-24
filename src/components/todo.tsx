import { type RouterOutputs } from "~/utils/api";

//move later
type TodoData = RouterOutputs["todo"]["getAll"][number];
const Todo = (props: TodoData) => {
	const { name } = props

	return (
		<div className="border border-blue-400 p-2">
			<section className="flex justify-between mb-3">
				<h1 className="font-bold">lorem todo title</h1>
				<div>
					<button className="bg-blue-400 mr-2">edit</button>
					<button className="bg-red-400">delete</button>
				</div>
			</section>
			<section className="flex justify-between">
				<p className="">{name}</p>
				<input type="checkbox" />
			</section>
		</div >
	)
}

export default Todo
