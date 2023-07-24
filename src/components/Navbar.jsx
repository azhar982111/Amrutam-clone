
import { useNavigate } from "react-router-dom"
import styles from "../css files/Navbar.module.css"



export default function Nabvar() {
    let navigate = useNavigate()

    function redirect(value){
        if(value === 1){
            navigate("/")
        }
        else if(value === 2){
            navigate("/allproducts")
        }
        
        console.log(value)
    }

    return (
        <div className={styles.navbarDiv}>
            <div className={styles.topDiv}>
                <div>
                    <p> 📞+91 9713171999</p>
                </div>

                <div>
                    <h2 onClick={()=>redirect(1)}>A M R U T A M</h2>
                </div>

                <div>
                    <svg style={{ color: "rgb(41, 112, 41)" }} xmlns="http://www.w3.org/2000/svg" width="22" height="50" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"> <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" fill="#297029"></path> </svg>
                    <svg style={{ color: "rgb(41, 112, 41)" }} xmlns="http://www.w3.org/2000/svg" width="22" height="50" viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0h24v24H0z" /> <path fill-rule="nonzero" d="M12 17c3.662 0 6.865 1.575 8.607 3.925l-1.842.871C17.347 20.116 14.847 19 12 19c-2.847 0-5.347 1.116-6.765 2.796l-1.841-.872C5.136 18.574 8.338 17 12 17zm0-15a5 5 0 0 1 5 5v3a5 5 0 0 1-4.783 4.995L12 15a5 5 0 0 1-5-5V7a5 5 0 0 1 4.783-4.995L12 2zm0 2a3 3 0 0 0-2.995 2.824L9 7v3a3 3 0 0 0 5.995.176L15 10V7a3 3 0 0 0-3-3z" /> </g> </svg>
                    <svg style={{ color: "rgb(41, 112, 41)" }} xmlns="http://www.w3.org/2000/svg" width="22" height="50" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16"> <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" /> </svg>
                    <svg style={{ color: "rgb(41, 112, 41)" }} xmlns="http://www.w3.org/2000/svg" width="22" height="50" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16"> <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" /> </svg>
                </div>


            </div>
            <hr className={styles.navabrHrTag}/>

            <div className={styles.bottomDiv}>
                <div><p>Hair</p></div>
                <div><p>Skin</p></div>
                <div><p>Health</p></div>
                <div><p>Lifestyle</p></div>
                <div><p>Community</p></div>
                <div><p>Blog</p></div>
                <div><p>About Us</p></div>
                <div onClick={()=>redirect(2)}><p>All Products</p></div>
                <div><p>Account</p></div>

            </div>
        </div>
    )
}