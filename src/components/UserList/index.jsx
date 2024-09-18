import './index.css'


function UserList({ users }) {
  return (
    <div className="user-list">
      <ul>
        {users.map((user) => (
          <li className='text' key={user.id}>
            Ism :{user.firstname} <br />
            Familya: {user.lastname} <br />
              Yosh: {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
