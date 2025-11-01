import { motion } from "framer-motion";
import { FileText, CheckCircle, AlertTriangle, Scale } from "lucide-react";

const Terms = () => {
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
                <FileText className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl sm:text-6xl font-black gradient-text">Terms & Conditions</h1>
              <p className="text-xl text-muted-foreground">
                Last Updated: January 2025
              </p>
            </div>

            {/* Introduction */}
            <div className="holo-border rounded-2xl p-8 space-y-4">
              <h2 className="text-2xl font-bold text-primary">Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using Eshvyn Games Interactive's website, games, and services, you agree to
                be bound by these Terms & Conditions. If you do not agree, please discontinue use
                immediately.
              </p>
            </div>

            {/* Usage Rights */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div className="space-y-3">
                  <h2 className="text-2xl font-bold text-primary">Usage Rights</h2>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• You may use our games and services for personal, non-commercial purposes</li>
                    <li>• You retain ownership of user-generated content you create</li>
                    <li>• You grant us a license to use your content for service improvements</li>
                    <li>• You must not reverse-engineer, decompile, or modify our software</li>
                  </ul>
                </div>
              </div>

              {/* Intellectual Property */}
              <div className="flex items-start space-x-4">
                <Scale className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div className="space-y-3">
                  <h2 className="text-2xl font-bold text-secondary">Intellectual Property</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    All content, trademarks, logos, game assets, code, and materials on this website and in
                    our games are the exclusive property of Eshvyn Games Interactive. Unauthorized use,
                    reproduction, or distribution is strictly prohibited and may result in legal action.
                  </p>
                </div>
              </div>

              {/* User Conduct */}
              <div className="flex items-start space-x-4">
                <AlertTriangle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div className="space-y-3">
                  <h2 className="text-2xl font-bold text-primary">User Conduct</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    You agree not to:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Engage in cheating, hacking, or use of unauthorized third-party software</li>
                    <li>• Harass, abuse, or harm other users</li>
                    <li>• Distribute malicious code or viruses</li>
                    <li>• Violate any applicable laws or regulations</li>
                    <li>• Impersonate others or misrepresent your identity</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Account Termination */}
            <div className="holo-border rounded-2xl p-8 space-y-4 bg-gradient-to-br from-primary/5 to-secondary/5">
              <h2 className="text-2xl font-bold text-primary">Account Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to suspend or terminate your account at our discretion if you violate
                these terms. Termination may result in loss of access to purchased content and in-game
                assets without refund.
              </p>
            </div>

            {/* Disclaimers */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-secondary">Disclaimers</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our games and services are provided "as is" without warranties of any kind. We do not
                guarantee uninterrupted service, error-free operation, or that our services will meet your
                expectations.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                Eshvyn Games Interactive shall not be liable for any indirect, incidental, special, or
                consequential damages arising from your use of our services. Our total liability is limited
                to the amount you paid us in the past 12 months.
              </p>
            </div>

            {/* Purchases & Refunds */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-secondary">Purchases & Refunds</h2>
              <p className="text-muted-foreground leading-relaxed">
                All purchases are final unless otherwise required by law. Digital goods and in-game
                currencies are non-refundable once redeemed. For refund requests, contact
                support@eshvyn.games within 14 days of purchase.
              </p>
            </div>

            {/* Governing Law */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These terms are governed by the laws of [Your Jurisdiction]. Any disputes shall be resolved
                through binding arbitration in accordance with applicable arbitration rules.
              </p>
            </div>

            {/* Changes to Terms */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-secondary">Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update these terms periodically. Significant changes will be communicated via email
                or in-app notifications. Your continued use after changes constitutes acceptance of the new
                terms.
              </p>
            </div>

            {/* Contact */}
            <div className="holo-border rounded-2xl p-8 text-center space-y-4">
              <h2 className="text-2xl font-bold gradient-text">Questions?</h2>
              <p className="text-muted-foreground">
                For questions regarding these terms, please contact:
              </p>
              <p className="text-primary font-medium">legal@eshvyn.games</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
