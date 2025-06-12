import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Let's Connect</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Get in touch</h3>
            <p>
              I'm always open to discussing new opportunities, interesting
              projects, or just having a chat about technology!
            </p>
            <div className="contact-methods">
              <a
                href="mailto:abdullahzayan.my@gmail.com"
                className="contact-method"
              >
                <Mail size={24} />
                <span>abdullahzayan.my@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/abdullah-zayan-/"
                target="_blank"
                className="contact-method"
              >
                <Linkedin size={24} />
                <span>linkedin.com/in/abdullah-zayan-</span>
              </a>
              <a
                href="https://github.com/AbdullahZayan"
                target="_blank"
                className="contact-method"
              >
                <Github size={24} />
                <span>github.com/AbdullahZayan</span>
              </a>
            </div>
          </div>
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows={5} required />
            </div>
            <button type="submit" className="btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
