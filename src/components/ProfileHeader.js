function ProfileHeader({ avatar, name, title }) {
  return (
    <div className="profile-header">
      <img className="avatar" src={avatar} alt={`${name} avatar`} />
      <div className="profile-info">
        <h2 className="profile-name">{name}</h2>
        <p className="profile-title">{title}</p>
      </div>
    </div>
  );
}

export default ProfileHeader;
