import gina from '../../assets/gina.jpeg'
import "./About.css"

const About = () => {
  return (
    <section className="about-section">
      <h1>ABOUT</h1>
      <div className="about-container">
        {/* Text Section */}
        <div className="about-text-section">
          <h2>Hi! I'm Gina Talwar</h2>
          <p>
          At Meals By Gina, we are passionate about creating delicious, home-cooked meals for you and your family. Each week, we introduce new and exciting dishes that are sure to tantalize your taste buds. Our mission is to provide fresh, high-quality meals that bring joy to your dining table. We take pride in our culinary expertise and look forward to sharing our love for food with you.
          </p>
        </div>

        {/* Image Section */}
        <div className="image-section">
          <img
            src={gina}
            alt="Gina's Kitchen"
            className="image"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
