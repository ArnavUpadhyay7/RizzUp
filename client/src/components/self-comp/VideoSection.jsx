import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const VideoSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);

  return (
    <div className="relative items-center">
      <div className="sticky top-0 flex flex-col items-center h-screen w-full">
        <motion.video
          ref={ref}
          src="https://cdn.dribbble.com/userupload/14421441/file/original-a55e397ad959514f1913e7bbb6f8ba30.mp4"
          autoPlay
          loop
          muted
          className="mt-20 rounded-lg shadow-lg w-[40vw] h-[60vh] object-cover"
          style={{ scale }}
        />
      </div>
      <div>
        {/* Something cool coming here */}
      </div>
    </div>
  );
};

export default VideoSection;