import React from "react";

const FoodVideo = () => {
  return (
    <div className="FoodVideo container">
      <h2>From Farm to your door</h2>
      <div className="container vdo-cont">
        <img src="https://totalfood.greenhonchos.in/media/wysiwyg/vdo-poster.jpg" />

        <div className="overlay btn-popup">
          <img
            src="https://totalfood.greenhonchos.in/media/wysiwyg/video-icon.svg"
            alt="play"
          />
        </div>
        {/* <div className="vdoyt vdpopup">
          <div className="vdo-iframe">
            <div className="widget block block-static-block">
              <div
                data-content-type="html"
                data-appearance="default"
                data-element="main"
                data-decoded="true"
              >
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/OMPsLUf4cPU?si=v3q8EfcLP7zgdlbh"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen=""
                ></iframe>
              </div>
            </div>
          </div>
          <span className="close-icon">close</span>
        </div> */}
      </div>
    </div>
  );
};

export default FoodVideo;
