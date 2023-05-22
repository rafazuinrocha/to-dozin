import SearchIcon from '../../../assets/SearchIcon.svg'
const SearchBar =() => {
    return (
        <form>
                <input
                    type="text"
                    placeholder="Search..."
                    value=''
                    onChange=''
                />
                <button type="submit">
                    <img src={SearchIcon} alt='Search'/>
                
                </button>
                
        </form>        
     
    )
}
export default SearchBar