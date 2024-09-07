import '../styles/SectionTwo.css';
import illustrationPhones from '../assets/illustration-phones.svg';
import bgcircle from '../assets/bg-pattern-circles.svg'

const SectionTwo = () => {
    return (
        <section className='Section-Two-One'>
                <div className='svg-two'>
                <img src={bgcircle} alt="Editor Illustration" />
                </div>
            <div className='section-two-content'>
            <div className='svg-image'>
            <img src={illustrationPhones} alt="Editor Illustration" />
            </div>
                <div className='text-two-content'>
                    <h3>State of the Art Infrastructure</h3>
                    <p>With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive</p>
                </div>

            </div>
        </section>
    );
}

export default SectionTwo;
