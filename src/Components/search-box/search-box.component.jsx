import './search-box.styles.css';

const SearchBox = (props) => {
    let {className , placeholder , onChangeHandler } = props;

    return (
        <input className={className}
        type='search'
        placeholder={placeholder}
        onChange={onChangeHandler} />
    )
}

export default SearchBox