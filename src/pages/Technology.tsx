import { motion } from "framer-motion";
import { useState } from "react";
import { Cpu, Code, Layers, Sparkles, Database } from "lucide-react";
import unityLogo from "@/assets/logos/unity.png";
import unrealLogo from "@/assets/logos/unreal.png";
import blenderLogo from "@/assets/logos/blender.png";
import mayaLogo from "@/assets/logos/maya.png";
import maxLogo from "@/assets/logos/3dsmax.png";

const Technology = () => {
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);

  const technologies = [
    {
      icon: Cpu,
      title: "Next-Gen Engines",
      description: "Built on Unity and Unreal Engine 5, leveraging cutting-edge rendering and physics systems.",
      color: "text-primary",
    },
    {
      icon: Sparkles,
      title: "AI-Driven Systems",
      description: "Advanced AI for dynamic storytelling, procedural generation, and intelligent NPCs.",
      color: "text-secondary",
    },
    {
      icon: Layers,
      title: "Scalable Architecture",
      description: "Cloud-native infrastructure supporting millions of concurrent players worldwide.",
      color: "text-primary",
    },
    {
      icon: Code,
      title: "Modern Tech Stack",
      description: "Utilizing C++, C#, and cutting-edge web technologies for seamless cross-platform experiences.",
      color: "text-secondary",
    },
    {
      icon: Database,
      title: "Big Data Analytics",
      description: "Player behavior analytics to continuously improve gameplay and balance.",
      color: "text-primary",
    },
  ];

  const tools = [
    {
      name: "Unity",
      logo: unityLogo,
      tooltip: "Powered by Unity — Real-Time Engine",
      delay: 0,
    },
    {
      name: "Unreal Engine",
      logo: unrealLogo,
      tooltip: "Powered by Unreal Engine 5 — Next-Gen Visuals",
      delay: 0.1,
    },
    {
      name: "Blender",
      logo: blenderLogo,
      tooltip: "Crafted in Blender — Open-Source 3D Creation",
      delay: 0.2,
    },
    {
      name: "Maya",
      logo: mayaLogo,
      tooltip: "Modeled in Autodesk Maya — Industry Standard",
      delay: 0.3,
    },
    {
      name: "3ds Max",
      logo: maxLogo,
      tooltip: "Designed in 3ds Max — Professional 3D Modeling",
      delay: 0.4,
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
              <span className="gradient-text glow-text-primary">Powering the</span>
              <br />
              <span className="text-muted-foreground">Future of Play</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
              At Eshvyn Games Interactive, we merge creativity with cutting-edge technology. Our worlds
              are crafted using industry-leading engines and 3D tools that define the future of
              interactive entertainment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tools & Engines Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
              Our Creative Arsenal
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Industry-leading tools that bring our visions to life
            </p>
          </motion.div>

          {/* Animated Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
            {tools.map((tool) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: tool.delay, duration: 0.5 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredTool(tool.name)}
                onMouseLeave={() => setHoveredTool(null)}
                className="relative group"
              >
                <div className="holo-border rounded-3xl p-6 bg-gradient-to-br from-card to-background hover:scale-110 transition-all duration-300 cursor-pointer">
                  <div className="relative">
                    <img
                      src={tool.logo}
                      alt={tool.name}
                      className="w-full h-auto transition-all duration-300 group-hover:glow-primary"
                    />
                    
                    {/* Animated glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none" />
                  </div>
                </div>

                {/* Tooltip */}
                {hoveredTool === tool.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 z-50 whitespace-nowrap"
                  >
                    <div className="bg-card/95 backdrop-blur-sm border border-primary/50 rounded-lg px-4 py-2 shadow-lg shadow-primary/20">
                      <p className="text-sm text-primary font-medium">{tool.tooltip}</p>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Description Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              From high-fidelity assets modeled in Maya and 3ds Max, to lifelike environments crafted in Blender, and gameplay powered by Unity and Unreal Engine — our technology pipeline is built for limitless immersion and purity of experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="holo-border rounded-2xl p-8 hover:scale-105 transition-transform"
              >
                <tech.icon className={`w-12 h-12 ${tech.color} mb-4 glow-primary`} />
                <h3 className={`text-2xl font-bold ${tech.color} mb-3`}>{tech.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technology;
