import { useState } from "react";
import { useRecoilState } from "recoil";
import { listState } from "../atoms/listAtom";

function TodoForm(props) {
    const [input, setInput] = useState('');
    const [list, setList] = useRecoilState(listState);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!list.includes(input)) {
            const newList = [input, ...list];
            setList(newList);
        }
        setInput('');
    }

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mb-10" >
        <input 
            className="w-80 px-2 bg-gray-300"
            type="text" 
            name="task" 
            placeholder="Enter a task" 
            onChange={(e) => setInput(e.target.value)}
            value={input}
        />
        <button className="h-10 w-20 bg-orange-500">Submit</button>
    </form>
  )
}

export default TodoForm