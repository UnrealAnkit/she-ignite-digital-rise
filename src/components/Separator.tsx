import { motion } from "framer-motion";

interface SeparatorProps {
  className?: string;
  variant?: "default" | "thin" | "thick";
}

const Separator = ({ className = "", variant = "default" }: SeparatorProps) => {
  const variants = {
    hidden: { opacity: 0, scaleX: 0 },
    visible: { 
      opacity: 1, 
      scaleX: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.div 
      className={`flex justify-center items-center py-4 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      variants={variants}
    >
      <img 
        src="https://static.wixstatic.com/media/150ccf_17575ac8a8964aa4932417dcf81d6a52~mv2.png/v1/fill/w_248,h_21,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/150ccf_17575ac8a8964aa4932417dcf81d6a52~mv2.png"
        alt="Decorative separator"
        className={`${
          variant === "thin" ? "h-3 w-32" : 
          variant === "thick" ? "h-6 w-48" : 
          "h-5 w-40"
        } object-contain opacity-80`}
      />
    </motion.div>
  );
};

export default Separator; 