import React, { useState } from "react";
import 

const CareerCounsellingBooking = () => {
  const [formData, setFormData] = useState({ name: "", email: "", slot: "" });
  const [submitted, setSubmitted] = useState(false);

  const generateTimeSlots = () => {
    const startHour = 16; // 4PM
    const endHour = 20; // 8PM
    const slots = [];
    for (let hour = startHour; hour < endHour; hour++) {
      slots.push(`${hour}:00`);
      slots.push(`${hour}:15`);
      slots.push(`${hour}:30`);
      slots.push(`${hour}:45`);
    }
    return slots;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send data to backend
    setSubmitted(true);
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4 text-[#21204C]">Book Your Free 15-Min Counselling Session</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded"
            />
          </div>
          <div>
            <label className="block font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded"
            />
          </div>
          <div>
            <label className="block font-medium">Choose a Time Slot (4PM - 8PM)</label>
            <select
              name="slot"
              value={formData.slot}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded"
            >
              <option value="">Select a slot</option>
              {generateTimeSlots().map((slot, idx) => (
                <option key={idx} value={slot}>{slot}</option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="bg-[#7655B7] text-white px-4 py-2 rounded hover:bg-[#5e3ea6]"
          >
            Book Now
          </button>
        </form>
      ) : (
        <div className="text-green-600 font-medium">
          Thank you, {formData.name}! Your session for {formData.slot} has been booked. We'll contact you at {formData.email}.
        </div>
      )}
    </div>
  );
};

export default CareerCounsellingBooking;
