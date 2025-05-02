import { motion, AnimatePresence } from "framer-motion";

const CurtainWithTrail = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden flex justify-center items-center bg-slighly z-[40]">
      <AnimatePresence>
        <>
          <span className="loader"></span>
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, delay: 1 }}
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              height: "100%",
              width: "100%",
              backgroundColor: "#20212b",
              zIndex: 8,
            }}
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, delay: 1.5 }}
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              height: "100%",
              width: "100%",
              zIndex: 9,
            }}
            className="bg-background"
          />
        </>
      </AnimatePresence>
    </div>
  );
};

export default CurtainWithTrail;
