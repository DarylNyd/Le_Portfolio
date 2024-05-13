import React, { useRef, useState } from 'react';
import style from './index.module.scss';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    user_email: '',
    user_message: '',
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const form = useRef();

  const sendMail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_PUBLIC_KEY)
      .then((result) => {
        setSuccess(true);
        form.current.reset();
      }, (error) => {
        setError(true);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form className={style.contactForm} ref={form} onSubmit={sendMail}>
      <div className={style.name_group}>
        <div className={style.formGroup}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className={style.formGroup}>
          <label htmlFor="surname">Surname:</label>
          <input
            type="text"
            id="surname"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className={style.formGroup}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="user_email"
          name="user_email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className={style.formGroup}>
        <label htmlFor="message">Message:</label>
        <textarea
          id="user_message"
          name="user_message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">Send Message</button>
      {success && <p className='text-green-600 font-semibold'>Message sent successfully!</p>}
      {error && <p className='text-red-600 font-semibold'>An error occurred. Please try again.</p>}

    </form>
  );
};

export default ContactForm;
