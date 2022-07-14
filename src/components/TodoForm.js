import { useState } from "react";
import { useRecoilState } from "recoil";
import { listState } from "../atoms/listAtom";

function TodoForm() {
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
            className="w-72 lg:w-96 px-2 bg-gray-800 border-y-2 border-l-2 border-blue-500 text-gray-100 shadow-lg shadow-black"
            type="text" 
            name="task" 
            placeholder="Enter a task" 
            onChange={(e) => setInput(e.target.value)}
            value={input}
        />
        <button className="h-10 w-20 bg-blue-500 shadow-lg shadow-black">Submit</button>
    </form>
  )
}

export default TodoForm