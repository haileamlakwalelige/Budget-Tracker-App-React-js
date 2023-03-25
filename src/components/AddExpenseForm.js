import React,{useState, useContext} from 'react'
import { AppContext } from '../context/AppContext';
import {v4 as uuidv4} from 'uuid';


const AddExpenseForm=()=>{
 const {dispatch} = useContext(AppContext);
    const [name, setName]=useState('');
    const [cost, setCost]= useState('');

    const onSubmit=(event)=>{
        event.preventDefault();

        const expensed ={
            id:uuidv4(),
            name:name,
            cost:parseInt(cost),
        };
        dispatch({
            type:"ADD",
            payload:expensed,
        });

        setCost("");
        setName("");

    }
    return(
        <form onSubmit={onSubmit}>
            <div className='row'>
                <div className="col-sm">
                    <label for="name">Name</label>
                    <input 
                    require="required"
                    type="text"
                    className='form-control'
                    id="name"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    />
                    </div>
                    <div className="col-sm">
                  <label for="cost">Cost</label>
                    <input 
                    require="required" 
                    type="text"
                    className='form-control '
                    id="cost"
                    value={cost}
                    onChange={(e)=>setCost(e.target.value)}
                    />
                </div>
                <div className='col-sm but'>
                    <button type="submit" 
                    className="save">
                        Save
                    </button>
                </div>
            </div>
        </form>
    );
}

export default AddExpenseForm;
