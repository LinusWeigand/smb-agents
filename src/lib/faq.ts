/** The nine landing-page FAQ entries, in the order they are rendered.
 *  These are also mirrored into the FAQPage JSON-LD in index.html. */
export type FaqItem = { question: string; answer: string };

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What is Orakis?",
    answer:
      "Orakis is the company brain for task and knowledge management. It remembers what you and your team know, and keeps track of what's getting done: projects, tasks, decisions, context. You manage your projects and build up your knowledge as you go. And the AI tells you what needs a decision, and manages tasks for you. People come and go. Orakis stays.",
  },
  {
    question: "What problem does Orakis solve?",
    answer:
      "Most organizations lose significant time to coordination overhead. Waiting for updates, misaligned priorities, and scattered information. Orakis eliminates these bottlenecks by automating data exchange, surfacing real-time insights, and keeping every team member aligned on what matters most.",
  },
  {
    question: "How does Orakis help?",
    answer:
      "Leaders always understand what is happening across teams, projects, and people, while team members always know exactly what to work on without having to ask. This means faster and more confident decisions backed by live metrics and automated reporting instead of manual status updates. Orakis provides clarity on what to do, when to do it, and why it matters. By automating the flow of information, it removes the guesswork and lets everyone focus on high-impact work instead of chasing updates or sitting in alignment meetings.",
  },
  {
    question: "Can I try Orakis for free?",
    answer:
      "Yes. You can try Orakis free for 7 days, no credit card required. Every feature is unlocked during the trial.",
  },
  {
    question: "How long does it take to set up?",
    answer:
      "Less than 5 minutes.",
  },
  {
    question: "What tools does Orakis integrate with?",
    answer:
      "Orakis connects to the tools you already use, like Outlook, Gmail, and Google Calendar, with more integrations on the way. And through MCP, you can bring your own LLM: Claude, ChatGPT, or anything else that supports MCP, and give it direct access to Orakis.",
  },
  {
    question: "Is my data safe?",
    answer:
      "Yes. Your data is stored in Frankfurt, Germany, and encrypted in transit. We don't train on it, and we don't touch it beyond what it takes to run your workspace. Your data stays yours.",
  },
  {
    question: "Can I change or cancel my plan anytime?",
    answer:
      "Yes. You can upgrade, downgrade, or cancel anytime from your billing portal.",
  },
  {
    question: "Who are we?",
    answer:
      "Orakis is a startup currently based in Stuttgart, Germany. We're building the company brain for task and knowledge management.",
  },
];
