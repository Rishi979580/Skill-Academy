import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const ICONS = {
  facebook: Facebook,
  instagram: Instagram,
  twitter: Twitter,
  linkedin: Linkedin,
  youtube: Youtube,
};

export default function Footer({
  brand,
  description,
  socialLinks,
  columns,
  copyright,
}) {
  return (
    <footer className="bg-gradient-to-b from-zinc-900 to-black px-6 pt-16 pb-8 text-zinc-400">
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-4">

        {/* BRAND */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-bold">
              {brand.short}
            </div>
            <h3 className="text-white text-lg font-semibold">
              {brand.name}
            </h3>
          </div>

          <p className="text-sm leading-relaxed mb-4">
            {description}
          </p>

          <div className="flex gap-4 text-zinc-400">
            {socialLinks.map((item) => {
              const Icon = ICONS[item.icon];
              return (
                <a key={item.icon} href={item.url} target="_blank" rel="noreferrer">
                  <Icon className="w-5 h-5 hover:text-white cursor-pointer" />
                </a>
              );
            })}
          </div>
        </div>

        {/* LINK COLUMNS */}
        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="text-white font-semibold mb-4">
              {col.title}
            </h4>
            <ul className="space-y-3 text-sm">
              {col.links.map((link) => (
                <li
                  key={link.label}
                  className="hover:text-white cursor-pointer"
                >
                  {link.label}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* FOOTER BOTTOM */}
      <div className="max-w-6xl mx-auto mt-12 border-t border-zinc-800 pt-6 text-center text-sm">
        {copyright}
      </div>
    </footer>
  );
}
