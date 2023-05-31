import { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const FormValidation = () => {
  const [modal, setModal] = useState(false);
  const [profile, setProfile] = useState({
    Fname: "",
    email: "",
    password: "",
    number: "",
    gender: "",
    city: "",
  });
  const [err, setErr] = useState({
    FnameErr: false,
    emailErr: false,
    passwordErr: false,
    numberErr: false,
    cityErr: false,
    genderErr: false,
  });

  const formChecker = (e) => {
    const { value, name } = e.target;
    setProfile((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const { Fname, email, password, number, gender, city } = profile;

  const checkValue = () => {
    const obj = {
      FnameErr: false,
      emailErr: false,
      passwordErr: false,
      numberErr: false,
      cityErr: false,
      genderErr: false,
    };
    console.log(obj);
    if (Fname === "") {
      obj.FnameErr = true;
    }
    if (email === "") {
      obj.emailErr = true;
    }
    if (password === "") {
      obj.passwordErr = true;
    }
    if (number === "") {
      obj.numberErr = true;
    }
    if (gender === "") {
      obj.genderErr = true;
    }
    if (city === "") {
      obj.cityErr = true;
    }
    setErr((prev) => {
      return {
        ...prev,
        ...obj,
      };
    });
    setModal(!modal);
  };
  const { FnameErr, emailErr, passwordErr, numberErr, genderErr, cityErr } =
    err;

  const toggle = () => setModal(!modal);

  return (
    <div>
      <input
        type="text"
        name="Fname"
        value={Fname}
        placeholder="Enter your Fname"
        onChange={formChecker}
      />
      <br />
      {FnameErr && <div>enter your name</div>}
      <input
        type="email"
        name="email"
        value={email}
        placeholder="enter Your Email"
        onChange={formChecker}
      />
      <br />
      {emailErr && <div>enter email</div>}
      <input
        type="password"
        name="password"
        placeholder="enter your password"
        onChange={formChecker}
      />
      <br />
      {passwordErr && <div>enter password</div>}
      <input
        type="number"
        name="number"
        placeholder="enter your num"
        onChange={formChecker}
      />
      <br />
      {numberErr && <div>enter your no</div>}
      <input
        type="radio"
        name="gender"
        value={"male"}
        placeholder="select your gender"
        onChange={formChecker}
      />
      <span>male</span>
      <input
        type="radio"
        name="gender"
        value={"Female"}
        placeholder="select your gender"
        onChange={formChecker}
      />
      <span>Female</span>
      <br />
      {genderErr && <div>enter gender</div>}
      <select name="city" onChange={formChecker}>
        <option>select</option>
        <option value="jabalpur">Jabalpur</option>
        <option value="delhi">Delhi</option>
      </select>
      <br />
      {cityErr && <div>enter city</div>}
      <div>
        <button onClick={checkValue}>submit</button>
      </div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Review Your Information</ModalHeader>
        <ModalBody>
          <div>First Name : {Fname}</div>
          <div>Email Add. : {email}</div>
          <div>Mobile No. : {number}</div>
          <div>Gender : {gender}</div>
          <div>Password : {password}</div>
          <div>City : {city}</div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Edit Details
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Submit
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
export default FormValidation;
