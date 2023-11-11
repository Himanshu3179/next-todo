import Calander from "./(components)/Calander";
import TableComponent from "./(components)/Table";
import Head from "next/head";
import { TodoForm } from "./(components)/TodoForm";
import TodoTable from "./(components)/TodoTable";

export default function Home() {
  return (
    <main className="px-10 py-5 ">
      <div className="flex justify-between">
        <Calander />
        <div className="flex flex-col w-full px-10 space-y-5">
          <TodoForm />
          <TodoTable />
        </div>
      </div>
    </main>

  )
}
