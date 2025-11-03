import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const Careers = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center justify-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black">
              <span className="gradient-text glow-text-primary">Careers</span>
            </h1>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="holo-border rounded-3xl p-12 space-y-6"
            >
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center glow-primary">
                <Briefcase className="w-10 h-10 text-white" />
              </div>
              
              <p className="text-2xl sm:text-3xl text-muted-foreground">
                No open positions right now — check back soon.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
