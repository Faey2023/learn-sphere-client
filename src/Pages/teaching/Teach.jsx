import { Controller, useForm } from "react-hook-form";
import UseAuth from "../../hooks/UseAuth";
// import axios from "axios";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
// import { useEffect } from "react";

const Teach = () => {
  const { user } = UseAuth();
  const { photoURL } = user || {};
  const axiosSecure = UseAxiosSecure();
  const {
    register,
    handleSubmit,
    control,
    // formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const teacherReview = data;
    console.log(teacherReview);
    axiosSecure
      .post("/teachers", data)
      .then((res) => {
        console.log(res.data);
        Swal.fire(
          "Your request is stored. We will let you know after confirmation"
        );
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="my-10">
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              {...register("name", { required: true })}
              name="name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer"
              placeholder=" "
              required
            />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Name
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="url"
              name="image"
              defaultValue={photoURL}
              {...register("image", { required: true })}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer"
              placeholder=" "
              required
            />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Image
            </label>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <Controller
              name="experience"
              control={control}
              defaultValue=""
              rules={{ required: "Experience is required" }}
              render={({ field }) => (
                <select {...field} className="your-select-styles">
                  <option value="" disabled>
                    Experience
                  </option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Experienced">Experienced</option>
                </select>
              )}
            />
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <Controller
              name="experience"
              control={control}
              defaultValue=""
              rules={{ required: "Experience is required" }}
              render={({ field }) => (
                <select {...field} className="your-select-styles">
                  <option value="" disabled>
                    Categories
                  </option>
                  <option value={"Digital Marketing"}>Digital Marketing</option>
                  <option value={"Computer Science"}>Computer Science</option>
                  <option value={"Web Development"}>Web Development</option>
                  <option value={"Business Administration"}>
                    Business Administration
                  </option>
                  <option value={"Psychology"}>Psychology</option>
                </select>
              )}
            />
          </div>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="title"
            {...register("title", { required: true })}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer"
            placeholder=" "
            required
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Title
          </label>
        </div>
        <div className="flex flex-col justify-center items-center">
          <button
            className="text-white bg-purple-400 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-lg sm:w-auto px-5 py-2.5 text-center w-40"
            type="submit"
          >
            Submit for review
          </button>
        </div>
      </form>
    </div>
  );
};

export default Teach;
