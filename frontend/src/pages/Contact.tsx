import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Linkedin, Instagram, Twitter, GraduationCap, Mail, Globe, Send, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Marquee from "@/components/Marquee";
import { AutoBadge, ArchDivider } from "@/components/Ornaments";
import { Reveal } from "@/components/Reveal";

type FormspreeErrorBody = { errors?: { message?: string }[]; message?: string };

const SUBJECTS = ["Research Collab", "Guest Lecture", "Art Enquiry", "General"];

const SOCIALS = [
  { label: "LinkedIn", handle: "Sangya Tyagi", href: "https://www.linkedin.com/in/sangya-tyagi", icon: Linkedin, color: "#F59E0B" },
  { label: "Google Scholar", handle: "Citations & papers", href: "https://scholar.google.com", icon: GraduationCap, color: "#10B981" },
  { label: "University Profile", handle: "University of Westminster", href: "https://www.westminster.ac.uk", icon: Globe, color: "#EC4899" },
  { label: "Instagram", handle: "Alter ego, in frames", href: "https://www.instagram.com", icon: Instagram, color: "#FBBF24" },
  { label: "X / Twitter", handle: "Hot takes, cold data", href: "https://x.com", icon: Twitter, color: "#0D9488" },
  { label: "Email", handle: "Drop a line directly", href: "mailto:sangya.tyagi@example.com", icon: Mail, color: "#A82E40" },
];

