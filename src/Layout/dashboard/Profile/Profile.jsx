import Title from "../../../Shared/design/Title";
import UseAuth from "../../../hooks/UseAuth";

const Profile = () => {
  const { user } = UseAuth();
  const { photoURL, displayName, roll, email, phoneNumber } = user || {};
  return (
    <>
      <Title heading={"profile"} />
      <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg h-64 rounded-xl bg-clip-border">
          <img src={photoURL} alt={`profile-picture of ${displayName}`} />
        </div>
        <div className="p-6 text-center">
          <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {displayName}
          </h4>
          <p className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text">
            {roll}
          </p>
          <p className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text">
            {email}
          </p>
          <p className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text">
            {phoneNumber}
          </p>
        </div>
      </div>
    </>
  );
};

export default Profile;

// user’s name
// ● role
// ● Image
// ● email
// ● phone
