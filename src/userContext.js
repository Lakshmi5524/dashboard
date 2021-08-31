import React,{useState} from "react";

let userContext=React.createContext();
export default userContext;

export const UserProvider= ({childern})=>{
    const [userName,setUsername] = useState("Lakshmi");
    return <userContext.Provider value={userName}> 
       {childern}
    </userContext.Provider>
}
