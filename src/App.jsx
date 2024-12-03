// import { useEffect, useState } from "react";

// import "./App.css";
// import { useForm } from "react-hook-form";
// import { data } from "autoprefixer";
// function App() {
//   const [detail, setDetail] = useState(false);
//   const [error, setError] = useState("");
//   const [localStorageData, setLocalStorageData] = useState([]);
//   const [editInd, setEditInd] = useState(null);
//   const [toggleButton, setToggleButton] = useState(false);
//   const [editId, setEditId] = useState(null);

//   const [formData, setFormData] = useState({
//     Name: "",
//     Email: "",
//     DrName: "",
//     Time: "",
//     message: "",
//   });
//   const inputVal = (e) => {
//     // const { name, value } = e.target;
//     // setFormData((preState) => ({ ...preState, [name]: e.target.value }));
//     // setLocalStorageData(formData)
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (
//       !formData.Name ||
//       !formData.Email ||
//       !formData.DrName ||
//       !formData.Time ||
//       !formData.message
//     ) {
//       return;
//     } else if (toggleButton) {
//       setLocalStorageData(
//         localStorageData.map((elem) => {
//           console.log("elem", elem);

//           return elem.id === editId
//             ? {
//                 ...elem,
//                 formData: {
//                   Name: formData.Name,
//                   Email: formData.Email,
//                   DrName: formData.DrName,
//                   Time: formData.Time,
//                   message: formData.message,
//                 },
//               }
//             : elem;
//         })
//       );
//     } else {
//       const formDataObj = { id: new Date().getTime().toString(), formData };
//       setLocalStorageData((prev) => [...prev, formDataObj]);
//       console.log("formDataObj", formDataObj);
//     }
//     setFormData({
//       Name: "",
//       Email: "",
//       DrName: "",
//       Time: "",
//       message: "",
//     });
//     // if (
//     //   !formData.Name ||
//     //   !formData.Email ||
//     //   !formData.DrName ||
//     //   !formData.Time ||
//     //   !formData.message
//     // ) {
//     //   setError(" Field is Required");

//     //   return;
//     // } else {
//     //   setError("");
//     //   const existingData = JSON.parse(localStorage.getItem("Data")) || [];
//     //   const updatedData = [...existingData, formData];

//     //   localStorage.setItem("Data", JSON.stringify(updatedData));
//     //   setDetail(true)
//     // }

//     // setFormData({
//     //   Name: "",
//     //   Email: "",
//     //   DrName: "",
//     //   Time: "",
//     //   message: "",
//     // });
//   };

//   useEffect(() => {
//     console.log("localStorageData", localStorageData);
//   }, [localStorageData]);

//   const findVal = JSON.parse(localStorage.getItem("Data"));

//   const handlerDelete = (index) => {
//     console.log(index);
//     const deleteItems = localStorageData.filter((elem) => elem.id !== index);
//     setLocalStorageData(deleteItems);

//     // const updataStroge = findVal.filter((_, i) => i !== index);
//     // console.log("index", index);

//     // localStorage.setItem("Data", JSON.stringify(updataStroge));
//   };
//   const handlerEdit = (index) => {
//     const editItems = localStorageData.find((elem) => elem.id === index);
//     setFormData({
//       Name: editItems.formData.Name,
//       Email: editItems.formData.Email,
//       DrName: editItems.formData.DrName,
//       Time: editItems.formData.Time,
//       message: editItems.formData.message,
//     });
//     setToggleButton(true);
//     setEditId(index);
//   };

//   return (
//     <div>
//       <div>
//         <div className=" flex  justify-between flex-wrap w-full h-full ">
//           {localStorageData.map((item) => (
//             <div
//               key={item.id}
//               className="max-w-xs mx-auto bg-white w-[400px] rounded-lg shadow-md overflow-hidden mt-24"
//             >
//               <div className="bg-gray-100 px-4 py-2  font-bold">
//                 Patient Detail
//               </div>

//               <div className="flex  items-start justify-between p-3">
//                 <h1 className="border-b border-black text-red-500">
//                   {" "}
//                   Patient Name{" "}
//                 </h1>
//                 <h3 className=" font-bold"> {item.formData.Name} </h3>
//               </div>
//               <div className="flex  items-start  p-3 justify-between ">
//                 <h1 className="border-b border-black text-red-500">Dr Name</h1>
//                 <h3 className=" font-bold"> {item.formData.DrName} </h3>
//               </div>

//               <div className="flex  justify-between p-3">
//                 <h1 className="border-b border-black text-red-500">Email </h1>
//                 <h3 className=" font-bold"> {item.formData.Email}</h3>
//               </div>

//               <div className="flex flex-row p-3 items-center justify-between">
//                 <h1 className="border-b border-black text-red-500">
//                   Availabel Time
//                 </h1>
//                 <h3 className=" font-bold"> {item.formData.Time}</h3>
//               </div>
//               <div className=" flex justify-evenly m-2">
//                 <button
//                   className=" border border-black p-[6px]
//                       rounded-md bg-red-500 text-white"
//                   onClick={() => handlerDelete(item.id)}
//                 >
//                   Delete
//                 </button>
//                 <button
//                   className=" border border-black p-[6px] 
//                      rounded-md bg-red-500 text-white"
//                   onClick={() => handlerEdit(item.id)}
//                 >
//                   Edit
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="mx-14 mt-10 border-2 border-blue-400 rounded-lg flex flex-col">
//         <div className="mt-10 text-center font-bold">Contact Us</div>
//         <div className="mt-3 text-center text-4xl font-bold">
//           Appointment Form
//         </div>
//         <form onSubmit={handleSubmit}>
//           <div className="p-8 flex flex-col flex-wrap  ">
//             <div className="lg:flex justify-between items-center flex-wrap  ">
//               <div>
//                 <input
//                   onChange={(e) =>
//                     setFormData({ ...formData, Name: e.target.value })
//                   }
//                   type="name"
//                   name="Name"
//                   value={formData.Name}
//                   className="block lg:w-[500px] w-auto h-auto lg:h-[55px] rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
//                   placeholder="Full Name *"
//                 />
//                 <p className=" text-red-500">
//                   {" "}
//                   {error && !formData.Name && `Name  ${error}`}{" "}
//                 </p>{" "}
//               </div>
//               <div>
//                 <input
//                   onChange={(e) =>
//                     setFormData({ ...formData, Email: e.target.value })
//                   }
//                   type="email"
//                   name="Email"
//                   value={formData.Email}
//                   className="block lg:w-[500px] w-auto h-auto lg:h-[55px] rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
//                   placeholder="Email *"
//                 />
//                 <p className=" text-red-500">
//                   {" "}
//                   {error && !formData.Email && `Email  ${error}`}{" "}
//                 </p>
//               </div>
//             </div>
//             <div className="my-6 flex   justify-between  flex-wrap ">
//               <div>
//                 <select
//                   name="DrName"
//                   id="select"
//                   onChange={(e) =>
//                     setFormData({ ...formData, DrName: e.target.value })
//                   }
//                   value={formData.DrName}
//                   className="block lg:w-[500px] w-auto h-auto lg:h-[55px] rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
//                 >
//                   <option className="font-semibold text-slate-300">
//                     Please Select
//                   </option>
//                   <option
//                     className="font-semibold text-slate-300"
//                     value={"Dr Ibrahim"}
//                   >
//                     Dr Ibrahim
//                   </option>
//                   <option
//                     className="font-semibold text-slate-300"
//                     value={"Dr Noman"}
//                   >
//                     Dr Noman
//                   </option>
//                   <option
//                     className="font-semibold text-slate-300"
//                     value={"Dr Wahaj"}
//                   >
//                     Dr Wahaj
//                   </option>
//                 </select>
//                 <p className=" text-red-500">
//                   {" "}
//                   {error && !formData.DrName && `DrName  ${error}`}{" "}
//                 </p>
//               </div>
//               <div>
//                 <select
//                   onChange={(e) =>
//                     setFormData({ ...formData, Time: e.target.value })
//                   }
//                   name="Time"
//                   id="select"
//                   value={formData.Time}
//                   className="block lg:w-[500px] w-auto h-auto lg:h-[55px] rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
//                 >
//                   <option value="">select</option>
//                   <option
//                     className="font-semibold text-slate-300"
//                     value={"3:00 Available"}
//                   >
//                     3:00 Available
//                   </option>
//                   <option className="font-semibold" value={"4:00 Available"}>
//                     4:00 Available
//                   </option>
//                   <option className="font-semibold " value={"5:00 Available"}>
//                     5:00 Available
//                   </option>
//                 </select>
//                 <p className=" text-red-500">
//                   {error && !formData.Time && `Time  ${error}`}{" "}
//                 </p>
//               </div>
//             </div>
//             <div className="">
//               <input
//                 onChange={(e) =>
//                   setFormData({ ...formData, message: e.target.value })
//                 }
//                 type="ext"
//                 name="message"
//                 value={formData.message}
//                 id="text"
//                 cols="30"
//                 rows="10"
//                 className="mb-10  w-full resize-none rounded-md border
//  border-slate-300 p-10 font-semibold text-black"
//                 placeholder="Message"
//               />
//               <p className=" text-red-500">
//                 {error && !formData.message && `Massage  ${error}`}{" "}
//               </p>
//             </div>
//             <div className="text-center ">
//               {toggleButton ? (
//                 <button
//                   className="cursor-pointer rounded-lg bg-red-700 px-8 py-5
// text-sm font-semibold  text-white"
//                 >
//                   Edit Appointment
//                 </button>
//               ) : (
//                 <button
//                   className="cursor-pointer rounded-lg bg-blue-700 px-8 py-5
// text-sm font-semibold  text-white"
//                 >
//                   Book Appointment
//                 </button>
//               )}
//             </div>
//           </div>{" "}
//         </form>
//       </div>
//     </div>
//   );
// }

// export default App;





import { useState } from "react";

import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";




function App() {
  return (
    <>
      <div >
      
        <Header/>
      
        <div className="flex-1 overflow-y-auto">

        <Outlet/>
       
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default App;
