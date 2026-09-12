function UserProfile({ user }) {
  return (
    <>
      <div className="perfil">
        <img src={user.avatar_url} className="profile" alt={`Avatar de ${user.login}`} />
        <div>
          <h3>{user.name || user.login}</h3>
          <span>@{user.login}</span>
          {user.bio && <p>{user.bio}</p>}
        </div>
      </div>
      <hr />
    </>
  );
}

export default UserProfile;
