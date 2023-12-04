import Title from "../../../../Shared/design/Title";
import useClassRequ from "../../../../custom hooks/useClassRequ";
import Table from "./Table";

const AllClass = () => {
  const [classRequ] = useClassRequ();
  console.log(classRequ);
  return (
    <>
      <Title heading={"All Class"} />
      <h1 className="text-center text-3xl mb-4">
        Pending Request: {classRequ.length}
      </h1>
      <table className="overflow-x-auto table table-zebra-zebra w-full">
        <thead>
          <tr>
            <th>Image</th>
            <th>Teacher Name </th>
            <th>Course Name</th>
            <th>Price</th>
            <th>Short Description</th>
            <th>Approve/Reject</th>
          </tr>
        </thead>
        <tbody>
          {classRequ.map((classR) => (
            <Table key={classR._id} classR={classR}></Table>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default AllClass;
// ● Title

// ● Email (who post the class)
// ● Short description
// ● Approved button
// ● Reject Button
// ● See progress
