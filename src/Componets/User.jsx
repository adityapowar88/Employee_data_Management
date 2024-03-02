import style from "./Home.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
const User = (x) => {
  let [content, setconten] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/employees")
      .then((response) => {
        console.log("get data");
        setconten(response.data);
      })
      .catch(() => {
        console.log("errorrr");
      });
  }, []);


  // create one function fo delete the user data

  let DeleteUser=(y)=>{
    axios.delete(`http://localhost:3000/employees/${y}`)
    .then(()=>{
      console.log("DELETED");
    })
    .catch(()=>{
      console.log("ERORRRR");
    })  


    window.location.assign("/User")
  }

  return (
    <div id={style.maain_user}>
      {content.map((element) => {
        return (
          <div id={style.User}>
            <table>
              <tr>
                <td>EmployeeId :</td>
                <td>{element.id}</td>
              </tr>
              <tr>
                <td>Name :</td>
                <td>{element.eName}</td>
              </tr>
              <tr>
                <td>Salary :</td>
                <td>{element.eSalary}</td>
              </tr>
              <tr>
                <td>Company :</td>
                <td>{element.eCompany}</td>
              </tr>
              <tr>
                <td>
                  <button>
                    <Link to={`/edit/${element.id}`}>Edit</Link>  {/* here we use that abc varable value using the only id data(because id is unique for all (we use as concatination (`${}`) this is syntax)) */}
                  </button>
                </td>
                <td id={style.red}>
                  <button  onClick={()=>{DeleteUser(element.id)}}>Delete</button>
                </td>
              </tr>
            </table>
          </div>
        );
      })}
    </div>
  );
};
export default User;
