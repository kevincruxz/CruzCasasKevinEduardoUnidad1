import './Carousel.css'

const Carousel = () => {
    return (
        <div className='carrusel'>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="https://www.infobae.com/resizer/v2/LL7KGOM7VZFPZP4I6NCWUYZPUQ.jpg?auth=f96b70d3af64d8350e90eba7b1b70c08ed192ae09a269219074c1dcc8e0739fe&smart=true&width=1200&height=675&quality=85" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                    <img src="https://www.hola.com/horizon/landscape/ba894522dd5f-burrito-pollo-t.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                    <img src="https://www.infobae.com/resizer/v2/LL7KGOM7VZFPZP4I6NCWUYZPUQ.jpg?auth=f96b70d3af64d8350e90eba7b1b70c08ed192ae09a269219074c1dcc8e0739fe&smart=true&width=1200&height=675&quality=85" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carousel