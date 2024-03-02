import { useEffect, useState } from "react"
import style from "./Home.module.css"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"


const Edituser=()=>{
    let obj=useParams()  // here we take on hook 'useParams'  to declear the that obj and print the obj in console
    console.log(obj);
    let[name,setname]=useState("")
    let[salary,setsalary]=useState("")
    let[company,setcompany]=useState("")

    let navigate=useNavigate()

    useEffect(()=>{  
        axios.get(`http://localhost:3000/employees/${obj.abc}`)   // here we use the obj because the abc is variable we use for store id data and this id data in object (see in inspet console ) that object name in obj
        .then((response)=>{
            setname(response.data.eName)
            setsalary(response.data.eSalary)
            setcompany(response.data.eCompany)
        })
        .catch(()=>{console.log("Erorrrr");})
    },[])

    let namechange=(x)=>{
        setname(x.target.value)
    }
    let companychange=(x)=>{
        setcompany(x.target.value)
    }
    let salarychange=(x)=>{
        setsalary(x.target.value)
    }

    let formhandlers=(e)=>{
        e.preventDefault()
        let payload={
            eName:name,
            eSalary:salary,
            eCompany:company
        }
        axios.put(`http://localhost:3000/employees/${obj.abc}`,payload)
        .then(()=>{
            console.log("UPDATED");
        })

        .catch(()=>{
            console.log("ERORRR");
        })


        navigate("/User")
    }

    return(
        <section id={style.myforms}>
        <form>
            <h4>Update User</h4>
            <label htmlFor="">Name </label>
            <input type="text" value={name} onChange={namechange}/>
            <label htmlFor="">Company</label>
            <input type="text" value={company} onChange={companychange}/>
            <label htmlFor="">Salary</label>
            <input type="Number" value={salary} onChange={salarychange}/>
            <button onClick={formhandlers}>Submit</button>
        </form>
    </section>
    )
}
export default Edituser