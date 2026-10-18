import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Star, MapPin, Phone, Clock, Award, ShieldCheck, ScanLine, HeartPulse, ArrowUpRight, Quote, Check } from 'lucide-react'
import { clinic, services, reviews, photos, waLink } from './config'
import Booking from './Booking'
import ServiceArt from './ServiceArt'

const links = [
  ['About', '#about'],
  ['Treatments', '#services'],
  ['Reviews', '#reviews'],
  ['Contact', '#contact'],
]

const Reveal = ({ children, delay = 0, className, as = 'div' }) => {
  const M = motion[as]
  return (
    <M className={className} initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </M>
  )
}

const WaIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="M20.5 3.5A11.8 11.8 0 0 0 12 0C5.4 0 .1 5.3.1 11.9c0 2.1.6 4.1 1.6 5.9L0 24l6.4-1.7a12 12 0 0 0 5.6 1.4c6.6 0 11.9-5.3 11.9-11.9 0-3.2-1.2-6.200-3.400-8.300zM12 21.700c-1.800 0-3.500-.5-5-1.400l-.4-.2-3.800 1 1-3.700-.2-.4a9.800 9.800 0 0 1-1.500-5.200C2.100 6.500 6.500 2.100 12 2.100c2.600 0 5.100 1 6.900 2.900a9.700 9.700 0 0 1 2.900 6.900c0 5.400-4.400 9.800-9.800 9.800zm5.400-7.300c-.3-.1-1.800-.9-2-1-.3-.1-.5-.1-.7.1l-.9 1.100c-.2.200-.3.200-.6.100-.3-.1-1.200-.4-2.300-1.400-.9-.8-1.400-1.700-1.600-2-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.100c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.300-1 1-1 2.500s1.100 2.900 1.200 3.100c.1.200 2.100 3.300 5.200 4.600.7.300 1.300.5 1.700.6.700.2 1.400.2 1.900.1.600-.1 1.800-.7 2-1.400.3-.7.3-1.300.2-1.400-.1-.1-.3-.2-.6-.3z" />
  </svg>
)

const stats = [
  [`${clinic.experience}+`, 'Years of experience'],
  [clinic.implants, 'Implants placed'],
  [`${clinic.rating}★`, `${clinic.reviewCount} Google reviews`],
  ['First', 'OPG digital X-ray in Amroha'],
]

const whyImplants = ['Natural look & feel', 'Long-lasting solution', 'Improves chewing & speaking', 'Boosts confidence']

