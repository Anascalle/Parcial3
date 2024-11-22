import Dashboard from "../screens/Dashboard/Dashboard";
import Detail from "../screens/Detail/Detail";
import Form from "../screens/Form/Form";
import Intro from "../screens/Intro/Intro";
import { useNavigate } from "react-router-dom";
import {createBrowserRouter,} from "react-router-dom";


export const router = createBrowserRouter([
  {
    path: "/main",
    element: <Dashboard 
    poems={[]} 
    onViewPoem={(id: string) => console.log(id)}  />,
  },
  {
    path: "/form",
    element: <Form/> 
  
  },
  {
    path: "/detail/",
    element: <Detail/> 
  
  },

  {
    path: "/",
    element: <Intro onNext={() => navigate("/next")}/>,
  },
]);