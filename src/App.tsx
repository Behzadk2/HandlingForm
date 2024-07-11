
import { useState } from 'react'
import './App.css'

function App() {
  interface formState{
    name?: string;
    family?: string;
  }

const[handleForm,setHandleForm] =useState<formState>({});
const handleOnChangeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
  setHandleForm({...handleForm,[e.target.name] : e.target.value})

}
const handleClick = ()=>{console.log(handleForm);
}
  return (
     <>
      <div className="flex flex-col p-4 bg-gray-900 text-white h-screen">
        <label className="block text-sm font-medium text-gray-400 mb-2">Username</label>
        <input
          className="m-2 p-2 bg-gray-800 border border-gray-700 text-gray-400 rounded-md"
          name="name"
          type="text"
          placeholder="Name"
          onChange={handleOnChangeForm}
        />
        <label className="block text-sm font-medium text-gray-400 mb-2">Username</label>
        <input
          className="m-2 p-2 bg-gray-800 border border-gray-700 text-gray-400 rounded-md"
          name="family"
          type="text"
          placeholder="Family"
          onChange={handleOnChangeForm}
        />
        <button
          className="m-2 py-2 px-4 bg-blue-600 text-white rounded-md"
          onClick={handleClick}
        >
          Submit
        </button>
      </div>
    </>
  )
}

export default App
