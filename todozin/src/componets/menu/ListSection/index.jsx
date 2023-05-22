import { Link } from "react-router-dom"
import PersonalIcon from '../../../assets/PersonalIcon.svg'
import AddNewList from '../../../assets/AddNewList.svg'
const ListSection = () => {
    return (
        <ul>
            <li>
                List
                <ul>
                    <li>
                        <Link to='/list/personal'> <img src={PersonalIcon} alt="" /> Personal</Link>
                    </li>
                    <li>                
                        <Link to='/list/newlist'> <img src={AddNewList} alt="" /> New List</Link>
                    </li>
                </ul>
            </li>
        </ul>
        
       
    )
}
export default ListSection