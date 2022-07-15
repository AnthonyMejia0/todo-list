import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { listState } from "../atoms/listAtom";

function Task({ text, id }) {
    const [checked, setChecked] = useState(false);
    const [list, setList] = useRecoilState(listState);
    const [edit, setEdit] = useState(false);
    const [input, setInput] = useState(text);

    const handleChange = () => {
        setChecked(!checked);
    };

    const eraseTask = () => {
        const newList = [...list].filter((task) => text !== task);
        setList(newList);
    }

    const editTask = () => {
        setEdit(!edit);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let newList = [];

        for (let i = 0; i < list.length; i += 1) {
            if (i === id) {
                newList.push(input);
            }
            else {
                newList.push(list[i]);
            }
        }

        setList(newList);
        setEdit(false);
    }

    useEffect(() => {
      setInput(text);
    }, [edit, text])
    

  return (
    <div className="flex justify-center">
        <div className="flex w-[92%] md:w-[65%] lg:w-[50%] items-center justify-between bg-gray-300 rounded-lg p-3 text-3xl lg:text-4xl font-edu">
            <label className="flex w-[85%] items-center cursor-pointer">
                <input 
                    className=""
                    type="checkbox" 
                    checked={checked}
                    onChange={handleChange}
                />
                {
                    edit ? 
                    <form className="bg-white max-w-[85%] ml-2" onSubmit={handleSubmit}>
                        <input 
                            className="w-full p-1 bg-transparent border border-black"
                            type="text" 
                            autoFocus
                            onChange={(e) => setInput(e.target.value)}
                            value={input}
                        />
                    </form> : 
                    <p className={`ml-2 py-3 text-black h-[100%] max-w-[95%] overflow-clip ${checked ? 'line-through': null}`}>{text}</p>
                }
            </label>
            <div className="flex items-center space-x-2">
                <button onClick={editTask}>
                    <PencilAltIcon className="h-6 w-6" />
                </button>
                <button className="opacity-100" onClick={eraseTask}>
                    <TrashIcon className="h-6 w-6" />
                </button>
            </div>
        </div>
    </div>
  )
}

export default Task