//[id] -> means it is dynamic. we can get it in params. eg:- params.id

const Profile = ({ params }) => {
  return (
    <div>
      <h1>Profile</h1>
      <p>{params.id}</p>
    </div>
  );
};

export default Profile;
