import { type RouterOutputs } from "~/utils/api";

//move later
type TodoData = RouterOutputs["todo"]["getAll"][number];
const Todo = (props: TodoData) => {
	const { name } = props

	return (
		< div className="border border-blue-400 p-2" >
			<h1 className="font-bold">lorem todo title</h1>
			<section className="flex">
				<p className="">{name}</p>
				<input type="checkbox" />
			</section>
		</div >
	)
}

export default Todo
