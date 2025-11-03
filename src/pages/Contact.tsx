import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const Contact = () => {

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
              <span className="gradient-text glow-text-primary">Join the Future</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Have a question? Want to collaborate? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mail Us Button Section */}
      <section className="pb-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center"
          >
            <div className="holo-border rounded-3xl p-12 space-y-8">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center glow-primary">
                <Mail className="w-10 h-10 text-white" />
              </div>
              
              <h2 className="text-3xl font-bold gradient-text">Get in Touch</h2>
              
              <p className="text-lg text-muted-foreground">
                Have a question or want to collaborate? We'd love to hear from you.
              </p>

              <a href="mailto:EshvynGames@gmail.com">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-lg rounded-xl glow-primary transition-all hover:scale-105"
                >
                  <Mail className="mr-2 w-5 h-5" />
                  Mail Us
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
