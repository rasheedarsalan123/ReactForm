import React, { useState } from 'react'

const Todo = () => {
    const [inputData ,setInputData]=useState('')
    const [item ,setItem] = useState([])
    const [toggalBtn,setToggalBtn]=useState(false)
    const [currInd ,setCurrInd]=useState (null)
    const handlerInput=(e) =>{
console.log(e.target.value)
setInputData(e.target.value)
  }
  const SubmitBtn =(e)=>{
   e.preventDefault()
   if(inputData !==''){
    if( currInd !== null){
        const updateItem = item.map((task,i)=>
        i===currInd ? inputData :task)
        setCurrInd(null)
        setItem(updateItem )
    }
    else{    
         setItem([...item,inputData])
        
    }
    setInputData('')
   
  setToggalBtn(false)
}}
 
const handlerDelete =(index)=>{
const deleteItem = item.filter((_,i)=> i !== index)
setItem(deleteItem)
}
  
const handletEdit =(index)=>{
setInputData(item[index]);
setCurrInd(index)
setToggalBtn(true)
}
  return (
    <div className=' h-full'>
       <div class="max-w-md mx-auto  bg-white shadow-lg rounded-lg overflow-hidden mt-16">
    <div class="px-4 py-2">
        <h1 class="text-gray-800 font-bold text-2xl uppercase">To-Do List</h1>
    </div>
    <form class="w-full max-w-sm mx-auto px-4 py-2" onSubmit={SubmitBtn}>
        <div class="flex items-center border-b-2 border-teal-500 py-2">
            <input onChange={handlerInput} value={inputData}
                class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text" placeholder="Add a task" />
            <button
                class="flex-shrink-0 bg-teal-500 hover:bg-teal-700
                 border-teal-500 hover:border-teal-700 text-sm border-4
                  text-white py-1 px-2 rounded"
                >
             {  toggalBtn ? 'upDate': 'Add'}
            </button>
        </div>
    </form>
    <ul class="divide-y divide-gray-200 px-4">
       { item.map((item ,index)=>(
<div className=' flex items-center justify-around' key={index}> <h1>{item} </h1>
    <div className=' flex'>
    <button className=' bg-red-400 border-black rounded-md p-1 text-white m-2 '
     onClick={()=>handlerDelete(index)}>Delete</button> 
   <button className=' bg-red-400 border-black rounded-md p-1 text-white m-2'
    onClick={ ()=> handletEdit(index)}>Edit</button> </div>
    </div>
       ))}
    </ul>
</div>
    </div>
  )
}

export default Todo