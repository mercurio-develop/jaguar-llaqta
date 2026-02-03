"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Facebook, Instagram } from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

const contactSchema = z.object({
  name: z.string().min(2, "Nombre requerido"),
  email: z.string().email("Email inválido"),
  subject: z.string().optional(),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const t = useTranslations("contact");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
        reset();
        setTimeout(() => setIsSuccess(false), 5000);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20">
      <section className="py-24 bg-primary-alt">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="section-title mb-4">{t("title")}</h1>
            <p className="section-subtitle">{t("subtitle")}</p>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white mb-1">{t("address")}</h3>
                    <p className="text-muted">{t("addressValue")}</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white mb-1">{t("phone")}</h3>
                    <p className="text-muted">{t("phoneValue")}</p>
                    <a
                      href={siteConfig.links.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent text-sm hover:underline"
                    >
                      Escríbenos por WhatsApp
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white mb-1">{t("emailLabel")}</h3>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-muted hover:text-accent transition-colors"
                    >
                      {t("emailValue")}
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white mb-1">{t("hours")}</h3>
                    <p className="text-muted">{t("hoursValue")}</p>
                  </div>
                </div>
              </Card>

              {/* Social Links */}
              <div className="flex items-center gap-4 justify-center pt-4">
                <a
                  href={siteConfig.links.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-support flex items-center justify-center text-white/60 hover:text-accent hover:bg-accent/10 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href={siteConfig.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-support flex items-center justify-center text-white/60 hover:text-accent hover:bg-accent/10 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <MessageSquare className="w-6 h-6 text-accent" />
                  <h2 className="font-display text-xl text-white">{t("formTitle")}</h2>
                </div>

                {isSuccess && (
                  <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400">
                    {t("successMessage")}
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white text-sm mb-2">{t("name")}</label>
                      <input
                        {...register("name")}
                        className="w-full bg-primary border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-muted focus:outline-none focus:border-accent"
                        placeholder={t("name")}
                      />
                      {errors.name && (
                        <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-white text-sm mb-2">{t("email")}</label>
                      <input
                        {...register("email")}
                        type="email"
                        className="w-full bg-primary border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-muted focus:outline-none focus:border-accent"
                        placeholder="email@example.com"
                      />
                      {errors.email && (
                        <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-white text-sm mb-2">{t("subject")}</label>
                    <input
                      {...register("subject")}
                      className="w-full bg-primary border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-muted focus:outline-none focus:border-accent"
                      placeholder={t("subject")}
                    />
                  </div>

                  <div>
                    <label className="block text-white text-sm mb-2">{t("message")}</label>
                    <textarea
                      {...register("message")}
                      rows={6}
                      className="w-full bg-primary border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-muted focus:outline-none focus:border-accent resize-none"
                      placeholder={t("message")}
                    />
                    {errors.message && (
                      <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <Button type="submit" className="w-full sm:w-auto" isLoading={isSubmitting}>
                    <Send className="w-4 h-4 mr-2" />
                    {t("send")}
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
