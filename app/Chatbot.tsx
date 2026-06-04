"use client";

import { FormEvent, useMemo, useState } from "react";

const quickReplies = [
  "Driveway replacement",
  "Concrete repair",
  "Patio estimate",
  "Parking lot repair",
];

const aiAnswers: Record<string, string> = {
  "Driveway replacement": "Absolutely — AB Concrete can help with full driveway replacement in Houston. I can collect your address, timeline, and preferred appointment window so Tony can follow up fast.",
  "Concrete repair": "Got it. For concrete repair, the most helpful details are the cracked area size, whether it is a driveway/sidewalk/parking lot, and when you want the repair reviewed.",
  "Patio estimate": "A new patio is a great upgrade. I can help book a quote for patio size, finish preference, backyard access, and the best time for AB Concrete to contact you.",
  "Parking lot repair": "Commercial repair noted. AB Concrete can review damaged parking lot sections, including deeper replacement areas when needed. Let’s reserve a callback window.",
};

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "ai", text: "Hi — I’m AB Concrete’s instant AI assistant. Tell me what you need and I’ll help book your quote in seconds." },
  ]);
  const [status, setStatus] = useState("Ready to book a free quote");

  const suggestedTime = useMemo(() => "Today or next business day", []);

  function ask(topic: string) {
    setStatus("AI is replying…");
    setMessages((current) => [...current, { role: "visitor", text: topic }]);
    window.setTimeout(() => {
      setMessages((current) => [...current, { role: "ai", text: aiAnswers[topic] ?? "Thanks — I can help route that to Tony for a fast quote." }]);
      setStatus("Reply sent in seconds");
    }, 650);
  }

  function bookAppointment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "there");
    const project = String(form.get("project") || "your concrete project");
    const time = String(form.get("time") || suggestedTime);

    setStatus("Appointment request prepared");
    setMessages((current) => [
      ...current,
      { role: "visitor", text: `Book ${project} for ${time}` },
      { role: "ai", text: `Perfect, ${name}. Your ${project} request is ready for Tony. Tap the call button now to confirm the appointment at (832) 888-4109.` },
    ]);
    event.currentTarget.reset();
  }

  return (
    <aside className={`chatbot ${open ? "chatbot-open" : ""}`} aria-label="Instant AI chatbot appointment booking">
      <button className="chatbot-launcher" onClick={() => setOpen((value) => !value)} aria-expanded={open}>
        <span className="pulse" />
        <strong>Instant AI Quote</strong>
        <small>{status}</small>
      </button>

      <div className="chatbot-panel">
        <div className="chatbot-head">
          <div>
            <p className="eyebrow">AI concierge</p>
            <h3>Book a concrete quote</h3>
          </div>
          <button onClick={() => setOpen(false)} aria-label="Close chatbot">×</button>
        </div>

        <div className="chatbot-messages" aria-live="polite">
          {messages.map((message, index) => (
            <p className={message.role === "ai" ? "ai-message" : "visitor-message"} key={`${message.role}-${index}`}>{message.text}</p>
          ))}
        </div>

        <div className="quick-replies">
          {quickReplies.map((reply) => (
            <button key={reply} onClick={() => ask(reply)}>{reply}</button>
          ))}
        </div>

        <form className="booking-form" onSubmit={bookAppointment}>
          <label>
            Name
            <input name="name" placeholder="Your name" required />
          </label>
          <label>
            Project
            <select name="project" defaultValue="Driveway quote">
              <option>Driveway quote</option>
              <option>Concrete repair</option>
              <option>Patio installation</option>
              <option>Sidewalk project</option>
              <option>Parking lot repair</option>
            </select>
          </label>
          <label>
            Preferred time
            <input name="time" placeholder={suggestedTime} />
          </label>
          <button type="submit">Prepare appointment</button>
          <a href="tel:8328884109">Confirm by calling Tony</a>
        </form>
      </div>
    </aside>
  );
}
