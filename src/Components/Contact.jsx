import React from "react";
import { Facebook, Github, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";

const Contact = () => {
  const handleEmailClick = () => {
    window.location.href =
      "mailto:tahmidhasangolap@gmail.com?subject=Hello&body=I%20want%20to%20contact%20you";

    setTimeout(() => {
      window.open(
        "https://mail.google.com/mail/?view=cm&fs=1&to=tahmidhasangolap@gmail.com&su=Hello&body=I%20want%20to%20contact%20you",
        "_blank"
      );
    }, 700);
  };

  const contacts = [
    {
      name: "Email",
      icon: <Mail size={22} className="text-[#EA4335]" aria-hidden="true" />,
      onClick: handleEmailClick,
    },
    {
      name: "Phone",
      icon: <Phone size={22} className="text-cyan-400" aria-hidden="true" />,
      link: "tel:+8801707115247",
    },
    {
      name: "WhatsApp",
      icon: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt=""
          className="w-6 h-6"
          aria-hidden="true"
        />
      ),
      link: "https://wa.me/8801822522295?text=Hello%20Tahmid!",
    },
    {
      name: "GitHub",
      icon: <Github size={22} className="text-white" aria-hidden="true" />,
      link: "https://github.com/md-tahmid-hasan-golap",
    },
    {
      name: "Facebook",
      icon: <Facebook size={22} className="text-blue-500" aria-hidden="true" />,
      link: "https://www.facebook.com/g.lap.raj",
    },
    {
      name: "LinkedIn",
      icon: (
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt=""
          className="w-6 h-6"
          aria-hidden="true"
        />
      ),
      link: "https://www.linkedin.com/in/tahmid-hasan-golap/?locale=en",
    },
  ];

  return (
    <section className="section-padding border-t border-white/5">
      <div className="section-container">
        <SectionHeader
          label="Contact"
          title="Get In Touch"
          align="center"
          description="Have a question or want to collaborate? Reach out — I'll get back to you as soon as possible."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-5xl mx-auto">
          {contacts.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <motion.a
                href={item.link ? item.link : undefined}
                onClick={item.onClick ? item.onClick : undefined}
                target={item.link ? "_blank" : undefined}
                rel={item.link ? "noopener noreferrer" : undefined}
                className="flex items-center justify-center gap-3 min-h-[56px] glass-card rounded-2xl px-6 py-4 text-white transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/5 cursor-pointer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center justify-center shrink-0">
                  {item.icon}
                </span>
                <span className="text-base font-medium">{item.name}</span>
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
