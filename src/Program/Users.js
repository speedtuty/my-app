import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import axios from "axios";
const Users = () => {
  const [user, setUser] = useState();
  const [search,setSearch]=useState(''); //search functionality
  console.log(user);
  useEffect(() => {
    axios.get("http://jsonplaceholder.typicode.com/users").then((response) => {
      setUser(response.data);
    });
  }, []);

  // const handleClickchange=(e)=> {   //search functionality
  //   setSearch(e.target.value)
  //   const filtered =user.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase()))

  //   setUser(filtered);
  // }

  const handleClickchange=(e)=> {   //search functionality
    setSearch(e.target.value)
    const filtered =user.filter((item)=>item.address.city.toLowerCase().includes(search.toLowerCase()))

    setUser(filtered);
  }

  return (
    <div className="container">
      <h2>List Of Users</h2>
      
      <input type="text" value={search} onChange={handleClickchange}  />   
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Address</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {user &&
            user.map((userlist) => (
              <tr>
                <>
                  <td>{userlist.id}</td>
                  <td>{userlist.name}</td>
                  <td>{userlist.username}</td>
                  <td>{userlist.email}</td>
                  <td>
                    {userlist.address.suite},{userlist.address.street}
                  </td>

                  <td>{userlist.address.city}</td>
                </>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};
export default Users;
