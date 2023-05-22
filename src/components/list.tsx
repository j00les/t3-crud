import { api } from "~/utils/api"
import Todo from "./todo"

const List = () => {
	const { data } = api.todo.getAll.useQuery()

	return (
		<div id='container' className="border border-red-400 p-5 flex flex-col gap-4">
			{
				data?.map(todoData => (
					<Todo {...todoData} key={todoData.id} />
				))
			}
		</div>
	)
}

export default List

