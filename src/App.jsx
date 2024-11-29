import { useState } from "react";

import "./App.css";
import { useForm } from "react-hook-form";
function App() {
  const [error, setError] = useState("");
  const [foamData, setFoamData] = useState({
    Name: "",
    Email: "",
    DrName: "",
    Time: "",
    message: "",
  });
  const inputVal = (e) => {
    const { name, value } = e.target;

    setFoamData((preState) => ({ ...preState, [name]: e.target.value }));
  };
  const submitBtan = (e) => {
    e.preventDefault();
    if (
      !foamData.Name ||
      !foamData.Email ||
      !foamData.DrName ||
      !foamData.Time ||
      !foamData.message
    ) {
      setError(" Field is Required");
      return;
    } else {
      console.log("foamData", foamData);
      setError("");
    }

    setFoamData({
      Name: "",
      Email: "",
      DrName: "",
      Time: "",
      message: "",
    });
  };

  //   const {
  //     register,
  //     handleSubmit,
  //     watch,
  //     formState: { errors },
  //   } = useForm();

  //   const onSubmit1 =(data)=>{
  // console.log("submitData",data)
  //   }
  return (
    <div>
      <div className="mx-14 mt-10 border-2 border-blue-400 rounded-lg">
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
                  value={foamData.Name}
                  className="block lg:w-[500px] w-auto h-auto lg:h-[55px] rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                  placeholder="Full Name *"
                />
                <p className=" text-red-500">
                  {" "}
                  {error && !foamData.Name && `Name  ${error}`}{" "}
                </p>{" "}
              </div>
              <div>
                <input
                  onChange={inputVal}
                  type="email"
                  name="Email"
                  value={foamData.Email}
                  className="block lg:w-[500px] w-auto h-auto lg:h-[55px] rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                  placeholder="Email *"
                />
                <p className=" text-red-500">
                  {" "}
                  {error && !foamData.Email && `Email  ${error}`}{" "}
                </p>
              </div>
            </div>
            <div className="my-6 flex   justify-between  flex-wrap ">
              <div>
                <select
                  name="DrName"
                  id="select"
                  onChange={inputVal}
                  value={foamData.DrName}
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
                  {error && !foamData.DrName && `DrName  ${error}`}{" "}
                </p>
              </div>
              <div>
                <select
                  onChange={inputVal}
                  name="Time"
                  id="select"
                  value={foamData.Time}
                  className="block lg:w-[500px] w-auto h-auto lg:h-[55px] rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                >
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
                  {error && !foamData.Time && `Time  ${error}`}{" "}
                </p>
              </div>
            </div>
            <div className="">
              <input
                onChange={inputVal}
                type="ext"
                name="message"
                value={foamData.message}
                id="text"
                cols="30"
                rows="10"
                className="mb-10  w-full resize-none rounded-md border
        border-slate-300 p-10 font-semibold text-black"
                placeholder="Message"
              />
              <p className=" text-red-500">
                {error && !foamData.message && `Massage  ${error}`}{" "}
              </p>
            </div>
            <div className="text-center">
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

      {/* <form onSubmit={handleSubmit(onSubmit1)}>
  <div className=" flex-col flex">
    <div>
<label htmlFor="First Name"></label>
<input className=" border border-black"{...register('FirstName' ,{ required: true ,
  maxLength:{value:10,message:'Atless 10'}  })} />
<div className=" text-red-500">{errors.FirstName  && <span>{errors.FirstName.message}</span>}</div>

</div>
</div>
<div>
<label htmlFor="Last Name"></label>
<input className=" border border-black" {...register('LastName' ,
  { required: true,  maxLength:{value:10,message:'Atless 10 '} })} />
<div className=" text-red-500">{errors.LastName  && <span>{errors.LastName.message}</span>}</div>

</div>
<div>
<label htmlFor="Class Name"></label>
<input className=" border border-black" {...register('ClassName',{ required: true ,
    maxLength:{value:10,message:'Atless 10'} })} />
<div className=" text-red-500">{errors.ClassName  && <span>{errors.ClassName.message}</span>}</div>

</div>
<button>submit</button>
</form> */}
    </div>
  );
}

export default App;
