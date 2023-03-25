import React,{useContext} from 'react';
import { AppContext } from '../context/AppContext';
const Spent=()=>{
    const {expenses} =useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item)=>{
       return  (total = total +item.cost);
    },0);
     
    return(
        <div className="alert alert-primary">
            <span>Spent  : ${totalExpenses}</span>
        </div>
    );
}

export default Spent;