import "./index.css";

const UserProfile = (props) => {
  const { userDetails, deletefunc } = props;
  const { imageUrl, name, role, uniqueNo } = userDetails;
  const onDelete = () => {
    deletefunc(uniqueNo);
  };
  return (
    <li className="user-card-container">
      <img src={imageUrl} className="profile-pic" alt="profile-pic" />
      <div className="user-details-container">
        <h1 className="user-name"> {name} </h1>
        <p className="user-designation"> {role} </p>
      </div>
      <button className="delete-button" onClick={onDelete}>
        x
      </button>
    </li>
  );
};
export default UserProfile;
