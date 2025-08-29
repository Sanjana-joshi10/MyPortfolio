import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Instagram, ExternalLink, Calendar, Award, Globe, Code, Zap, Star, ChevronDown, MousePointer, Download, Send } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState({});
  const [skillLevels, setSkillLevels] = useState({});

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible.skills) {
      setTimeout(() => {
        setSkillLevels({
          'React.js': 75,
          'TypeScript': 70,
          'Node.js': 65,
          'Python': 80,
          'AWS': 55,
          'Docker': 70
        });
      }, 500);
    }
  }, [isVisible.skills]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const handleEmailClick = () => {
    window.open('mailto:saynajoshi300@gmail.com?subject=Let\'s Connect!&body=Hi Sanjana, I\'d like to connect with you!');
  };

  const handlePhoneClick = () => {
    window.open('tel:+8791002954');
  };

  const handleGithubClick = () => {
    window.open('https://github.com/Sanjana-joshi10', '_blank');
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/sanjana-joshi-b2ab63300', '_blank');
  };

  const handleResumeDownload = () => {

    const fileId = '1sdOv5sv2B4TZpJ0DsuPqNg29dw6Ygzhb';
    const downloadUrl = `https://drive.usercontent.google.com/u/0/uc?id=12DQWGtWl76Px0F6aOTxj8DIWJgNxxmzK&export=download=${fileId}`;
    

    window.open(downloadUrl, '_blank');
  };

  const handleProjectView = (projectId) => {
    alert(`Would navigate to project ${projectId} details or GitHub repository!`);
  };

  const skills = {
    frontend: [
      { name: 'React.js', level: 62, color: 'from-blue-500 to-cyan-500' },
      { name: 'Next.js', level: 60, color: 'from-gray-800 to-gray-600' },
      { name: 'JavaScript', level: 75, color: 'from-yellow-500 to-orange-500' },
      { name: 'Tailwind CSS', level: 82, color: 'from-teal-500 to-green-500' },
     { name: 'Html', level: 85, color: 'from-orange-500 to-red-500' },      
    ],
    backend: [
      { name: 'Node.js', level: 45, color: 'from-green-600 to-lime-600' },
      { name: 'MongoDB', level: 55, color: 'from-green-700 to-green-500' },
      { name: 'MySQL', level: 75, color: 'from-blue-700 to-indigo-700' },

    ],
    languages: [
      { name: 'Python', level: 60, color: 'from-blue-500 to-green-500' },
      { name: 'Java', level: 65, color: 'from-red-600 to-orange-600' },
      { name: 'C++', level: 55, color: 'from-blue-800 to-purple-800' },
      { name: 'SQL', level: 78, color: 'from-indigo-600 to-purple-600' },
      { name: 'C', level: 65, color: 'from-orange-500 to-yellow-500' }
    ],
    tools: [
  { name: 'Excel', level: 70, color: 'from-green-400 to-green-600' },
  { name: 'Pandas/Numpy', level: 85, color: 'from-purple-500 to-indigo-500' },
  { name: 'Power BI', level: 55, color: 'from-yellow-400 to-amber-600' },
  { name: 'GitHub', level: 78, color: 'from-gray-700 to-gray-900' },
]

  };

  const projects = [
    {
      id: 1,
      title: "KainchiTraffic - Traffic Management System",
      description: "Heavy traffic system management application, control Kainchi Mandir traffic through slot system. ",
      tech: ['React.js', 'Node.js', 'Express', 'MongoDB', ],
      stats: { },
      date: 'March 2025',
      github: 'https://github.com/Sanjana-joshi10/kainchiDhaamTra',
      
    },
     {
      id: 2,
      title: "Portfolio",
      description:"My personal portfolio showcasing my skills and work made with taileind,java sript and react.",
     tech: ['React.js', 'Node.js', 'Express', 'MongoDB', ],
      stats: { },
      date: 'Apr 2025',
      github: 'https://github.com/Sanjana-joshi10/MyPortfolio',
      demo: 'https://sanjana-joshi10.github.io/MyPortfolio/'
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-teal-900/20"></div>
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: 'all 0.3s ease-out'
          }}
        ></div>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/10 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
            >
              SJ
            </button>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  className={`relative px-3 py-2 transition-all duration-300 group ${
                    activeSection === item.toLowerCase() 
                      ? 'text-white' 
                      : 'text-white/70 hover:text-white'
                  }`}
                  onClick={() => scrollToSection(item.toLowerCase())}
                >
                  {item}
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ${
                    activeSection === item.toLowerCase() ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="hero" className="relative min-h-screen flex items-center justify-center z-10">
        <div className="text-center space-y-8 max-w-4xl mx-auto px-6">
          <div className={`transform transition-all duration-1000 ${isVisible.hero ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="relative inline-block mb-8">
              <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 p-1 animate-pulse">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-6xl font-bold bg-gradient-to-br from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  SJ
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
            
            <h1 className="text-7xl md:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
                Sanjana Joshi
              </span>
            </h1>
            
            <div className="text-2xl md:text-3xl mb-8 space-y-2">
              <div className="flex items-center justify-center space-x-2">
                <Code className="w-8 h-8 text-purple-400" />
                <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                  Exploring Data, Coding, and the Web
                </span>
                <Zap className="w-8 h-8 text-yellow-400 animate-pulse" />
              </div>
            </div>
            
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-12">
  BCA student with a strong interest in 
  <span className="text-purple-400 font-semibold"> Power BI</span>, 
  <span className="text-pink-400 font-semibold"> programming</span>, and 
  <span className="text-blue-400 font-semibold"> web development</span>. 
  Passionate about turning data into insights and building practical digital solutions.
</p>

            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                onClick={() => scrollToSection('projects')}
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <ExternalLink className="w-5 h-5" />
                  View My Work
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button 
                onClick={handleResumeDownload}
                className="px-8 py-4 border-2 border-purple-500 rounded-full text-purple-400 font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 backdrop-blur-sm flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </button>
            </div>
          </div>
          
          <button 
            onClick={() => scrollToSection('about')}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hover:scale-110 transition-transform duration-300"
          >
            <ChevronDown className="w-8 h-8 text-white/50" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`transform transition-all duration-1000 ${isVisible.about ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <h2 className="text-5xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-xl border border-white/10 hover:border-purple-500/50 transition-all duration-500">
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                  <p className="text-lg text-white/80 leading-relaxed">
  I'm a <span className="text-purple-400 font-semibold">BCA student</span> at Graphic Era Hill University 
  with a CGPA of <span className="text-pink-400 font-semibold"> 8.84/10</span>. 
  My journey spans <span className="text-purple-400 font-semibold">Power BI</span>, 
  <span className="text-pink-400 font-semibold"> programming</span>, and 
  <span className="text-blue-400 font-semibold"> web development</span>, 
  where I focus on turning data into insights and building practical digital solutions.
</p>

                </div>
                
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-blue-900/30 to-teal-900/30 backdrop-blur-xl border border-white/10 hover:border-blue-500/50 transition-all duration-500">
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"></div>
                  <p className="text-lg text-white/80 leading-relaxed">
  As a <span className="text-blue-400 font-semibold">GSSoC 2025 contributor</span> and active coding enthusiast, 
  I've collaborated with peers, contributed to open-source projects, and explored hands-on learning through hackathons. 
  I'm passionate about <span className="text-teal-400 font-semibold">Power BI, programming, and web development</span>, 
  and I aim to build innovative solutions that make a real impact.
</p>

                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
  {[
    { icon: Star, label: '8.84/10', desc: 'CGPA', color: 'from-yellow-500 to-orange-500' },
    { icon: Code, label: '60+', desc: 'Problems Solved', color: 'from-purple-500 to-pink-500' },
    { icon: Award, label: 'Hands-on Hackathon Exposure', desc: 'Collaborated & Learned', color: 'from-green-500 to-teal-500' },
    { icon: Zap, label: 'Hands-on Project Experience', desc: 'Web & Data Solutions', color: 'from-blue-500 to-cyan-500' }
  ].map((stat, index) => (
    <div 
      key={index}
      className={`p-6 rounded-xl bg-gradient-to-br ${stat.color}/20 backdrop-blur-xl border border-white/10 text-center hover:scale-105 transition-all duration-300 group cursor-pointer`}
    >
      <stat.icon className={`w-8 h-8 mx-auto mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform`} />
      <div className="text-2xl font-bold text-white">{stat.label}</div>
      <div className="text-sm text-white/60">{stat.desc}</div>
    </div>
  ))}


              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20 z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`transform transition-all duration-1000 ${isVisible.skills ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <h2 className="text-5xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                Skills & Expertise
              </span>
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {Object.entries(skills).map(([category, skillList], categoryIndex) => (
                <div 
                  key={category}
                  className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl border border-white/10 hover:border-purple-500/30 transition-all duration-500"
                  style={{ animationDelay: `${categoryIndex * 200}ms` }}
                >
                  <h3 className="text-2xl font-bold mb-8 capitalize text-center">
                    <span className={`bg-gradient-to-r ${
                      category === 'frontend' ? 'from-purple-400 to-pink-400' :
                      category === 'backend' ? 'from-green-400 to-teal-400' :
                      'from-blue-400 to-cyan-400'
                    } bg-clip-text text-transparent`}>
                      {category}
                    </span>
                  </h3>
                  
                  <div className="space-y-6">
                    {skillList.map((skill, index) => (
                      <div key={skill.name} className="group">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-white font-medium">{skill.name}</span>
                          <span className="text-sm text-white/60">{skill.level}%</span>
                        </div>
                        <div className="relative h-3 bg-white/10 rounded-full overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:brightness-110`}
                            style={{ 
                              width: isVisible.skills ? `${skill.level}%` : '0%',
                              transitionDelay: `${index * 100}ms`
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-20 z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`transform transition-all duration-1000 ${isVisible.experience ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <h2 className="text-5xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">
                Experience & Achievements
              </span>
            </h2>
            
            <div className="space-y-8">
              {[
                {
                  title: "GSSoC 2025 Contributor",
                  organization: "GirlScript Summer of Code",
                  period: "July 2025 - Present",
                  description: "Contributing to open-source projects, collaborating with global developers, and enhancing coding skills through mentorship programs.",
                  color: "from-green-500 to-teal-500"
                },
                {
                  title: "Data Science Intern",
                  organization: "Prodigy InfoTech",
                  period: "2025 - Present",
                  description: "Currently working on data analysis and visualization, building interactive dashboards in Power BI, and assisting in the development of dashboards.",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  title: "Hackathon Experience",
organization: "University & Community Events",
period: "2024 - 2025",
description: "Explored collaborative problem-solving and innovation through hackathon participation, applying coding and web development skills in real-world challenges.",
color: "from-blue-500 to-cyan-500",
                }
              ].map((exp, index) => (
                <div key={index} className="relative p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl border border-white/10 hover:border-purple-500/30 transition-all duration-500">
                  <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${exp.color} rounded-l-xl`}></div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                    <p className={`text-lg bg-gradient-to-r ${exp.color} bg-clip-text text-transparent font-semibold mb-2`}>
                      {exp.organization}
                    </p>
                    <p className="text-sm text-white/60 mb-4">{exp.period}</p>
                    <p className="text-white/80 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20 z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`transform transition-all duration-1000 ${isVisible.projects ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <h2 className="text-5xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div 
                  key={project.id}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl border border-white/10 hover:border-purple-500/30 transition-all duration-500 hover:scale-105"
                >
                  <div className={`h-48 ${project.image} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                    <div className="absolute top-4 left-4 text-xs bg-black/50 px-2 py-1 rounded-full text-white/80">
                      {project.date}
                    </div>
                    <div className="absolute top-4 right-4 flex gap-2">
                      <button
                        onClick={() => window.open(project.github, '_blank')}
                        className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-all duration-300"
                      >
                        <Github className="w-4 h-4 text-white" />
                      </button>
                      <button
                        onClick={() => window.open(project.demo, '_blank')}
                        className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-all duration-300"
                      >
                        <ExternalLink className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-white/70 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                      {Object.entries(project.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-lg font-bold text-white">{value}</div>
                          <div className="text-xs text-white/50 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 z-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className={`transform transition-all duration-1000 ${isVisible.contact ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <h2 className="text-5xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Let's Connect
              </span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-8">
                {[
                  { 
                    icon: Mail, 
                    label: 'Email', 
                    value: 'saynajoshi300@gmail.com', 
                    color: 'from-red-500 to-pink-500',
                    action: handleEmailClick
                  },
                  { 
                    icon: Phone, 
                    label: 'Phone', 
                    value: '+91-8791002954', 
                    color: 'from-green-500 to-teal-500',
                    action: handlePhoneClick
                  },
                  { 
                    icon: MapPin, 
                    label: 'Location', 
                    value: 'Nainital, Uttarakhand', 
                    color: 'from-blue-500 to-purple-500',
                    action: () => window.open('https://maps.google.com/?q=Nainital,Uttarakhand', '_blank')
                  },
                  { 
                    icon: Github, 
                    label: 'GitHub', 
                    value: 'https://github.com/Sanjana-joshi10', 
                    color: 'from-gray-600 to-gray-400',
                    action: handleGithubClick
                  }
                ].map((contact) => (
                  <button 
                    key={contact.label}
                    onClick={contact.action}
                    className="group flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm hover:from-white/10 hover:to-white/20 transition-all duration-300 cursor-pointer w-full text-left"
                  >
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${contact.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <contact.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-white/60">{contact.label}</p>
                      <p className="text-lg text-white font-medium">{contact.value}</p>
                    </div>
                  </button>
                ))}
              </div>
              
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">Let's build something amazing!</h3>
                <p className="text-white/70 mb-8">
                  I'm actively seeking internship and job opportunities and exciting projects. Let's connect and create innovative solutions together!
                </p>
                
                <div className="flex space-x-4 mb-6">
                  <button 
                    onClick={handleEmailClick}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </div>
                
                <div className="flex justify-center space-x-4">
                  <button
                    onClick={handleGithubClick}
                    className="w-12 h-12 bg-white/10 rounded-lg text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 flex items-center justify-center"
                  >
                    <Github className="w-6 h-6" />
                  </button>
                  <button
                    onClick={handleLinkedInClick}
                    className="w-12 h-12 bg-white/10 rounded-lg text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 flex items-center justify-center"
                  >
                    <Globe className="w-6 h-6" />
                  </button>
                  <button
                    onClick={handleEmailClick}
                    className="w-12 h-12 bg-white/10 rounded-lg text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 flex items-center justify-center"
                  >
                    <Mail className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 z-10 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <button
              onClick={handleGithubClick}
              className="text-white/60 hover:text-white transition-colors duration-300"
            >
              <Github className="w-6 h-6" />
            </button>
            <button
              onClick={handleLinkedInClick}
              className="text-white/60 hover:text-white transition-colors duration-300"
            >
              <Globe className="w-6 h-6" />
            </button>
            <button
              onClick={handleEmailClick}
              className="text-white/60 hover:text-white transition-colors duration-300"
            >
              <Mail className="w-6 h-6" />
            </button>
          </div>
          <p className="text-white/60 mb-4">
            Designed & Built with ❤️ by Sanjana joshi using React & Tailwind CSS
          </p>
          <p className="text-white/40">
            © 2025 Sanjana joshi. All rights reserved.
          </p>
        </div>
      </footer>

      <div 
        className="fixed w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full pointer-events-none z-50 mix-blend-screen"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transition: 'all 0.1s ease-out'
        }}
      ></div>
    </div>
  );
};

export default Portfolio;
