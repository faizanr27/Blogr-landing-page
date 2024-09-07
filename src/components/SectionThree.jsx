import '../styles/SectionThree.css';
import illustrationlaptop from '../assets/illustration-laptop-desktop.svg';
import illustrationmobile from '../assets/illustration-laptop-mobile.svg';

const SectionThree = () => {
    return (
        <section className='Section-three-one'>
            <div className='cont'>
            <div className='svg-laptop'>
                <img src={illustrationlaptop} alt="" />
            </div>
            <div className='svg-mobile'>
                <img src={illustrationmobile} alt="" />
            </div>
            <div className='content-text'>
                <h3>Free, open, simple</h3>
                <p>Blogr is a free and open-source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.</p>
                        
                <h3>Powerful tooling</h3>
                <p>Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.</p>
            </div>
            </div>
        </section>
    );
}

export default SectionThree;
