// Edit this file to update all clinic details across the site.
export const clinic = {
  name: 'Om Dental Implant, Aesthetics & Laser Clinic',
  shortName: 'Om Dental Clinic',
  city: 'Amroha',
  implants: '3000+',
  rating: '4.9',
  reviewCount: '341+',
  doctor: 'Dr. Ravindra Choudhary',
  title: 'BDS, MIDA · Implantologist',
  experience: 22,
  followers: '11.8K',
  whatsapp: '919760002384', // country code + number, no "+"
  phoneDisplay: '+91 97600 02384',
  address: 'Arzoo Enclave, Joya Road, near New Roadways Bus Stand, Amroha, Uttar Pradesh 244221',
  mapQuery: 'Om Dental Implant Aesthetics Laser Clinic Arzoo Enclave Joya Road Amroha', // used for Google Maps embed
  hours: [
    ['Mon – Sat', '10:00 AM – 7:00 PM'],
    ['Sunday', 'By appointment'],
  ],
  // Clinic's Google listing / reviews
  googleReviews: 'https://share.google/eTFfRMzCV3S66QsJZ',
  instagram: 'https://www.instagram.com/ravindradentist/',
  instagramHandle: '@ravindradentist',
  threads: 'https://www.threads.com/@ravindradentist',
  facebook: 'https://www.facebook.com/Dr.RaavindraSingh',
  // Instagram posts/reels shown in the feed section (official embeds).
  instagramPosts: ['https://www.instagram.com/p/DdRm6a6Tl3V/'],
}

export const services = [
  { icon: 'Smile', title: 'Dental Implants', text: 'Permanent, natural-looking tooth replacement by an experienced implantologist.' },
  { icon: 'Zap', title: 'Laser Dentistry', text: 'Comfortable, precise laser treatments with faster healing.' },
  { icon: 'Sparkles', title: 'Cosmetic Procedures', text: 'Smile design and aesthetic corrections for a confident look.' },
  { icon: 'SmilePlus', title: 'Teeth Whitening', text: 'Brighter, stain-free teeth in a single visit.' },
  { icon: 'Layers', title: 'Bonding', text: 'Repair chips, gaps and discolouration with tooth-coloured resin.' },
  { icon: 'ShieldPlus', title: 'Fillings And Sealants', text: 'Restore cavities and protect teeth from future decay.' },
  { icon: 'Crown', title: 'Dentures And Bridges', text: 'Fixed and removable options that look and feel natural.' },
  { icon: 'Stethoscope', title: 'Checkups', text: 'Preventive exams and cleaning for lifelong oral health.' },
  { icon: 'Scissors', title: 'Extractions', text: 'Gentle, comfortable tooth removal when it is needed.' },
  { icon: 'Shield', title: 'Mouth Guards', text: 'Custom guards for sports and night-time grinding.' },
  { icon: 'Siren', title: 'Emergency Care', text: 'Quick relief for toothache, trauma and infections.' },
  { icon: 'CalendarCheck', title: 'Online Dentist Booking', text: 'Book your visit in seconds over WhatsApp.' },
]

export const reviews = [
  { name: 'Mrr Faiz', text: 'Best treatment, with a soft-spoken staff and doctor.' },
  { name: 'Mohd Kaif', text: 'Satisfied with the work. Thank you, doctor!' },
  { name: 'Nida', text: 'Experienced, polite and patient-friendly doctor. Cooperative, helpful staff.' },
  { name: 'Suman Prakash Pawan', text: 'The best treatment in Amroha.' },
  { name: 'Puneet Soni', text: 'The doctor gave the best treatment.' },
  { name: 'Gurpreet Choudhary', text: 'Good experience with the doctor and staff.' },
]

const img = (id, w = 900) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`
// Illustrative stock photography (Unsplash). Swap with your own clinic photos in /public if preferred.
export const photos = {
  hero: img('1606811841689-23dfddce3e95', 1000),
  about: img('1629909613654-28e377c37b09', 1000),
  gallery: [
    img('1598256989800-fe5f95da9787', 700),
    img('1588776814546-1ffcf47267a5', 700),
    img('1609840114035-3c981b782dfe', 700),
    img('1631248055158-edec7a3c072b', 700),
  ],
}

export const waLink = (text = 'Hello Dr. Ravindra, I would like to book an appointment.') =>
  `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(text)}`
