import { useState } from "react";
import { useRecoilState } from "recoil";
import { listState } from "../atoms/listAtom";

function TodoForm() {
    const [input, setInput] = useState('');
    const [list, setList] = useRecoilState(listState);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        let exists = false;
        for (let i = 0; i < list.length; i += 1) {
            if (list[i].text === input) {
                exists = true;
                break;
            }
        }

        if (!exists) {
            const newTask = {
                text: input,
                isDone: false,
            };
            const newList = [newTask, ...list];
            setList(newList);
        }
        setInput('');
    }

  return (
    <div className="flex justify-center">
        <form id="input" onSubmit={handleSubmit} className="flex justify-center w-[90%] mb-10" >
            <input 
                className="w-full md:w-96 px-2 bg-gray-800 border-y-2 border-l-2 border-blue-500 text-gray-100 shadow-lg shadow-black"
                type="text" 
                name="task" 
                placeholder="Enter a task" 
                onChange={(e) => setInput(e.target.value)}
                value={input}
                required
            />
            <button className="h-10 w-20 bg-blue-500 shadow-lg shadow-black">Submit</button>
        </form>
    </div>
  )
}

export default TodoForm