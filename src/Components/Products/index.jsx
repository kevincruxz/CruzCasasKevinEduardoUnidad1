import Burro from '../Burro'
import './Products.css'

const Products = () => {
    return (
        <div className='productos container'>
            <h2 className='text-center my-5'>Nuestros Burros</h2>
            <div className='d-flex gap-4 flex-wrap justify-content-center'>
                <Burro image="https://www.infobae.com/resizer/v2/LL7KGOM7VZFPZP4I6NCWUYZPUQ.jpg?auth=f96b70d3af64d8350e90eba7b1b70c08ed192ae09a269219074c1dcc8e0739fe&smart=true&width=1200&height=675&quality=85" nombre="Burro Chido" precio={199} />

                <Burro image="https://assets.elgourmet.com/wp-content/uploads/2023/03/burri_mURAoKIMpxNLG3aec7gWy2BZ5DH4Pu-1024x683.png.webp" nombre="Combo el Pepe" precio={199} />

                <Burro image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK-3kIjE0DBCKemnSOKxPuAnBrBZVRIaYBGw&s" nombre="Burro Chido" precio={199} />

                <Burro image="https://www.infobae.com/resizer/v2/LL7KGOM7VZFPZP4I6NCWUYZPUQ.jpg?auth=f96b70d3af64d8350e90eba7b1b70c08ed192ae09a269219074c1dcc8e0739fe&smart=true&width=1200&height=675&quality=85" nombre="Burro Chido" precio={199} />

                <Burro image="https://www.infobae.com/resizer/v2/LL7KGOM7VZFPZP4I6NCWUYZPUQ.jpg?auth=f96b70d3af64d8350e90eba7b1b70c08ed192ae09a269219074c1dcc8e0739fe&smart=true&width=1200&height=675&quality=85" nombre="Burro Chido" precio={199} />

                <Burro image="https://www.infobae.com/resizer/v2/LL7KGOM7VZFPZP4I6NCWUYZPUQ.jpg?auth=f96b70d3af64d8350e90eba7b1b70c08ed192ae09a269219074c1dcc8e0739fe&smart=true&width=1200&height=675&quality=85" nombre="Burro Chido" precio={199} />
            </div>
            
        </div>
    )
}

export default Products