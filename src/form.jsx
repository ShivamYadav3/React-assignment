import { Component } from "react";

class InputForm extends Component {
  state = {
    name: "",
    city: "",
    state: "",
    mobile: "",
  };
  printData = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    const { name, city, state, mobile } = this.state;
    return (
      <>
        <form action="">
          <label htmlFor="name">Name :</label>
          <input
            type="text"
            value={name}
            name="name"
            onChange={this.printData}
          />
          <br />
          <br />
          <label htmlFor="">City :</label>
          <input
            type="text"
            value={city}
            name="city"
            onChange={this.printData}
          />
          <br />
          <br />
          <label htmlFor="">State :</label>
          <input
            type="text"
            value={state}
            name="state"
            onChange={this.printData}
          />
          <br />
          <br />
          <label htmlFor="">mobile no :</label>
          <input
            type="number"
            value={mobile}
            name="mobile"
            onChange={this.printData}
          />
          <br />
          <br />
        </form>
        <div>
          <p className="para">Name:{name}</p>
          <p className="para">City:{city}</p>
          <p className="para">State:{state}</p>
          <p className="para">Mobile:{mobile}</p>
        </div>
      </>
    );
  }
}
export default InputForm;
