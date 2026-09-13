import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#EFE9DC] border-t border-[#8FA98F]/30 mt-16">

      {/* Crisis support notice */}
      <div className="bg-[#6B8E6E]/10 border-b border-[#8FA98F]/30 px-4 sm:px-6 lg:px-12 py-4 text-center">
        <p className="text-green-900 text-sm lg:text-base">
          If you or someone you know is in crisis, call or text{" "}
          <a href="tel:988" className="font-bold underline hover:text-[#A67C52]">988</a>
          {" "}(Suicide Crisis Helpline, available 24/7) or call{" "}
          <a href="tel:911" className="font-bold underline hover:text-[#A67C52]">911</a>
          {" "}in an emergency. This website is not a substitute for emergency care.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10 lg:py-14 grid grid-cols-1 sm:grid-cols-3 gap-8">

        {/* Brand */}
        <div>
          <h3
            className="text-xl font-bold text-green-800 mb-2"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            <span className="text-[#A67C52]">Meg&rsquo;s</span> Therapy
          </h3>
          <p className="text-green-800/80 text-sm leading-relaxed">
            A calm, supportive space for individuals, couples, families, and teens.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-green-900 font-bold mb-3 text-sm uppercase tracking-wide">
            Quick Links
          </h4>
          <div className="flex flex-col gap-2">
            <Link to="/" className="text-green-800/80 hover:text-[#A67C52] text-sm">Home</Link>
            <Link to="/about" className="text-green-800/80 hover:text-[#A67C52] text-sm">About</Link>
            <Link to="/services" className="text-green-800/80 hover:text-[#A67C52] text-sm">Services</Link>
            <Link to="/contact" className="text-green-800/80 hover:text-[#A67C52] text-sm">Contact</Link>
          </div>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="text-green-900 font-bold mb-3 text-sm uppercase tracking-wide">
            Get in Touch
          </h4>
          <div className="flex flex-col gap-2 text-sm text-green-800/80">
            <p>Email: hello@megstherapy.com</p>
            <p>Phone: (204) 000-0000</p>
          </div>
        </div>

      </div>

      <div className="border-t border-[#8FA98F]/30 px-4 sm:px-6 lg:px-12 py-4 text-center">
        <p className="text-green-800/70 text-xs sm:text-sm">
          © {year} Meg&rsquo;s Therapy. All rights reserved.
        </p>
      </div>

    </footer>
  );
}
