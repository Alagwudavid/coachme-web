"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "How does the waitlist work?",
    answer:
      "Sign up for early access and get updates plus exclusive entry before the public launch.",
  },
  {
    question: "What is this product?",
    answer:
      "An all-in-one management platform for African experts to sell, teach, and engage with their audience.",
  },
  {
    question: "Is there a cost to join the waitlist?",
    answer:
      "No, joining the waitlist is completely free. You'll get early access and exclusive updates.",
  },
  {
    question: "What platforms does it support?",
    answer:
      "Our platform is web-based and works on all modern browsers. Mobile apps will be available after launch.",
  },
  {
    question: "Will I get early access if I join the waitlist?",
    answer:
      "Yes! Waitlist members get priority access and can start using the platform before the public launch.",
  },
  {
    question: "Who is this product for?",
    answer:
      "This platform is for African experts, coaches, educators, and content creators who want to monetize their expertise.",
  },
  {
    question: "How can I stay updated?",
    answer:
      "After joining the waitlist, you'll receive regular email updates about our progress and launch date.",
  },
  {
    question: "When will the product launch?",
    answer:
      "We're planning to launch in Q2 2026. Waitlist members will be notified first.",
  },
]

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function FAQSection() {
  const [openItem, setOpenItem] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1])
  const y = useTransform(scrollYProgress, [0, 0.5], [100, 0])
  const borderRadius = useTransform(scrollYProgress, [0, 0.5], ["60px", "40px"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.8])

  const toggleItem = (index: number) => {
    setOpenItem((prev) => (prev === index ? null : index))
  }

  return (
    <section ref={sectionRef} className="w-full min-h-page px-4 sm:px-6 lg:px-8 py-8 sm:py-20 sticky top-0 z-10">
      <motion.div
        style={{ scale, y, borderRadius, opacity }}
        className="max-w-[996] mx-auto px-4 sm:px-6 lg:px-14 py-8 sm:py-16 rounded-3xl lg:rounded-[40px] bg-primary text-background flex items-center justify-center flex-col gap-8"
      >
        {/* Header */}
        <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-none border border-background mx-auto">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-background animate-pulse" width={16} height={16} viewBox="0 0 16 16"><path fill="currentColor" d="M7.5 2A2.5 2.5 0 0 1 10 4.5c0 .523-.167.923-.423 1.24a3 3 0 0 1-.624.561l-.167.117c-.262.182-.451.317-.586.483a.88.88 0 0 0-.2.598v1a.5.5 0 0 1-1 0v-1c0-.519.168-.916.425-1.23c.185-.226.413-.404.616-.55l.173-.121c.26-.181.449-.317.584-.485A.9.9 0 0 0 9 4.5a1.5 1.5 0 0 0-3 0a.5.5 0 0 1-1 0A2.5 2.5 0 0 1 7.5 2m0 8.1a.875.875 0 1 1 0 1.75a.875.875 0 0 1 0-1.75"></path><path fill="currentColor" fillRule="evenodd" d="M7.5 14c1.18 0 2.19-.137 3.05-.389c1 .699 2.33 1.42 4.05 2.27c.916.456 1.79-.578 1.21-1.42c-.727-1.07-1.36-2.11-1.86-3.29c.736-1.17 1.04-2.61 1.04-4.17c0-3.87-1.88-7-7.5-7s-7.5 3.14-7.5 7c0 3.87 1.88 7 7.5 7zm5.61-3.36a1 1 0 0 0-.077.92c.516 1.23 1.17 2.31 1.89 3.37c-1.65-.823-2.88-1.5-3.8-2.14a1 1 0 0 0-.852-.14c-.758.221-1.67.349-2.77.349c-2.63 0-4.2-.728-5.13-1.73C1.43 10.249 1 8.789 1 6.999s.434-3.26 1.37-4.27c.927-1 2.5-1.73 5.13-1.73s4.2.728 5.13 1.73c.94 1.02 1.37 2.48 1.37 4.27c0 1.44-.284 2.68-.888 3.64z" clipRule="evenodd"></path></svg>
          <span className="text-sm font-medium text-background">Frequently Asked</span>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-4">
          {faqData.map((item, index) => {
            const isOpen = openItem === index

            return (
              <div
                key={`faq-${index}-${item.question.substring(0, 10)}`}
                className="bg-[#1a1a1a] rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-4 py-3 flex justify-between items-center gap-4 text-left"
                  aria-expanded={isOpen}
                >
                  <div className="flex-1 text-white text-base font-medium leading-6">
                    {item.question}
                  </div>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <ChevronDownIcon
                      className={`w-5 h-5 text-white transition-transform duration-300 ease-in-out ${isOpen ? "rotate-180" : "rotate-0"
                        }`}
                    />
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  <div className="px-6 pb-5 text-muted text-sm font-normal leading-6">
                    {item.answer}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
