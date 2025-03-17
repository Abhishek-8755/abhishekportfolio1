import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import Slider from 'react-slick';
import Modal from './Modal';

export default function Projects({ data }) {
  const [modal, setModal] = useState(false);
  const [modalType, setModalType] = useState('image');
  const [modalData, setModalData] = useState({});
  const { sectionHeading, allProjects } = data;

  const handleProjectDetails = (item, itemType) => {
    setModalData(item);
    setModalType(itemType);
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

  return (
    <>
      <section className="project-section section gray-bg" id="project">
        <div className="container">
          <SectionHeading
            miniTitle={sectionHeading.miniTitle}
            title={sectionHeading.title}
          />
          <div
            className="full-width"
            data-aos="fade"
            data-aos-duration="1200"
            data-aos-delay="400"
          >
            <Slider {...settings} className="slider-gap-24">
              {allProjects?.map((item, index) => (
                <div key={index} style={{ width: '416px' }}>
                  <div className="project-box">
                    <div className="project-media">
                      {item.thumbUrl.endsWith('.mp4') ? (
                        <video
                          src={item.thumbUrl}
                          className="project-media-content"
                          controls
                          style={{ maxHeight: '250px', width: '100%', objectFit: 'cover' }}
                        />
                      ) : (
                        <img
                          src={item.thumbUrl}
                          alt="Thumb"
                          className="project-media-content"
                          style={{ maxHeight: '250px', width: '100%', objectFit: 'cover' }}
                        />
                      )}
                      <span
                        className="gallery-link"
                        onClick={() => handleProjectDetails(item, 'image')}
                      >
                        <i>
                          <Icon icon="bi:plus" />
                        </i>
                      </span>
                    </div>
                    <div className="project-body">
                      <div className="text">
                        <h5>{item.title}</h5>
                        <span>{item.subTitle}</span>
                      </div>
                      <div className="link">
                        <span
                          className="p-link"
                          onClick={() => handleProjectDetails(item, 'details')}
                        >
                          <Icon icon="bi:arrow-right" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* Modal for Image/Video */}
      {modal && (
        <div className="mfp-wrap">
          <div className="mfp-container">
            <div className="mfp-bg" onClick={() => setModal(false)}></div>
            <div className="mfp-content">
              <button
                type="button"
                className="mfp-close"
                onClick={() => setModal(false)}
              >
                ×
              </button>
              {modalType === 'image' ? (
                modalData.thumbUrl.endsWith('.mp4') ? (
                  <video src={modalData.thumbUrl} controls autoPlay style={{ maxHeight: '400px', width: '100%' }} />
                ) : (
                  <img src={modalData.thumbUrl} alt="Thumbnail" style={{ maxHeight: '400px', width: '100%' }} />
                )
              ) : (
                <Modal modalData={modalData} />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