function useClock() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  return now;
}

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState(SUBJECTS[0]);
  const [message, setMessage] = useState("");
  const now = useClock();

  const fmt = (tz: string) =>
    new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", second: "2-digit", timeZone: tz }).format(now);

  const [gotcha, setGotcha] = useState("");
  const [sending, setSending] = useState(false);

  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Name, email and message are required.");
      return;
    }
    if (!endpoint || !/^https:\/\/formspree\.io\/f\//.test(endpoint) || endpoint.includes("your_form_id")) {
      toast.error("Form not configured yet — the Formspree form ID still needs to be added.");
      return;
    }
    setSending(true);
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          subject,
          message: message.trim(),
          _gotcha: gotcha,
        }),
      });
      const body = (await res.json().catch(() => ({}))) as FormspreeErrorBody;
      if (!res.ok) {
        const detail = body.errors?.map((x) => x.message).filter(Boolean).join(" ");
        throw new Error(detail || body.message || `Submission failed (${res.status}).`);
      }
      toast.success("Message delivered — शुक्रिया! Sangya will write back soon.");
      setName("");
      setEmail("");
      setMessage("");
      setSubject(SUBJECTS[0]);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "The postman lost this one. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div data-testid="contact-page" className="pt-16">
      <section className="jali-bg border-b border-henna/60 bg-panel px-6 py-20 sm:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <div className="mb-5 flex items-center justify-center gap-3">
              <AutoBadge text="Delhi Post · London Delivery" />
            </div>
            <h1 className="font-display text-4xl font-black text-cream sm:text-5xl lg:text-6xl">
              Contact Me <span className="font-editorial text-2xl font-medium text-rani sm:text-3xl">संपर्क करें</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-sand">
              Research collaborations, guest lectures, or a commission for the alter ego — every letter reaches
              the right stall.
            </p>
          </Reveal>
        </div>
      </section>

      <Marquee items={["संपर्क", "Research Collab", "Guest Lectures", "Art Enquiries", "Replies Within a Rickshaw Ride"]} />

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 py-20 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal>
            <form onSubmit={submit} className="gold-frame bg-crimsondeep p-8 sm:p-10" data-testid="contact-form">
              <h2 className="font-display text-2xl font-bold text-goldleaf">Send a Letter</h2>
              <ArchDivider className="mt-3 h-4 w-48" />

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="contact-name" className="font-editorial text-xs uppercase tracking-[0.2em] text-sand">Your Name</Label>
                  <Input
                    id="contact-name"
                    data-testid="contact-name-input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Meena Kumari"
                    className="border-henna bg-lacquer text-cream placeholder:text-sand/40 focus-visible:ring-marigold"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-email" className="font-editorial text-xs uppercase tracking-[0.2em] text-sand">Email</Label>
                  <Input
                    id="contact-email"
                    type="email"
                    data-testid="contact-email-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="border-henna bg-lacquer text-cream placeholder:text-sand/40 focus-visible:ring-marigold"
                  />
                </div>
              </div>

              <div className="mt-6 space-y-2">
                <Label className="font-editorial text-xs uppercase tracking-[0.2em] text-sand">Subject</Label>
                <div className="flex flex-wrap gap-2.5" data-testid="contact-subject-picker">
                  {SUBJECTS.map((s) => (
                    <button
                      key={s}
                      type="button"
                      data-testid={`contact-subject-${s.toLowerCase().replace(/\s+/g, "-")}`}
                      onClick={() => setSubject(s)}
                      className={`border px-4 py-2 font-editorial text-xs uppercase tracking-[0.15em] transition-colors duration-200 ${
                        subject === s
                          ? "border-goldleaf bg-marigold text-[#1A0609]"
                          : "border-henna text-sand hover:border-marigold/60 hover:text-cream"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6 space-y-2">
                <Label htmlFor="contact-message" className="font-editorial text-xs uppercase tracking-[0.2em] text-sand">Message</Label>
                <Textarea
                  id="contact-message"
                  data-testid="contact-message-input"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about the idea, the class, or the wall that needs colour…"
                  rows={6}
                  className="border-henna bg-lacquer text-cream placeholder:text-sand/40 focus-visible:ring-marigold"
                />
              </div>

              <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
                <label htmlFor="contact-gotcha">Leave this field empty</label>
                <input
                  id="contact-gotcha"
                  name="_gotcha"
                  tabIndex={-1}
                  autoComplete="off"
                  value={gotcha}
                  onChange={(e) => setGotcha(e.target.value)}
                />
              </div>

              <Button
                type="submit"
                data-testid="contact-submit-button"
                disabled={sending}
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-none border-2 border-goldleaf bg-marigold px-7 py-6 font-editorial text-sm font-bold uppercase tracking-[0.2em] text-[#1A0609] shadow-[5px_5px_0_#852636] transition-transform duration-300 hover:-translate-y-0.5 hover:bg-goldleaf sm:w-auto"
              >
                <Send className="h-4 w-4" />
                {sending ? "Posting…" : "Post the Letter"}
              </Button>
            </form>
          </Reveal>
        </div>

        <aside className="space-y-10 lg:col-span-5">
          <Reveal>
            <div className="border border-henna bg-wine p-6" data-testid="timezone-widget">
              <p className="flex items-center gap-2 font-editorial text-xs uppercase tracking-[0.25em] text-rani">
                <Clock className="h-4 w-4" /> Two Clocks, One Researcher
              </p>
              <div className="mt-5 grid grid-cols-2 gap-4">
                <div className="border border-marigold/40 bg-lacquer p-4 text-center">
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-sand/70">London</p>
                  <p className="mt-2 font-display text-2xl font-bold text-goldleaf" data-testid="london-clock">{fmt("Europe/London")}</p>
                </div>
                <div className="border border-rickshaw/40 bg-lacquer p-4 text-center">
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-sand/70">New Delhi</p>
                  <p className="mt-2 font-display text-2xl font-bold text-rickshaw" data-testid="delhi-clock">{fmt("Asia/Kolkata")}</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <h2 className="font-display text-2xl font-bold text-goldleaf">Find Me Around Town</h2>
            <div className="mt-6 space-y-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  data-testid={`social-link-${s.label.toLowerCase().replace(/[\s/]+/g, "-")}`}
                  className="group flex items-center gap-4 border border-henna bg-crimsondeep px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-marigold/60"
                >
                  <span
                    className="flex h-10 w-10 items-center justify-center border"
                    style={{ borderColor: s.color, color: s.color }}
                  >
                    <s.icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-editorial text-sm font-semibold text-cream group-hover:text-goldleaf">{s.label}</span>
                    <span className="block text-xs text-sand/80">{s.handle}</span>
                  </span>
                </a>
              ))}
            </div>
          </Reveal>
        </aside>
      </section>
    </div>
  );
}
