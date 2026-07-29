
import { useState } from "react";
import { AuthContext } from "./AuthContext";


function AuthProvider({ children }) {

  const [teacher, setTeacher] = useState(null);


  return (

    <AuthContext.Provider value={{ teacher, setTeacher }}>

      {children}

    </AuthContext.Provider>

  );

}


export default AuthProvider;