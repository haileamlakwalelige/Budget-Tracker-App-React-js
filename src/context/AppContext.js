import {createContext, useReducer} from 'react';

const AppReducer =(state, action)=>{
    switch(action.type){
        case "ADD":
            return{
                ...state,
                expenses: [...state.expenses, action.payload],
            };
        case "DELETE_EXPENSE":
            return{
                ...state,
                expenses: state.expenses.filter((expense)=>
                    expense.id !== action.payload,
                ),
            };
        default:
            return state;
    }
}


const initialState={
    budget:3000,
    expenses:[
        {
            id: 12, name:"shopping", cost:500
        },
        {
            id: 13, name:"Holiday", cost:500
        },
        {
            id:14,  name:"Room",  cost:1000
        },
        {
            id:15,  name:"Food",  cost:2000
        }
    ]
}

export const AppContext = createContext();

export const AppProvider = (props) =>{
    const [state, dispatch] = useReducer( AppReducer, initialState);

    return(
        <AppContext.Provider value={{
            budget:state.budget,
            expenses: state.expenses,
            dispatch, 
        }} >
            {props.children}
        </AppContext.Provider>
    )
}



