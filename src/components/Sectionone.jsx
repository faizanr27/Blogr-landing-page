import '../styles/SectionOne.css';
import editorDesktop from '../assets/illustration-editor-desktop.svg';
import editormobile from '../assets/illustration-editor-mobile.svg';

const SectionOne = () => {
    return (
        <section className='Section-one'>

            <div className='heading'>
                <h2>Design for the Future</h2>
            </div>
            <div className='section-content'>
                <div className='svg-mob'>
                    <img src={editormobile} alt="Editor Illustration" />
                </div>
               <div className='svg'>
                    <img src={editorDesktop} alt="Editor Illustration" />
                </div>
                <div className='text-content'>
                    <h3>Introducing an extensible editor</h3>
                    <p>Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.</p>
                        
                    <h3>Robust content management</h3>
                    <p>Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you're in full control.</p>
                </div>

            </div>
        </section>
    );
}

export default SectionOne;
