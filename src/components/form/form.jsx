import { useState } from "react";
import {Validate} from "../../helpers/helpers.js"
import "./form_.css"
function Form(){
    const [selected,setSelected] = useState(false);
    const [info,setInfo] = useState({})
    const [submit,setSubmit] = useState(false);
 
return(
    <>
        <div className="outline" >
            <label htmlFor="">Name:</label>
            <input type="text" id="name" onChange={(e) =>setInfo({...info,name:e.target.value})}/><br></br>

            <label htmlFor="">Email:</label>
            <input type="email" id="email" onChange={(e) =>setInfo({...info,email:e.target.value})}/><br></br>

            <label htmlFor="">Age:</label>
            <input type="number" id="Age" onChange={(e) =>setInfo({...info,Age:e.target.value})}/><br></br>

            <label htmlFor="">Are you attending with a guest?</label><br></br>
            <label htmlFor="">
                    <input type="radio" name="one" onChange={() =>{
                        setSelected(!selected)
                    }} />Yes<br></br>
            </label>
            <label htmlFor="">
                    <input type="radio" name="one" onChange={() =>{
                        setSelected(!selected)
                    }}/>No<br></br>
            </label>

            {selected && <div>
                            <label htmlFor="">Guest name</label><br></br>
                            <input type="text" id="GuestName" onChange={(e) =>setInfo({...info,GuestName:e.target.value})}></input>
                        </div>}

            <input type="submit" onClick={() =>{
                let x = Validate(selected);
                setSubmit(x);
                x();
            }}/>
       </div>
       {submit && <div className="modal">
                            <div className="overlay">
                                <h3>NAME:{info.name}</h3>
                                <h3>AGE:{info.Age}</h3>
                                <h3>EMAIL:{info.email}</h3>
                                <h3>GuestName:{info.GuestName}</h3>
                            </div>
                  </div>}
    </>
    

)
}
export default Form