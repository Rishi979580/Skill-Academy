import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-zinc-900 to-black px-6 pt-16 pb-8 text-zinc-400">
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-4">

        {/* BRAND */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-bold">
              FWS
            </div>
            <h3 className="text-white text-lg font-semibold">
              Futureway Skill
            </h3>
          </div>

          <p className="text-sm leading-relaxed mb-4">
            Empowering professionals with cutting-edge AI and data skills
            through expert-led workshops and training programs.
          </p>

          <div className="flex gap-4 text-zinc-400">
            <Facebook className="w-5 h-5 hover:text-white cursor-pointer" />
            <Instagram className="w-5 h-5 hover:text-white cursor-pointer" />
            <Twitter className="w-5 h-5 hover:text-white cursor-pointer" />
            <Linkedin className="w-5 h-5 hover:text-white cursor-pointer" />
            <Youtube className="w-5 h-5 hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Contact Us</li>
            <li className="hover:text-white cursor-pointer">Teach with Us</li>
          </ul>
        </div>

        {/* POLICIES */}
        <div>
          <h4 className="text-white font-semibold mb-4">Policies</h4>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer">
              Cancellation / Refund
            </li>
            <li className="hover:text-white cursor-pointer">
              Privacy Policy
            </li>
            <li className="hover:text-white cursor-pointer">
              Terms of Service
            </li>
          </ul>
        </div>

        {/* RESOURCES */}
        <div>
          <h4 className="text-white font-semibold mb-4">Resources</h4>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer">
              Guest Posting
            </li>
            <li className="hover:text-white cursor-pointer">
              AI Tool of the Day
            </li>
            <li className="hover:text-white cursor-pointer">
              Workshops
            </li>
          </ul>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="max-w-6xl mx-auto mt-12 border-t border-zinc-800 pt-6 text-center text-sm">
        © 2025 Futureway Skill. All rights reserved.
      </div>
    </footer>
  );
}
