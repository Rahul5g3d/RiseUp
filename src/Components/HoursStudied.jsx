import "./HoursStudied.css";

const HoursStudied = ({ Hours, day, Time, What }) => {
  //   const [Time, setTime] = useState("");

  //   useEffect(() => {
  //     const curtime = new Date();
  //     const formattedDate = curtime.toLocaleDateString();
  //     const formattedTime = curtime.toLocaleTimeString();
  //     setTime(`${formattedDate} ${formattedTime}`);
  //   }, []);

  return (
    <div className="container">
      <h1>Day {day}</h1>
      <hr />
      <h2> No. of Hours Worked Today: {Hours}</h2>
      <hr />
      <h3 class="spfont">Date: {Time}</h3>
      <h4>{What}</h4>
    </div>
  );
};

export default HoursStudied;
