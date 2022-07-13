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
    <div className={`flex bg-orange-500 p-3 text-2xl font-edu font-bold rounded-lg mx-4 md:mx-8 space-x-3 ${checked ? 'bg-opacity-50': 'opacity-100'}`}>
        <label className="flex w-[92%] overflow-hidden cursor-pointer">
            <input 
                className="hidden"
                type="checkbox" 
                checked={checked}
                onChange={handleChange}
            />
            {
                edit ? 
                <form className="ml-2" onSubmit={handleSubmit}>
                    <input 
                        className="p-1 bg-transparent border border-black"
                        type="text" 
                        autoFocus
                        onChange={(e) => setInput(e.target.value)}
                        value={input}
                    />
                </form> : 
                <p className={`ml-2 text-black ${checked ? 'line-through': null}`}>{text}</p>
            }
        </label>
        <button onClick={editTask}>
            <PencilAltIcon className="h-5 w-5" />
        </button>
        <button className="opacity-100" onClick={eraseTask}>
            <TrashIcon className="h-5 w-5" />
        </button>
    </div>
  )
}

export default Task