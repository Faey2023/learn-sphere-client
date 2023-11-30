import UseTeacherRequest from "../../../../hooks/UseTeacherRequest";
import TeacherRequestTable from "./TeacherRequestTable";

const TeacherRequest = () => {
  const [teachers] = UseTeacherRequest();
  return (
    <div>
      <h1 className="text-center text-3xl mb-4">
        Teacher Request: {teachers.length}
      </h1>
      <table className="overflow-x-auto table table-zebra-zebra w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Title</th>
            <th>Experience</th>
            <th>Category</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher) => (
            <TeacherRequestTable
              key={teacher._id}
              teacher={teacher}
            ></TeacherRequestTable>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeacherRequest;
