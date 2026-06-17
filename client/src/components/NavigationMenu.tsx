import { NavLink } from "react-router-dom";

export default function NavigationMenu() {
  const menuItems = [
    { title: "Приходи", path: "/orders" },
    { title: "Групи", path: "/groups" },
    { title: "Продукти", path: "/products" },
    { title: "Користувачі", path: "/users" },
    { title: "Налаштування", path: "/settings" },
  ];

  return (
    <aside
      className="bg-dark text-white d-flex flex-column align-items-center py-5 border-end"
      style={{ width: "240px", minHeight: "calc(100vh - 70px)" }}
    >
      <div className="text-center mb-4">
        <div className="text-center mb-4 position-relative">
          <img
            src="images/default-avatar.webp"
            alt="User Avatar"
            className="rounded-circle border border-success border-2"
            style={{ width: "85px", height: "85px", objectFit: "cover" }}
          />
          <div
            className="position-absolute bottom-0 end-0 bg-success rounded-circle p-1 border border-dark"
            style={{ cursor: "pointer" }}
          >
            ⚙️
          </div>
        </div>
      </div>

      <nav className="w-100">
        <style>
          {`
            .nav-link {
              transition: all 0.3s ease;
              font-size: 13px;
              letter-spacing: 0.5px;
              color: #fafafa !important;
            }
            
            .nav-link::after {
              content: '';
              position: absolute;
              width: 100%;
              height: 2px;
              bottom: 0;
              left: 0;
              background-color: #198754;
              border-radius: 2px;
              
              transform: scaleX(0); 
              transform-origin: bottom center; 
              transition: transform 0.3s ease; 
            }

            .nav-link:hover {
              color: white !important;
              opacity: 1 !important;
            }
            
            .nav-link:hover::after {
              transform: scaleX(1); 
            }
            
            .nav-link.active {
              color: white !important;
              opacity: 1 !important;
            }

            .nav-link.active::after {
              transform: scaleX(1);
            }
          `}
        </style>

        <ul className="list-unstyled d-flex flex-column align-items-center gap-2">
          {menuItems.map((item) => (
            <li key={item.title} className="w-100 px-4 text-center">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `nav-link d-inline-block text-decoration-none text-uppercase fw-bold position-relative pb-2 ${
                    isActive ? "active text-white" : "text-secondary opacity-75"
                  }`
                }
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
