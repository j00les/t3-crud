import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { type RouterOutputs } from "~/utils/api";

import { api } from "~/utils/api";


const ToDoPage: NextPage = () => {
  const { data } = api.todo.getAll.useQuery()

  return (
    <>
      <Head>
        <title>ToDo Page</title>
        <meta name="description" content="the main todo app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex justify-center h-screen items-center">
        <div>
          <InputToDo />
          <div id='container' className="border border-red-400 p-5 flex flex-col gap-4">
            {
              data?.map(todoData => (
                <ToDo {...todoData} key={todoData.id} />
              ))
            }
          </div>
        </div>
      </main>
    </>
  )
}

//move later
type TodoData = RouterOutputs["todo"]["getAll"][number];
const ToDo = (props: TodoData) => {
  const { name, isDone } = props

  return (
    < div className="border border-blue-400 p-2" >
      <h1 className="font-bold">coba</h1>
      <section className="flex">
        <p className="">{name}</p>
        <input type="checkbox" />
      </section>
    </div >
  )
}


const InputToDo: React.FC = () => {
  const [input, setInput] = useState('')


  const { mutate } = api.todo.addTodo.useMutation({
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
        <label htmlFor="todo-input">mo ngapain?</label>
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



export default ToDoPage
