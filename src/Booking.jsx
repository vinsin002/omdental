import { useState } from 'react'
import { clinic, services, waLink } from './config'

export default function Booking({ WaIcon }) {
  const [f, setF] = useState({ name: '', phone: '', service: services[0].title, date: '', time: '', note: '' })
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  const today = new Date().toISOString().split('T')[0]

  const submit = (e) => {
    e.preventDefault()
    const msg = [
      `Hello ${clinic.doctor}, I'd like to book an appointment at ${clinic.name}.`,
      `Name: ${f.name}`,
      `Phone: ${f.phone}`,
      `Treatment: ${f.service}`,
      f.date && `Preferred date: ${f.date}`,
      f.time && `Preferred time: ${f.time}`,
      f.note && `Note: ${f.note}`,
    ].filter(Boolean).join('\n')
    window.open(waLink(msg), '_blank', 'noopener')
  }

  return (
    <section id="book" className="section book-sec">
      <div className="container book">
        <div>
          <h2>Book your appointment</h2>
          <p className="lead">Fill in the details and we'll open WhatsApp with your request pre-written. Just press send.</p>
        </div>
        <form className="form" onSubmit={submit}>
          <label>Your name<input required value={f.name} onChange={set('name')} placeholder="Full name" /></label>
          <label>Phone<input required type="tel" value={f.phone} onChange={set('phone')} placeholder="Mobile number" /></label>
          <label>Treatment
            <select value={f.service} onChange={set('service')}>
              {services.map((s) => <option key={s.title}>{s.title}</option>)}
              <option>Other / Not sure</option>
            </select>
          </label>
          <div className="row">
            <label>Date<input type="date" min={today} value={f.date} onChange={set('date')} /></label>
            <label>Time<input type="time" value={f.time} onChange={set('time')} /></label>
          </div>
          <label>Message (optional)<textarea rows="3" value={f.note} onChange={set('note')} /></label>
          <button className="btn btn--gold" type="submit"><WaIcon /> Send on WhatsApp</button>
        </form>
      </div>
    </section>
  )
}
