import React, { useState, useEffect } from 'react';
import styles from '../styles/CareerCounselling.module.css';

const generateSlots = (startHour, endHour, interval) => {
  const slots = [];
  for (let h = startHour; h < endHour; h++) {
    for (let m = 0; m < 60; m += interval) {
      const hour = h % 12 === 0 ? 12 : h % 12;
      const ampm = h < 12 ? 'AM' : 'PM';
      const minute = m.toString().padStart(2, '0');
      slots.push(`${hour}:${minute} ${ampm}`);
    }
  }
  return slots;
};

const trainers = ['John Doe', 'Anjali Singh', 'Rahul Mehta', 'Emily Roy'];

const SessionBookingForm = () => {
  const [sessionType, setSessionType] = useState('free');
  const [slots, setSlots] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    state: '',
    city: '',
    date: '',
    trainer: '',
    slot: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const free = generateSlots(16, 20, 15);
    const paid = generateSlots(16, 20, 60);
    setSlots(sessionType === 'free' ? free : paid);
    setFormData((prev) => ({ ...prev, slot: '' }));
    setSubmitted(false);
  }, [sessionType]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // TODO: send to backend or calendar sync
  };

  return (
    <div className={styles.bookingContainer}>
      <h1 className={styles.heading}>Book Your Session</h1>
      <p className={styles.subheading}>Choose a convenient slot and connect with our career expert</p>

      <div className={styles.toggleContainer}>
        <button
          className={sessionType === 'free' ? styles.activeToggle : ''}
          onClick={() => setSessionType('free')}
        >
          Free 15-min
        </button>
        <button
          className={sessionType === 'paid' ? styles.activeToggle : ''}
          onClick={() => setSessionType('paid')}
        >
          Paid 1-hour
        </button>
      </div>

      <form onSubmit={handleSubmit} className={styles.bookingForm}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="state"
          placeholder="Your State"
          value={formData.state}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="city"
          placeholder="Your City"
          value={formData.city}
          onChange={handleChange}
          required
        />

        {/* Date Picker */}
        <label className={styles.label}>Select Date</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          className={styles.input}
        />

        {/* Trainer Dropdown */}
        <label className={styles.label}>Choose Trainer</label>
        <select
          name="trainer"
          value={formData.trainer}
          onChange={handleChange}
          required
          className={styles.select}
        >
          <option value="">Select Trainer</option>
          {trainers.map((trainer) => (
            <option key={trainer} value={trainer}>
              {trainer}
            </option>
          ))}
        </select>

        {/* Slots */}
        <div className={styles.slotGrid}>
          {slots.map((slot, idx) => (
            <button
              type="button"
              key={idx}
              className={`${styles.slotButton} ${formData.slot === slot ? styles.selected : ''}`}
              onClick={() => setFormData({ ...formData, slot })}
            >
              {slot}
            </button>
          ))}
        </div>

        <button
          type="submit"
          className={styles.submitButton}
          disabled={!formData.slot}
        >
          {submitted ? 'Booked!' : 'Book Now'}
        </button>
      </form>

      {submitted && (
        <div className={styles.confirmation}>
          <p>
            Thanks {formData.name}! Your session is confirmed on <strong>{formData.date}</strong> at{' '}
            <strong>{formData.slot}</strong> with <strong>{formData.trainer}</strong>.
          </p>
          <p>We’ll email a Microsoft Teams link to {formData.email}.</p>
        </div>
      )}
    </div>
  );
};

export default SessionBookingForm;
