import { useForm } from "react-hook-form";
import UseAuth from "../../../hooks/UseAuth";
import loginAnimation from "../../../assets/data/loginAnimation.json";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import toast from "react-hot-toast";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    login(data.email, data.password)
      .then((res) => {
        console.log(res.user);
        toast.success("User sign in successfully");
      })
      .catch((err) => {
        console.log(err.message);
        toast.error(err.message);
      });
  };
  const { login } = UseAuth();

  // console.log(watch("example"));

  return (
    <div>
      <div className="hero">
        <div className="hero-content mt-5 flex-col lg:flex-row">
          <div className="text-center">
            <Lottie
              animationData={loginAnimation}
              alt="animated image for registration page"
              style={{ height: "100vh" }}
            />
          </div>
          <div className="">
            <h1 className="text-center font-bold text-4xl">Login</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
                    Email is required to sign in.
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
                    Password is required to sign in.
                  </span>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-green-500 text-white">Sign Up</button>
              </div>
              <h4 className="text-green-500 text-xl">
                Don&apos;t have an account?
                <Link to="/signup" className="font-bold">
                  Go to Sign Up
                </Link>
              </h4>
              {/* <SharedSignIn /> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
