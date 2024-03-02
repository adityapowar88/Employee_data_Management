import { Link } from "react-router-dom"
import style from "./Home.module.css"

const Home=()=>{
    return(
        <section id={style.homepage}>
            <Link to ="/">Create-User</Link>
            < Link to ="/user">User</Link>
        </section>
    )
}
export default Home