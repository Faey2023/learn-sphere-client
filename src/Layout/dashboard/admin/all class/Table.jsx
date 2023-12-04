import Swal from "sweetalert2";
import UseAxiosSecure from "../../../../hooks/UseAxiosSecure";
import useClassRequ from "../../../../custom hooks/useClassRequ";

const Table = ({ classR }) => {
  const { _id, image, courseName, price, shortDescription, teacherName } =
    classR || {};
  const axiosSecure = UseAxiosSecure();
  const [, refetch] = useClassRequ();
  //approve
  const classInfo = {
    image: image,
    courseName: courseName,
    teacherName: teacherName,
    price: price,
    shortDescription: shortDescription,
  };
  const handleApprove = (id) => {
    // console.log(id);
    Swal.fire({
      title: `Do you want to approve this class?`,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        axiosSecure.post(`/class`, classInfo).then((res) => {
          Swal.fire({
            position: "top",
            icon: "success",
            title: `${courseName} is accepted and added to class section!!!`,
            showConfirmButton: false,
            timer: 1500,
          });
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
                <img src={image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{teacherName}</div>
            </div>
          </div>
        </td>
        <td className="border">{courseName}</td>
        <td className="border">{price}</td>
        <td className="border">{shortDescription}</td>
        <th className="border">
          <div>
            <button
              onClick={() => handleApprove(_id)}
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
        </th>
        {/* {role === "instructor" ? (
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
        </th> */}
      </tr>
    </>
  );
};

export default Table;
