const Message = () => {
  return (
    <div>
      <h1>this is message</h1>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <td>Yahya</td>
                <td>123@t.com</td>
                <td>
                  <button className="btn btn-ghost btn-xs">Show Message</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Message;