export default function App() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <div className="topbar">
        <div className="container topbar__inner">
          <span><MapPin size={14} /> Arzoo Enclave, Joya Road, {clinic.city}</span>
          <span className="topbar__r">
            <span><Clock size={14} /> Mon–Sat 10am – 7pm</span>
            <a href={`tel:+${clinic.whatsapp}`}><Phone size={14} /> {clinic.phoneDisplay}</a>
          </span>
        </div>
      </div>

      <header className={`nav ${scrolled ? 'nav--solid' : ''}`}>
        <div className="container nav__inner">
          <a href="#top" className="logo">
            <img className="logo__img" src={`${import.meta.env.BASE_URL}logo-emblem.png`} alt="" />
            <span>Om Dental Clinic <small>{clinic.city}, Uttar Pradesh</small></span>
          </a>
          <nav className={`nav__links ${open ? 'is-open' : ''}`}>
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
            ))}
            <a className="btn btn--gold btn--sm" href="#book" onClick={() => setOpen(false)}>Book appointment</a>
          </nav>
          <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
            <span /><span />
          </button>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="hero__grain" />
          <div className="container hero__inner">
            <div className="hero__copy">
              <motion.span className="eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
                Implant · Aesthetic · Laser Dentistry
              </motion.span>
              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }}>
                Because every smile <em>tells a story.</em>
              </motion.h1>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }}>
                {clinic.name} by {clinic.doctor}, {clinic.city}. Restore your smile and regain your
                confidence with advanced dental implants and gentle, honest care.
              </motion.p>
              <motion.div className="hero__cta" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
                <a className="btn btn--gold" href={waLink()} target="_blank" rel="noreferrer"><WaIcon /> Book on WhatsApp</a>
                <a className="btn btn--line" href="#services">Explore treatments <ArrowUpRight size={18} /></a>
              </motion.div>
            </div>

            <motion.div className="hero__portrait" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
              <div className="hero__ring" />
              <img src={`${import.meta.env.BASE_URL}dr-ravindra.png`} alt={clinic.doctor} />
              <div className="hero__name">
                <b>{clinic.doctor}</b>
                <span>{clinic.title} · Dental Surgeon</span>
              </div>
            </motion.div>
          </div>

          <div className="container">
            <ul className="stats">
              {stats.map(([n, l]) => (
                <li key={l}><b>{n}</b><span>{l}</span></li>
              ))}
            </ul>
          </div>
        </section>

        {/* MARQUEE */}
        <div className="marquee" aria-hidden="true">
          <div className="marquee__track">
            {[...services, ...services].map((s, i) => (<span key={i}>{s.title}<i>✦</i></span>))}
          </div>
        </div>

        {/* ABOUT */}
        <section id="about" className="section about-sec">
          <div className="container about">
            <Reveal className="about__media">
              <img src={photos.about} alt="Modern dental treatment room" loading="lazy" />
              <div className="about__badge"><b>{clinic.experience}+</b><span>years of<br />trusted care</span></div>
            </Reveal>
            <div>
              <Reveal><span className="eyebrow eyebrow--dark">About the doctor</span></Reveal>
              <Reveal delay={0.05}><h2>Meet {clinic.doctor}</h2></Reveal>
              <Reveal delay={0.1}>
                <p className="lead">
                  A BDS, MIDA implantologist with over {clinic.experience} years of experience and
                  {' '}{clinic.implants} implants placed, Dr. Choudhary has helped thousands of patients across
                  {' '}{clinic.city} regain their smile. Every treatment is explained clearly, planned carefully
                  and delivered gently.
                </p>
              </Reveal>
              <ul className="pillars">
                {[
                  [Award, 'Specialist implantologist', 'BDS, MIDA with 3000+ implants'],
                  [ScanLine, 'Advanced technology', 'First OPG digital X-ray in Amroha'],
                  [ShieldCheck, 'Safe & sterile', 'Patient-first, modern clinic'],
                  [HeartPulse, 'Gentle & transparent', 'Clear treatment plans, honest advice'],
                ].map(([Icon, t, d], i) => (
                  <Reveal as="li" key={t} delay={0.1 + i * 0.07}>
                    <span className="pillars__ic"><Icon size={20} /></span>
                    <div><b>{t}</b><small>{d}</small></div>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="section services-sec">
          <div className="container">
            <div className="sec-head">
              <Reveal><span className="eyebrow eyebrow--dark">Our treatments</span></Reveal>
              <Reveal delay={0.05}><h2>Complete dental care, <em>under one roof.</em></h2></Reveal>
            </div>
            <div className="svc">
              {services.map((s, i) => (
                <Reveal key={s.title} delay={(i % 2) * 0.08} className="svc__row">
                  <span className="svc__n">{String(i + 1).padStart(2, '0')}</span>
                  <div className="svc__art"><ServiceArt name={s.title} /></div>
                  <div className="svc__t">
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </div>
                  <a className="svc__go" aria-label={`Enquire about ${s.title}`} target="_blank" rel="noreferrer"
                    href={waLink(`Hello, I'd like to enquire about ${s.title}.`)}><ArrowUpRight size={20} /></a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* IMPLANT SPOTLIGHT */}
        <section className="spot">
          <div className="container spot__inner">
            <Reveal>
              <span className="eyebrow">Dental implants</span>
              <h2>Why choose <em>dental implants?</em></h2>
              <ul className="spot__list">
                {whyImplants.map((t) => (<li key={t}><span><Check size={16} strokeWidth={3} /></span>{t}</li>))}
              </ul>
              <a className="btn btn--gold" href={waLink('Hello, I would like a dental implant consultation.')} target="_blank" rel="noreferrer">
                <WaIcon /> Free implant consultation
              </a>
            </Reveal>
            <Reveal delay={0.1} className="spot__art"><ServiceArt name="Dental Implants" /></Reveal>
          </div>
        </section>

        {/* REVIEWS */}
        <section id="reviews" className="section reviews-sec">
          <div className="container">
            <div className="sec-head sec-head--row">
              <div>
                <Reveal><span className="eyebrow eyebrow--dark">Patient stories</span></Reveal>
                <Reveal delay={0.05}><h2>Loved by patients <em>across Amroha.</em></h2></Reveal>
              </div>
              <Reveal className="score">
                <b>{clinic.rating}</b>
                <div>
                  <div className="stars">{[0, 1, 2, 3, 4].map((n) => <Star key={n} size={18} fill="currentColor" />)}</div>
                  <a className="rlink" href={clinic.googleReviews} target="_blank" rel="noreferrer">{clinic.reviewCount} Google reviews</a>
                </div>
              </Reveal>
            </div>
            <div className="rev">
              {reviews.map((r, i) => (
                <Reveal as="figure" key={r.name} delay={(i % 3) * 0.08} className="rev__card">
                  <Quote size={26} className="rev__q" />
                  <blockquote>{r.text}</blockquote>
                  <figcaption>
                    <span className="rev__av">{r.name[0]}</span>
                    <div><b>{r.name}</b><small>Google review</small></div>
                  </figcaption>
                </Reveal>
              ))}
            </div>
            <div className="center rev__more">
              <a className="btn btn--dark" href={clinic.googleReviews} target="_blank" rel="noreferrer">Read all reviews on Google <ArrowUpRight size={18} /></a>
            </div>
            <div className="gallery">
              {photos.gallery.map((src) => (<img key={src} src={src} alt="Dental clinic" loading="lazy" />))}
            </div>
          </div>
        </section>

        <Booking WaIcon={WaIcon} />

        {/* CONTACT */}
        <section id="contact" className="section contact-sec">
          <div className="container contact">
            <Reveal>
              <span className="eyebrow eyebrow--dark">Visit us</span>
              <h2>Find the clinic</h2>
              <p className="ic"><MapPin size={18} /> {clinic.address}</p>
              <p className="ic"><Phone size={18} /> <a href={`tel:+${clinic.whatsapp}`}>{clinic.phoneDisplay}</a></p>
              <table className="hours">
                <tbody>
                  {clinic.hours.map(([d, t]) => (<tr key={d}><td>{d}</td><td>{t}</td></tr>))}
                </tbody>
              </table>
              <a className="btn btn--dark" href={`https://www.google.com/maps?q=${encodeURIComponent(clinic.mapQuery)}`} target="_blank" rel="noreferrer">
                Get directions <ArrowUpRight size={18} />
              </a>
            </Reveal>
            <iframe title="Clinic location" loading="lazy" className="map"
              src={`https://www.google.com/maps?q=${encodeURIComponent(clinic.mapQuery)}&output=embed`} />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <div className="footer__brand">
            <img src={`${import.meta.env.BASE_URL}logo-emblem.png`} alt="" />
            <div>
              <b>Om Dental</b>
              <span>Implant, Aesthetics &amp; Laser Clinic</span>
            </div>
          </div>
          <p>Healthy Smile · Confident You</p>
          <span className="footer__links">
            <a href={clinic.instagram} target="_blank" rel="noreferrer">Instagram</a>
            <a href={clinic.facebook} target="_blank" rel="noreferrer">Facebook</a>
            <a href={clinic.threads} target="_blank" rel="noreferrer">Threads</a>
          </span>
          <small>© {new Date().getFullYear()} {clinic.name}, {clinic.city}. All rights reserved.</small>
        </div>
      </footer>

      <a className="fab" href={waLink()} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><WaIcon /></a>
    </>
  )
}
