import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from 'react-router-dom';
import Dashboard from "./pages/Dashboard";
import SignIn from './pages/SignInPage';
import { useAppContext } from './contexts/appContext.js';


function App() {
  const { isLoggedIn } = useAppContext();

  const routes = createRoutesFromElements(
    <>
      <Route path='/sign-in' element={<SignIn />}></Route>

      {isLoggedIn && (<Route path='/' element={<Dashboard/>}></Route>
        )}
      
      <Route path='*' element={<Navigate to="/"/>}/>
    </>

  );
  const router = createBrowserRouter(routes);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
