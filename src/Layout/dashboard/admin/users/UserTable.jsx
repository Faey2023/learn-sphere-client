import Swal from "sweetalert2";
import UseAxiosSecure from "../../../../hooks/UseAxiosSecure";
import UseTotalUsers from "../../../../hooks/UseTotalusers";

const UserTable = ({ user }) => {
  const { _id, name, email, image, role } = user || {};
  const axiosSecure = UseAxiosSecure();
  const [, refetch] = UseTotalUsers();
  const handleMakeAdmin = (id) => {
    console.log(id);
    Swal.fire({
      title: `Do you make ${name} an admin?`,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/admin/${id}`).then((res) => {
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              position: "top",
              icon: "success",
              title: `${name} is now an admin`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
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
          {role === "admin" ? (
            <p className="text-green-700 text-xl">Admin</p>
          ) : (
            <button
              onClick={() => handleMakeAdmin(_id)}
              className="btn btn-ghost bg-green-800 text-white btn-xs"
            >
              Make Admin
            </button>
          )}
        </th>
      </tr>
    </>
  );
};

export default UserTable;
