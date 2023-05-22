import { Link } from "react-router-dom"
import TodayIcon from '../../../assets/TodayIcon.svg'
import AllIcon from '../../../assets/AllIcon.svg'
import CalendarIcon from '../../../assets/CalendarIcon.svg'
const TaskSection = () => {
    return (
        <ul>
            <li>
                Tasks
                <ul>
                    <li>
                        <Link to='/'> <img src={TodayIcon} alt="" /> Today</Link>
                    </li>
                    <li>                
                        <Link to='/all'> <img src={AllIcon} alt="" /> All</Link>
                    </li>
                    <li>
                        <Link to='/calendar'> <img src={CalendarIcon} alt="" /> Calendar</Link>
                    </li>
                </ul>
            </li>
        </ul>
        
       
    )
}
export default TaskSection