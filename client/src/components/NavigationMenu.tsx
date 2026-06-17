export function NavigationMenu() {
  return (
    <aside className="bg-dark text-white p-4" style={{ width: "250px" }}>
      <h5 className="mb-4">Навігація</h5>
      <ul className="list-unstyled">
        <li className="mb-2">
          <a href="/orders" className="text-white text-decoration-none">
            Приходи
          </a>
        </li>
        <li>
          <a href="/products" className="text-white text-decoration-none">
            Продукти
          </a>
        </li>
      </ul>
    </aside>
  );
}
