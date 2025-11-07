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
                            Message Review & Delete Center
                        </p>
                    </motion.div>
                </div>
            </section>


        </div>
    );
};

export default Contact;
