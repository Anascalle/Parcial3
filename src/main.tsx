import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./slice/index.tsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./navegation/main.tsx";

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
    </Provider>

)