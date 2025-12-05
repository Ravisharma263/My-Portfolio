const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
          <span className="text-gradient">01.</span>
          <span className="text-foreground">About Me</span>
          <span className="flex-1 h-px bg-border ml-4 hidden sm:block"></span>
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Hello! I'm Ravi Ranjan Sharma, a passionate developer and data enthusiast based in Delhi, India. 
              I'm currently pursuing my B.Tech in <span className="text-primary">Artificial Intelligence & Data Science</span> at 
              Bhagwan Parshuram Institute of Technology with a CGPA of 8.0.
            </p>
            <p>
              I completed an internship at <span className="text-primary">BSES Rajdhani Power Ltd.</span> as a 
              Front-End Developer, where I built interactive web applications using Angular, integrated REST APIs, 
              and worked with MongoDB for efficient data storage.
            </p>
            <p>
              I love working at the intersection of web development and data analytics. Whether it's building 
              responsive UIs with <span className="text-primary">React</span> and <span className="text-primary">Angular</span>, 
              or analyzing large datasets with <span className="text-primary">PySpark</span> and 
              <span className="text-primary"> Machine Learning</span>, I enjoy solving complex problems and creating 
              impactful solutions.
            </p>
          </div>

          <div className="relative group">
            <div className="relative z-10 rounded-lg overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary rounded-lg flex items-center justify-center">
                <img src="ravi.jpg" />

              </div>
            </div>
            <div className="absolute inset-0 border-2 border-primary rounded-lg translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
