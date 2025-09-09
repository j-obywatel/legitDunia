import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [date, setDate] = useState(new Date());
  const [isExpanded, setIsExpanded] = useState(false); // toggle state

  const myDate = date.toLocaleString("pl-PL", {
    minute: "numeric",
    hour: "2-digit",
  });
  const mySecondDate = date.toLocaleString("pl-PL", {
    day: "2-digit",
    month: "numeric",
    year: "numeric",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // function to toggle class
  const toggleUni = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <>
      <div className="gora"></div>
      <div className="srodek">
        <div className="projekt">
          <div className="profil"></div>
        </div>
      </div>
      <div
        className={isExpanded ? "unirozw" : "uni"}
        onClick={toggleUni}
        style={{ cursor: "pointer" }}
      />
      <div className="bodydol">
        <div className="date">
          {mySecondDate} {""}
          {myDate}
        </div>
      </div>
      <div className="dol" />
    </>
  );
}

export default App;
