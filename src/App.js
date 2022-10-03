import React, {useState} from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList"
import ErrorModal from "./components/UI/ErrorModal";

const users = [
  // {
  //   name: 'Phan Văn Thăng',
  //   age: '20'
  // },
  // {
  //   name: 'Hoàng Văn Anh',
  //   age: '20'
  // }
]

function App() {

  const [usersList, setUsersList] = useState(JSON.parse(localStorage.getItem('listUsers')) ?? users);
  
  let getUsers = JSON.parse(localStorage.getItem('listUsers')); 
  console.log(getUsers);
  // console.log(usersList);
  
  const addUserHanlder = (uName, uAge) => {
    setUsersList( (prevUsersList) => {
      const prevUsers = [...prevUsersList, {name: uName, age: uAge}]
      
      let setUsers = localStorage.setItem('listUsers', JSON.stringify(prevUsers));
      // console.log(setUsers);
      
      return prevUsers
    } )
  }

  const hanlderClear = () => {
    localStorage.clear();
    setUsersList([]);
  }
  
  return (
      <div className="App">
          <button onClick={hanlderClear} > Clear Users List </button>
          <AddUser onAddUser={addUserHanlder} />
          <UserList users={usersList} />
          {/* <ErrorModal title="sai" message="Nhập lại"></ErrorModal> */}
      </div>
  );
}

export default App;
