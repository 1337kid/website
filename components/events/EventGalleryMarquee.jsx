"use client";

import React from "react";
import Marquee from "react-fast-marquee";

const EventGalleryMarquee = ({ images }) => {
  if (!images || images.length === 0) return null;

  return (
    <div className="w-full py-12 overflow-hidden">
      <Marquee
        gradient={true}
        gradientColor={[12, 36, 68]}
        gradientWidth={150}
        speed={60}
        pauseOnHover={false}
        autoFill={true}
      >
        {images.map((image, index) => (
          <div key={index} className="mx-4 relative group">
            <div
              className="relative overflow-hidden
                         border border-white/10 bg-white/5 backdrop-blur-sm
                         h-[250px] sm:h-[350px] md:h-[450px] w-auto 
                         before:absolute before:h-4 before:w-4 sm:before:h-6 sm:before:w-6 before:border-[#FFD022] before:border-t-2 before:border-l-2 before:top-0 before:left-0 z-20
                         after:absolute after:h-4 after:w-4 sm:after:h-6 sm:after:w-6 after:border-[#FFD022] after:border-t-2 after:border-r-2 after:top-0 after:right-0 z-20"
            >
              {/* Bottom corners */}
              <div className="absolute bottom-0 left-0 h-4 w-4 sm:h-6 sm:w-6 border-[#FFD022] border-b-2 border-l-2 z-20" />
              <div className="absolute bottom-0 right-0 h-4 w-4 sm:h-6 sm:w-6 border-[#FFD022] border-b-2 border-r-2 z-20" />

              {/* Image wrapper */}
              <div className="relative h-full p-2 sm:p-3">
                <div className="relative h-full w-auto overflow-hidden">
                  <img
                    src={image}
                    alt={`Event gallery ${index}`}
                    className="h-full w-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default EventGalleryMarquee;
