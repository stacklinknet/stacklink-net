import { useState, type ReactNode } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { InquiryForm } from "./InquiryForm";

export interface InquiryDialogProps {
  trigger: ReactNode;
  title?: string;
  description?: string;
  source?: string;
  defaultRequirement?: string;
  subject?: string;
}

export function InquiryDialog({
  trigger,
  title = "Request a Quote",
  description = "Tell us about your requirement — we'll respond within 24 hours.",
  source,
  defaultRequirement,
  subject,
}: InquiryDialogProps) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl text-primary">{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <InquiryForm
          source={source}
          subject={subject}
          defaultRequirement={defaultRequirement}
          onSuccess={() => setTimeout(() => setOpen(false), 2500)}
        />
      </DialogContent>
    </Dialog>
  );
}
