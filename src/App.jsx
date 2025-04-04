import React, { useState, useEffect, useRef } from 'react';
import {
  Terminal, User, Server, Database, GitBranch, Award, BookOpen, Code,
  Monitor, Activity, Package, Clock, Briefcase, Mail, Phone, Linkedin,
  Github, Globe, ChevronRight, Cpu, MemoryStick, HardDrive
} from 'lucide-react';
import profileImage from './assets/profile.png';
import resumePdf from './assets/resume.pdf';
import { Analytics } from "@vercel/analytics/react"

const socialLinks = [
  { name: 'email', url: 'mailto:mail.anandhraman@gmail.com', icon: Mail, label: 'Email' },
  { name: 'linkedin', url: 'https://linkedin.com/in/anandh-raman', icon: Linkedin, label: 'LinkedIn' },
  { name: 'github', url: 'https://github.com/toymakerftw', icon: Github, label: 'GitHub' },
  { name: 'website', url: 'https://toymakerftw.github.io', icon: Globe, label: 'Website' },
  { name: 'resume', url: resumePdf, icon: BookOpen, label: 'Resume' }
];

const experiences = [
  {
    company: 'Turbolab Technologies',
    position: 'Site Reliability Engineer',
    duration: 'May 2024 - Present',
    points: [
      'Managed cloud infrastructure using Terraform for provisioning and automation',
      'Designed and maintained Kubernetes clusters for scalable microservices deployment',
      'Automated CI/CD workflows using GitLab CI/CD and GitHub Actions',
      'Implemented monitoring solutions using Prometheus, Grafana, and ELK Stack',
      'Developed automation scripts for infrastructure management and security compliance'
    ]
  },
  {
    company: 'PKJ Technologies',
    position: 'Application Developer',
    duration: 'Aug 2023 - May 2024',
    points: [
      'Developed a cloud-based in-house management system using MERN stack',
      'Designed and implemented secure authentication and role-based access control',
      'Integrated PostgreSQL, MySQL, and Redis for optimized database management',
      'Automated deployment processes using Docker and Kubernetes',
      'Streamlined internal workflows by automating data processing tasks'
    ]
  }
];

const projects = [
  {
    name: 'Recycler',
    url: 'https://github.com/Toymakerftw/Recycler',
    description: 'A centralized recycle bin for cloud and on-premise Linux servers, preventing accidental file deletion',
    points: [
      'Implements a master-agent architecture for distributed file recovery',
      'Deleted files are moved to an NFS-attached storage with version control',
      'Supports multi-node deployment for large-scale infrastructure'
    ]
  },
  {
    name: 'Triage - Intrusion Detection System',
    url: 'https://github.com/Toymakerftw/Triage-IDS',
    description: 'An AI-powered IDS that detects anomalies in network traffic',
    points: [
      'Uses an XGBoost model trained on cybersecurity datasets for anomaly detection',
      'Designed for real-time threat monitoring and alerting',
      'Developed in Python with a cloud-native architecture'
    ]
  },
  {
    name: 'Serversage',
    url: 'https://github.com/Toymakerftw/Serversage',
    description: 'A cloud-based monitoring system providing real-time insights into system health',
    points: [
      'Collects system metrics (CPU, memory, disk usage) from cloud and on-prem servers',
      'Supports integration with Prometheus and Grafana for visualization'
    ]
  }
];

const skillCategories = [
  {
    title: 'Programming',
    icon: Code,
    skills: ['Python', 'Go', 'Bash', 'JavaScript']
  },
  {
    title: 'Cloud & Infrastructure',
    icon: Server,
    skills: ['Terraform', 'Kubernetes', 'Docker', 'AWS', 'GCP']
  },
  {
    title: 'CI/CD & Automation',
    icon: Activity,
    skills: ['GitLab CI/CD', 'GitHub Actions', 'Ansible', 'Jenkins']
  },
  {
    title: 'Monitoring & Logging',
    icon: Monitor,
    skills: ['Prometheus', 'Grafana', 'ELK Stack', 'Zabbix']
  },
  {
    title: 'Networking & Proxies',
    icon: Globe,
    skills: ['HAProxy', 'Squid Proxy', 'Nginx', 'Apache']
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['PostgreSQL', 'MySQL', 'Redis', 'MongoDB']
  },
  {
    title: 'Version Control',
    icon: GitBranch,
    skills: ['Git', 'GitHub', 'GitLab']
  },
  {
    title: 'Operating Systems',
    icon: Terminal,
    skills: ['Linux (RHEL, Ubuntu, Debian)', 'Windows Server']
  }
];

