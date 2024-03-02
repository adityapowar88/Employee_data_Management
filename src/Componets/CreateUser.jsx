import { useState } from "react"
import style from "./Home.module.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"


const CreateUser=()=>{
    let[name,setnmae]=useState("")
    let[company,setcompny]=useState("")
    let[salary,setsalary]=useState("")

    let navigate=useNavigate()

    let chngName=(element)=>{
        setnmae(element.target.value)
    }

    let chngcompany=(element)=>{
        setcompny(element.target.value)
    }
    let chngsalary=(element)=>{
        setsalary(element.target.value)
    }

    let Submission=(element)=>{
        element.preventDefault()
        // these all 3 for print the output in console
        // console.log(name);
        // console.log(company);
        // console.log(salary);
        let payload={
            eName:name,
            eSalary:salary,
            eCompany:company
        }
        axios.post("http://localhost:3000/employees",payload)
        .then(()=>{
            console.log("Data has been stored");
        })
        .catch(()=>{
            console.log("ERORRRRRRRR");
        })

        navigate("/user")
    }

    return(
        <section id={style.myforms}>
            <form>
                <label htmlFor="">Name</label>
                <input type="text" value={name} onChange={chngName}/>
                <label htmlFor="">Company</label> 
                <input type="text"  value={company} onChange={chngcompany}/>
                <label htmlFor="">Salary</label> 
                <input type="Number" value={salary} onChange={chngsalary}/>
                <button onClick={Submission}>Submit</button>
            </form>
        </section>
    )
}
export default CreateUser