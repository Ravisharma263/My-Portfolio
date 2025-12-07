import { ExternalLink, Github, Folder } from 'lucide-react';

const featuredProjects = [
  {
    title: 'LinkedIn Job Postings Analysis',
    description: 'Analyzed 15K+ LinkedIn job postings using PySpark to extract insights on salary patterns, skill demand, industry trends, and experience-level opportunities. Designed an interactive Streamlit dashboard with Plotly visualizations.',
    tech: ['PySpark', 'Pandas', 'Plotly', 'Streamlit', 'Python'],
    github: 'https://github.com/Ravisharma263/linkedin-job-postings-analysis',
    live: '#',
  },
  {
    title: 'BSES Rajdhani Website',
    description: 'Developed front-end interface for BSES Rajdhani Power Ltd. using Angular CLI with smooth user interactions, state management, and MongoDB integration for real-time data updates.',
    tech: ['Angular', 'TypeScript', 'MongoDB', 'Bootstrap', 'REST APIs'],
    github: 'https://github.com/Ravisharma263/BSES-Rajdhani-Homepage',
    live: '#',
  },
  {
    title: 'Genetic Disease Predictor',
    description: 'Built a predictive ML model for Parkinson\'s and heart ailments using Support Vector Machine (SVM) algorithm with high accuracy for early disease detection.',
    tech: ['Python', 'SVM', 'Machine Learning', 'Scikit-learn'],
    github: 'https://github.com/Ravisharma263/Parkinsons-Disease-Prediction',
    live: '#',
  },
];

const otherProjects = [
  {
    title: 'Data Analytics Dashboard',
    description: 'Interactive dashboard for visualizing complex datasets with filters and charts.',
    tech: ['Python', 'Plotly', 'Streamlit'],
    github: 'https://github.com/Ravisharma263/data-analytics-dashboard',
  },
  {
    title: 'E-Commerce Quick Deal Website',
    description: 'Built an e-commerce platform with Angular services for state management and responsive UI',
    tech: ['React JS', 'Tailwind CSS', 'MongoDB'],
    github: 'https://github.com/Ravisharma263/E-Commerce-QuickDeal',
  },
  {
    title: 'Portfolio Website',
    description: 'This responsive portfolio website built with React and Tailwind CSS.',
    tech: ['React', 'TypeScript', 'Tailwind'],
    github: 'https://github.com/Ravisharma263/my-portfolio',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
          <span className="text-gradient">03.</span>
          <span className="text-foreground">Projects</span>
          <span className="flex-1 h-px bg-border ml-4 hidden sm:block"></span>
        </h2>

        {/* Featured Projects */}
        <div className="space-y-24 mb-24">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`relative grid md:grid-cols-12 gap-4 items-center ${
                index % 2 === 1 ? 'md:text-right' : ''
              }`}
            >
              <div
                className={`md:col-span-7 ${
                  index % 2 === 1 ? 'md:col-start-6' : ''
                }`}
              >
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary rounded-lg"></div>
              </div>

              <div
                className={`md:col-span-6 md:absolute ${
                  index % 2 === 1 ? 'md:left-0' : 'md:right-0'
                } z-10`}
              >
                <p className="font-mono text-primary text-sm mb-2">Featured Project</p>
                <h3 className="text-2xl font-bold text-foreground mb-4">{project.title}</h3>
                <div className="bg-card p-6 rounded-lg shadow-xl mb-4">
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
                <ul className={`flex flex-wrap gap-3 mb-4 font-mono text-sm text-muted-foreground ${
                  index % 2 === 1 ? 'md:justify-end' : ''
                }`}>
                  {project.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <div className={`flex gap-4 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  {project.live !== '#' && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <h3 className="text-2xl font-bold text-foreground text-center mb-12">
          Other Noteworthy Projects
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {otherProjects.map((project) => (
            <div
              key={project.title}
              className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="flex justify-between items-start mb-6">
                <Folder className="text-primary" size={40} />
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={20} />
                </a>
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h4>
              <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
              <ul className="flex flex-wrap gap-2 font-mono text-xs text-muted-foreground">
                {project.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
