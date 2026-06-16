import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Orders } from "./pages/Orders";
import { Products } from "./pages/Products";
import { NavigationMenu } from "./components/NavigationMenu";
import { TopMenu } from "./components/TopMenu";

export default function App() {
  return (
    <Router>
      <div className="d-flex">
        <NavigationMenu />

        <div
          className="flex-grow-1 bg-light d-flex flex-column"
          style={{ minHeight: "100vh" }}
        >
          <TopMenu />

          <div className="flex-grow-1">
            <Routes>
              <Route path="/orders" element={<Orders />} />
              <Route path="/products" element={<Products />} />
              <Route path="*" element={<Navigate to="/orders" replace />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}
