import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FrequentlyAskedQ = ({ faq }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gradient-to-t from-[#a3b18a] to-[#3a5a40] rounded-2xl shadow-lg">
      <div className="space-y-4">
        {faq.map((item, i) => {
          const isActive = i === activeIndex;

          return (
            <div
              key={i}
              className="border border-green-300 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleIndex(i)}
                className={`flex justify-between items-center w-full px-6 py-4 text-left cursor-pointer ${
                  isActive
                    ? "bg-green-100 text-green-900"
                    : "bg-white text-green-800 hover:bg-green-50"
                } focus:outline-none`}
                aria-expanded={isActive}
              >
                <span className="font-semibold text-xl md:text-2xl text-green-700 ">
                  {item.question}
                </span>
                <motion.span
                  animate={{ rotate: isActive ? 45 : 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-green-700 text-4xl select-none"
                  aria-hidden="true"
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.div
                    key="contentWrapper"
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      key="contentInner"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 50 }}
                      transition={{
                        delay: 0.2,
                        duration: 0.5,
                        ease: "easeOut",
                      }}
                      className="px-6 py-6 text-gray-300 text-xl leading-relaxed bg-black/80"
                    >
                      {item.answer}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FrequentlyAskedQ;
