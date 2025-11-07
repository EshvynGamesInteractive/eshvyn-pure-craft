import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const Privacy = () => {
    return (
        <div className="relative">
            <section className="py-20 sm:py-32">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        {/* Header */}
                        <div className="text-center space-y-4">
                            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary glow-primary mb-6">
                                <Shield className="w-10 h-10 text-white" />
                            </div>
                            <h1 className="text-5xl sm:text-6xl font-black gradient-text">Privacy Policy</h1>
                            <p className="text-xl text-primary font-medium">
                                This privacy policy is effective as of 2025-02-13
                            </p>
                        </div>

                        {/* Content */}
                        <div className="holo-border rounded-3xl p-8 sm:p-12 space-y-8 text-muted-foreground leading-relaxed">
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold text-primary">Privacy Policy</h2>
                                <p>
                                    This privacy policy applies to the Dead Nights: Forest Survival Hunt app (hereby referred to as "Application") for mobile devices that was designed, created and published by Eshvyn Games Interactive (hereby referred to as "Service Provider") as a Free service. This service is intended for use "AS IS"
                                </p>
                                <p>
                                    This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects you.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold text-primary">Information Collection and Use</h2>
                                <p>
                                    The Application collects information when you download and use it. This information may include information such as:
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Your device's Internet Protocol address (e.g. IP address)</li>
                                    <li>The pages of the Application that you visit, the time and date of your visit, the time spent on those pages</li>
                                    <li>The time spent on the Application</li>
                                    <li>The operating system you use on your mobile device</li>
                                </ul>
                                <p>
                                    The Application does not gather precise information about the location of your mobile device.
                                </p>
                                <p>
                                    The Service Provider may use the information you provided to contact you from time to time to provide you with important information, required notices and marketing promotions.
                                    For a better experience, while using the Application, the Service Provider may require you to provide us with certain personally identifiable information, including but not limited to eshvyngames@gmail.com. The information that the Service Provider request will be retained by them and used as described in this privacy policy.
                                </p>
                                <p>
                                    Third-party services have their own privacy policies, which upon request we may share the information we get only for the marketing campaigns optimization and that data is not used to track the user identity and some of the information may be link to the user identity. We always ask for the concent before getting any sensitive information only to use for marketing purposes and product improvement - Somehow the third party services have there own sdk and we clearly mentioned there Privacy policy links. Kindly take a look before the consent and we also track there activities on your behalf.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold text-primary">Third Party Access</h2>
                                <p>
                                    Only aggregated, anonymized data is periodically transmitted to external services to aid the Service Provider in improving the Application and their service. The Service Provider may share your information with third parties in the ways that are described in this privacy statement.
                                </p>
                                <p>
                                    Please note that the Application utilizes third-party services that have their own Privacy Policy about handling data. Below are the links to the Privacy Policy of the third-party service providers used by the Application:
                                </p>
                                <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                                    <li>Google Play Services</li>
                                    <li>AdMob</li>
                                    <li>Google Analytics for Firebase</li>
                                    <li>Firebase Crashlytics</li>
                                    <li>Unity</li>
                                    <li>AppLovin</li>
                                    <li>Vungle</li>
                                    <li>Adjust</li>
                                    <li>Mintegral</li>
                                    <li>SolarEngine</li>
                                </ul>
                                <p className="mt-4">
                                    The Service Provider may disclose User Provided and Automatically Collected Information:
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>as required by law, such as to comply with a subpoena, or similar legal process;</li>
                                    <li>when they believe in good faith that disclosure is necessary to protect their rights, protect your safety or the safety of others, investigate fraud, or respond to a government request;</li>
                                    <li>with their trusted services providers who work on their behalf, do not have an independent use of the information we disclose to them, and have agreed to adhere to the rules set forth in this privacy statement.</li>
                                </ul>
                                <p className="mt-4">
                                    List of All the partners that we will use in the future is also given below.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold text-primary">Opt-Out Rights</h2>
                                <p>
                                    You can stop all collection of information by the Application easily by uninstalling it. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold text-primary">Data Retention Policy</h2>
                                <p>
                                    The Service Provider will retain User Provided data for as long as you use the Application and for a reasonable time thereafter. If you'd like them to delete User Provided Data that you have provided via the Application, please contact them at <span className="text-primary font-medium">eshvyngames@gmail.com</span> and they will respond in a reasonable time.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold text-primary">Children</h2>
                                <p>
                                    The Service Provider does not use the Application to knowingly solicit data from or market to children under the age of 13. The Application does not address anyone under the age of 13. The Service Provider does not knowingly collect personally identifiable information from children under 13 years of age. In the case the Service Provider discover that a child under 13 has provided personal information, the Service Provider will immediately delete this from their servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact the Service Provider (<span className="text-primary font-medium">eshvyngames@gmail.com</span>) so that they will be able to take the necessary actions.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold text-primary">Changes</h2>
                                <p>
                                    This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes to the Privacy Policy by updating this page with the new Privacy Policy. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold text-primary">Your Consent</h2>
                                <p>
                                    By using the Application, you are consenting to the processing of your information as set forth in this Privacy Policy now and as amended by us.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold text-primary">Security</h2>
                                <p>
                                    The Service Provider is concerned about safeguarding the confidentiality of your information. The Service Provider provides physical, electronic, and procedural safeguards to protect information the Service Provider processes and maintains.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold text-primary">Third-Party Service Links</h2>
                                <div className="space-y-2 text-sm">
                                    <p><strong>Advertising &amp; Monetization Partners:</strong></p>
                                    <ul className="list-disc list-inside ml-4 space-y-1">
                                        <li><strong>TikTok Ad Policy:</strong> <a href="https://ads.tiktok.com/i18n/official/policy/privacy" target="_blank" rel="noopener noreferrer">https://ads.tiktok.com/i18n/official/policy/privacy</a></li>
                                        <li><strong>Mintegral Ad Policy:</strong> <a href="https://www.mintegral.com/en/privacy" target="_blank" rel="noopener noreferrer">https://www.mintegral.com/en/privacy</a></li>
                                        <li><strong>Applovin Ad Policy:</strong> <a href="https://www.applovin.com/privacy/" target="_blank" rel="noopener noreferrer">https://www.applovin.com/privacy/</a></li>
                                        <li><strong>Ironsource Ad Policy:</strong> <a href="https://developers.ironsrc.com/ironsource-mobile/air/ironsource-mobile-privacy-policy/" target="_blank" rel="noopener noreferrer">https://developers.ironsrc.com/ironsource-mobile/air/ironsource-mobile-privacy-policy/</a></li>
                                        <li><strong>Unity Ad Policy:</strong> <a href="https://unity3d.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">https://unity3d.com/legal/privacy-policy</a></li>
                                        <li><strong>Google Ad Policy:</strong> <a href="https://policies.google.com/privacy?hl=en-US" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy?hl=en-US</a></li>
                                        <li><strong>Facebook (Meta) Ad Policy:</strong> <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer">https://www.facebook.com/privacy/policy/</a></li>
                                        <li><strong>NativeEx Ad Policy:</strong> <a href="https://www.nativex.com/en/privacy/" target="_blank" rel="noopener noreferrer">https://www.nativex.com/en/privacy/</a></li>
                                        <li><strong>Moloco Ad Policy:</strong> <a href="https://www.moloco.com/privacy-policy" target="_blank" rel="noopener noreferrer">https://www.moloco.com/privacy-policy</a></li>
                                        <li><strong>Liftoff (Vungle) Ad Policy:</strong> <a href="https://vungle.com/privacy/" target="_blank" rel="noopener noreferrer">https://vungle.com/privacy/</a></li>
                                        <li><strong>Snapchat Ad Policy:</strong> <a href="https://snap.com/en-US/privacy/privacy-policy" target="_blank" rel="noopener noreferrer">https://snap.com/en-US/privacy/privacy-policy</a></li>
                                        <li><strong>Apple Search Ads Policy:</strong> <a href="https://searchads.apple.com/privacy" target="_blank" rel="noopener noreferrer">https://searchads.apple.com/privacy</a></li>
                                        <li><strong>Inmobi Ad Policy:</strong> <a href="https://www.inmobi.com/privacy-policy" target="_blank" rel="noopener noreferrer">https://www.inmobi.com/privacy-policy</a></li>
                                    </ul>

                                    <p className="mt-4"><strong>Mediation &amp; Ad Networks:</strong></p>
                                    <ul className="list-disc list-inside ml-4 space-y-1">
                                        <li><strong>Applovin Ad Policy:</strong> <a href="https://www.applovin.com/privacy/" target="_blank" rel="noopener noreferrer">https://www.applovin.com/privacy/</a></li>
                                        <li><strong>BidMachine Ad Policy:</strong> <a href="https://bidmachine.io/privacy-policy/" target="_blank" rel="noopener noreferrer">https://bidmachine.io/privacy-policy/</a></li>
                                        <li><strong>DT Exchange Ad Policy:</strong> <a href="https://www.digitalturbine.com/privacy-policy/" target="_blank" rel="noopener noreferrer">https://www.digitalturbine.com/privacy-policy/</a></li>
                                        <li><strong>AdMob (Google) Ad Policy:</strong> <a href="https://policies.google.com/privacy?hl=en-US" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy?hl=en-US</a></li>
                                        <li><strong>Inmobi Ad Policy:</strong> <a href="https://www.inmobi.com/privacy-policy" target="_blank" rel="noopener noreferrer">https://www.inmobi.com/privacy-policy</a></li>
                                        <li><strong>Ironsource Ad Policy:</strong> <a href="https://developers.ironsrc.com/ironsource-mobile/air/ironsource-mobile-privacy-policy/" target="_blank" rel="noopener noreferrer">https://developers.ironsrc.com/ironsource-mobile/air/ironsource-mobile-privacy-policy/</a></li>
                                        <li><strong>Liftoff (Vungle) Ad Policy:</strong> <a href="https://vungle.com/privacy/" target="_blank" rel="noopener noreferrer">https://vungle.com/privacy/</a></li>
                                        <li><strong>Facebook (Meta) Ad Policy:</strong> <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer">https://www.facebook.com/privacy/policy/</a></li>
                                        <li><strong>Mintegral Ad Policy:</strong> <a href="https://www.mintegral.com/en/privacy" target="_blank" rel="noopener noreferrer">https://www.mintegral.com/en/privacy</a></li>
                                        <li><strong>Mobilefuse Ad Policy:</strong> <a href="https://mobilefuse.com/privacy-policy" target="_blank" rel="noopener noreferrer">https://mobilefuse.com/privacy-policy</a></li>
                                        <li><strong>Moloco Ad Policy:</strong> <a href="https://www.moloco.com/privacy-policy" target="_blank" rel="noopener noreferrer">https://www.moloco.com/privacy-policy</a></li>
                                        <li><strong>Ogury Ad Policy:</strong> <a href="https://ogury.com/ogury-advertising-privacy-policy/" target="_blank" rel="noopener noreferrer">https://ogury.com/ogury-advertising-privacy-policy/</a></li>
                                        <li><strong>Pubmatic Ad Policy:</strong> <a href="https://pubmatic.com/legal/privacy-policy/" target="_blank" rel="noopener noreferrer">https://pubmatic.com/legal/privacy-policy/</a></li>
                                        <li><strong>Pangle Ad Policy:</strong> <a href="https://www.pangleglobal.com/privacy/enduser-en" target="_blank" rel="noopener noreferrer">https://www.pangleglobal.com/privacy/enduser-en</a></li>
                                        <li><strong>Smaato Ad Policy:</strong> <a href="https://www.smaato.com/privacy/" target="_blank" rel="noopener noreferrer">https://www.smaato.com/privacy/</a></li>
                                        <li><strong>Unity Ad Policy:</strong> <a href="https://unity3d.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">https://unity3d.com/legal/privacy-policy</a></li>
                                        <li><strong>Yandex Ad Policy:</strong> <a href="https://yandex.com/legal/confidential/08122017/" target="_blank" rel="noopener noreferrer">https://yandex.com/legal/confidential/08122017/</a></li>
                                        <li><strong>YSO Network Ad Policy:</strong> <a href="https://www.ysonetwork.com/privacy" target="_blank" rel="noopener noreferrer">https://www.ysonetwork.com/privacy</a></li>
                                        <li><strong>Chartboost Ad Policy:</strong> <a href="https://www.chartboost.com/legal/privacy-policy/" target="_blank" rel="noopener noreferrer">https://www.chartboost.com/legal/privacy-policy/</a></li>
                                        <li><strong>Google Ad Manager Policy:</strong> <a href="https://support.google.com/admanager/answer/10075997?hl=en" target="_blank" rel="noopener noreferrer">https://support.google.com/admanager/answer/10075997?hl=en</a></li>
                                        <li><strong>HyprMX Ad Policy:</strong> <a href="https://www.hyprmx.com/privacy-policy.html" target="_blank" rel="noopener noreferrer">https://www.hyprmx.com/privacy-policy.html</a></li>
                                        <li><strong>Reklamup Ad Policy:</strong> <a href="https://reklamup.com/privacy.php" target="_blank" rel="noopener noreferrer">https://reklamup.com/privacy.php</a></li>
                                        <li><strong>A4G Ad Policy:</strong> <a href="https://a4g.com/privacy" target="_blank" rel="noopener noreferrer">https://a4g.com/privacy</a></li>
                                        <li><strong>Premium Ads Ad Policy:</strong> <a href="https://premiumads.net/privacy/" target="_blank" rel="noopener noreferrer">https://premiumads.net/privacy/</a></li>
                                        <li><strong>Gadsme Ad Policy:</strong> <a href="https://www.gadsme.com/privacy-policy" target="_blank" rel="noopener noreferrer">https://www.gadsme.com/privacy-policy</a></li>
                                        <li><strong>Adverty Ad Policy:</strong> <a href="https://adverty.com/privacy-policy-2021" target="_blank" rel="noopener noreferrer">https://adverty.com/privacy-policy-2021</a></li>
                                        <li><strong>Audiomob Ad Policy:</strong> <a href="https://audiomob.com/privacy-policy" target="_blank" rel="noopener noreferrer">https://audiomob.com/privacy-policy</a></li>
                                        <li><strong>TopOn Ad Policy:</strong> <a href="https://www.toponad.com/en/privacy-policy" target="_blank" rel="noopener noreferrer">https://www.toponad.com/en/privacy-policy</a></li>
                                        <li><strong>Playgap Ad Policy:</strong> <a href="https://playgap.io/policies/privacy" target="_blank" rel="noopener noreferrer">https://playgap.io/policies/privacy</a></li>
                                    </ul>

                                    <p className="mt-4"><strong>Analytics Partners:</strong></p>
                                    <ul className="list-disc list-inside ml-4 space-y-1">
                                        <li><strong>GameAnalytics Privacy Policy:</strong> <a href="https://gameanalytics.com/trust/privacy/privacy-notice" target="_blank" rel="noopener noreferrer">https://gameanalytics.com/trust/privacy/privacy-notice</a></li>
                                        <li><strong>AppMetrica Privacy Policy:</strong> <a href="https://appmetrica.yandex.com/docs/en/data-security/gdpr" target="_blank" rel="noopener noreferrer">https://appmetrica.yandex.com/docs/en/data-security/gdpr</a></li>
                                        <li><strong>Adjust Privacy Policy:</strong> <a href="https://www.adjust.com/terms/privacy-policy" target="_blank" rel="noopener noreferrer">https://www.adjust.com/terms/privacy-policy</a></li>
                                        <li><strong>Bytebrew Privacy Policy:</strong> <a href="https://docs.bytebrew.io/BBSettings/privacypolicy" target="_blank" rel="noopener noreferrer">https://docs.bytebrew.io/BBSettings/privacypolicy</a></li>
                                        <li><strong>Firebase Privacy Policy:</strong> <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">https://firebase.google.com/support/privacy</a></li>
                                        <li><strong>Google Analytics Privacy Policy:</strong> <a href="https://support.google.com/analytics/answer/9019185?hl=en#zippy=%2Cin-this-article" target="_blank" rel="noopener noreferrer">https://support.google.com/analytics/answer/9019185?hl=en#zippy=%2Cin-this-article</a></li>
                                        <li><strong>AppsFlyer Privacy Policy:</strong> <a href="https://www.appsflyer.com/legal/services-privacy-policy/" target="_blank" rel="noopener noreferrer">https://www.appsflyer.com/legal/services-privacy-policy/</a></li>
                                    </ul>

                                    <p className="mt-4"><strong>Platform SDKs:</strong></p>
                                    <ul className="list-disc list-inside ml-4 space-y-1">
                                        <li><strong>Facebook SDK Policy:</strong> <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer">https://www.facebook.com/privacy/policy/</a></li>
                                        <li><strong>Google Play Games SDK Policy:</strong> <a href="https://play.google/developer-content-policy/" target="_blank" rel="noopener noreferrer">https://play.google/developer-content-policy/</a></li>
                                        <li><strong>Apple Game Center SDK Policy:</strong> <a href="https://www.apple.com/legal/privacy/data/en/game-center/" target="_blank" rel="noopener noreferrer">https://www.apple.com/legal/privacy/data/en/game-center/</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* Contact */}
                            <div className="holo-border rounded-2xl p-8 text-center space-y-4 bg-gradient-to-br from-primary/5 to-secondary/5">
                                <h2 className="text-2xl font-bold gradient-text">Contact Us</h2>
                                <p>
                                    If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email at:
                                </p>
                                <p className="text-primary text-xl font-medium">EshvynGames@gmail.com</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Privacy;
