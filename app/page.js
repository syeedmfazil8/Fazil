"use client";

import { useEffect, useState } from "react";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Next.js",
  "PHP",
  "Laravel",
  "MySQL",
  "Python",
  "AI / Machine Learning",
  "Data Mining",
  "Digital Image Processing",
  "Bootstrap",
  "WordPress",
  "Git & GitHub",
  "Figma",
  "Adobe Illustrator",
  "Adobe Photoshop",
  "Graphic Design",
];

const projects = [
  {
    number: "01",
    category: "GOVERNMENT PORTAL",
    title: "GBBOR Government Portal",
    description:
      "A professional government portal developed and deployed for the Gilgit-Baltistan Board of Revenue. The platform provides digital government services, information and online access to important resources.",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    link: "https://gbbor.gog.pk/",
  },
  {
    number: "02",
    category: "CORPORATE WEBSITE",
    title: "Aztrosys IT Solutions",
    description:
      "A modern corporate website developed for Aztrosys IT Solutions & Services, Islamabad, focusing on responsive design, professional presentation, usability and performance.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    link: "https://www.aztrosys.com/",
  },
  {
    number: "03",
    category: "WEB DEVELOPMENT",
    title: "E.Tips",
    description:
      "A web-based digital platform developed as part of professional web development work, focused on presenting information through a clean and responsive interface.",
    technologies: ["Web Development", "JavaScript", "PHP", "MySQL"],
    link: "https://www.etips.com/",
  },
  {
    number: "04",
    category: "PYTHON & AI",
    title: "Python & AI Projects",
    description:
      "Academic and practical projects involving Python, artificial intelligence, data mining and digital image processing. These projects strengthened my programming, analytical and problem-solving skills.",
    technologies: [
      "Python",
      "Artificial Intelligence",
      "Data Mining",
      "Image Processing",
    ],
    link: "https://github.com/syeedmfazil8",
  },
];

const experience = [
  {
    year: "2026 — PRESENT",
    role: "Senior Web Developer",
    company: "Aztrosys IT Solutions & Services",
    location: "Islamabad, Pakistan",
    description:
      "Currently working as a Senior Web Developer, building professional websites and web solutions. Developed the Aztrosys corporate website and contribute to modern web development projects.",
  },
  {
    year: "PSEB",
    role: "Web Developer Intern",
    company: "Pakistan Software Export Board",
    location: "Pakistan",
    description:
      "Completed a paid professional internship under PSEB. During the internship, developed and deployed the Government Portal for the Gilgit-Baltistan Board of Revenue (GBBOR).",
  },
  {
    year: "PREVIOUS",
    role: "Web Developer & Graphic Designer",
    company: "Leopard Media / Leopard Freelance Hub",
    location: "Gilgit-Baltistan, Pakistan",
    description:
      "Worked as a professional Web Developer and Graphic Designer, creating websites, digital designs and visual content for local and international clients. Leopard Media has a community of 50K+ followers.",
  },
  {
    year: "2021 — PRESENT",
    role: "Freelance Graphic Designer",
    company: "Fiverr & Direct Clients",
    location: "Remote",
    description:
      "Worked with international and local clients on professional graphic design projects including branding, social media graphics, promotional material and digital content.",
  },
];

