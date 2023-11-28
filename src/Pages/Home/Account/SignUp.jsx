import { useForm } from "react-hook-form";
import UseAuth from "../../../hooks/UseAuth";
import loginAnimation from "../../../assets/data/loginAnimation.json";
import { Link, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";

import Swal from "sweetalert2";
import SharedSignIn from "../../../Shared/SharedSignIn";
import toast from "react-hot-toast";

const SignUp = () => {
  const { createUser, updateUser } = UseAuth();
  const navigate = useNavigate();
  const {
    register,
    reset,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    createUser(data.email, data.password)
      .then((res) => {
        console.log(res.user);
        updateUser(data.name, data.image)
          .then(() => {
            reset();
            Swal.fire({
              title: "User created successfully",
              text: "You clicked the button!",
              icon: "success",
            });
          })
          .catch((err) => {
            console.log(err);
            toast.error(err.code);
          });
        navigate("/");
      })
      .catch((err) => {
        console.log(err.code);
        toast.error(err.code);
      });
  };

  // console.log(watch("example"));

  return (
    <div>
      <div className="hero">
        <div className="hero-content mt-5 flex-col lg:flex-row-reverse">
          <div className="text-center">
            <Lottie
              animationData={loginAnimation}
              alt="animated image for registration page"
              style={{ height: "100vh" }}
            />
          </div>
          <div className="">
            <h1 className="text-center font-bold text-4xl">Sign Up</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name", { required: true })}
                  type="name"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-700">
                    Name is required to register.
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input
                  {...register("image" , { required: true })}
                  type="url"
                  name="image"
                  placeholder="Image"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-700">
                    Image URL is required to register.
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-700">
                    Email is required to register.
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", { required: true, minLength: 8 })}
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "minLength" && (
                  <span className="text-red-700">
                    Password length should be 6 characters.
                  </span>
                )}
                {errors.password?.type === "required" && (
                  <span className="text-red-700">
                    Password is required to register.
                  </span>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-green-500 text-white">Sign Up</button>
              </div>
              <h4 className="text-green-500 text-xl">
                Already have an account?
                <Link to="/sign In" className="font-bold">
                  Go to Sign In
                </Link>
              </h4>
            </form>
            <SharedSignIn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
