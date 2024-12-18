const Movie = ({ allMovie }) => {
    return (
        <div className="container">
            <h1 className="my-4">Show your favorite movies</h1>
            <div className="row">
                {allMovie.allMovie && allMovie.allMovie.map((movie, index) => (
                    <div style={{ width: '20%', padding: '20px', }} key={index}>
                        <div className="card" style={{ height : '450px'}}>
                            <img src={movie.Poster} alt="" style={{ height: '350px', objectFit: 'cover' }} className="card-img-top" onError={(event) => {
                                event.target.src = "https://cdn.pixabay.com/photo/2021/01/10/20/03/laptop-5906264_1280.png"
                            }} />
                            <div className="card-body text-center d-flex justify-content-center align-items-center" style={{ backgroundColor : '#abdbe3', color: 'white' }}>
                                <div className="card-text">{movie.Title}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Movie