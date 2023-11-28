import Title from "../../../Shared/design/Title";
import UseAuth from "../../../hooks/UseAuth";

const Profile = () => {
  const { user } = UseAuth();
  const { photoURL, displayName, roll, email, phoneNumber
  } = user || {};
  return (
    <>
      <Title heading={"profile"} />
      <div>
        <img
          className="rounded-full"
          src={photoURL}
          alt={`photo of ${displayName}`}
        />
        <div className="border-2 border-purple-500 mt-4">
          <p>Name: {displayName}</p>
          <p>Roll: {roll}</p>
          <p>Email: {email}</p>
          <p>Phone Number: {phoneNumber
}</p>
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
