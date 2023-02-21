import {useState} from "react";
import Modal from "./modal";
import Backdrop from "./backdrop";

function People(values){
    
    const [currentState, changeState] = useState(true);
    function deleteHandler(){
        changeState(true);
    }
    function closeModal(){
        changeState(false)
    }
    return(
        <div className="card">
            <h2>{values.title}</h2>
            <div className = "actions">
                <button className = "btn" onClick={deleteHandler}>Delete</button>
            </div>
            {currentState && <Modal/>}
            {currentState && <Backdrop  onClick= {closeModal()}/>}            
        </div>
      )
}
export default  People;