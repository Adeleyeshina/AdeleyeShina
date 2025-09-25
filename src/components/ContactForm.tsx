import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';
import toast from "react-hot-toast";

interface ContactInfo {
  name : string,
  email : string,
  message : string
}

gsap.registerPlugin(ScrollTrigger);

const ContactForm = () => {
  const form = useRef<HTMLFormElement | null >(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const serviceId = import.meta.env.VITE_SERVICE_ID
  const publicKey = import.meta.env.VITE_PUBLIC_KEY
  const templateId = import.meta.env.VITE_TEMPLATE_ID
  const reply = import.meta.env.VITE_AUTOREPLY_TEMPLATE_ID
  const [loading, setLoading] = useState<boolean>(false)

  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    name : '',
    email : '',
    message : ''
  })

  useEffect(() => {
    const el = sectionRef.current;
    if (el) {
      gsap.fromTo(
        el.querySelectorAll(".contact-item"),
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  
  if (!form.current)  return 
    setLoading(true)
    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then(() => {
        setLoading(false)
        toast.success("Message sent successfully ✅");
        form.current?.reset();
        setContactInfo({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        setLoading(false)
        toast.error("Something went wrong ❌ Please try again later.");
        console.log(err)
      });

   emailjs.send(
    serviceId,
    reply,
    {
      name: contactInfo.name,
      email: contactInfo.email,
      message: contactInfo.message,
    },
    { publicKey }
  )
  .then(() => {
    toast.success("Check your inbox too!");
    form.current?.reset();
    setContactInfo({ name: "", email: "", message: "" });
  })
  .catch((err) => {
    console.error("Error sending to sender ❌", err);
  });

};


  const handleForminput = (e : React.ChangeEvent<HTMLInputElement  | HTMLTextAreaElement>)=> {
    const {name, value} = e.target
    setContactInfo({...contactInfo, [name] : value})
  }
  const phoneNumber = "+2349056159803"; 
  const message = encodeURIComponent("Hello, I’d like to get in touch with you!");

  return (
    <section ref={sectionRef} className="w-full bg-background py-20 px-7 md:20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="contact-item text-3xl md:text-4xl font-bold text-brand mb-6" >
          Get In Touch
        </h2>
        <p className="contact-item text-secondarytext mb-12 max-w-2xl mx-auto">
          I’d love to hear about your project! Fill out the form below or reach
          out directly via email or LinkedIn.
        </p>

        {/* Contact Form */}
        <form
          className="contact-item grid gap-6 max-w-2xl mx-auto text-left"
          onSubmit={handleFormSubmit}
          ref={form}
        >
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            className="p-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-background text-primarytext focus:outline-none focus:ring-2 focus:ring-brand"
            required
            onChange={handleForminput}
          />
          <input
          name="email"
            type="email"
            placeholder="Your Email"
            className="p-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-background text-primarytext focus:outline-none focus:ring-2 focus:ring-brand"
            required
            onChange={handleForminput}
          />
          <textarea
          name="message"
            placeholder="Your Message"
            rows={5}
            className="p-4 rounded-lg border resize-none border-gray-300 dark:border-gray-700 bg-background text-primarytext focus:outline-none focus:ring-2 focus:ring-brand"
            required
            onChange={handleForminput}
          ></textarea>
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 disabled:opacity-50 cursor-pointer rounded-lg bg-brand text-white font-semibold shadow-md hover:scale-105 transition-transform"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Social Links */}
        <div className="contact-item flex justify-center gap-8 mt-12 text-2xl">
          <Link
            to="mailto:adeleyeshina4@gmail.com"
            className="text-primarytext hover:text-brand transition-colors"
          >
            <FaEnvelope />
          </Link>
          <Link
            to="https://github.com/Adeleyeshina/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primarytext hover:text-brand transition-colors"
          >
            <FaGithub />
          </Link>
          <Link
            to="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primarytext hover:text-brand transition-colors"
          >
            <FaLinkedin />
          </Link>
          <Link
             to={`https://wa.me/${phoneNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primarytext hover:text-brand transition-colors"
          >
            <FaWhatsapp />
          </Link>
        </div>

      </div>

    </section>
  );
};

export default ContactForm;
