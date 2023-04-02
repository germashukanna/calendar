import s from './App.module.css';
import {Calendar} from "./components/Calendar";
import {useState} from "react";
import {formatDate} from "./utils/helpers/date/formatDate";



// locale - на каком языке будет календарь
// selectedDate - что бы мы могли выбирать дату

const App = () => {

    const [selectedDate, setSelectedDay] = useState(new Date());

    return (
        <div className={s.app_container}>
            {/*<div className={s.date__container}>{formatDate(selectedDate, 'DDD DD MMM YYYY')}</div>*/}
            <div className={s.date__container}>{formatDate(selectedDate, 'MMMM YYYY')}</div>

            <Calendar selectedDate={selectedDate} selectDate={(date) => setSelectedDay(date)} />
        </div>
    );
}

export default App;
