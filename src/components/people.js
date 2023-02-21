import {useState} from "react";
import Modal from "./modal";
import Backdrop from "./backdrop";

function People(values){
    
    const [currentState, changeState] = useState(false);

    function closeHandler(){
        changeState(false)
    }
   
    function deleteHandler(){
        changeState(true);
    }

    return(
        <div className="card">
            <h2>{values.title}</h2>
            <div className = "actions">
                <button className = "btn" onClick={deleteHandler}>Delete</button>
            </div>
            {currentState && <Modal/>}
            {currentState && <Backdrop onClick = {closeHandler}/>}
        </div>
      )
}
export default  People;