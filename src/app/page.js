import TodoList from "./components/TodoList";
import Todos from "./components/Todos";


export default async function Home() {
  return (
    <main>
      <TodoList />
      <Todos />
    </main>
  );
}
