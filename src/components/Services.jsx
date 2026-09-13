import { useEffect, useState } from "react";
import {Link} from "react-router-dom";

export default function Services() {

  const [showFloatingButton, setShowFloatingButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingButton(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      title: "Individual",
      description:
        "One-on-one sessions focused on your own growth, healing, and self-understanding. Whether you're working through anxiety, life transitions, or simply want a steady space to reflect, we'll go at a pace that feels right for you.",
    },
    {
      title: "Family",
      description:
        "Support for families navigating conflict, communication breakdowns, or major life changes together. We create a space where every voice in the household feels heard, and where old patterns can shift into healthier ones.",
    },
    {
      title: "Couples",
      description:
        "A space for partners to reconnect, work through recurring conflict, or rebuild trust. Sessions focus on honest communication and understanding each other's needs — whether you're facing a specific challenge or want to strengthen your relationship.",
    },
    {
      title: "Teens",
      description:
        "A comfortable, judgment-free space for teenagers to talk through what they're facing — school pressure, identity, friendships, or family stress. Sessions are tailored to feel approachable, not clinical.",
    },
  ];

  return (
    <section className="relative px-4 sm:px-6 lg:px-12 py-16 lg:py-24 max-w-5xl mx-auto">
      <div className="mb-12 lg:mb-20">
        <h4 className="text-[#6B8E6E] font-bold mb-2">What I offer</h4>
        <h1
          className="text-4xl lg:text-5xl font-bold text-green-900"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          Services
        </h1>
      </div>

      <div className="flex flex-col">
        {services.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <div key={service.title}>
              <div
                className={`flex flex-col lg:flex-row gap-4 lg:gap-16 py-10 lg:py-14 ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                <div className="lg:w-1/3">
                  <h2
                    className="text-2xl lg:text-3xl font-bold text-green-800"
                    style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                  >
                    {service.title}
                  </h2>
                </div>

                <div
                  className={`lg:w-2/3 flex flex-col gap-5 ${
                    isEven ? "" : "lg:items-end lg:text-right"
                  }`}
                >
                  <p className="text-green-800/80 text-base lg:text-lg leading-relaxed max-w-[60ch]">
                    {service.description}
                  </p>
                </div>
              </div>

              {index !== services.length - 1 && (
                <div className="border-t border-[#8FA98F]/30" />
              )}
            </div>
          );
        })}
      </div>

      {/* Sticky floating Book Appointment button */}
      {/*<a
        href="#book"
        className={`fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-40 bg-[#6B8E6E] text-white px-5 py-3 lg:px-6 lg:py-3.5 rounded-full shadow-lg text-sm lg:text-base transition-all duration-300 hover:bg-[#5A7A5D] ${
          showFloatingButton
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        Book Appointment
      </a>
      */}

    </section>
  );
}
