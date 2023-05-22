import { type NextPage } from "next";
import Head from "next/head";

import { api } from "~/utils/api";
import Input from "~/components/input";
import List from "~/components/list";
import Layout from "~/components/layout";

const ToDoPage: NextPage = () => {

  //immediately fetch 
  api.todo.getAll.useQuery()

  return (
    <>
      <Head>
        <title>ToDo Page</title>
        <meta name="description" content="the main todo app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Input />
        <List />
      </Layout>
    </>
  )
}

export default ToDoPage
