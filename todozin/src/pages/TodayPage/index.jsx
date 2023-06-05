import Titles from "../../componets/Titles"
import Checkbox from "../../componets/inputs/SearchBar/Checkbox"
import Menu from "../../componets/menu"
import { FlexWrapper } from "../../styles/wrapper"

const TodayPage = () => {

    return( 
        <FlexWrapper>
          <Menu/>  
          <Titles>
            Today
          </Titles>
          <Checkbox/>
        </FlexWrapper> //criar a parte de add novas atividades
    ) 
} // estrutura de função 
export default TodayPage
