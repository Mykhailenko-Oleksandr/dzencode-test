import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import NavigationMenu from "./components/NavigationMenu";
import TopMenu from "./components/TopMenu";

interface PageWrapperProps {
  children: React.ReactNode;
}

function PageWrapper({ children }: PageWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {children}
    </motion.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <TopMenu />

      <div className="d-flex flex-grow-1">
        <NavigationMenu />

        <main
          className="flex-grow-1 bg-light"
          style={{ position: "relative", overflow: "hidden" }}
        >
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route
                path="/orders"
                element={
                  <PageWrapper>
                    <Orders />
                  </PageWrapper>
                }
              />
              <Route
                path="/products"
                element={
                  <PageWrapper>
                    <Products />
                  </PageWrapper>
                }
              />
              <Route path="*" element={<Navigate to="/orders" replace />} />
            </Routes>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}
