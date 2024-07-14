import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const DayList = (props) => {
    const [days, setDays] = useState([]);

    useEffect(() => {
        // API 호출
        fetch("http://localhost:3001/days")
        .then(res => {
            return res.json() // res = response , res 는 http 응답이고 실제 json은 아님. 따라서 .json() json 메소드로 json으로 변환되고 promise를 반환함
        })
        .then( data => {
            setDays(data)
        })
    }, [])


  return (
    <div>
        <ul className="list_day">
          {days.map(a => (
            <li key={a.id}>
              <Link to={`/day/${a.day}`}>
                Day {a.day}
              </Link>
            </li>
          ))}
        </ul> 
        {/*<button onClick={onclick}>{count}</button>  
        <button onClick={onclick2}>day change</button>*/}  
    </div>
  );
};

export default DayList;