const services = [
  {
    number: "01",
    icon: "</>",
    title: "Web Development",
    description:
      "Modern, responsive and scalable websites and web applications with clean frontend and reliable backend development.",
  },
  {
    number: "02",
    icon: "✦",
    title: "Graphic Design",
    description:
      "Professional branding, social media graphics, promotional designs and digital visual content.",
  },
  {
    number: "03",
    icon: "AI",
    title: "Python & AI",
    description:
      "Python programming, AI concepts, data mining, digital image processing and intelligent application development.",
  },
  {
    number: "04",
    icon: "◎",
    title: "UI / UX Design",
    description:
      "Clean and intuitive interfaces focused on usability, visual hierarchy, responsive layouts and user experience.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="portfolio-page">

      {/* NAVBAR */}
      <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="nav-container">

          <a
            href="#home"
            className="logo"
            onClick={() => setMenuOpen(false)}
          >
            <span className="logo-mark">F</span>
            <span className="logo-text">
              FAZIL<span>.</span>
            </span>
          </a>

          <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
            {[
              ["Home", "#home"],
              ["About", "#about"],
              ["Services", "#services"],
              ["Projects", "#projects"],
              ["Experience", "#experience"],
              ["Contact", "#contact"],
            ].map(([name, href]) => (
              <a
                key={name}
                href={href}
                onClick={() => setMenuOpen(false)}
              >
                {name}
              </a>
            ))}
          </nav>

          <a href="#contact" className="nav-cta">
            Let&apos;s Talk <span>↗</span>
          </a>

          <button
            className="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? "×" : "☰"}
          </button>

        </div>
      </header>

      {/* HERO */}
      <section id="home" className="hero-section">

        <div className="hero-grid-bg"></div>
        <div className="hero-glow hero-glow-one"></div>
        <div className="hero-glow hero-glow-two"></div>

        <div className="container hero-container">

          <div className="hero-content">

            <div className="availability">
              <span className="availability-dot"></span>
              Available for opportunities
            </div>

            <p className="eyebrow hero-eyebrow">
              SENIOR WEB DEVELOPER × GRAPHIC DESIGNER × PYTHON & AI
            </p>

            <h1 className="hero-title">
              I build
              <br />
              digital
              <br />
              <span>experiences.</span>
            </h1>

            <div className="hero-subtitle">
              Design meets development.
            </div>

            <p className="hero-description">
              I&apos;m <strong>Muhammad Fazil</strong>, a Computer Science
              graduate, Senior Web Developer and professional Graphic
              Designer with 4+ years of experience. I combine web
              development, design, Python and AI to create modern digital
              solutions.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                Explore My Work <span>↗</span>
              </a>

              <a href="#contact" className="btn btn-secondary">
                Get In Touch
              </a>
            </div>

            <div className="social-links">

              <a
                href="https://github.com/syeedmfazil8"
                target="_blank"
                rel="noopener noreferrer"
              >
                GH
              </a>

              <a
                href="https://www.linkedin.com/in/muhammad-fazil-43848b265/"
                target="_blank"
                rel="noopener noreferrer"
              >
                in
              </a>

              <a href="mailto:syeedmfazil9@gmail.com">
                @
              </a>

            </div>

          </div>

          {/* PROFILE */}
          <div className="hero-visual">

            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>
            <div className="orbit orbit-three"></div>

            <div className="profile-card">

              <div className="profile-image-container">
                <img
                  src="/profile.jpg.jpeg"
                  alt="Muhammad Fazil"
                  className="profile-image"
                />

                <div className="profile-image-overlay"></div>
              </div>

              <div className="profile-info">

                <div>
                  <strong>MUHAMMAD FAZIL</strong>
                  <span>Senior Web Developer</span>
                </div>

                <span className="profile-arrow">↗</span>

              </div>

            </div>

            <div className="floating-card code-card">
              <div className="floating-icon">
                {"</>"}
              </div>

              <div>
                <strong>Full Stack Developer</strong>
                <span>Frontend + Backend</span>
              </div>
            </div>

            <div className="floating1-card graphic-card">
              <div className="floating-icon">✦</div>

              <div>
                <strong>Graphic Designer</strong>
                <span>Creative Design</span>
              </div>
            </div>

            <div className="floating-card ai-card">
              <div className="floating-icon">AI</div>

              <div>
                <strong>Python & AI</strong>
                <span>Smart Solutions</span>
              </div>
            </div>

            <div className="experience-badge">
              <strong>4+</strong>
              <span>
                YEARS
                <br />
                EXPERIENCE
              </span>
            </div>

          </div>

        </div>

        <a href="#about" className="scroll-indicator">
          <span>SCROLL</span>
          <i></i>
        </a>

      </section>

      {/* ABOUT */}
      <section id="about" className="section about-section">

        <div className="container">

          <div className="section-heading">
            <span className="section-number">01 /</span>

            <div>
              <p className="eyebrow">ABOUT ME</p>

              <h2>
                Creativity meets
                <br />
                <span>technology.</span>
              </h2>
            </div>
          </div>

          <div className="about-grid">

            <div className="about-content">

            

              <p>
                I completed my Graphic Design course under NAVTTC Pakistan
                and received international certification in 2022. Since
                then, I have worked with international and local clients
                through Fiverr and direct projects.
              </p>
              <p>
                Completed my Paid Internship Under PAKISTAN SOFTWARE EXPORT BOARD(PSEB) with Official Certification
              </p>

              <p>
                My design background allows me to approach development
                from both technical and creative perspectives. I care
                about how a product works, how it looks and how users
                experience it.
              </p>

              <div className="stats">

                <div className="stat">
                  <strong>4+</strong>
                  <span>Years Creative & Technical Experience</span>
                </div>

                <div className="stat">
                  <strong>50K+</strong>
                  <span>Followers · Leopard Media</span>
                </div>

                <div className="stat">
                  <strong>3+</strong>
                  <span>Development Domains</span>
                </div>

              </div>

            </div>

            <div className="advantage-card">

              <p className="eyebrow">MY ADVANTAGE</p>

              <h3>
                One mind.
                <br />
                <span>Multiple skill sets.</span>
              </h3>

              <p>
                Web development, graphic design, Python and AI give me
                the ability to work across different parts of a digital
                product.
              </p>

              <div className="advantage-list">

                {[
                  "Clean development",
                  "Modern UI design",
                  "Responsive experiences",
                  "Python & AI",
                  "Creative problem solving",
                ].map((item, index) => (
                  <div key={item}>
                    <span>0{index + 1}</span>
                    {item}
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section id="services" className="section services-section">

        <div className="container">

          <div className="section-heading">
            <span className="section-number">02 /</span>

            <div>
              <p className="eyebrow">WHAT I DO</p>

              <h2>
                From concept
                <br />
                to <span>execution.</span>
              </h2>
            </div>
          </div>

          <div className="services-grid">

            {services.map((service) => (
              <article
                key={service.number}
                className="service-card"
              >

                <div className="service-top">
                  <span>{service.number}</span>

                  <div className="service-icon">
                    {service.icon}
                  </div>
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <div className="service-bottom">
                  <span>EXPLORE</span>
                  <span>↗</span>
                </div>

              </article>
            ))}

          </div>

          <div className="skills-section">

            <p className="eyebrow">
              TECHNOLOGIES & TOOLS
            </p>

            <div className="skills-list">

              {skills.map((skill) => (
                <span key={skill}>
                  {skill}
                </span>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* PROJECTS */}
      <section id="projects" className="section projects-section">

        <div className="container">

          <div className="section-heading">
            <span className="section-number">03 /</span>

            <div>
              <p className="eyebrow">SELECTED PROJECTS</p>

              <h2>
                Completed
                <br />
                <span>Projects.</span>
              </h2>
            </div>
          </div>


          <div className="projects-list">

            {projects.map((project) => (
              <article
                key={project.number}
                className={`project-item ${
                  activeProject === project.number
                    ? "project-active"
                    : ""
                }`}
                onMouseEnter={() =>
                  setActiveProject(project.number)
                }
                onMouseLeave={() =>
                  setActiveProject(null)
                }
              >

                <div className="project-number">
                  {project.number}
                </div>

                <div className="project-content">

                  <span className="project-category">
                    {project.category}
                  </span>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="project-tech">
                    {project.technologies.map((technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    ))}
                  </div>

                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  aria-label={`Visit ${project.title}`}
                >
                  ↗
                </a>

              </article>
            ))}

          </div>

        </div>

      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section experience-section">

        <div className="container">

          <div className="section-heading">
            <span className="section-number">04 /</span>

            <div>
              <p className="eyebrow">MY JOURNEY</p>

              <h2>
                Experience &
                <br />
                <span>growth.</span>
              </h2>
            </div>
          </div>

          <div className="timeline">

            <div className="timeline-line"></div>

            {experience.map((item, index) => (
              <div
                className="timeline-item"
                key={`${item.year}-${index}`}
              >

                <div className="timeline-marker">
                  <span></span>
                </div>

                <div className="timeline-date">
                  {item.year}
                </div>

                <div className="timeline-content">

                  <h3>{item.role}</h3>

                  <h4>{item.company}</h4>

                  <span className="timeline-location">
                    {item.location}
                  </span>

                  <p>{item.description}</p>

                </div>

              </div>
            ))}

          </div>

          <div className="education-section">

            <p className="eyebrow">
              EDUCATION & CERTIFICATION
            </p>

            <div className="education-grid">

              <div className="education-card">
                <span>2021 — 2025</span>
                <h3>
                  Bachelor of Science in Computer Science
                </h3>
                <p>
                  Mirpur University of Science & Technology (MUST)
                </p>
              </div>

              <div className="education-card">
                <span>2022</span>
                <h3>
                  Graphic Design Certification
                </h3>
                <p>
                  NAVTTC Pakistan
                </p>
              </div>

              <div className="education-card">
                <span>PSEB</span>
                <h3>
                  Paid Professional Internship
                </h3>
                <p>
                  Web Development & Government Portal Development
                </p>
              </div>

              <div className="education-card">
                <span>SPECIALIZATION</span>
                <h3>
                  Python, AI & Data Technologies
                </h3>
                <p>
                  Python programming, AI, data mining and digital image
                  processing.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* STATEMENT */}
      <section className="statement-section">

        <div className="statement-grid-bg"></div>
        <div className="statement-glow"></div>

        <div className="container">

          <div className="statement">

            <p className="eyebrow">
              DESIGN × DEVELOPMENT × AI
            </p>

            <h2>
              Code with purpose.
              <br />
              Design with <em>intention.</em>
            </h2>

            <p>
              Technology builds the product. Design makes people
              remember it. AI makes it smarter.
            </p>

          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact-section">

        <div className="container">

          <div className="contact-grid">

            <div className="contact-main">

              <p className="eyebrow">
                LET&apos;S WORK TOGETHER
              </p>

              <h2>
                Have an idea?
                <br />
                Let&apos;s build it
                <span> together.</span>
              </h2>

              <p className="contact-description">
                Whether you need a professional website, web application,
                Python project, AI solution, graphic design or a complete
                digital experience, I&apos;d love to hear about your project.
              </p>

              <a
                href="mailto:syeedmfazil9@gmail.com"
                className="big-email"
              >
                syeedmfazil9@gmail.com
                <span>↗</span>
              </a>

            </div>

            <div className="contact-details">

              <a
                href="tel:+923165208110"
                className="contact-box"
              >
                <span>PHONE</span>
                <strong>+92 316 5208110</strong>
              </a>

              <a
                href="mailto:syeedmfazil9@gmail.com"
                className="contact-box"
              >
                <span>EMAIL</span>
                <strong>syeedmfazil9@gmail.com</strong>
              </a>

              <a
                href="https://www.linkedin.com/in/muhammad-fazil-43848b265/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-box"
              >
                <span>LINKEDIN</span>
                <strong>Muhammad Fazil ↗</strong>
              </a>

              <a
                href="https://github.com/syeedmfazil8"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-box"
              >
                <span>GITHUB</span>
                <strong>@syeedmfazil8 ↗</strong>
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="footer">

        <div className="container footer-container">

          <a href="#home" className="footer-logo">
            F<span>.</span>
          </a>

          <p>
            © {new Date().getFullYear()} Muhammad Fazil.
            All rights reserved.
          </p>

          <div className="footer-links">

            <a
              href="https://github.com/syeedmfazil8"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/muhammad-fazil-43848b265/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a href="#home">
              Back to top ↑
            </a>

          </div>

        </div>

      </footer>

    </main>
  );
}
