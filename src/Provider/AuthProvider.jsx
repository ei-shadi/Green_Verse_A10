import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";




export const AuthContext = createContext()
const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // Create User
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // Login User
  const logInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  //  Logout User
  const logOutUser = () => {
    return signOut(auth)
  }

  // Forget Password
  const forgetPassword = (email) => {
    return sendPasswordResetEmail(auth, email)
  }

  // Update Password
  const updateProfileInfo = (name, photoUrl) => {
    return updateProfile( user, { displayName: name, photoURL: photoUrl })
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

  // Auth Data
  const authData = {
    user,
    setUser,
    createUser,
    logInUser,
    logOutUser,
    loading,
    setLoading,
    forgetPassword,
    updateProfileInfo
  }

  return <AuthContext value={authData}>
    {children}
  </AuthContext>
}


export default AuthProvider;