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
import jewellery from '../../assets/deal.png'
import { useNavigate } from 'react-router-dom'


const AssetContainer = () => {
    const naviagte = useNavigate();

    // background animation
    let c = 45;
    function draw() {
        document.documentElement.style.setProperty('--direction', c++ + 'deg');
        requestAnimationFrame(draw);
    }
    requestAnimationFrame(draw);
    // background animation ends


    return (
        <div className='asset-container-wrapper'>
            <div className="asset-container" data-aos='zoom-in'>
                <section className='asset-cards'>
                    <div className='face front' onClick={() => { naviagte('/property') }}
                        style={{
                            background: 'url(https://images.pexels.com/photos/3608542/pexels-photo-3608542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
                            backgroundPosition: 'center center'
                        }}>
                        <section>
                            <p >
                                <img className='asset-face-icons' src={car} alt='luxury-yacht' />
                            </p>
                            <p>
                                Fractional Car
                            </p>
                        </section>
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
                    <div className='face front'
                        style={{
                            background: 'url(https://images.pexels.com/photos/4442078/pexels-photo-4442078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
                            backgroundPosition: 'center center'
                        }}>
                        <section>
                            <p>
                                <img className='asset-face-icons' src={art} alt='luxury-yacht' />
                            </p>
                            <p>
                                Fractional Art
                            </p>
                        </section>
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
                    <div className='face front'
                        style={{
                            background: 'url(https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?auto=compress&cs=tinysrgb&w=300)',
                            backgroundPosition: 'center center',
                            backgroundSize: 'cover'
                        }}>
                        <section>
                            <p>
                                <img className='asset-face-icons' src={yacht} alt='luxury-yacht' />
                            </p>
                            <p>
                                Fractional Yacht
                            </p>
                        </section>
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
                    <div className='face front'
                        style={{
                            background: 'url(https://images.pexels.com/photos/636342/pexels-photo-636342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
                            backgroundPosition: 'center center'
                        }}>
                        <section>
                            <p>
                                <img className='asset-face-icons' src={land} alt='luxury-yacht' />
                            </p>
                            <p>
                                Fractional Land
                            </p>
                        </section>
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
                <section className='asset-cards'
                    onClick={() => { naviagte('/property-page') }}>
                    <div className='face front'
                        style={{
                            background: 'url(https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg)',
                            backgroundPosition: 'center center',
                            backgroundSize: 'cover'
                        }}>
                        <section>
                            <p>
                                <img className='asset-face-icons' src={property} alt='luxury-yacht' />
                            </p>
                            <p>
                                Fractional Property
                            </p>
                        </section>
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
                    <div className='face front'
                        style={{
                            background: 'url(https://images.pexels.com/photos/248077/pexels-photo-248077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
                            backgroundPosition: 'center center',
                            backgroundSize: 'cover'
                        }}>
                        <section>
                            <p>
                                <img className='asset-face-icons' src={jewellery} alt='luxury-yacht' />
                            </p>
                            <p>
                                Fractional Jewellery
                            </p>
                        </section>
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