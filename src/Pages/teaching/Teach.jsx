import { Controller, useForm } from "react-hook-form";
import UseAuth from "../../hooks/UseAuth";
// import axios from "axios";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import Lottie from "lottie-react";
// import { useEffect } from "react";
import form from "../../assets/data/form.json";

const Teach = () => {
  const { user } = UseAuth();
  const { email, photoURL, displayName } = user || {};
  const axiosSecure = UseAxiosSecure();
  const {
    register,
    handleSubmit,
    control,
    // formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const teacherReview = [
      data,
      (data.email = email),
      (data.photo = photoURL),
      (data.name = displayName),
    ];
    console.log(teacherReview);
    axiosSecure.post("/teachers", data).then((res) => {
      // console.log(res.data);
      Swal.fire({
        position: "top",
        icon: "success",
        title: "Your request has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    });
  };
  return (
    <div className="border my-5">
      <h1 className="font-bold text-3xl text-center mt-3">
        Request to become an Instructor at{" "}
        <span className="text-purple-400">Learn Sphere.</span>
      </h1>
      <div className="flex flex-col md:flex-row p-5 justify-around">
        <div className="hidden lg:flex">
          <Lottie style={{ height: "55vh" }} animationData={form} />
        </div>
        <div className="my-10 max-w-md mx-auto border p-10">
          <p className=" text-xl font-bold text-purple-900">
            Name: {displayName}
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="Title"
                {...register("title", { required: true })}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-xl text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Title
              </label>
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
                  name="category"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Category is required" }}
                  render={({ field }) => (
                    <select {...field} className="your-select-styles">
                      <option value="" disabled>
                        Categories
                      </option>
                      <option value={"Digital Marketing"}>
                        Digital Marketing
                      </option>
                      <option value={"Computer Science"}>
                        Computer Science
                      </option>
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
      </div>
    </div>
  );
};

export default Teach;
