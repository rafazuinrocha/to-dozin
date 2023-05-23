import abacate from '../../assets/abacate.svg'
import SearchBar from '../inputs/SearchBar';
import TaskSection from './TaskSection';
import ListSection from './ListSection';
import { MenuContainer } from './style';
const Menu = () => {
    return(
        <MenuContainer> 
            <div>
                <h2> Menu </h2>
                
            </div>

                <img src={abacate}/>
                <SearchBar/>
                <nav>
                    <TaskSection/>
                    <ListSection/>
                </nav>

            
        </MenuContainer> // estrutura que deve sempre utilizar para identar
    ) 
}
export default Menu 
