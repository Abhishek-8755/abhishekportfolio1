import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import Slider from 'react-slick';
import Modal from './Modal';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import './HireMe.css'; // Import custom CSS for additional styling and animations

// Initialize AOS
AOS.init();

export default function HireMe() {
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState({});

  const handleDetails = (item) => {
    setModalData({
      thumbUrl: '', // Optional: Add an image or video if required
      details: {
        title: item.title,
        description: item.description,
        type: 'Service',
        languages: 'React, JavaScript, HTML, CSS',
        platform: 'Web',
        country: 'Global',
        url: item.btnUrl,
      },
    });
    setModal(true);
  };

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 4000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    variableWidth: true,
  };

  const hireMeServices =[
    {
      "title": "🚀 Full-Stack Web Development",
      "description": "Transform your ideas into high-performance web solutions! I specialize in React, Node.js, Express.js, MongoDB, and WordPress, ensuring seamless front-end & back-end integration.",
      "btnText": "Start Your Project",
      "btnUrl": "mailto:abhiram5002494@gmail.com"
    },
    {
      "title": "🌐 WordPress Website Development",
      "description": "Get a professional, fast, and SEO-optimized WordPress website for your business, blog, or eCommerce store. Custom themes, plugins, and integrations tailored to your needs.",
      "btnText": "Build with WordPress",
      "btnUrl": "mailto:abhiram5002494@gmail.com"
    },
    {
      "title": "🎨 UI/UX Design & Enhancement",
      "description": "Crafting visually stunning and user-friendly interfaces that boost engagement. Elevate your brand with modern, intuitive designs tailored for conversions.",
      "btnText": "Design Your Vision",
      "btnUrl": "mailto:abhiram5002494@gmail.com"
    },
    {
      "title": "⚡ Website Performance & SEO Optimization",
      "description": "Speed matters! I enhance website speed, optimize for search engines (SEO), and implement SEMrush insights to increase traffic and conversions.",
      "btnText": "Optimize Now",
      "btnUrl": "mailto:abhiram5002494@gmail.com"
    },
    {
      "title": "🌍 VPS Hosting & Multi-Port Management",
      "description": "Expert in VPS hosting, website routing, and server management. Ensuring seamless deployment and high uptime for your projects.",
      "btnText": "Secure Your Hosting",
      "btnUrl": "mailto:abhiram5002494@gmail.com"
    },
    {
      "title": "📊 Digital Marketing & GMB Optimization",
      "description": "Boost your online presence with SEO, Google My Business (GMB) optimization, social media marketing, and growth strategies for maximum reach.",
      "btnText": "Boost Your Business",
      "btnUrl": "mailto:abhiram5002494@gmail.com"
    },
    {
      "title": "🚀 Running a Startup & Business Strategy",
      "description": "Guidance on launching and scaling a startup, including product development, market positioning, and revenue strategies to accelerate success.",
      "btnText": "Get Startup Insights",
      "btnUrl": "mailto:abhiram5002494@gmail.com"
    },
    {
      "title": "🤝 Team Collaboration & Productivity Guide",
      "description": "Implement best practices for team collaboration, remote work efficiency, and using project management tools like Notion, Trello, and Slack.",
      "btnText": "Improve Team Workflow",
      "btnUrl": "mailto:abhiram5002494@gmail.com"
    },
    {
      "title": "💼 Sales & Client Onboarding",
      "description": "Streamline your sales process with efficient client onboarding, proposal strategies, and CRM management to boost conversions.",
      "btnText": "Enhance Sales Process",
      "btnUrl": "mailto:abhiram5002494@gmail.com"
    }
  ]
  ;

  return (
    <>
      <section className="hireme-section section purple-bg" id="hireme">
        <div className="container text-center">
          <SectionHeading
            miniTitle="Let's Collaborate"
            title="Hire Me for Your Next Project"
          />

          {/* Why Hire Me Section */}
          <div className="why-hire-me text-align-left" data-aos="fade-up">
            <h3>Why Hire Me?</h3>
            <p className="text-lg text-white font-light mt-3 leading-relaxed text-center space-y-3">
  <span className="block">
    🚀 <strong>Full-Stack Expertise:</strong> Proficient in <strong>React, Node.js, Express.js, MongoDB, and WordPress</strong>, ensuring seamless front-end and back-end integration for high-performance web solutions.
  </span>
  <span className="block">
    💡 <strong>Proven Track Record:</strong> Developed the <strong>EMS system at ADD-God (MERN stack)</strong> and built <strong>add-god.com (React) & addgod.in (WordPress)</strong>, mastering <strong>VPS hosting, website routing, and multi-port management</strong>.
  </span>
  <span className="block">
    📈 <strong>Results-Driven Approach:</strong> From <strong>web development</strong> to <strong>SEO, SEMrush, GMB, and social media optimization</strong>, I bring a strategic mindset to enhance performance, scalability, and digital reach.
  </span>
</p>

            <ul className="hireme-benefits text-lg text-white font-light mt-4">
              <li data-aos="fade-right" data-aos-delay="100">
                <Icon icon="fluent-mdl2:developer-tools" /> Expert in React, JavaScript, and modern frameworks
              </li>
              <li data-aos="fade-right" data-aos-delay="200">
                <Icon icon="mdi:responsive" /> Fully responsive and optimized designs
              </li>
              <li data-aos="fade-right" data-aos-delay="300">
              <li><Icon icon="mdi:speedometer" /> Performance-focused for fast loading times</li>  {/* Updated Icon */}
              </li>
              <li data-aos="fade-right" data-aos-delay="400">
                <Icon icon="icon-park-outline:security" /> Secure and scalable web solutions
              </li>
              <li data-aos="fade-right" data-aos-delay="500">
                <Icon icon="mdi:account-heart" /> Dedicated to customer satisfaction
              </li>
            </ul>
          </div>

          {/* Service Slider */}
          <div className="full-width" data-aos="fade" data-aos-duration="1200">
            <Slider {...settings} className="slider-gap-24">
              {hireMeServices.map((item, index) => (
                <div key={index} style={{ width: '416px' }} data-aos="zoom-in">
                  <div className="hireme-box text-white">
                    <div className="hireme-content">
                      <h5>{item.title}</h5>
                      <p>{item.description}</p>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleDetails(item)}
                      >
                        {item.btnText} <Icon icon="bi:arrow-right" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* Modal for More Details */}
      {modal && (
        <div className="mfp-wrap">
          <div className="mfp-container">
            <div className="mfp-bg" onClick={() => setModal(false)}></div>
            <div className="mfp-content" data-aos="fade-up">
              <button
                type="button"
                className="mfp-close"
                onClick={() => setModal(false)}
              >
                ×
              </button>
              <Modal modalData={modalData} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}