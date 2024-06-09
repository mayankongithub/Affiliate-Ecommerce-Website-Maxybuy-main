import { createContext, useReducer, useState } from "react";
import all_product from "../../assets/all_product";

export const StoreContext = createContext(
    {
        items: [],
        addToCart: () => { },
        deleteItemFromCart: () => { },
        setMenuState: () => { },
        menu:'',
        all_product:[]
    }
);



const reducer_Func = (currState, action) => {
    let items=currState;
    if (action.type === 'DELETE') {
        items = currState.filter((item) => item.id !== action.payload.id);
    }
    else if(action.type==='ADD'){

        let flag = true;
       items =  currState.map(element => {
            if(element.id===action.payload.id){
                flag=false;
                
                return {id:action.payload.id, itemCount:element.itemCount +1};
            }else{
                return element;
            }
            
        });

        if(flag){
            items = [...currState, {id:action.payload.id, itemCount:1}]

        }

         

    }




    return items;

}




const StoreContextProvider = ({ children }) => {

    

    const [items, dispatchItems] = useReducer(reducer_Func, []);
    const [menu, setMenu] = useState('shop');
    let [loged,setLoged]= useState(false);

    
    

    const deleteItemFromCart = (id) => {
        console.log(id+" ")

        const delteedItem = {
            type: 'DELETE',
            payload: {
                id: id
            }
        }


        dispatchItems(delteedItem);
    }

  

    const addToCart = (id) => {

        if(!loged){
            alert('Not user Logged')
            return;

        }
        console.log(items)

        const newItem = {
            type:'ADD',
            payload:{
                id:id 
            }
        }

        dispatchItems(newItem)
        

    }

    function setMenuState(newMenu){
        console.log("Set menued")
        setMenu(newMenu);

    }
    
    



    return <StoreContext.Provider value={
        {
            items: items,
            addToCart: addToCart,
            deleteItemFromCart: deleteItemFromCart,
            setMenuState:setMenuState,
            menu:menu,
            all_product:all_product,
            loged,setLoged
        }
    }>
        {children}

    </StoreContext.Provider>
}

export default StoreContextProvider;