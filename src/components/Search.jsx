const Search = ({ handleSubmit, handleInputChange }) => {
    return (
        <form className="d-flex" role="search" onSubmit={handleSubmit}>
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleInputChange} />
            <button className="btn btn-dark" type="submit">Search</button>
        </form>
    )
}

export default Search