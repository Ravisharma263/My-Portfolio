import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center justify-center gap-4">
          <span className="text-gradient">04.</span>
          <span className="text-foreground">Get In Touch</span>
        </h2>

        <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
          I'm currently looking for new opportunities as a Full-Stack Developer or Data Analyst. 
          Whether you have a question, want to discuss a project, or just want to say hi, 
          my inbox is always open. I'll try my best to get back to you!
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <div className="flex items-center justify-center gap-3 text-muted-foreground">
            <Mail className="text-primary" size={20} />
            <span>rvrs2003@mail.com</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-muted-foreground">
            <Phone className="text-primary" size={20} />
            <span>+91 8076735879</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-muted-foreground">
            <MapPin className="text-primary" size={20} />
            <span>Delhi, India</span>
          </div>
        </div>

        <a
          href="mailto:rvrs2003@mail.com"
          
        >
        
        </a>
      </div>
    </section>
  );
};

export default Contact;
