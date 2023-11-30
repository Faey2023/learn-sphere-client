const TeacherRequestTable = ({ teacher }) => {
  const { name, photo, experience, email, title, category } = teacher || {};
  return (
    <>
      <tr className=" overflow-x-auto">
        <td>
          <div className="flex items-center gap-3 border">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={photo} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
            </div>
          </div>
        </td>
        <td className="border">{email}</td>
        <td className="border">{title}</td>
        <td className="border">{experience}</td>
        <td className="border">{category}</td>
        <td className="text-green border">Pending</td>
        <th className="border">
          <button className="btn btn-ghost bg-green-800 text-white btn-xs">
            Approve
          </button>
          <button className="btn btn-ghost bg-red-800 text-white btn-xs">
            Reject
          </button>
        </th>
      </tr>
    </>
  );
};

export default TeacherRequestTable;
