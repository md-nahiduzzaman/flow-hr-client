const WorkSheet = () => {
  return (
    <div>
      <h1>this is work sheet page</h1>
      {/* table */}
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Task</th>
                <th>Hours Worked</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
                <td>Submitted</td>
              </tr>
            </tbody>
          </table>
          <form className="overflow-x-auto flex flex-row justify-between items-center gap-16 mt-10">
            {/* task */}
            <div className="mb-3 w-full">
              <label className="form-control w-full">Task</label>

              <select
                name="task"
                required
                className="input input-bordered  block w-full px-4 py-2 mt-2"
              >
                <option>Sales</option>
                <option>Support</option>
                <option>Content</option>
                <option>Paper-work</option>
              </select>
            </div>
            {/* Hours Worked */}
            <div className="mb-3 w-full">
              <label className="form-control w-full">Hours Worked</label>
              <input
                type="number"
                placeholder="Hours Worked"
                name="hours_worked"
                required
                className="input input-bordered  block w-full px-4 py-2 mt-2"
              />
            </div>
            {/* date */}
            <div className="mb-3 w-full">
              <label className="form-control w-full">Date</label>
              <input
                type="number"
                placeholder="Hours Worked"
                name="hours_worked"
                required
                className="input input-bordered  block w-full px-4 py-2 mt-2"
              />
            </div>
            {/* btn */}
            <div className="mt-6 w-full">
              <button className="btn w-full ">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WorkSheet;
