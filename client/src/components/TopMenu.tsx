import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useAppDispatch, useAppSelector } from "../store";
import { setActiveSessions } from "../store/appSlice";

export default function TopMenu() {
  const dispatch = useAppDispatch();
  const activeSessions = useAppSelector((state) => state.app.activeSessions);
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const socket = io(
      import.meta.env.VITE_SERVER_URL || "http://localhost:3001",
      {
        transports: ["websocket"],
      },
    );

    socket.on("active_sessions_count", (count: number) => {
      dispatch(setActiveSessions(count));
    });

    return () => {
      socket.disconnect();
    };
  }, [dispatch]);

  const formatDate = (date: Date) => {
    const days = [
      "Неділя",
      "Понеділок",
      "Вівторок",
      "Середа",
      "Четвер",
      "П'ятниця",
      "Субота",
    ];
    const dayName = days[date.getDay()];

    const day = String(date.getDate()).padStart(2, "0");
    const months = [
      "Січ",
      "Лют",
      "Бер",
      "Квіт",
      "Трав",
      "Черв",
      "Лип",
      "Серп",
      "Врес",
      "Жовт",
      "Лист",
      "Груд",
    ];
    const monthName = months[date.getMonth()];

    return {
      dayName,
      fullDate: `${day} ${monthName}, ${date.getFullYear()}`,
    };
  };

  const { dayName, fullDate } = formatDate(time);
  const timeString = time.toLocaleTimeString("uk-UA", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <header
      className="bg-white d-flex justify-content-between align-items-center px-5 py-2 position-relative z-3"
      style={{
        height: "70px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.05)",
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <div className="d-flex align-items-center">
        <div
          className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-2"
          style={{ width: "50px", height: "50px", fontWeight: "bold" }}
        >
          dZEN
        </div>
        <span className="fw-bold text-uppercase tracking-wider text-muted small">
          Inventory
        </span>
      </div>

      <div className="d-flex align-items-center gap-4 text-muted small">
        <div className="d-flex align-items-center bg-light px-3 py-1 rounded-pill border">
          <div
            className="position-relative d-flex align-items-center justify-content-center me-2"
            style={{ width: "12px", height: "12px" }}
          >
            <span
              className="spinner-grow text-success position-absolute"
              style={{
                width: "12px",
                height: "12px",
                animationDuration: "1.5s",
              }}
              role="status"
            ></span>
            <span
              className="rounded-circle bg-success position-relative"
              style={{ width: "10px", height: "10px" }}
            ></span>
          </div>

          <span>
            Активних сесій:{" "}
            <strong className="text-dark">{activeSessions}</strong>
          </span>
        </div>

        <div className="text-end">
          <div className="text-capitalize fw-semibold text-dark">{dayName}</div>
          <div
            className="d-flex align-items-center gap-2 text-secondary"
            style={{ fontSize: "11px" }}
          >
            <span>{fullDate}</span>
            <span className="text-dark fw-bold">{timeString}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
