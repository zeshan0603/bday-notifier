import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import Upcoming from "./pages/Upcoming";
import NotFound from "./pages/NotFound";
import Peoples from "./pages/Peoples";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="upcoming" element={<Upcoming />} />
      <Route path="peoples" element={<Peoples />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
