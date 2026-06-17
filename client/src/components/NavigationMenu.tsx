import { NavLink } from "react-router-dom";

export default function NavigationMenu() {
  return (
    <aside
      className="bg-dark text-white d-flex flex-column align-items-center py-4 border-end"
      style={{ width: "220px", minHeight: "100vh" }}
    >
      <div className="text-center mb-4 position-relative">
        <img
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=60"
          alt="User Avatar"
          className="rounded-circle border border-white border-2"
          style={{ width: "85px", height: "85px", objectFit: "cover" }}
        />
        <div
          className="position-absolute bottom-0 end-0 bg-white rounded-circle p-1 border border-dark"
          style={{ cursor: "pointer" }}
        >
          ⚙️
        </div>
      </div>

      <nav className="w-100 px-3 mt-2 flex-grow-1">
        <ul className="list-unstyled d-flex flex-column gap-1">
          <li>
            <NavLink
              to="/orders"
              className={({ isActive }) =>
                `nav-link px-3 py-2 rounded text-uppercase fw-semibold border-start border-4 small transition-all d-flex align-items-center gap-2 ${
                  isActive
                    ? "bg-secondary text-white border-success"
                    : "text-secondary border-transparent hover-bg-dark"
                }`
              }
            >
              📋 Приходи
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `nav-link px-3 py-2 rounded text-uppercase fw-semibold border-start border-4 small transition-all d-flex align-items-center gap-2 ${
                  isActive
                    ? "bg-secondary text-white border-success"
                    : "text-secondary border-transparent hover-bg-dark"
                }`
              }
            >
              📦 Продукти
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
