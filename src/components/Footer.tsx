import Image from "next/image";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative bg-[#2a2a2d] px-6 py-12 text-xs uppercase tracking-[0.16em] text-slate-200 md:px-10 md:py-14"
    >
      <div className="absolute -top-6 left-0 h-6 w-full overflow-hidden">
        <div className="h-12 w-[120%] -translate-x-[8%] rounded-b-[70%] bg-[#2a2a2d]" />
      </div>
      <div className="mx-auto grid w-full max-w-7xl gap-8 md:grid-cols-3 md:items-start">
        <div className="flex items-center gap-4">
          <Image
            src="/logo.png"
            alt="Shangrila Trade Concern logo"
            width={92}
            height={30}
            className="h-auto w-[82px] object-contain"
          />
          <div>
            <p className="font-display text-base normal-case tracking-normal text-amber-200">
              Shangrila Trade Concern
            </p>
            <p className="mt-1 text-[10px] tracking-[0.2em] text-slate-400">
              Fine Jewels. Ethical Gemstones.
            </p>
          </div>
        </div>

        <nav aria-label="Footer navigation" className="md:justify-self-center">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[10px] text-slate-300">
            <li>
              <a href="#" className="transition-colors hover:text-amber-300">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="transition-colors hover:text-amber-300">
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="transition-colors hover:text-amber-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="space-y-2 text-[10px] tracking-[0.18em] text-slate-300 md:justify-self-end">
          <p className="text-amber-300/90">Contact Information</p>
          <p className="normal-case tracking-normal text-slate-400">
            +971 50 123 4567
          </p>
          <p className="normal-case tracking-normal text-slate-400">
            Office 2408, Gold & Diamond Park, Dubai, UAE
          </p>
          <p className="normal-case tracking-normal text-slate-400">
            info@shangrilatrade.com
          </p>
        </div>
      </div>

      <div className="mx-auto mt-8 w-full max-w-7xl border-t border-[#3b3b40] pt-5 text-[10px] tracking-[0.18em] text-slate-400">
        © {new Date().getFullYear()} Shangrila Trade Concern
      </div>
    </footer>
  );
}
