const Search = () => {
    return (
        <header>
            <h2 className="header__title">Search. Explore. Buy.</h2>
            <input
                type="text"
                className="header__search"
                placeholder="Enter an address, neighborhood, city, or ZIP code"
            />
        </header>
    );
}

export default Search;