import UseTotalUsers from "../../../hooks/UseTotalusers";
import UserTable from "./UserTable";

const TotalUsers = () => {
  const [users] = UseTotalUsers();
  return (
    <div>
      <h1 className="text-center text-3xl mb-4">Total users data</h1>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Change Roles</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <UserTable key={user._id} user={user}></UserTable>
        ))}
      </tbody>
    </div>
  );
};

export default TotalUsers;
