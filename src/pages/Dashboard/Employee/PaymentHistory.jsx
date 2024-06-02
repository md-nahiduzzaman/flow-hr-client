const PaymentHistory = () => {
  return (
    <div>
      <h1>this is payment history</h1>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Month</th>
                <th>Amount</th>
                <th>Transaction Id</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
              {/* row 2 */}
              <tr>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Purple</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
