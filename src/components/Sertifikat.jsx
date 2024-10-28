import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { sertifikat } from "../constants";
import "./Sertifikat.scss";

const SertifikatCard = ({ index, name, pdf }) => {
  return (
    <motion.div
      whileInView={{ opacity: 1, transform: "none" }}
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="Sertifikat-box bg-tertiary p-5 rounded-2xl sm:w-[440px] w-full"
      >
        <iframe
          src={pdf}
          className="w-full h-[300px] w-[400px] rounded-2xl"
          frameBorder="0"
          title={name}
          scrolling="no"
        ></iframe>
        <div className="pdf-placeholder text-center">
          <p className="text-secondary text-[14px]">{name}</p>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Sertifikat = () => {
  const [data, setData] = useState(sertifikat);
  const [visibleCount, setVisibleCount] = useState(5); // Initially show 5 items

  const handleShowMore = () => {
    setVisibleCount(data.length); // Show all items when clicked
  };

  return (
    <>
      <motion.div
        whileInView={{ opacity: 1, transform: "none" }}
        variants={textVariant()}
      >
        <p className={`${styles.sectionSubText}`}>My Certificate</p>
        <h2 className={`${styles.sectionHeadText}`}>Certificates.</h2>
      </motion.div>

      <div className="sertifikat w-full flex">
        <motion.p
          whileInView={{ opacity: 1, transform: "none" }}
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] leading-[30px]"
        >
          <div className="box mt-20 flex flex-wrap justify-center">
            {data.slice(0, visibleCount).map((sertifikat, index) => (
              <div key={`sertifikat-${index}`}>
                <SertifikatCard index={index} {...sertifikat} />
              </div>
            ))}
          </div>
        </motion.p>
      </div>

      {visibleCount < data.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={handleShowMore}
            className="bg-primary text-white py-2 px-4 rounded-lg"
          >
            More
          </button>
        </div>
      )}
    </>
  );
};

export default SectionWrapper(Sertifikat, "sertifikat");
