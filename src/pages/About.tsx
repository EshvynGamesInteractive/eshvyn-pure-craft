import { motion } from "framer-motion";
import { Target, Zap, Globe, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Precision Design",
      description: "Every pixel, every mechanic crafted with surgical precision and artistic vision.",
    },
    {
      icon: Zap,
      title: "Pure Innovation",
      description: "Pushing boundaries with cutting-edge technology and groundbreaking gameplay.",
    },
    {
      icon: Globe,
      title: "Infinite Worlds",
      description: "Creating vast, immersive universes that players can truly call home.",
    },
    {
      icon: Users,
      title: "Community First",
      description: "Built with and for our players, shaping the future together.",
    },
  ];

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
              <span className="gradient-text glow-text-primary">About Us</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="holo-border rounded-3xl p-8 sm:p-12 space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-bold gradient-text">About Us</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Eshvyn Games we combine Pure Innovation with uncompromising quality to craft the most memorable mobile journeys possible. We pour our heart and Pure Craft into creating Infinite Worlds—challenging ourselves to deliver unique features and stunning art. We are dedicated to providing the best entertainment possible by making sure every game we release is a masterpiece.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">What Drives Us</h2>
            <p className="text-xl text-muted-foreground">The core principles that fuel our passion</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="holo-border rounded-2xl p-8 hover:scale-105 transition-transform"
              >
                <feature.icon className="w-12 h-12 text-primary mb-4 glow-primary" />
                <h3 className="text-2xl font-bold text-primary mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground">Evolution of pure innovation</p>
          </motion.div>

          <div className="space-y-8">
            {[
              { year: "2024", title: "Foundation", desc: "Eshvyn Games Interactive is an emerging gaming studio." },
            ].map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-start space-x-6 holo-border rounded-xl p-6 hover:scale-105 transition-transform"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl font-bold glow-primary">
                    {milestone.year.slice(2)}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-primary mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
