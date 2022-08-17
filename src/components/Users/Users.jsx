import './users.css';

function Users({ first, second }) {
  return (
    <div className="users">
      <div className="player">
        {first}
        : X
      </div>
      <div className="player">
        {second}
        : O
      </div>
    </div>
  );
}

export default Users;
