import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const EditEmployee = () => {
  const { id } = useParams();
  const [flag, setFlag] = useState(false);
  const [employee, setEmployee] = useState({
    id: "",
    FirstName: "",
    LastName: "",
    DOB: "",
    Study: "",
    StartDate: "",
    EndDate: "",
    CurrentSalary: "",
    Description: "",
  });

  const setValue = (e) => {
    const { name, value } = e.target;
    setEmployee((prev) => {
      return { ...prev, [name]: value };
    });
  };

  useEffect(() => {
    fetch("https://sweede.app/DeliveryBoy/Get-Employee/")
      .then((data) => data.json())
      .then((data) => {
        for (let i = 0; i < data.length; i++) {
          if (data[i].id == id) {
            setEmployee(data[i]);
            setFlag(true);
          }
        }
      });
  }, []);

  const editEmployee = () => {
    fetch(`https://sweede.app/DeliveryBoy/update-Employee/${employee.id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employee),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Employee edited successfully");
        } else {
          console.error("Error editing employee", response);
        }
      })
      .catch((error) => {
        console.error("API request error:", error);
      });
  };

  return (
    <div>
      <div className="flex flex-col items-center gap-16 text-xs h-[1000px] pt-4">
        <div className="text-4xl">Employee Edit Form</div>
        <div className="text-xs fixed right-5 top-5">
          <Link to={`/employeeList`}>Employee</Link>
        </div>
        {flag ? (
          <div>
            <div className="flex flex-col gap-6">
              <div className="flex gap-8">
                <div className="flex flex-col gap-2">
                  <div>
                    <label htmlFor="FName">First Name*</label>
                  </div>
                  <div className="">
                    <input
                      type="text"
                      placeholder="Enter your name"
                      value={employee.FirstName}
                      name="FirstName"
                      onChange={(e) => setValue(e)}
                      className="hover:border-sky-500 border-solid outline-none border-2 border-transparent w-[308px] h-[54px] rounded-2xl p-4"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div>
                    <label htmlFor="LName">Last Name*</label>
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      value={employee.LastName}
                      name="LastName"
                      onChange={(e) => setValue(e)}
                      className="w-[308px] h-[54px] rounded-2xl p-4 outline-none hover:border-sky-500 border-solid border-2 border-transparent"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div>
                  <label htmlFor="DOB">DOB</label>
                </div>
                <div>
                  <input
                    type="date"
                    value={employee.DOB}
                    name="DOB"
                    // onChange={(e) => setValue(e)}
                    className="w-[627px] p-4 hover:border-sky-500 border-solid outline-none border-2 border-transparent rounded-2xl"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div>
                  <label htmlFor="Study">Study</label>
                </div>
                <div>
                  <select
                    name="Study"
                    id="study"
                    value={employee.Study}
                    onChange={setValue}
                    className="w-[627px] p-4 hover:border-sky-500 border-solid border-2 border-transparent outline-none rounded-2xl"
                  >
                    <option value=""></option>
                    <option value="B.E">B.E</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-8">
                <div className="flex flex-col gap-2">
                  <div>
                    <label htmlFor="SDate">Start date*</label>
                  </div>
                  <div className="">
                    <input
                      type="date"
                      value={employee.StartDate}
                      name="StartDate"
                      onChange={(e) => setValue(e)}
                      className="hover:border-sky-500 border-solid outline-none border-2 border-transparent w-[308px] h-[54px] rounded-2xl p-4"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div>
                    <label htmlFor="EDate">End Date*</label>
                  </div>
                  <div>
                    <input
                      type="date"
                      name="EndDate"
                      value={employee.EndDate}
                      onChange={(e) => setValue(e)}
                      className="w-[308px] h-[54px] rounded-2xl p-4 outline-none hover:border-sky-500 border-solid border-2 border-transparent"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div>
                  <label htmlFor="Current Salary">Current Salary</label>
                </div>
                <div>
                  <input
                    type="number"
                    value={employee.CurrentSalary}
                    name="CurrentSalary"
                    onChange={(e) => setValue(e)}
                    className="w-[627px] p-4 hover:border-sky-500 outline-none border-solid border-2 border-transparent rounded-2xl [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div>
                  <label htmlFor="Description">Description</label>
                </div>
                <div>
                  <textarea
                    name="Description"
                    id=""
                    cols="30"
                    rows="10"
                    value={employee.Description}
                    onChange={(e) => setValue(e)}
                    className="w-[627px] p-4 hover:border-sky-500 outline-none border-solid border-2 border-transparent rounded-2xl"
                  ></textarea>
                </div>
              </div>

              <div className="flex gap-8">
                <div>
                  <button className="hover:border-sky-500 font-bold text-[#263857] text-[18px] bg-slate-300  border-solid outline-none border-2 border-transparent w-[308px] h-[54px] rounded-2xl">
                    Cancel
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => editEmployee()}
                    className="hover:border-sky-500 border-solid outline-none font-bold text-[#263857] text-[18px] border-black border-2 w-[308px] h-[54px] rounded-2xl"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>loading</div>
        )}
      </div>
    </div>
  );
};

export default EditEmployee;
