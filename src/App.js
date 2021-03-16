import logo from "./logo.svg";
import "./App.css";
import { Calendar } from "./pages/calendar";

function App() {
  let fullYear = [];
  const getDayNames = (year: number, month: number) => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const daysInMonth = new Date(year, month, 0).getDate();

    const daysArray = [];

    for (let i = 1; i <= daysInMonth; i++) {
      const d = new Date(year, month - 1, i);
      const dayName = days[d.getDay()];
      // console.log(i + " " + dayName);
      daysArray.push({ dayNumber: i, dayName: dayName });
      // daysObject[i] = dayName; //Podria posar-ho en un ojecte i l'index com a key també. És útil?
    }
    return daysArray;
  };

  const getFullYear = () => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    for (let i = 1; i <= 12; i++) {
      const eachMonth = getDayNames(2021, i);
      fullYear.push({ [months[i - 1]]: eachMonth });
    }
    return fullYear;
  };

  getFullYear();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Calendar days={fullYear} />
      </header>
    </div>
  );
}

export default App;
