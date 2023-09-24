import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const EmployeeList = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://sweede.app/DeliveryBoy/Get-Employee/")
      .then((data) => data.json())
      .then((data) => setData(data));
  }, []);

  const onRemove = (id) => {
    fetch(`https://sweede.app/DeliveryBoy/delete-Employee/${id}`, {
      method: "delete",
    }).then((data) => setOpen(null));
  };

  const edit = (id) => {
    navigate(`/editEmployee/${id}`);
  };

  return (
    <div className="flex flex-col text-xl gap-6 pt-4 ml-8">
      <div className="text-3xl font-bold">Employee List</div>
      <div>
        <table className="border-[#D5D5D5] border px-3 py-3 table-auto">
          <thead>
            <tr className="border-[#D5D5D5] border px-3 py-3 h-24">
              <th className="border-[#D5D5D5] border px-3 py-3">Name</th>
              <th className="border-[#D5D5D5] border px-3 py-3">DOB</th>
              <th className="border-[#D5D5D5] border px-3 py-3">Start Date</th>
              <th className="border-[#D5D5D5] border px-3 py-3">End Date</th>
              <th className="px-3 py-3">Description</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr
                  key={item.id}
                  className="border-[#D5D5D5] border px-3 py-3 h-24 text-[13px] text-[#7E98BA]"
                >
                  <td className="border-[#D5D5D5] border px-3 py-3">
                    {item.FirstName} {item.LastName}
                  </td>
                  <td className="border-[#D5D5D5] border px-3 py-3">
                    {item.DOB}
                  </td>
                  <td className="border-[#D5D5D5] border px-3 py-3">
                    {item.StartDate}
                  </td>
                  <td className="border-[#D5D5D5] border px-3 py-3">
                    {item.EndDate}
                  </td>
                  <td className="w-72 px-3 py-3">
                    <span className="">{item.Description}</span>
                  </td>
                  <td className="px-6">
                    {open === item.id ? (
                      <div className="text-[10px] text-[#7D7D7D] cursor-pointer">
                        <div>View</div>
                        <div onClick={() => edit(item.id)}>Edit</div>
                        <div onClick={() => onRemove(item.id)}>Delete</div>
                      </div>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="4"
                        height="16"
                        viewBox="0 0 4 16"
                        fill="none"
                        className="inline"
                        onClick={() => setOpen(item.id)}
                      >
                        <path
                          d="M2 4C2.39556 4 2.78224 3.8827 3.11114 3.66294C3.44004 3.44318 3.69639 3.13082 3.84776 2.76537C3.99914 2.39992 4.03874 1.99778 3.96157 1.60982C3.8844 1.22186 3.69392 0.865492 3.41421 0.585787C3.13451 0.306082 2.77814 0.115601 2.39018 0.0384303C2.00222 -0.0387401 1.60009 0.000866562 1.23463 0.152242C0.869182 0.303617 0.556825 0.559963 0.337062 0.888861C0.117299 1.21776 1.07779e-06 1.60444 1.07779e-06 2C0.0015838 2.52995 0.212806 3.03774 0.587536 3.41247C0.962266 3.7872 1.47005 3.99842 2 4ZM2 6C1.60444 6 1.21776 6.1173 0.888861 6.33706C0.559963 6.55682 0.303617 6.86918 0.152242 7.23463C0.000866562 7.60009 -0.0387401 8.00222 0.0384303 8.39018C0.115601 8.77814 0.306083 9.13451 0.585788 9.41421C0.865493 9.69392 1.22186 9.8844 1.60982 9.96157C1.99778 10.0387 2.39992 9.99914 2.76537 9.84776C3.13082 9.69639 3.44318 9.44004 3.66294 9.11114C3.8827 8.78224 4 8.39556 4 8C3.99842 7.47005 3.7872 6.96227 3.41247 6.58754C3.03774 6.21281 2.52995 6.00158 2 6ZM2 12C1.60444 12 1.21776 12.1173 0.888861 12.3371C0.559963 12.5568 0.303617 12.8692 0.152242 13.2346C0.000866562 13.6001 -0.0387401 14.0022 0.0384303 14.3902C0.115601 14.7781 0.306083 15.1345 0.585788 15.4142C0.865493 15.6939 1.22186 15.8844 1.60982 15.9616C1.99778 16.0387 2.39992 15.9991 2.76537 15.8478C3.13082 15.6964 3.44318 15.44 3.66294 15.1111C3.8827 14.7822 4 14.3956 4 14C3.99842 13.4701 3.7872 12.9623 3.41247 12.5875C3.03774 12.2128 2.52995 12.0016 2 12Z"
                          fill="#C1C0C0"
                        />
                      </svg>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
