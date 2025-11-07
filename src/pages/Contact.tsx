import {motion} from "framer-motion";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Textarea} from "@/components/ui/textarea";
import {useToast} from "@/hooks/use-toast";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import * as z from "zod";
import {supabase} from "@/integrations/supabase/client";
import {Mail} from "lucide-react";
import {Link} from "react-router-dom";

const contactSchema = z.object({
    name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
    email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
    message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
    const {toast} = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        try {
            const res = await fetch("/api/", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data),
            });

            const result = await res.json();
            if (!res.ok) throw new Error(result.error || "Failed to send");
            toast({
                title: "Thanks! ✅",
                description: "Your message was sent successfully!",
            });
            reset();
        } catch (err: any) {
            toast({
                variant: "destructive",
                title: "Couldn’t send message",
                description: err.message || "Try again later.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <div className="relative">
            {/* Hero Section */}
            <section className="py-20 sm:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8}}
                        className="text-center space-y-6"
                    >
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black">
                            <span className="gradient-text glow-text-primary">Join the Future</span>
                        </h1>
                        <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
                            Have a question? Want to collaborate? We'd love to hear from you.
                        </p>
                        <br/>

                    </motion.div>
                </div>
            </section>

            {/* Email Section */}
            <section className="pb-12">
                <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, delay: 0.2}}
                        className="holo-border rounded-3xl p-8 sm:p-12 text-center space-y-6"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
                            Contact us on Email
                        </h2>
                        <a
                            href="mailto:eshvyngames@gmail.com"
                            className="inline-flex items-center gap-2 text-xl sm:text-2xl text-primary hover:text-primary/80 transition-colors group"
                        >
                            <Mail className="w-6 h-6 group-hover:scale-110 transition-transform"/>
                            eshvyngames@gmail.com
                        </a>
                    </motion.div>
                </div>
            </section>
            <section className="pb-12">
                <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, delay: 0.2}}
                        className="holo-border rounded-3xl p-8 sm:p-12 text-center space-y-6"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
                            Data Center Request
                        </h2>
                         <br/>
                        <Link to="https://docs.google.com/forms/d/16HZLYMvH0guaEiVvHFtMt8TeK6-0ouS9hf-Cps5sRwo/edit">

                            <Button
                                size="lg"
                                variant="outline"
                                className="group border-2 border-primary/50 text-primary hover:bg-primary/10 px-8 py-6 text-lg rounded-xl transition-all hover:scale-105"
                            >
                                Data Delete Form
                            </Button>

                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Address Section */}
            <section className="pb-12">
                <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, delay: 0.2}}
                        className="holo-border rounded-3xl p-8 sm:p-12 text-center space-y-6"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
                            Address
                        </h2>
                        <a
                            href="https://www.google.com/maps/@31.4703689,74.3964672,15z?entry=ttu&g_ep=EgoyMDI1MTEwMi4wIKXMDSoASAFQAw%3D%3D"
                            className="inline-flex items-center gap-2 text-xl sm:text-2xl text-primary hover:text-primary/80 transition-colors group"
                        >
                            70-T COMMERCIAL PHASE-II DHA LAHORE , Lahore , Lahore , Punjab ,Postal Code:54820
                        </a>
                    </motion.div>
                </div>
                {/* Address Section */}
                <br/>
                <br/>
                <section className="pb-12">
                    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{opacity: 0, y: 30}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.8, delay: 0.2}}
                            className="holo-border rounded-3xl p-8 sm:p-12 text-center space-y-6"
                        >
                            <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
                                Phone Number
                            </h2>
                            <a
                                href="tel:+923001234567"
                                className="inline-flex items-center gap-2 text-xl sm:text-2xl text-primary hover:text-primary/80 transition-colors group">
                                +923427488332
                            </a>
                        </motion.div>
                    </div>
                </section>
            </section>
        </div>
    );
};

export default Contact;
