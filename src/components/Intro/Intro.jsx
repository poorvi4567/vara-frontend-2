import React from 'react'
import { motion } from 'framer-motion';
import './Intro.css';
const Intro = () => {
    return (
        <motion.div
        className="intro"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h2>Welcome to Our Website</h2>
        <p>
          Discover unique treasures, curated content, and stories that make our shop more than just a store. We bring culture, creativity, and community together in one place.
        </p>
      </motion.div>
    )
}

export default Intro;