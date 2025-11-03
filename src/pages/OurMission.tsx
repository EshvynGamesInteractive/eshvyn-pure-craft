import { motion } from "framer-motion";
import { Target, Sparkles } from "lucide-react";

const OurMission = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black">
              <span className="gradient-text glow-text-primary">Our Mission</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="holo-border rounded-3xl p-12 space-y-8 bg-gradient-to-br from-primary/5 to-secondary/5"
          >
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center glow-primary">
              <Target className="w-10 h-10 text-white" />
            </div>
            
            <p className="text-xl sm:text-2xl text-center text-foreground leading-relaxed">
              At Eshvyn Games, our mission is simple: to set a new standard for mobile entertainment by combining <span className="text-primary font-semibold">Pure Innovation</span> with uncompromising quality. We craft unique and beautiful <span className="text-secondary font-semibold">Infinite Worlds</span> for players of all ages. We promise an engaging, high-quality, and memorable gameplay experience every time.
            </p>

            <div className="flex justify-center pt-4">
              <Sparkles className="w-8 h-8 text-primary animate-pulse" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OurMission;
