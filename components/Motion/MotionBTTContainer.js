<<<<<<< HEAD
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const MotionBTTContainer = ({ children, transition }) => {
    // Motion Bottom to Top
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const elementVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            variants={elementVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={transition}
            ref={ref}
        >
            {children}
        </motion.div>
    );
};
=======
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const MotionBTTContainer = ({ children, transition }) => {
    // Motion Bottom to Top
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const elementVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            variants={elementVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={transition}
            ref={ref}
        >
            {children}
        </motion.div>
    );
};
>>>>>>> 4f286a490c31a472c67cf1490009d6b01016f100
