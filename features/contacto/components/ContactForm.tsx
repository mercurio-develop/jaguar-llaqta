"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, MessageSquare } from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { contactSchema, type ContactFormData } from "@/features/contacto/schemas";
import { submitContact } from "@/features/contacto/actions/submit-contact";

export default function ContactForm() {
  const t = useTranslations("contact");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const result = await submitContact(data);

      if (result.status === "SUCCESS") {
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
  );
}
