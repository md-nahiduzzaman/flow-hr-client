import MenuItem from "./MenuItem";

const AdminMenu = () => {
  return (
    <div>
      <MenuItem
        label="All Employee List"
        address="all-employee-list"
      ></MenuItem>
      <MenuItem label="Message" address="message"></MenuItem>
    </div>
  );
};

export default AdminMenu;
