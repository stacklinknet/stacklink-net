import { useState } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

const ACCESS_KEY = "8bcff251-fecb-4839-a395-32f10bd806ac";

const Schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  email: z.string().trim().email("Please enter a valid email").max(200),
  phone: z.string().trim().min(5, "Please enter a valid phone").max(30),
  requirement: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().min(5, "Please add a short message").max(2000),
});

const INPUT =
  "w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-cyan focus:ring-2 focus:ring-cyan/30 outline-none transition-smooth placeholder:text-muted-foreground/70";

export interface InquiryFormProps {
  source?: string;
  subject?: string;
  defaultRequirement?: string;
  requirementOptions?: string[];
  compact?: boolean;
  className?: string;
  onSuccess?: () => void;
}

const DEFAULT_OPTIONS = [
  "IT Security",
  "Networking",
  "Wireless / WiFi",
  "CCTV",
  "IP Telephony",
  "IT Infrastructure",
  "Servers & Storage",
  "Technical Support",
  "Other",
];

export function InquiryForm({
  source = "Website",
  subject,
  defaultRequirement,
  requirementOptions = DEFAULT_OPTIONS,
  compact = false,
  className = "",
  onSuccess,
}: InquiryFormProps) {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") ?? ""),
      company: String(fd.get("company") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      requirement: String(fd.get("requirement") ?? defaultRequirement ?? ""),
      message: String(fd.get("message") ?? ""),
    };
    const parsed = Schema.safeParse(payload);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const k = String(issue.path[0]);
        if (!fieldErrors[k]) fieldErrors[k] = issue.message;
      }
      setErrors(fieldErrors);
      toast.error("Please fix the highlighted fields.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: subject ?? `New Inquiry from ${source} — Stacklink`,
          from_name: "Stacklink Website",
          source,
          name: parsed.data.name,
          company: parsed.data.company,
          email: parsed.data.email,
          phone: parsed.data.phone,
          requirement: parsed.data.requirement,
          message: parsed.data.message,
          botcheck: "",
        }),
      });
      const data = await res.json();
      if (data?.success) {
        setDone(true);
        toast.success("Thank you! Your inquiry has been submitted successfully. Our team will contact you shortly.");
        (e.target as HTMLFormElement).reset();
        onSuccess?.();
      } else {
        toast.error(data?.message || "Something went wrong. Please try again later.");
      }
    } catch {
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  if (done) {
    return (
      <div className={`p-8 rounded-2xl bg-cyan/10 border border-cyan/30 text-center ${className}`}>
        <CheckCircle2 className="w-12 h-12 text-cyan mx-auto mb-3" />
        <h3 className="font-display font-bold text-xl text-primary mb-1">Thank you!</h3>
        <p className="text-muted-foreground">
          Your inquiry has been submitted successfully. Our team will contact you shortly.
        </p>
        <button
          onClick={() => setDone(false)}
          className="mt-5 text-sm font-semibold text-cyan hover:underline"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`grid ${compact ? "gap-3" : "md:grid-cols-2 gap-4"} ${className}`} noValidate>
      {/* Honeypot */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      <div>
        <input name="name" placeholder="Full Name *" className={INPUT} aria-invalid={!!errors.name} />
        {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
      </div>
      <div>
        <input name="company" placeholder="Company Name" className={INPUT} />
      </div>
      <div>
        <input name="email" type="email" placeholder="Email Address *" className={INPUT} aria-invalid={!!errors.email} />
        {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
      </div>
      <div>
        <input name="phone" placeholder="Phone Number *" className={INPUT} aria-invalid={!!errors.phone} />
        {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
      </div>
      <div className={compact ? "" : "md:col-span-2"}>
        <select name="requirement" defaultValue={defaultRequirement ?? ""} className={INPUT}>
          <option value="">Service / Product Requirement</option>
          {requirementOptions.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>
      <div className={compact ? "" : "md:col-span-2"}>
        <textarea
          name="message"
          rows={compact ? 3 : 5}
          placeholder="Tell us about your project... *"
          className={INPUT}
          aria-invalid={!!errors.message}
        />
        {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
      </div>
      <button
        type="submit"
        disabled={loading}
        className={`${compact ? "" : "md:col-span-2"} inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-white font-semibold shadow-glow hover:scale-[1.02] disabled:opacity-70 disabled:scale-100 transition-smooth`}
        style={{ background: "linear-gradient(135deg, oklch(0.55 0.18 230), oklch(0.7 0.15 200))" }}
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" /> Submitting...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" /> Send Inquiry
          </>
        )}
      </button>
    </form>
  );
}
