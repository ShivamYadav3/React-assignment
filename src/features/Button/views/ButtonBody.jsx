// import { Click } from "./ButtonStyle";
const ButtonBody = () => {
  return (
    <>
      <div>
        <br />
        <br />
        <table border={1}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Control</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Color</th>
              <td>
                <select name="" id="">
                  <option>Default</option>
                  <option value="">
                    <button>Red</button>
                  </option>
                  <option value="">Green</option>
                </select>
              </td>
            </tr>
            <tr>
              <th>Outline</th>
              <td>
                <button>True</button>
                <button>false</button>
              </td>
            </tr>
            <tr>
              <th>Size</th>
              <td>
                <select name="" id="">
                  <option disabled>Default</option>
                  <option value="">Sm</option>
                  <option value="">Lg</option>
                </select>
              </td>
            </tr>
            <tr>
              <th>Block</th>
              <td>
                <button>True</button>
                <button>false</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
export default ButtonBody;
