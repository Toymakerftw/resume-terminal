import React, { useState, useEffect, useRef } from 'react';
import { Terminal, User, Server, Database, GitBranch, Award, BookOpen, Code, Monitor, Activity, Package, Clock, Briefcase, Mail, Phone, Linkedin, Github, Globe, ChevronRight } from 'lucide-react';

const TerminalPortfolio = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [currentDirectory, setCurrentDirectory] = useState('~');
  const [cursorPosition, setCursorPosition] = useState(0);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  // Define available commands
  const commands = {
    help: {
      description: 'Show available commands',
      execute: () => {
        return (
          <div className="mb-2">
            <p className="text-green-400 font-bold">Available commands:</p>
            {Object.keys(commands).map(cmd => (
              <div key={cmd} className="grid grid-cols-12 gap-2">
                <span className="col-span-2 text-yellow-400">{cmd}</span>
                <span className="col-span-10 text-gray-300">{commands[cmd].description}</span>
              </div>
            ))}
          </div>
        );
      }
    },
    about: {
      description: 'Display information about me',
      execute: () => {
        return (
          <div className="mb-2">
            <p className="text-green-400 font-bold mb-2">C.V. Anandhraman</p>
            <p className="mb-2">Site Reliability Engineer with expertise in cloud infrastructure, automation, and DevOps methodologies. Proficient in Linux, Kubernetes, and cloud-native technologies. Experienced in managing scalable, resilient architectures, ensuring high availability, and optimizing system performance. Passionate about building efficient CI/CD pipelines and infrastructure automation.</p>
            <div className="flex space-x-4 mt-2">
              <a href="mailto:mail.anandhraman@gmail.com" className="flex items-center text-blue-400 hover:underline">
                <Mail size={16} className="mr-1" /> Email
              </a>
              <a href="https://linkedin.com/in/anandh-raman" className="flex items-center text-blue-400 hover:underline">
                <Linkedin size={16} className="mr-1" /> LinkedIn
              </a>
              <a href="https://github.com/toymakerftw" className="flex items-center text-blue-400 hover:underline">
                <Github size={16} className="mr-1" /> GitHub
              </a>
              <a href="https://toymakerftw.github.io" className="flex items-center text-blue-400 hover:underline">
                <Globe size={16} className="mr-1" /> Website
              </a>
            </div>
          </div>
        );
      }
    },
    experience: {
      description: 'Show my work experience',
      execute: () => {
        return (
          <div className="mb-2">
            <p className="text-green-400 font-bold">Work Experience:</p>

            <div className="mb-4 mt-2">
              <div className="flex items-center">
                <Briefcase size={16} className="text-yellow-400 mr-2" />
                <span className="text-yellow-400 font-bold">Turbolab Technologies</span>
                <span className="text-gray-400 ml-2">| Site Reliability Engineer | May 2024 - Present</span>
              </div>
              <ul className="list-disc ml-8 mt-1">
                <li>Managed cloud infrastructure using Terraform for provisioning and automation.</li>
                <li>Designed and maintained Kubernetes clusters for scalable microservices deployment.</li>
                <li>Automated CI/CD workflows using GitLab CI/CD and GitHub Actions.</li>
                <li>Implemented monitoring solutions using Prometheus, Grafana, and ELK Stack.</li>
                <li>Developed automation scripts for infrastructure management and security compliance.</li>
              </ul>
            </div>

            <div className="mb-2">
              <div className="flex items-center">
                <Briefcase size={16} className="text-yellow-400 mr-2" />
                <span className="text-yellow-400 font-bold">PKJ Technologies</span>
                <span className="text-gray-400 ml-2">| Application Developer | Aug 2023 - May 2024</span>
              </div>
              <ul className="list-disc ml-8 mt-1">
                <li>Developed a cloud-based in-house management system using MERN stack.</li>
                <li>Designed and implemented secure authentication and role-based access control.</li>
                <li>Integrated PostgreSQL, MySQL, and Redis for optimized database management.</li>
                <li>Automated deployment processes using Docker and Kubernetes.</li>
                <li>Streamlined internal workflows by automating data processing tasks.</li>
              </ul>
            </div>
          </div>
        );
      }
    },
    projects: {
      description: 'View my projects',
      execute: () => {
        return (
          <div className="mb-2">
            <p className="text-green-400 font-bold">Projects:</p>

            <div className="mb-4 mt-2">
              <div className="flex items-center">
                <Code size={16} className="text-yellow-400 mr-2" />
                <span className="text-yellow-400 font-bold">Recycler</span>
                <a href="https://github.com/Toymakerftw/Recycler" className="ml-2 text-blue-400 hover:underline">github.com/Toymakerftw/Recycler</a>
              </div>
              <p className="italic mt-1">A centralized recycle bin for cloud and on-premise Linux servers, preventing accidental file deletion.</p>
              <ul className="list-disc ml-8 mt-1">
                <li>Implements a master-agent architecture for distributed file recovery.</li>
                <li>Deleted files are moved to an NFS-attached storage with version control.</li>
                <li>Supports multi-node deployment for large-scale infrastructure.</li>
              </ul>
            </div>

            <div className="mb-4">
              <div className="flex items-center">
                <Code size={16} className="text-yellow-400 mr-2" />
                <span className="text-yellow-400 font-bold">Triage - Intrusion Detection System</span>
                <a href="https://github.com/Toymakerftw/Triage-IDS" className="ml-2 text-blue-400 hover:underline">github.com/Toymakerftw/Triage-IDS</a>
              </div>
              <p className="italic mt-1">An AI-powered IDS that detects anomalies in network traffic.</p>
              <ul className="list-disc ml-8 mt-1">
                <li>Uses an XGBoost model trained on cybersecurity datasets for anomaly detection.</li>
                <li>Designed for real-time threat monitoring and alerting.</li>
                <li>Developed in Python with a cloud-native architecture.</li>
              </ul>
            </div>

            <div className="mb-2">
              <div className="flex items-center">
                <Code size={16} className="text-yellow-400 mr-2" />
                <span className="text-yellow-400 font-bold">Serversage</span>
                <a href="https://github.com/Toymakerftw/Serversage" className="ml-2 text-blue-400 hover:underline">github.com/Toymakerftw/Serversage</a>
              </div>
              <p className="italic mt-1">A cloud-based monitoring system providing real-time insights into system health.</p>
              <ul className="list-disc ml-8 mt-1">
                <li>Collects system metrics (CPU, memory, disk usage) from cloud and on-prem servers.</li>
                <li>Supports integration with Prometheus and Grafana for visualization.</li>
              </ul>
            </div>
          </div>
        );
      }
    },
    skills: {
      description: 'List my technical skills',
      execute: () => {
        return (
          <div className="mb-2">
            <p className="text-green-400 font-bold mb-2">Technical Skills:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <Code size={16} className="text-yellow-400 mr-2 mt-1" />
                <div>
                  <p className="text-yellow-400">Programming</p>
                  <p>Python, Go, Bash</p>
                </div>
              </div>

              <div className="flex items-start">
                <Server size={16} className="text-yellow-400 mr-2 mt-1" />
                <div>
                  <p className="text-yellow-400">Cloud & Infrastructure</p>
                  <p>Terraform, Kubernetes, Docker</p>
                </div>
              </div>

              <div className="flex items-start">
                <Activity size={16} className="text-yellow-400 mr-2 mt-1" />
                <div>
                  <p className="text-yellow-400">CI/CD & Automation</p>
                  <p>GitLab CI/CD, GitHub Actions, Ansible</p>
                </div>
              </div>

              <div className="flex items-start">
                <Monitor size={16} className="text-yellow-400 mr-2 mt-1" />
                <div>
                  <p className="text-yellow-400">Monitoring & Logging</p>
                  <p>Prometheus, Grafana, ELK Stack, Zabbix</p>
                </div>
              </div>

              <div className="flex items-start">
                <Globe size={16} className="text-yellow-400 mr-2 mt-1" />
                <div>
                  <p className="text-yellow-400">Networking & Proxies</p>
                  <p>HAProxy, Squid Proxy, Nginx, Apache</p>
                </div>
              </div>

              <div className="flex items-start">
                <Database size={16} className="text-yellow-400 mr-2 mt-1" />
                <div>
                  <p className="text-yellow-400">Databases</p>
                  <p>PostgreSQL, MySQL, Redis</p>
                </div>
              </div>

              <div className="flex items-start">
                <GitBranch size={16} className="text-yellow-400 mr-2 mt-1" />
                <div>
                  <p className="text-yellow-400">Version Control</p>
                  <p>Git, GitHub, GitLab</p>
                </div>
              </div>

              <div className="flex items-start">
                <Terminal size={16} className="text-yellow-400 mr-2 mt-1" />
                <div>
                  <p className="text-yellow-400">Operating Systems</p>
                  <p>Linux (RHEL, Ubuntu, Debian)</p>
                </div>
              </div>
            </div>
          </div>
        );
      }
    },
    education: {
      description: 'Show my educational background',
      execute: () => {
        return (
          <div className="mb-2">
            <p className="text-green-400 font-bold">Education:</p>

            <div className="mt-2">
              <div className="flex items-center">
                <BookOpen size={16} className="text-yellow-400 mr-2" />
                <span className="text-yellow-400 font-bold">B.Tech - Computer Science and Engineering</span>
              </div>
              <p className="ml-6">SNGCE, Kolenchery (2023)</p>
            </div>

            <div className="mt-2">
              <div className="flex items-center">
                <BookOpen size={16} className="text-yellow-400 mr-2" />
                <span className="text-yellow-400 font-bold">RHCSA</span>
              </div>
              <p className="ml-6">IPSR Solutions, Ernakulam (2017)</p>
            </div>

            <div className="mt-2">
              <div className="flex items-center">
                <BookOpen size={16} className="text-yellow-400 mr-2" />
                <span className="text-yellow-400 font-bold">Diploma in Computer Engineering</span>
              </div>
              <p className="ml-6">Al Azhar Polytechnic College, Thodupuzha (2017)</p>
            </div>
          </div>
        );
      }
    },
    certifications: {
      description: 'View my certifications',
      execute: () => {
        return (
          <div className="mb-2">
            <p className="text-green-400 font-bold">Certifications:</p>

            <div className="mt-2">
              <div className="flex items-center">
                <Award size={16} className="text-yellow-400 mr-2" />
                <span className="text-yellow-400 font-bold">RHCSA - Red Hat Certified System Administrator</span>
              </div>
              <p className="ml-6">Verified at: <a href="https://rhtapps.redhat.com/verify?certId=170-218-770" className="text-blue-400 hover:underline">Red Hat Certification Portal</a></p>
            </div>
          </div>
        );
      }
    },
    contact: {
      description: 'Get my contact information',
      execute: () => {
        return (
          <div className="mb-2">
            <p className="text-green-400 font-bold">Contact Information:</p>

            <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="flex items-center">
                <Mail size={16} className="text-yellow-400 mr-2" />
                <span className="text-yellow-400 font-bold">Email:</span>
                <a href="mailto:mail.anandhraman@gmail.com" className="ml-2 text-blue-400 hover:underline">mail.anandhraman@gmail.com</a>
              </div>

              <div className="flex items-center">
                <Phone size={16} className="text-yellow-400 mr-2" />
                <span className="text-yellow-400 font-bold">Phone:</span>
                <span className="ml-2">+91 70127 45003</span>
              </div>

              <div className="flex items-center">
                <Github size={16} className="text-yellow-400 mr-2" />
                <span className="text-yellow-400 font-bold">GitHub:</span>
                <a href="https://github.com/toymakerftw" className="ml-2 text-blue-400 hover:underline">toymakerftw</a>
              </div>

              <div className="flex items-center">
                <Linkedin size={16} className="text-yellow-400 mr-2" />
                <span className="text-yellow-400 font-bold">LinkedIn:</span>
                <a href="https://www.linkedin.com/in/anandh-raman-942374153" className="ml-2 text-blue-400 hover:underline">anandh-raman</a>
              </div>

              <div className="flex items-center">
                <Globe size={16} className="text-yellow-400 mr-2" />
                <span className="text-yellow-400 font-bold">Website:</span>
                <a href="https://toymakerftw.github.io" className="ml-2 text-blue-400 hover:underline">toymakerftw.github.io</a>
              </div>

              <div className="flex items-center">
                <Package size={16} className="text-yellow-400 mr-2" />
                <span className="text-yellow-400 font-bold">Location:</span>
                <span className="ml-2">Kolenchery, Kerala, India</span>
              </div>
            </div>
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
          <div className="mb-2">
            <p className="text-blue-400">about/</p>
            <p className="text-blue-400">experience/</p>
            <p className="text-blue-400">projects/</p>
            <p className="text-blue-400">skills/</p>
            <p className="text-blue-400">education/</p>
            <p className="text-blue-400">certifications/</p>
            <p className="text-blue-400">contact/</p>
          </div>
        );
      }
    },
    whoami: {
      description: 'Display current user',
      execute: () => <div className="mb-2">anandhraman</div>
    },
    date: {
      description: 'Display current date and time',
      execute: () => <div className="mb-2">{new Date().toString()}</div>
    },
  };

  // Initial welcome message
  useEffect(() => {
    setHistory([
      {
        type: 'output',
        content: (
          <div>
            <div className="text-green-400 text-xl font-bold mb-2">Welcome to Anandhraman's Terminal Portfolio</div>
            <p className="mb-1">Type <span className="text-yellow-400">help</span> to see available commands.</p>
            <p>Type <span className="text-yellow-400">about</span> to learn more about me.</p>
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
            content: <div className="text-red-500">Command not found: {commandName}. Type 'help' for available commands.</div>
          }
        ]);
      }
    }

    // Clear input
    setInput('');
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900">
      {/* Terminal Title Bar */}
      <div className="bg-gray-800 p-2 flex items-center justify-between border-b border-gray-700">
        <div className="flex items-center">
          <Terminal size={18} className="text-green-400 mr-2" />
          <span className="text-white font-mono">anandhraman@portfolio:~</span>
        </div>
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
      </div>

      {/* Terminal Content */}
      <div
        ref={terminalRef}
        className="flex-1 bg-gray-900 p-4 font-mono text-white overflow-y-auto"
        onClick={handleTerminalClick}
      >
        {/* Command History */}
        {history.map((item, index) => (
          <div key={index} className="mb-2">
            {item.type === 'command' && (
              <div className="flex items-center">
                <span className="text-green-400">anandhraman@portfolio:</span>
                <span className="text-blue-400">{item.directory}</span>
                <span className="text-white mx-1">$</span>
                <span>{item.content}</span>
              </div>
            )}

            {item.type === 'output' && (
              <div>{item.content}</div>
            )}
          </div>
        ))}

        {/* Current Input Line */}
        <div className="flex items-center">
          <span className="text-green-400">anandhraman@portfolio:</span>
          <span className="text-blue-400">{currentDirectory}</span>
          <span className="text-white mx-1">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none border-none"
            autoFocus
          />
        </div>
      </div>
    </div>
  );
};

export default TerminalPortfolio;
