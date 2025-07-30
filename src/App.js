import Nav from "./componant/Nav";
import Home from "./componant/Home";
import About from "./componant/About";
import Contact from "./componant/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./componant/firebase";
import { SignUp } from "./componant/SingUp";
import { Login } from "./componant/Login";

function AuthPage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="text-center p-10">
      <h1 className="text-2xl font-bold mb-4">Firebase Auth Demo</h1>
      {user ? (
        <div>
          <p>Welcome, {user.email}</p>
          <button
            className="mt-4 p-2 bg-red-500 text-white rounded"
            onClick={() => signOut(auth)}
          >
            Logout
          </button>
        </div>
      ) : (
        <>
          <Login />
          <SignUp />
        </>
      )}
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <><Nav /><Home /><Contact /></>
  },
  {
    path: "/about",
    element: <><Nav /><About /></>
  },
  {
    path: "/auth",
    element: <AuthPage />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
