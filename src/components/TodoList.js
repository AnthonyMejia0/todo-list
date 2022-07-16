import { useRecoilValue } from "recoil"
import { listState } from "../atoms/listAtom"
import Task from "./Task";

function TodoList() {
    const list = useRecoilValue(listState);

  return (
    <div className="space-y-4">
        {list.map((todo, index) => (
            <Task 
                key={index} 
                todo={todo}
                id={index}
            />
        ))}
    </div>
  )
}

export default TodoList