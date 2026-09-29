import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name (at least 2 characters)"),
  email: z.string().email("Please enter a valid email address"),
  organization: z.string().optional(),
  purpose: z.string().min(1, "Please select the purpose of your message"),
  message: z.string().min(10, "Please provide a brief message (at least 10 characters)"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      organization: "",
      purpose: "Collaboration",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate accessible submission
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
  };

  if (isSubmitted) {
    return (
      <div
        className="rounded-[20px] border border-white/20 bg-white/10 p-8 text-center text-[#FFFFFF]"
        role="status"
        aria-live="polite"
      >
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#DCEEFF]/20 text-[#DCEEFF]">
          <CheckCircle2 className="h-8 w-8 text-[#DCEEFF]" />
        </div>
        <h3 className="mt-4 text-xl font-bold tracking-tight text-[#FFFFFF]">
          Message Sent Successfully
        </h3>
        <p className="mt-2 text-sm text-[#DCEEFF]/90 leading-relaxed max-w-md mx-auto">
          Thank you for reaching out. Amin Jan or his coordination team will review your message and respond promptly.
        </p>
        <button
          type="button"
          onClick={() => setIsSubmitted(false)}
          className="mt-6 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-semibold text-[#FFFFFF] transition-colors hover:bg-white/20 cursor-pointer"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="space-y-4 rounded-[24px] border border-white/15 bg-white/10 p-6 sm:p-8 shadow-md backdrop-blur-xs"
      aria-label="Contact Inquiries Form"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Name Field */}
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-semibold uppercase tracking-wider text-[#FFFFFF]/90"
          >
            Your Name <span className="text-[#DCEEFF]">*</span>
          </label>
          <input
            id="name"
            type="text"
            {...register("name")}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            placeholder="e.g. Sarah Khan"
            className={`mt-1.5 w-full rounded-xl border bg-white/10 px-4 py-3 text-sm text-[#FFFFFF] placeholder:text-white/40 focus:border-[#4A9FE3] focus:bg-white/15 focus:outline-none transition-colors ${
              errors.name ? "border-red-300" : "border-white/20"
            }`}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 flex items-center gap-1 text-xs text-red-300">
              <AlertCircle className="h-3.5 w-3.5" />
              <span>{errors.name.message}</span>
            </p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-semibold uppercase tracking-wider text-[#FFFFFF]/90"
          >
            Email Address <span className="text-[#DCEEFF]">*</span>
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            placeholder="e.g. sarah@example.com"
            className={`mt-1.5 w-full rounded-xl border bg-white/10 px-4 py-3 text-sm text-[#FFFFFF] placeholder:text-white/40 focus:border-[#4A9FE3] focus:bg-white/15 focus:outline-none transition-colors ${
              errors.email ? "border-red-300" : "border-white/20"
            }`}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 flex items-center gap-1 text-xs text-red-300">
              <AlertCircle className="h-3.5 w-3.5" />
              <span>{errors.email.message}</span>
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Organization Field */}
        <div>
          <label
            htmlFor="organization"
            className="block text-xs font-semibold uppercase tracking-wider text-[#FFFFFF]/90"
          >
            Organization / Institution <span className="text-[#DCEEFF]/60 text-[10px]">(Optional)</span>
          </label>
          <input
            id="organization"
            type="text"
            {...register("organization")}
            placeholder="e.g. University / Youth Initiative"
            className="mt-1.5 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-[#FFFFFF] placeholder:text-white/40 focus:border-[#4A9FE3] focus:bg-white/15 focus:outline-none transition-colors"
          />
        </div>

        {/* Purpose Field */}
        <div>
          <label
            htmlFor="purpose"
            className="block text-xs font-semibold uppercase tracking-wider text-[#FFFFFF]/90"
          >
            Purpose of Contact <span className="text-[#DCEEFF]">*</span>
          </label>
          <select
            id="purpose"
            {...register("purpose")}
            className="mt-1.5 w-full rounded-xl border border-white/20 bg-[#082C4A] px-4 py-3 text-sm text-[#FFFFFF] focus:border-[#4A9FE3] focus:outline-none transition-colors"
          >
            <option value="Collaboration">Initiative Collaboration</option>
            <option value="Speaking Opportunity">Speaking / Panel Invitation</option>
            <option value="Entrepreneurship Program">Entrepreneurship &amp; PEP Inquiry</option>
            <option value="Youth Mentorship">Youth Mentorship / Workshop</option>
            <option value="General Conversation">Professional Inquiry</option>
          </select>
        </div>
      </div>

      {/* Message Field */}
      <div>
        <label
          htmlFor="message"
          className="block text-xs font-semibold uppercase tracking-wider text-[#FFFFFF]/90"
        >
          Message <span className="text-[#DCEEFF]">*</span>
        </label>
        <textarea
          id="message"
          rows={4}
          {...register("message")}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          placeholder="Please share details about your proposal, event, or inquiry..."
          className={`mt-1.5 w-full rounded-xl border bg-white/10 px-4 py-3 text-sm text-[#FFFFFF] placeholder:text-white/40 focus:border-[#4A9FE3] focus:bg-white/15 focus:outline-none transition-colors ${
            errors.message ? "border-red-300" : "border-white/20"
          }`}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 flex items-center gap-1 text-xs text-red-300">
            <AlertCircle className="h-3.5 w-3.5" />
            <span>{errors.message.message}</span>
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-[#FFFFFF] py-3.5 px-6 text-sm font-bold text-[#0B3A63] shadow-sm transition-all hover:bg-[#DCEEFF] hover:text-[#082C4A] active:scale-[0.99] disabled:opacity-50 cursor-pointer"
      >
        <Send className="h-4 w-4 text-[#0B3A63]" />
        <span>{isSubmitting ? "Sending Message..." : "Send Message"}</span>
      </button>
    </form>
  );
};
