import { useEffect, useState } from "react";

import "./App.css";
import { useForm } from "react-hook-form";
import { data } from "autoprefixer";
function App() {
  const [detail, setDetail] = useState(false);
  const [error, setError] = useState("");
  const [localStorageData, setLocalStorageData] = useState([]);
  const[editInd,setEditInd]=useState(null)
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    DrName: "",
    Time: "",
    message: "",
  });
  const inputVal = (e) => {
    const { name, value } = e.target;

    setFormData((preState) => ({ ...preState, [name]: e.target.value }));
  };

  const submitBtan = (e) => {
    e.preventDefault();

    if (
      !formData.Name ||
      !formData.Email ||
      !formData.DrName ||
      !formData.Time ||
      !formData.message
    ) {
      setError(" Field is Required");

      return;
    } else {
      setError("");
      const existingData = JSON.parse(localStorage.getItem("Data")) || [];
if(editInd !== null){
   existingData[editInd] =formData
   setEditInd(null)
}else{
  const updatedData = [...existingData, formData];

  localStorage.setItem("Data", JSON.stringify(updatedData));

 
}
localStorage.setItem ('Data',JSON.stringify(existingData))
    setDetail(true)
    }

    setFormData({
      Name: "",
      Email: "",
      DrName: "",
      Time: "",
      message: "",
    });
  };

  const findVal = JSON.parse(localStorage.getItem("Data"));

  
  const handlerDelete =(index)=>{
const updataStroge = findVal.filter((_,i)=> i !==index )
console.log('index',index);

 localStorage.setItem("Data", JSON.stringify(updataStroge));

 
  setLocalStorageData(updataStroge);
  };
