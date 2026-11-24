/**
 * The site's logo: a square-root sign over Ranjeet Choudhary's initials.
 * Drawn as SVG so it stays sharp at every size; the text uses the site font.
 */
interface BrandMarkProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const SIZES = { sm: 'w-10 h-10', md: 'w-14 h-14', lg: 'w-20 h-20' };

export default function BrandMark({ size = 'sm', className = '' }: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      aria-hidden="true"
      className={`shrink-0 ${SIZES[size]} ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="40" height="40" fill="#0f172a" />
      <rect x="0.5" y="0.5" width="39" height="39" fill="none" stroke="rgb(255 255 255 / 0.18)" />
      <path
        d="M5.5 22 L8.6 20.4 L12.6 30.5 L17.6 8.8 L35 8.8"
        fill="none"
        stroke="#2dd4bf"
        strokeWidth="2.2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <text x="26.4" y="28" textAnchor="middle" fontSize="14" fontWeight="600" fill="#ffffff" letterSpacing="-0.3">
        Rc
      </text>
    </svg>
  );
}