const TerminalPortfolio = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [currentDirectory, setCurrentDirectory] = useState('~');
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  // Define available commands
  const commands = {
    help: {
      description: 'Show available commands',
      execute: () => {
        return (
          <div className="p-4 bg-gray-800/30 rounded-lg border border-gray-700/50 backdrop-blur-sm">
            <h3 className="text-lg font-bold text-emerald-400 mb-3">Available Commands</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {Object.entries(commands).map(([cmd, { description }]) => (
                <div key={cmd} className="flex items-start">
                  <ChevronRight className="w-4 h-4 text-emerald-400 mt-1 mr-2 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-amber-300">{cmd}</span>
                    <p className="text-gray-300 text-sm">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      }
    },
    about: {
      description: 'Display information about me',
      execute: () => {
        return (
          <div className="mt-2 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50 backdrop-blur-sm">
            <div className="flex items-center mb-4">
              <User className="w-5 h-5 text-emerald-400 mr-2" />
              <h2 className="text-xl font-bold text-gray-200">C.V. Anandhraman</h2>
            </div>
            <p className="text-gray-300/90 leading-relaxed mb-4">
              Site Reliability Engineer with expertise in cloud infrastructure, automation, and DevOps methodologies.
              Proficient in Linux, Kubernetes, and cloud-native technologies. Experienced in managing scalable,
              resilient architectures, ensuring high availability, and optimizing system performance. Passionate
              about building efficient CI/CD pipelines and infrastructure automation.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              {socialLinks.map(link => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-3 py-1.5 rounded-md bg-gray-700/30 hover:bg-gray-700/50 transition-colors text-emerald-400 hover:text-emerald-300"
                >
                  <link.icon className="w-4 h-4 mr-2" />
                  <span className="text-sm">{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        );
      }
    },
    experience: {
      description: 'Show my work experience',
      execute: () => {
        return (
          <div className="space-y-6">
            {experiences.map(exp => (
              <div key={exp.company} className="p-4 bg-gray-800/30 rounded-lg border border-gray-700/50 backdrop-blur-sm">
                <div className="flex flex-col sm:flex-row sm:items-center mb-3 gap-1 sm:gap-3">
                  <div className="flex items-center">
                    <Briefcase className="w-5 h-5 text-amber-400 mr-2" />
                    <h3 className="text-lg font-semibold text-gray-200">{exp.company}</h3>
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <span>{exp.position}</span>
                    <span className="mx-2">•</span>
                    <span>{exp.duration}</span>
                  </div>
                </div>
                <ul className="space-y-2 pl-6">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex">
                      <ChevronRight className="w-4 h-4 text-emerald-400 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-300/90">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        );
      }
    },
    projects: {
      description: 'View my projects',
      execute: () => {
        return (
          <div className="space-y-6">
            {projects.map(project => (
              <div key={project.name} className="p-4 bg-gray-800/30 rounded-lg border border-gray-700/50 backdrop-blur-sm">
                <div className="flex items-center mb-3">
                  <Code className="w-5 h-5 text-emerald-400 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-200">{project.name}</h3>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-3 text-sm text-cyan-400 hover:underline flex items-center"
                  >
                    <Github className="w-4 h-4 mr-1" /> GitHub
                  </a>
                </div>
                <p className="italic text-gray-400 mb-3">{project.description}</p>
                <ul className="space-y-2 pl-6">
                  {project.points.map((point, i) => (
                    <li key={i} className="flex">
                      <ChevronRight className="w-4 h-4 text-emerald-400 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-300/90">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        );
      }
    },
    skills: {
      description: 'List my technical skills',
      execute: () => {
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skillCategories.map(category => (
              <div key={category.title} className="p-4 bg-gray-800/30 rounded-lg border border-gray-700/50 backdrop-blur-sm">
                <div className="flex items-center mb-3">
                  <category.icon className="w-5 h-5 text-emerald-400 mr-2" />
                  <h3 className="font-semibold text-gray-200">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-sm rounded-full bg-gray-700/30 text-emerald-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
      }
    },
    education: {
      description: 'Show my educational background',
      execute: () => {
        return (
          <div className="p-4 bg-gray-800/30 rounded-lg border border-gray-700/50 backdrop-blur-sm">
            <div className="flex items-center mb-4">
              <BookOpen className="w-5 h-5 text-emerald-400 mr-2" />
              <h2 className="text-xl font-bold text-gray-200">Education</h2>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-amber-300">B.Tech - Computer Science and Engineering</h3>
                <p className="text-gray-300">SNGCE, Kolenchery (2023)</p>
              </div>

              <div>
                <h3 className="font-semibold text-amber-300">RHCSA</h3>
                <p className="text-gray-300">IPSR Solutions, Ernakulam (2017)</p>
              </div>

              <div>
                <h3 className="font-semibold text-amber-300">Diploma in Computer Engineering</h3>
                <p className="text-gray-300">Al Azhar Polytechnic College, Thodupuzha (2017)</p>
              </div>
            </div>
          </div>
        );
      }
    },
    certifications: {
      description: 'View my certifications',
      execute: () => {
        return (
          <div className="p-4 bg-gray-800/30 rounded-lg border border-gray-700/50 backdrop-blur-sm">
            <div className="flex items-center mb-4">
              <Award className="w-5 h-5 text-emerald-400 mr-2" />
              <h2 className="text-xl font-bold text-gray-200">Certifications</h2>
            </div>

            <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-amber-300">RHCSA - Red Hat Certified System Administrator</h3>
                <a
                  href="https://rhtapps.redhat.com/verify?certId=170-218-770"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline text-sm flex items-center"
                >
                  <Globe className="w-4 h-4 mr-1" /> Verify certification
                </a>
              </div>
            </div>
          </div>
        );
      }
    },
    contact: {
      description: 'Get my contact information',
      execute: () => {
        return (
          <div className="p-4 bg-gray-800/30 rounded-lg border border-gray-700/50 backdrop-blur-sm">
            <div className="flex items-center mb-4">
              <Mail className="w-5 h-5 text-emerald-400 mr-2" />
              <h2 className="text-xl font-bold text-gray-200">Contact Information</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-amber-400 mr-3" />
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a
                    href="mailto:mail.anandhraman@gmail.com"
                    className="text-emerald-400 hover:underline"
                  >
                    mail.anandhraman@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <Phone className="w-5 h-5 text-amber-400 mr-3" />
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="text-emerald-400">+91 70127 45003</p>
                </div>
              </div>

              <div className="flex items-center">
                <Github className="w-5 h-5 text-amber-400 mr-3" />
                <div>
                  <p className="text-sm text-gray-400">GitHub</p>
                  <a
                    href="https://github.com/toymakerftw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:underline"
                  >
                    toymakerftw
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <Linkedin className="w-5 h-5 text-amber-400 mr-3" />
                <div>
                  <p className="text-sm text-gray-400">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/anandh-raman-942374153"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:underline"
                  >
                    anandh-raman
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <Globe className="w-5 h-5 text-amber-400 mr-3" />
                <div>
                  <p className="text-sm text-gray-400">Website</p>
                  <a
                    href="https://toymakerftw.github.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:underline"
                  >
                    toymakerftw.github.io
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <Package className="w-5 h-5 text-amber-400 mr-3" />
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-emerald-400">Kolenchery, Kerala, India</p>
                </div>
              </div>
            </div>
          </div>
        );
      }
    },
    resume: {
      description: 'Download my resume',
      execute: () => {
        return (
          <div className="p-4 bg-gray-800/30 rounded-lg border border-gray-700/50 backdrop-blur-sm">
            <div className="flex items-center mb-4">
              <BookOpen className="w-5 h-5 text-emerald-400 mr-2" />
              <h2 className="text-xl font-bold text-gray-200">Download Resume</h2>
            </div>
            <a
              href={resumePdf}
              download="C.V. Anandhraman - Resume.pdf"
              className="px-4 py-2 bg-gray-700/30 hover:bg-gray-700/50 text-emerald-400 hover:text-emerald-300 rounded-md transition-colors"
            >
              Download Resume
            </a>
          </div>
        );
      }
    },
    clear: {
      description: 'Clear the terminal screen',
      execute: () => {
        setHistory([]);
        return null;
      }
    },
    ls: {
      description: 'List available sections',
      execute: () => {
        return (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
            {['about', 'experience', 'projects', 'skills', 'education', 'certifications', 'contact', 'resume'].map(item => (
              <div key={item} className="text-cyan-400 hover:text-cyan-300 transition-colors">
                {item}/
              </div>
            ))}
          </div>
        );
      }
    },
    whoami: {
      description: 'Display current user',
      execute: () => (
        <div className="px-4 py-2 bg-gray-800/30 rounded-lg border border-gray-700/50 backdrop-blur-sm inline-block">
          <span className="text-emerald-400">anandhraman</span>
        </div>
      )
    },
    date: {
      description: 'Display current date and time',
      execute: () => (
        <div className="px-4 py-2 bg-gray-800/30 rounded-lg border border-gray-700/50 backdrop-blur-sm inline-block">
          <span className="text-emerald-400">{new Date().toString()}</span>
        </div>
      )
    },
    summary: {
      description: 'Display system information in neofetch style',
      execute: () => {
        return (
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-4 items-start">
            {/* Profile Image */}
            <img
              src={profileImage}
              alt="Profile"
              className="w-24 h-24 md:w-32 md:h-32 rounded-full"
            />

            {/* Info Section */}
            <div className="space-y-1 text-sm">
              <div className="flex items-center">
                <span className="text-amber-300 w-24">Name</span>
                <span className="text-gray-300">C.V. Anandhraman</span>
              </div>
              <div className="flex items-center">
                <span className="text-amber-300 w-24">Title</span>
                <span className="text-gray-300">Site Reliability Engineer</span>
              </div>
              <div className="flex items-center">
                <span className="text-amber-300 w-24">OS</span>
                <span className="text-gray-300">Linux (RHEL, Ubuntu)</span>
              </div>
              <div className="flex items-center">
                <span className="text-amber-300 w-24">Shell</span>
                <span className="text-gray-300">Bash/Zsh</span>
              </div>
              <div className="flex items-center">
                <span className="text-amber-300 w-24">Languages</span>
                <span className="text-gray-300">Python, Go, Bash</span>
              </div>
              <div className="flex items-center">
                <span className="text-amber-300 w-24">Cloud</span>
                <span className="text-gray-300">AWS, GCP, Kubernetes</span>
              </div>
              <div className="flex items-center">
                <span className="text-amber-300 w-24">Location</span>
                <span className="text-gray-300">Kolenchery, India</span>
              </div>

              {/* Social Links */}
              <div className="pt-2 flex flex-wrap gap-2">
                {socialLinks.map(link => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-2 py-1 rounded bg-gray-700/30 hover:bg-gray-700/50 text-emerald-400 hover:text-emerald-300 text-xs"
                  >
                    <link.icon className="w-3 h-3 mr-1" />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <Analytics />
          </div>
        );
      }
    }
  };

  // Initial welcome message to show neofetch
  useEffect(() => {
    setHistory([
      {
        type: 'output',
        content: (
          <div className="animate-fadeIn">
            {commands.summary.execute()}
            <div className="mt-4 p-3 bg-gray-800/30 rounded-lg border border-gray-700/50">
              <p className="text-gray-300 mb-2 text-sm">
                Welcome to my interactive terminal portfolio. Type <span className="text-emerald-400">help</span> to see available commands.
              </p>
              <div className="flex flex-wrap gap-1">
                {['about', 'experience', 'projects', 'skills'].map(cmd => (
                  <button
                    key={cmd}
                    onClick={() => {
                      setInput(cmd);
                      setTimeout(() => {
                        if (inputRef.current) inputRef.current.focus();
                      }, 0);
                    }}
                    className="px-2 py-1 text-xs rounded bg-gray-700/30 hover:bg-gray-700/50 text-emerald-400 hover:text-emerald-300"
                  >
                    {cmd}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )
      }
    ]);

    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // Auto-scroll to bottom when history changes
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  // Focus input when clicking anywhere in the terminal
  const handleTerminalClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      executeCommand();
    }
  };

  const executeCommand = () => {
    const trimmedInput = input.trim();

    // Add command to history
    setHistory(prev => [
      ...prev,
      {
        type: 'command',
        directory: currentDirectory,
        content: trimmedInput
      }
    ]);

    // Process command
    if (trimmedInput) {
      const commandName = trimmedInput.split(' ')[0].toLowerCase();
      const args = trimmedInput.split(' ').slice(1);

      if (commands[commandName]) {
        const output = commands[commandName].execute(args);
        if (output !== null) {
          setHistory(prev => [
            ...prev,
            {
              type: 'output',
              content: output
            }
          ]);
        }
      } else {
        setHistory(prev => [
          ...prev,
          {
            type: 'output',
            content: (
              <div className="p-3 bg-red-900/20 rounded-lg border border-red-700/50">
                <p className="text-red-400">
                  Command not found: <span className="font-medium">{commandName}</span>. Type <span className="text-emerald-400">help</span> for available commands.
                </p>
              </div>
            )
          }
        ]);
      }
    }

    // Clear input
    setInput('');
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900 bg-opacity-95 backdrop-blur-sm">
      {/* Terminal Title Bar */}
      <div className="bg-gray-800/50 p-3 flex items-center justify-between border-b border-gray-700/50 backdrop-blur-sm">
        <div className="flex items-center space-x-2">
          <Terminal size={18} className="text-emerald-400" />
          <span className="text-gray-300 font-mono text-sm">anandhraman@portfolio:~</span>
        </div>
        <div className="flex space-x-2">
          <div
            className="w-3 h-3 rounded-full bg-red-400/80 hover:bg-red-400 cursor-pointer transition-colors"
            onClick={() => setHistory([])}
          ></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400/80 hover:bg-yellow-400 cursor-pointer transition-colors"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-400/80 hover:bg-emerald-400 cursor-pointer transition-colors"></div>
        </div>
      </div>

      {/* Terminal Content */}
      <div
        ref={terminalRef}
        className="flex-1 p-4 font-mono text-gray-300 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900/50"
        onClick={handleTerminalClick}
      >
        {/* Command History */}
        {history.map((item, index) => (
          <div key={index} className="mb-4 group">
            {item.type === 'command' && (
              <div className="flex items-center text-sm mb-1">
                <span className="text-emerald-400">➜</span>
                <span className="text-cyan-400 ml-1">{currentDirectory}</span>
                <span className="ml-2 text-gray-300 font-medium">{item.content}</span>
              </div>
            )}

            {item.type === 'output' && (
              <div className="animate-fadeIn">{item.content}</div>
            )}
          </div>
        ))}

        {/* Input Line */}
        <div className="flex items-center text-sm">
          <span className="text-emerald-400">➜</span>
          <span className="text-cyan-400 ml-1">{currentDirectory}</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className="ml-2 flex-1 bg-transparent outline-none placeholder-gray-500 text-gray-300 font-medium caret-emerald-400"
            placeholder="Type command..."
            autoFocus
            spellCheck="false"
          />
        </div>
      </div>
    </div>
  );
};

export default TerminalPortfolio;
