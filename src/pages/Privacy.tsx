import { motion } from "framer-motion";
import { Shield, Lock, Eye, Database } from "lucide-react";

const Privacy = () => {
  return (
    <div className="relative">
      <section className="py-20 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            {/* Header */}
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary glow-primary mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl sm:text-6xl font-black gradient-text">Privacy Policy</h1>
              <p className="text-xl text-muted-foreground">
                Last Updated: January 2025
              </p>
            </div>

            {/* Introduction */}
            <div className="holo-border rounded-2xl p-8 space-y-4">
              <h2 className="text-2xl font-bold text-primary">Our Commitment to Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                At Eshvyn Games Interactive, we take your privacy seriously. This policy outlines how we
                collect, use, and protect your personal information when you interact with our website and
                games.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Database className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div className="space-y-3">
                  <h2 className="text-2xl font-bold text-primary">Information We Collect</h2>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Account information (email, username) when you register</li>
                    <li>• Gameplay data to improve game balance and performance</li>
                    <li>• Device information and analytics for technical optimization</li>
                    <li>• Communication preferences and support inquiries</li>
                  </ul>
                </div>
              </div>

              {/* How We Use Your Data */}
              <div className="flex items-start space-x-4">
                <Eye className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div className="space-y-3">
                  <h2 className="text-2xl font-bold text-secondary">How We Use Your Data</h2>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• To provide and improve our gaming services</li>
                    <li>• To communicate updates, news, and support responses</li>
                    <li>• To analyze and enhance gameplay experiences</li>
                    <li>• To prevent fraud and ensure platform security</li>
                  </ul>
                </div>
              </div>

              {/* Data Protection */}
              <div className="flex items-start space-x-4">
                <Lock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div className="space-y-3">
                  <h2 className="text-2xl font-bold text-primary">Data Protection</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We implement industry-standard security measures including encryption, secure servers,
                    and regular security audits. Your data is stored securely and is never sold to third
                    parties.
                  </p>
                </div>
              </div>
            </div>

            {/* GDPR Compliance */}
            <div className="holo-border rounded-2xl p-8 space-y-4 bg-gradient-to-br from-primary/5 to-secondary/5">
              <h2 className="text-2xl font-bold text-primary">Your Rights (GDPR)</h2>
              <p className="text-muted-foreground leading-relaxed">
                You have the right to:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Access your personal data</li>
                <li>• Request data correction or deletion</li>
                <li>• Opt-out of marketing communications</li>
                <li>• Export your data in a portable format</li>
                <li>• Withdraw consent at any time</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed pt-4">
                To exercise these rights, contact us at privacy@eshvyn.games
              </p>
            </div>

            {/* Cookies */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-secondary">Cookies & Analytics</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use essential cookies to maintain session security and optional analytics cookies to
                understand user behavior. You can manage cookie preferences in your browser settings.
              </p>
            </div>

            {/* Third-Party Services */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">Third-Party Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may use trusted third-party services for analytics, payment processing, and cloud
                infrastructure. These partners are contractually obligated to protect your data and use it
                only for specified purposes.
              </p>
            </div>

            {/* Changes to Policy */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-secondary">Policy Updates</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this privacy policy periodically. We'll notify you of significant changes via
                email or prominent website notices. Continued use of our services after changes constitutes
                acceptance.
              </p>
            </div>

            {/* Contact */}
            <div className="holo-border rounded-2xl p-8 text-center space-y-4">
              <h2 className="text-2xl font-bold gradient-text">Questions?</h2>
              <p className="text-muted-foreground">
                If you have any questions about this privacy policy, please contact us at:
              </p>
              <p className="text-primary font-medium">privacy@eshvyn.games</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
