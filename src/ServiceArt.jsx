// Custom flat vector illustrations, one per service (64x64 viewBox).
const T = 'M32 9c-6-4.500-18-2.500-18 11 0 8 4 12 5 20 1 8 3 15 7 15 3 0 3-9 6-9s3 9 6 9c4 0 6-7 7-15 1-8 5-12 5-20C50 6.500 38 4.500 32 9z'
const c = { w: '#fff', line: '#3b2823', teal: '#c58b62', mint: '#f1e4d8', gold: '#f5b942', red: '#ef5b5b', ink: '#0f2a33' }

const Tooth = ({ fill = c.w, children }) => (
  <>
    <path d={T} fill={fill} stroke={c.line} strokeWidth="2.500" strokeLinejoin="round" />
    <path d="M23 18c2-3 5-3.500 7-3" stroke={c.mint} strokeWidth="2.500" strokeLinecap="round" fill="none" />
    {children}
  </>
)
const Spark = ({ x, y, s = 1, fill = c.gold }) => (
  <path transform={`translate(${x} ${y}) scale(${s})`} d="M0-6c.8 4 2 5.200 6 6-4 .8-5.200 2-6 6-.8-4-2-5.200-6-6 4-.8 5.200-2 6-6z" fill={fill} />
)

const art = {
  'Dental Implants': (
    <>
      <path d="M17 6h30c3 0 4 7 3 13-1 4-3 6-6 6H20c-3 0-5-2-6-6-1-6 0-13 3-13z" fill={c.w} stroke={c.line} strokeWidth="2.500" strokeLinejoin="round" />
      <rect x="25" y="25" width="14" height="5" rx="2" fill={c.teal} />
      <path d="M26 31h12l-1.500 22-4.500 5-4.500-5z" fill={c.line} />
      <path d="M26.500 37h11M27 43h10M28 49h8" stroke={c.mint} strokeWidth="2" />
    </>
  ),
  'Laser Dentistry': (
    <>
      <g transform="translate(0 6) scale(.9)"><Tooth /></g>
      <path d="M4 10l16 18" stroke={c.red} strokeWidth="3" strokeLinecap="round" />
      <circle cx="22" cy="30" r="4" fill={c.gold} /><Spark x={50} y={14} /><Spark x={56} y={28} s={.6} />
    </>
  ),
  'Cosmetic Procedures': (
    <>
      <Tooth /><Spark x={50} y={14} s={1.300} /><Spark x={12} y={30} s={.8} fill={c.teal} /><Spark x={52} y={42} s={.7} />
    </>
  ),
  'Teeth Whitening': (
    <>
      <Tooth />
      <path d="M40 22l-8 12M44 30l-6 9" stroke={c.teal} strokeWidth="2.500" strokeLinecap="round" />
      <Spark x={50} y={12} s={1.200} fill={c.teal} /><Spark x={13} y={14} s={.8} fill={c.teal} />
    </>
  ),
  'Bonding': (
    <>
      <Tooth />
      <path d="M36 16h9c2 0 3 2 3 4v6c0 2-1 3-3 3h-9z" fill={c.teal} opacity=".85" />
      <path d="M36 19h12M36 24h12" stroke="#fff" strokeWidth="1.500" opacity=".7" />
    </>
  ),
  'Fillings And Sealants': (
    <>
      <Tooth />
      <circle cx="32" cy="26" r="7" fill={c.ink} opacity=".15" />
      <circle cx="32" cy="26" r="5" fill={c.gold} stroke={c.line} strokeWidth="1.500" />
      <path d="M10 48l8-8" stroke={c.teal} strokeWidth="3.500" strokeLinecap="round" />
    </>
  ),
  'Dentures And Bridges': (
    <>
      <path d="M6 24c0-10 12-14 26-14s26 4 26 14v6c0 6-4 8-8 8H14c-4 0-8-2-8-8z" fill="#f7a8a8" stroke={c.line} strokeWidth="2.500" />
      {[10, 18, 26, 34, 42, 50].map((x, i) => (
        <rect key={x} x={x} y={i % 5 === 0 ? 20 : 17} width="8" height={i % 5 === 0 ? 20 : 24} rx="3.500" fill="#fff" stroke={c.line} strokeWidth="2" />
      ))}
    </>
  ),
  'Checkups': (
    <>
      <circle cx="26" cy="26" r="16" fill={c.mint} stroke={c.line} strokeWidth="3" />
      <g transform="translate(14 13) scale(.38)"><Tooth /></g>
      <path d="M38 38l16 16" stroke={c.line} strokeWidth="5" strokeLinecap="round" />
      <path d="M19 15a12 12 0 0 1 9-3" stroke="#fff" strokeWidth="2.500" strokeLinecap="round" fill="none" />
    </>
  ),
  'Extractions': (
    <>
      <g transform="translate(0 10)"><Tooth /></g>
      <path d="M32 3v14M26 9l6-6 6 6" stroke={c.red} strokeWidth="3.500" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </>
  ),
  'Mouth Guards': (
    <>
      <path d="M8 28c0-12 10-18 24-18s24 6 24 18v12c0 4-3 6-6 6-4 0-4-6-8-6-3 0-3 4-10 4s-7-4-10-4c-4 0-4 6-8 6-3 0-6-2-6-6z" fill={c.teal} opacity=".35" stroke={c.line} strokeWidth="2.500" strokeLinejoin="round" />
      <path d="M14 26c3-8 10-11 18-11" stroke="#fff" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M18 34h28" stroke={c.line} strokeWidth="2.500" strokeDasharray="2 5" strokeLinecap="round" />
    </>
  ),
  'Emergency Care': (
    <>
      <Tooth />
      <circle cx="46" cy="44" r="12" fill={c.red} stroke="#fff" strokeWidth="2.500" />
      <path d="M46 38v12M40 44h12" stroke="#fff" strokeWidth="3.500" strokeLinecap="round" />
    </>
  ),
  'Online Dentist Booking': (
    <>
      <rect x="8" y="12" width="48" height="44" rx="8" fill="#fff" stroke={c.line} strokeWidth="2.500" />
      <path d="M8 24h48V20a8 8 0 0 0-8-8H16a8 8 0 0 0-8 8z" fill={c.line} />
      <path d="M20 6v10M44 6v10" stroke={c.gold} strokeWidth="4" strokeLinecap="round" />
      <path d="M21 40l7 7 15-15" stroke={c.teal} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </>
  ),
}

export default function ServiceArt({ name }) {
  return (
    <svg viewBox="0 0 64 64" width="64" height="64" role="img" aria-label={name} className="art">
      {art[name] ?? <Tooth />}
    </svg>
  )
}
