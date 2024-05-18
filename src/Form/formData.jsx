import { useState } from "react";

const FormData = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    number: "",
  });
  const [data, setData] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setData((prev) => [...prev, formData]);
    setFormData({
      firstName: "",
      lastName: "",
      number: "",
    });
  };
  return (
    <>
      <div>
        <div>Form</div>
        <div>
          <form action="" onSubmit={handleSubmit}>
            <input
              type="text"
              name="firstName"
              id="firstName"
              onChange={handleChange}
              placeholder="Firstname"
              value={formData.firstName}
            />
            <input
              type="text"
              name="lastName"
              onChange={handleChange}
              placeholder="Lastname"
              value={formData.lastName}
            />
            <input
              type="number"
              name="number"
              onChange={handleChange}
              placeholder="Enter your num"
              value={formData.number}
            />
            <input type="submit" />
          </form>
        </div>
        <div>
          {data.length > 0 && (
            <div>
              {data.map((item, i) => {
                return <div key={i}>{item.firstName}</div>;
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default FormData;

const promise = async () => {
  const output = await new Promise((res, rej) => {
    res("done");
  });
  return output;
};
promise();