const handlerEdit=(index)=>{
setFormData(findVal[index])
setEditInd[index]
setDetail(false)
}

  return (
    <div>
      {detail ? (
        <div>
          <div className=" flex  justify-between flex-wrap w-full h-full ">
            {findVal.map((item, index) => (
              <div
                key={index}
                className="max-w-xs mx-auto bg-white w-[400px] rounded-lg shadow-md overflow-hidden mt-24"
              >
                <div className="bg-gray-100 px-4 py-2  font-bold">
                 Patient Detail
                </div>
               
                  <div className="flex  items-start justify-between p-3">
                    
                  
                    <h1 className="border-b border-black text-red-500"> Patient Name </h1> 
                   <h3 className=" font-bold">  {item.Name} </h3>
                   
                  </div>
                  <div className="flex  items-start  p-3 justify-between ">
                    
                    
                <h1 className="border-b border-black text-red-500">Dr Name</h1>
                <h3 className=" font-bold"> {item.DrName} </h3>
                    
                  </div>
                  
                    <div className="flex  justify-between p-3">
                     <h1 className="border-b border-black text-red-500">Email </h1>
                     <h3 className=" font-bold"> {item.Email}</h3>
                    </div>
                   
               
                  <div className="flex flex-row p-3 items-center justify-between">
                    <h1  className="border-b border-black text-red-500" >Availabel Time</h1>
                    <h3  className=" font-bold"> {item.Time}</h3>
                  
                  </div>
                  <div className=" flex justify-evenly m-2">
                 
                       <button 
                     className=" border border-black p-[6px]
                      rounded-md bg-red-500 text-white" onClick={()=>handlerDelete(index)}>Delete</button> 
                                 <button 
                     className=" border border-black p-[6px] 
                     rounded-md bg-red-500 text-white" onClick={()=>handlerEdit(index)}>Edit</button></div>
                </div>
             
            ))}
          </div>
        </div>
      ) : (
        //       {/* <form onSubmit={handleSubmit(onSubmit1)}>
        //   <div className=" flex-col flex">
        //     <div>
        // <label htmlFor="First Name"></label>
        // <input className=" border border-black"{...register('FirstName' ,{ required: true ,
        //   maxLength:{value:10,message:'Atless 10'}  })} />
        // <div className=" text-red-500">{errors.FirstName  && <span>{errors.FirstName.message}</span>}</div>

        // </div>
        // </div>
        // <div>
        // <label htmlFor="Last Name"></label>
        // <input className=" border border-black" {...register('LastName' ,
        //   { required: true,  maxLength:{value:10,message:'Atless 10 '} })} />
        // <div className=" text-red-500">{errors.LastName  && <span>{errors.LastName.message}</span>}</div>

        // </div>
        // <div>
        // <label htmlFor="Class Name"></label>
        // <input className=" border border-black" {...register('ClassName',{ required: true ,
        //     maxLength:{value:10,message:'Atless 10'} })} />
        // <div className=" text-red-500">{errors.ClassName  && <span>{errors.ClassName.message}</span>}</div>

        // </div>
        // <button>submit</button>
        // </form> */}

        <div className="mx-14 mt-10 border-2 border-blue-400 rounded-lg flex flex-col">
          <div className="mt-10 text-center font-bold">Contact Us</div>
          <div className="mt-3 text-center text-4xl font-bold">
            Appointment Form
          </div>
          <form onSubmit={submitBtan}>
            <div className="p-8 flex flex-col flex-wrap  ">
              <div className="lg:flex justify-between items-center flex-wrap  ">
                <div>
                  <input
                    onChange={inputVal}
                    type="name"
                    name="Name"
                    value={formData.Name}
                    className="block lg:w-[500px] w-auto h-auto lg:h-[55px] rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                    placeholder="Full Name *"
                  />
                  <p className=" text-red-500">
                    {" "}
                    {error && !formData.Name && `Name  ${error}`}{" "}
                  </p>{" "}
                </div>
                <div>
                  <input
                    onChange={inputVal}
                    type="email"
                    name="Email"
                    value={formData.Email}
                    className="block lg:w-[500px] w-auto h-auto lg:h-[55px] rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                    placeholder="Email *"
                  />
                  <p className=" text-red-500">
                    {" "}
                    {error && !formData.Email && `Email  ${error}`}{" "}
                  </p>
                </div>
              </div>
              <div className="my-6 flex   justify-between  flex-wrap ">
                <div>
                  <select
                    name="DrName"
                    id="select"
                    onChange={inputVal}
                    value={formData.DrName}
                    className="block lg:w-[500px] w-auto h-auto lg:h-[55px] rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                  >
                    <option className="font-semibold text-slate-300">
                      Please Select
                    </option>
                    <option
                      className="font-semibold text-slate-300"
                      value={"Dr Ibrahim"}
                    >
                      Dr Ibrahim
                    </option>
                    <option
                      className="font-semibold text-slate-300"
                      value={"Dr Noman"}
                    >
                      Dr Noman
                    </option>
                    <option
                      className="font-semibold text-slate-300"
                      value={"Dr Wahaj"}
                    >
                      Dr Wahaj
                    </option>
                  </select>
                  <p className=" text-red-500">
                    {" "}
                    {error && !formData.DrName && `DrName  ${error}`}{" "}
                  </p>
                </div>
                <div>
                  <select
                    onChange={inputVal}
                    name="Time"
                    id="select"
                    value={formData.Time}
                    className="block lg:w-[500px] w-auto h-auto lg:h-[55px] rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                  >
                    <option value="">select</option>
                    <option
                      className="font-semibold text-slate-300"
                      value={"3:00 Available"}
                    >
                      3:00 Available
                    </option>
                    <option className="font-semibold" value={"4:00 Available"}>
                      4:00 Available
                    </option>
                    <option className="font-semibold " value={"5:00 Available"}>
                      5:00 Available
                    </option>
                  </select>
                  <p className=" text-red-500">
                    {error && !formData.Time && `Time  ${error}`}{" "}
                  </p>
                </div>
              </div>
              <div className="">
                <input
                  onChange={inputVal}
                  type="ext"
                  name="message"
                  value={formData.message}
                  id="text"
                  cols="30"
                  rows="10"
                  className="mb-10  w-full resize-none rounded-md border
 border-slate-300 p-10 font-semibold text-black"
                  placeholder="Message"
                />
                <p className=" text-red-500">
                  {error && !formData.message && `Massage  ${error}`}{" "}
                </p>
              </div>
              <div className="text-center ">
                <button
                  className="cursor-pointer rounded-lg bg-blue-700 px-8 py-5
text-sm font-semibold  text-white"
                >
                  Book Appoinment
                </button>
              </div>
            </div>{" "}
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
