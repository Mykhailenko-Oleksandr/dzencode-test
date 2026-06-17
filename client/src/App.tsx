import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Orders } from "./pages/Orders";
import { Products } from "./pages/Products";
import { NavigationMenu } from "./components/NavigationMenu";
import TopMenu from "./components/TopMenu";

export default function App() {
  return (
    <Router>
      <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
        <TopMenu />

        <div className="d-flex flex-grow-1">
          <NavigationMenu />

          <main className="flex-grow-1 bg-light">
            <Routes>
              <Route path="/orders" element={<Orders />} />
              <Route path="/products" element={<Products />} />
              <Route path="*" element={<Navigate to="/orders" replace />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}
