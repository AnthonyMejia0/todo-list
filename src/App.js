import { useRecoilState } from "recoil";
import { listState } from "./atoms/listAtom";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [list, setList] = useRecoilState(listState);

  return (
    <div className="bg-gray-500 h-screen w-screen overflow-hidden">
      <h1 className="flex justify-center text-5xl font-edu font-bold py-10">Things To Do:</h1>
      <TodoForm />
      <div className="flex flex-col h-[80vh] overflow-y-scroll space-y-5">
        <TodoList />
        {
        list.length === 0 ?
          null :
          <div className="w-screen flex justify-center pb-10">
            <button className="text-3xl bg-orange-500 px-5 py-3 rounded-full font-bold" onClick={() => setList([])}>
              Clear All
            </button>
          </div>
        }
      </div>
    </div>
  );
}

export default App;
