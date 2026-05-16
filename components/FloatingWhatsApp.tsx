const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919999999999';
const whatsappMessage = encodeURIComponent('Hi Krayaa, I want to know more about the launch.');

export default function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Krayaa on WhatsApp"
      className="group fixed bottom-5 right-5 z-[80] flex h-14 w-14 items-center justify-center rounded-full border border-white/12 bg-[#25D366] text-white shadow-[0_18px_45px_rgba(0,0,0,0.38),0_0_34px_rgba(37,211,102,0.26)] transition duration-300 hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#25D366]/60 focus:ring-offset-2 focus:ring-offset-[#070203] sm:bottom-6 sm:right-6 sm:h-15 sm:w-15"
    >
      <span className="absolute inset-0 rounded-full bg-white/0 transition group-hover:bg-white/10" />
      <span className="absolute inset-[-7px] rounded-full border border-[#25D366]/25 opacity-70 motion-safe:animate-[whatsappPulse_2.4s_ease-out_infinite]" />
      <svg viewBox="0 0 448 512" aria-hidden="true" className="relative h-7 w-7">
        <path
          d="M380.9 97.1C339 55.1 283.2 32 223.9 32 101.2 32 1.3 131.9 1.3 254.7c0 39.1 10.2 77.3 29.6 111L0 480l117-30.7c32.4 17.7 68.9 27 106.8 27h.1c122.8 0 222.7-99.9 222.7-222.6 0-59.5-23.2-115.3-65.7-156.6zM223.9 438.7h-.1c-33.7 0-66.8-9.1-95.7-26.2l-6.9-4.1-69.4 18.2 18.5-67.7-4.5-7C47 322.2 37.1 288.5 37.1 254.7 37.1 151.7 120.9 67.9 224 67.9c49.9 0 96.8 19.5 132.1 54.8 35.3 35.4 54.7 82.2 54.7 132 0 103.1-83.8 184-186.9 184zm101.6-138.1c-5.6-2.8-33.1-16.3-38.2-18.2-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18.2-17.6 21.9-3.2 3.7-6.5 4.2-12.1 1.4-5.6-2.8-23.6-8.7-44.9-27.7-16.6-14.8-27.8-33.1-31-38.7-3.2-5.6-.3-8.6 2.4-11.4 2.5-2.5 5.6-6.5 8.4-9.7 2.8-3.2 3.7-5.6 5.6-9.3 1.9-3.7.9-7-0.5-9.8-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-7-.2-10.7-.2s-9.8 1.4-14.9 7c-5.1 5.6-19.5 19-19.5 46.3s20 53.7 22.8 57.4c2.8 3.7 39.3 60 95.2 84.1 13.3 5.7 23.7 9.1 31.8 11.7 13.4 4.3 25.5 3.7 35.1 2.2 10.7-1.6 33.1-13.5 37.8-26.5 4.6-13 4.6-24.1 3.2-26.5-1.3-2.4-5-3.8-10.6-6.6z"
          fill="currentColor"
        />
      </svg>

      <style>{`
        @keyframes whatsappPulse {
          0% { transform: scale(0.9); opacity: 0.8; }
          80%, 100% { transform: scale(1.35); opacity: 0; }
        }
      `}</style>
    </a>
  );
}
