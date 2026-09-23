import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [date, setDate] = useState(new Date());

  const myDate = date.toLocaleString("pl-PL", {
    minute: "numeric",
    hour: "2-digit",
    second: "2-digit",
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

  return (
    <>
      <div className="whitespace" />
      <div className="gora" />
      <div className="nowa">
        <div className="date">
          Czas: {myDate} {""}
          {mySecondDate}
        </div>
        <div className="profil"></div>
        <div className="projekt"></div>
      </div>
      <div className="dol" />
    </>
  );
}

export default App;
