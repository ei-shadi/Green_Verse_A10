import { createUserWithEmailAndPassword } from "firebase/auth/cordova";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.config";
import { onAuthStateChanged } from "firebase/auth";


export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

   // Create User
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

    // Auth Observer
  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })

    return () => {
      unsubscribe()
    }

  }, [user])

  const authData = {
    user,
    setUser,
    createUser,
    loading,
  }

  return <AuthContext value={authData}>
    {children}
  </AuthContext>
};

export default AuthProvider;