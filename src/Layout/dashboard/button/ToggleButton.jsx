const ToggleButton = ({ toggleHandler, toggle }) => {
  return (
    <>
      <label
        htmlFor="Toggle3"
        className="inline-flex w-full justify-center items-center px-2 rounded-lg text-black"
      >
        <input
          onChange={toggleHandler}
          id="Toggle3"
          type="checkbox"
          className="hidden peer"
        />
        <div className="border-2 border-white rounded-md">
          <span
            className={`px-4 py-1 rounded-lg  text-black ${
              toggle ? "bg-green-700 text-white" : ""
            }`}
          >
            Instructor
          </span>
          <span
            className={`px-4 py-1 rounded-lg  text-black ${
              !toggle ? "bg-green-700 text-white" : ""
            }`}
          >
            Student
          </span>
        </div>
      </label>
    </>
  );
};

export default ToggleButton;
