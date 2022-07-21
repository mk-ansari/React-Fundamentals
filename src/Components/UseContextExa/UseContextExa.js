import { useState, createContext, useContext } from "react";


const UserContext = createContext()


const UseContextExa=()=> {
  const [user, setUser] = useState("Kamal");

  return (
    <UserContext.Provider value={{user, name:"ansari"}}  >
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

const Component2=()=> {

  return (
    <>
      <h1>Component2</h1>
      <Component3/>
    </>
  );
}

const Component3=()=> {
  return (
    <>
      <h1>Component3</h1>
      <Component4 />
    </>
  );
}


const Component4 = () => {
  const {user, name} = useContext(UserContext);

  return (
    <>
      <h1>Name is :{user} </h1>
      <h1>Name is :{name} </h1>
    </>
  );
};


export default UseContextExa;