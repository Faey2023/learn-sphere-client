const UserTable = ({ user }) => {
  const { name, email, image, role } = user || {};
  const handleMakeAdmin = () => {
    console.log("ok admin");
  };
  return (
    <>
      {/* row 1 */}
      <tr className="space-y-5">
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
            </div>
          </div>
        </td>
        <td>{email}</td>
        <td>{role}</td>
        <th>
          <button
            onClick={handleMakeAdmin}
            className="btn btn-ghost bg-green-800 text-white btn-xs"
          >
            Make Admin
          </button>
        </th>
      </tr>
    </>
  );
};

export default UserTable;
