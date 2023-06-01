import './asset-container.css'
// import yacht from '../../assets/yacht-icon.svg'
import yacht from '../../assets/yacht.png'
// import car from '../../assets/car-icon.svg'
import car from '../../assets/car.png'
// import art from '../../assets/paint-brush-drawing-icon.svg'
import art from '../../assets/painting.png'
// import land from '../../assets/farm-land-icon.svg'
import land from '../../assets/land.png'
// import property from '../../assets/company-enterprise-icon.svg'
import property from '../../assets/deal.png'
// import jewellery from '../../assets/necklace-jewellery-icon.svg'
import jewellery from '../../assets/jewelry.png'

const AssetContainer = () => {
    return (
        <div className='asset-container-wrapper'>
            <div className="asset-container">
                <section className='asset-cards'>
                    <div className='face front'>
                        <p>
                            <img className='asset-face-icons' src={car} alt='luxury-yacht' />
                        </p>
                        <p>
                            Fractional Car
                        </p>
                    </div>
                    <div className='face back'>
                        <p>
                            <img className='asset-face-icons' src={car} alt='luxury-yacht' />
                        </p>
                        <p>
                            Fractional Car
                        </p>
                        <p>Own your dream car in your budget</p>
                    </div>
                </section>
                <section className='asset-cards'>
                    <div className='face front'>
                        <p>
                            <img className='asset-face-icons' src={art} alt='luxury-yacht' />
                        </p>
                        <p>
                            Fractional Art
                        </p>
                    </div>
                    <div className='face back'>
                        <p>
                            <img className='asset-face-icons' src={art} alt='luxury-yacht' />
                        </p>
                        <p>
                            Fractional Art
                        </p>
                        <p>Own your dream art in your budget</p>
                    </div>
                </section>
                <section className='asset-cards'>
                    <div className='face front'>
                        <p>
                            <img className='asset-face-icons' src={yacht} alt='luxury-yacht' />
                        </p>
                        <p>
                            Fractional Yacht
                        </p>
                    </div>
                    <div className='face back'>
                        <p>
                            <img className='asset-face-icons' src={yacht} alt='luxury-yacht' />
                        </p>
                        <p>
                            Fractional Yacht
                        </p>
                        <p>
                            Own your dream Yacht in your budget
                        </p>
                    </div>
                </section>
                <section className='asset-cards'>
                    <div className='face front'>
                        <p>
                            <img className='asset-face-icons' src={land} alt='luxury-yacht' />
                        </p>
                        <p>
                            Fractional Land
                        </p>
                    </div>
                    <div className='face back'>
                        <p>
                            <img className='asset-face-icons' src={land} alt='luxury-yacht' />
                        </p>
                        <p>
                            Fractional Land
                        </p>
                        <p>
                            Own your dream land in your budget
                        </p>
                    </div>
                </section>
                <section className='asset-cards'>
                    <div className='face front'>
                        <p>
                            <img className='asset-face-icons' src={property} alt='luxury-yacht' />
                        </p>
                        <p>
                            Fractional Property
                        </p>
                    </div>
                    <div className='face back'>
                        <p>
                            <img className='asset-face-icons' src={property} alt='luxury-yacht' />
                        </p>
                        <p>
                            Fractional Property
                        </p>
                        <p>
                            Own your dream property in your budget
                        </p>
                    </div>
                </section>
                <section className='asset-cards'>
                    <div className='face front'>
                        <p>
                            <img className='asset-face-icons' src={jewellery} alt='luxury-yacht' />
                        </p>
                        <p>
                            Fractional Jewellery
                        </p>
                    </div>
                    <div className='face back'>
                        <p>
                            <img className='asset-face-icons' src={jewellery} alt='luxury-yacht' />
                        </p>
                        <p>
                            Fractional Jewellery
                        </p>
                        <p>
                            Own your dream jewellery in your budget
                        </p>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default AssetContainer;