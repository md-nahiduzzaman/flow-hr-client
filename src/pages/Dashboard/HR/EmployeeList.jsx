import { FaXmark } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";

const EmployeeList = () => {
  return (
    <div>
      <h1>employee list</h1>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Verified</th>
                <th>Bank Account</th>
                <th>Salary</th>
                <th>Pay</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <td>Yahya</td>
                <td>123@f.com</td>
                <td>
                  <FaXmark />
                  {/* <FaCheck /> */}
                </td>
                <td>12453652</td>
                <td>5000</td>
                <td>
                  <button className="btn btn-ghost btn-xs">Pay</button>
                </td>
                <td>
                  <button className="btn btn-ghost btn-xs">Details</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
