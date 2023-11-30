import Swal from "sweetalert2";
import UseAxiosSecure from "../../../../hooks/UseAxiosSecure";
import UseTeacherRequest from "../../../../hooks/UseTeacherRequest";

const TeacherRequestTable = ({ teacher }) => {
  const { _id, role, name, photo, experience, email, title, category } =
    teacher || {};
  const axiosSecure = UseAxiosSecure();
  const [, refetch] = UseTeacherRequest();

  //make teacher
  const handleMakeTeacher = (id) => {
    // console.log(id);
    Swal.fire({
      title: `Do you want to make ${name} an instructor?`,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        axiosSecure.patch(`/teachers/${id}`).then((res) => {
          refetch();
          if (res.data.modifiedCount > 0) {
            Swal.fire({
              position: "top",
              icon: "success",
              title: `${name} is now an instructor at Learn Sphere!!!`,
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

  //reject
  const handleReject = (id) => {};

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
        {role === "instructor" ? (
          <td className="text-green border">Approved</td>
        ) : (
          <td className="text-green border">Pending</td>
        )}
        <th className="border">
          {role === "instructor" ? (
            <div>
              <button
                disabled
                className="btn btn-ghost bg-green-800 text-white btn-xs"
              >
                Approve
              </button>
              <button
                disabled
                className="btn btn-ghost bg-red-800 text-white btn-xs"
              >
                Reject
              </button>
            </div>
          ) : (
            <div>
              <button
                onClick={() => handleMakeTeacher(_id)}
                className="btn btn-ghost bg-green-800 text-white btn-xs"
              >
                Approve
              </button>
              <button
                onClick={() => handleReject(_id)}
                className="btn btn-ghost bg-red-800 text-white btn-xs"
              >
                Reject
              </button>
            </div>
          )}
        </th>
      </tr>
    </>
  );
};

export default TeacherRequestTable;
