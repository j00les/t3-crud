import { type NextPage } from "next";
import Head from "next/head";

import { api } from "~/utils/api";


const ToDoPage: NextPage = () => {

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
            <ToDo />
            <ToDo />
          </div>
        </div>
      </main>
    </>
  )
}

const ToDo: React.FC = () => {
  const getAll = api.todo.getAll.useQuery()
  console.log(getAll.data, 'yeaaa9999')

  return (
    < div className="border border-blue-400 p-2" >
      <h1 className="font-bold">coba</h1>
      <section className="flex">
        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        <input type="checkbox" />
      </section>
    </div >
  )
}


const InputToDo: React.FC = () => {
  return (
    <div className="border border-yellow-400 p-2 flex flex-col">
      <div>
        <label htmlFor="todo-input">mo ngapain?</label>
        <input className="border border-yellow-700" type="text" id="todo-input" />
        <button
          className="border border-yellow-700"
          type="submit"
          id="todo-button" >
          Add todo
        </button>
      </div>
    </div>
  )
}



export default ToDoPage
