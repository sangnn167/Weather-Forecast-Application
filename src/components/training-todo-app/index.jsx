import React, {useState} from "react";
import styles from "./styles.module.css";


export const Todoapp = () => {
    const [show,showinput] = useState(false);
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [savename,saveName] = useState(false);
    const [saveemail,saveEmail] = useState(false);
    
    return(
        <div className={styles.container}>
            <button  onClick={()=>{showinput(true);}}>ADD</button>
            {show === false ? null : <div >
                <div>{name}</div>
                <input  placeholder="name" disabled={savename} onChange={(e) => setName(e.target.value)}/>
                <button onClick={() => {if (name !== "") {saveName(true);}}}>Save</button>
                <div>{email}</div>
                <input placeholder="email" disabled={saveemail}  onChange={(e) => setEmail(e.target.value)}/>
                <button onClick={() => {if (email !== "") {saveEmail(true)}}}>Save</button>
            </div>
            }
        </div> 
    )
}