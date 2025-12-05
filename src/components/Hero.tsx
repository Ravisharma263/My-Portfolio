import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="opacity-0 animate-fade-up stagger-1">
          <p className="font-mono text-primary mb-4">Hi, my name is</p>
        </div>
        
        <div className="opacity-0 animate-fade-up stagger-2">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4">
            Ravi Ranjan Sharma
          </h1>
        </div>
        
        <div className="opacity-0 animate-fade-up stagger-3">
          <h2 className="text-3xl md:text-5xl font-bold text-muted-foreground mb-6">
            I build data-driven solutions.
          </h2>
        </div>
        
        <div className="opacity-0 animate-fade-up stagger-4">
          <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
            I'm a <span className="text-primary">Data Analyst & Full Stack Developer</span> passionate about 
            creating beautiful web applications and extracting insights from data. Currently pursuing 
            B.Tech in AI & Data Science at BPIT, Delhi.
          </p>
        </div>
        
        <div className="opacity-0 animate-fade-up stagger-5 flex flex-wrap gap-4 mb-12">
          <a
            href="#projects"
            className="px-8 py-3 bg-transparent border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-all duration-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>

        <div className="opacity-0 animate-fade-up stagger-5 flex gap-6">
          <a
            href="https://github.com/Ravisharma263"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/raviranjansharmaurl/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:rvrs2003@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <Mail size={24} />
          </a>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
