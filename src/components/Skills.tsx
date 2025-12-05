const skills = [
  { name: 'SQL / MySQL', level: 85 },
  { name: 'Python', level: 85 },
  { name: 'React / Angular', level:60 },
  { name: 'PySpark', level: 75 },
  { name: 'JavaScript', level: 80 },
  
  { name: 'HTML/CSS', level: 95 },

  { name: 'Machine Learning', level: 70 },
  { name: 'Node.js / Express', level: 65 },
];

const technologies = [
  'React', 'Angular', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 
  'Node.js', 'Express.js', 'Python', 'Java', 'PySpark', 'Pandas', 'NumPy',
  'MySQL', 'MongoDB', 'Machine Learning', 'Deep Learning', 'Git & GitHub', 
  'REST APIs', 'Bootstrap', 'Streamlit', 'Plotly'
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
          <span className="text-gradient">02.</span>
          <span className="text-foreground">Skills</span>
          <span className="flex-1 h-px bg-border ml-4 hidden sm:block"></span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Skill Bars */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground mb-6">Proficiency</h3>
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-muted-foreground font-medium">{skill.name}</span>
                  <span className="text-primary font-mono text-sm">{skill.level}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Technology Tags */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6">Technologies I Use</h3>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-card border border-border rounded-lg text-muted-foreground font-mono text-sm hover:border-primary hover:text-primary transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
