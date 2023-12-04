import Title from "../../../../Shared/design/Title";
import useGetUsers from "../../../../custom hooks/useGetUsers";
import UserTable from "./UserTable";

const TotalUsers = () => {
  const [users] = useGetUsers();
  // console.log(users);
  return (
    <div>
      <Title heading={"Total Users"} />
      <h1 className="text-center text-3xl mb-4">Total users: {users.length}</h1>
      <table className="overflow-x-auto table table-zebra-zebra w-full">
        <thead className="bg-red-300">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Change Roles</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserTable key={user._id} user={user}></UserTable>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TotalUsers;
