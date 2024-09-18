import { useState } from "react";
import "./index.css";
import UserList from "../UserList";

function Card() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState("");

  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState({});  

  function handleChangefirst(event) {
    setFirstname(event.target.value);
  }

  function handleChangelast(event) {
    setLastname(event.target.value);
  }

  function handleChangeage(event) {
    setAge(event.target.value); 
  }

 
  function validate() {
    let tempErrors = {};
    
    if (!firstname.trim()) {
      tempErrors.firstname = "Firstname is required";
    }

    if (!lastname.trim()) {
      tempErrors.lastname = "Lastname is required";
    }

    if (!age || isNaN(age) || Number(age) <= 0) { 
      tempErrors.age = "Age must be a number greater than 0";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;  
  }

  function handleSave(event) {
    event.preventDefault();
  
    if (!validate()) return;  

    const userForm = {
      firstname: firstname,
      lastname: lastname,
      age: age,
      id: Date.now()
    };

    let copied = [...users];
    copied.push(userForm);
    setUsers(copied);
  
    setFirstname('');
    setLastname('');
    setAge('');
    setErrors({});  
  }

  return (
    <div className="card">
      <form className="form">
        <input
          onChange={handleChangefirst}
          value={firstname}
          type="text"
          placeholder="Enter firstname"
        />
        {errors.firstname && <span className="error">{errors.firstname}</span>} 
        
        <input
          onChange={handleChangelast}
          value={lastname}
          type="text"
          placeholder="Enter lastname"
        />
        {errors.lastname && <span className="error">{errors.lastname}</span>} 

        <input
          onChange={handleChangeage}
          value={age}
          type="number"
          placeholder="Enter age"
        />
        {errors.age && <span className="error">{errors.age}</span>} 

        <button onClick={handleSave}>save</button>
      </form>

      
      <UserList users={users} />
    </div>
  );
}

export default Card;
