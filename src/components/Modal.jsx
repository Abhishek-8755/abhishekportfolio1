import React from "react";
import parser from "html-react-parser";

export default function Modal({ modalData }) {
  const { thumbUrl, details } = modalData;
  const { title, description, type, langages, platform, country, url } = details;

  // Function to check if the file is a video
  const isVideo = (fileUrl) => {
    return fileUrl.match(/\.(mp4|webm|ogg)$/i);
  };

  return (
    <div className="px-modal">
      <div className="single-project-box">
        <div className="row align-items-start">
          <div className="col-lg-7">
            {isVideo(thumbUrl) ? (
              <video className="border w-100" controls>
                <source src={thumbUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img className="border w-100" src={thumbUrl} alt="Thumbnail" />
            )}
          </div>
          <div className="col-lg-5 pt-4 pt-lg-0">
            {title && <h4>{parser(title)}</h4>}
            {description && <p>{parser(description)}</p>}
            <div className="about-content">
              <ul>
                {type && (
                  <li className="d-flex">
                    <span className="col-4 col-lg-3">Type:</span>
                    <span>{type}</span>
                  </li>
                )}
                {langages && (
                  <li className="d-flex">
                    <span className="col-4 col-lg-3">Languages:</span>
                    <span>{langages}</span>
                  </li>
                )}
                {platform && (
                  <li className="d-flex">
                    <span className="col-4 col-lg-3">Platform:</span>
                    <span>{platform}</span>
                  </li>
                )}
                {country && (
                  <li className="d-flex">
                    <span className="col-4 col-lg-3">Country:</span>
                    <span>{country}</span>
                  </li>
                )}
                {url && (
                  <li className="d-flex">
                    <span className="col-4 col-lg-3">Live URL:</span>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      {url}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
