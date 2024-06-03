const Profile = () => {
  return (
    <div>
      <h1>this is profile</h1>
      <div className="flex items-center justify-center ">
        <div className="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <div className="flex justify-center -mt-16 md:justify-center">
            <img
              className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400"
              alt="Testimonial avatar"
              src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
            />
          </div>

          <h2 className="mt-2 text-xl text-center font-semibold text-gray-800 dark:text-white md:mt-0">
            Name
          </h2>
          <h2 className="mt-2 text-sm text-center font-semibold text-gray-600 dark:text-white md:mt-0">
            Employee
          </h2>

          <div className="mt-9">
            <h3>Email: email@email.com</h3>
            <h3>Id: hkshdfushdkjfj </h3>
          </div>

          <div className="flex justify-end mt-4">
            <button className="btn">Update Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
