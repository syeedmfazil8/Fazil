"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useMotionValue } from "framer-motion";

const skills = [
  "HTML5", "CSS3", "JavaScript", "React", "Next.js", "PHP", "Laravel", "MySQL",
  "Python", "AI / Machine Learning", "Data Mining", "Digital Image Processing",
  "Bootstrap", "WordPress", "Git & GitHub", "Figma", "Adobe Illustrator",
  "Adobe Photoshop", "Graphic Design",
];

const projects = [
  {
    number: "01",
    category: "GOVERNMENT PORTAL",
    title: "GBBOR Government Portal",
    description: "A professional government portal developed and deployed for the Gilgit-Baltistan Board of Revenue. The platform provides digital government services, information and online access to important resources.",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    link: "https://gbbor.gog.pk/",
  },
  {
    number: "02",
    category: "CORPORATE WEBSITE",
    title: "Aztrosys IT Solutions",
    description: "A modern corporate website developed for Aztrosys IT Solutions & Services, Islamabad, focusing on responsive design, professional presentation, usability and performance.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    link: "https://www.aztrosys.com/",
  },
  {
    number: "03",
    category: "WEB DEVELOPMENT",
    title: "E.Tips",
    description: "A web-based digital platform developed as part of professional web development work, focused on presenting information through a clean and responsive interface.",
    technologies: ["Web Development", "JavaScript", "PHP", "MySQL"],
    link: "https://www.etips.com/",
  },
  {
    number: "04",
    category: "PYTHON & AI",
    title: "Python & AI Projects",
    description: "Academic and practical projects involving Python, artificial intelligence, data mining and digital image processing. These projects strengthened my programming, analytical and problem-solving skills.",
    technologies: ["Python", "Artificial Intelligence", "Data Mining", "Image Processing"],
    link: "https://github.com/syeedmfazil8",
  },
];

const experience = [
  {
    year: "2026 — PRESENT",
    role: "Senior Web Developer",
    company: "Aztrosys IT Solutions & Services",
    location: "Islamabad, Pakistan",
    description: "Currently working as a Senior Web Developer, building professional websites and web solutions. Developed the Aztrosys corporate website and contribute to modern web development projects.",
  },
  {
    year: "PSEB",
    role: "Web Developer Intern",
    company: "Pakistan Software Export Board",
    location: "Pakistan",
    description: "Completed a paid professional internship under PSEB. During the internship, developed and deployed the Government Portal for the Gilgit-Baltistan Board of Revenue (GBBOR).",
  },
  {
    year: "PREVIOUS",
    role: "Web Developer & Graphic Designer",
    company: "Leopard Media / Leopard Freelance Hub",
    location: "Gilgit-Baltistan, Pakistan",
    description: "Worked as a professional Web Developer and Graphic Designer, creating websites, digital designs and visual content for local and international clients. Leopard Media has a community of 50K+ followers.",
  },
  {
    year: "2021 — PRESENT",
    role: "Freelance Graphic Designer",
    company: "Fiverr & Direct Clients",
    location: "Remote",
    description: "Worked with international and local clients on professional graphic design projects including branding, social media graphics, promotional material and digital content.",
  },
];

const services = [
  { number: "01", icon: "</>", title: "Web Development", description: "Modern, responsive and scalable websites and web applications with clean frontend and reliable backend development." },
  { number: "02", icon: "✦", title: "Graphic Design", description: "Professional branding, social media graphics, promotional designs and digital visual content." },
  { number: "03", icon: "AI", title: "Python & AI", description: "Python programming, AI concepts, data mining, digital image processing and intelligent application development." },
  { number: "04", icon: "◎", title: "UI / UX Design", description: "Clean and intuitive interfaces focused on usability, visual hierarchy, responsive layouts and user experience." },
];

// --- ANIMATION VARIANTS ---
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const floatAnimation = (delay = 0) => ({
  animate: {
    y: [0, -12, 0],
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut", delay }
  }
});

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Custom Cursor tracking
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      
      // Update CSS variables for the Spotlight Grid
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('a') || e.target.closest('button') || e.target.closest('.project-item')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <main className="portfolio-page relative">
      
      {/* GLOBAL ANIMATED SPOTLIGHT GRID */}
      <div className="global-grid-bg"></div>
      <div className="grid-spotlight"></div>

      {/* CUSTOM CIRCULAR CURSOR */}
      {isMounted && (
        <>
          <motion.div
            className={`custom-cursor ${isHovering ? "hovering" : ""}`}
            style={{ x: cursorXSpring, y: cursorYSpring }}
          />
          <motion.div
            className="custom-cursor-dot"
            style={{ x: cursorX, y: cursorY }}
          />
        </>
      )}

      {/* ADVANCED SCROLL PROGRESS BAR */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-600 to-cyan-400 origin-left z-[100]" 
        style={{ scaleX }} 
      />

      {/* NAVBAR */}
      <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="nav-container">
          <a href="#home" className="logo" onClick={() => setMenuOpen(false)}>
            <span className="logo-mark">F</span>
            <span className="logo-text">FAZIL<span>.</span></span>
          </a>

          <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
            {["Home", "About", "Services", "Projects", "Experience", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
                {item}
              </a>
            ))}
          </nav>

          <a href="#contact" className="nav-cta">
            Let&apos;s Talk <span>↗</span>
          </a>

          <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
            {menuOpen ? "×" : "☰"}
          </button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="home" className="hero-section">
        <div className="hero-glow hero-glow-one"></div>
        <div className="hero-glow hero-glow-two"></div>

        <div className="container hero-container">
          <motion.div 
            className="hero-content"
            initial="hidden" animate="visible" variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="availability">
              <span className="availability-dot"></span> Available for opportunities
            </motion.div>

            <motion.p variants={fadeUp} className="eyebrow hero-eyebrow">
              SENIOR WEB DEVELOPER × GRAPHIC DESIGNER × PYTHON & AI
            </motion.p>

            <motion.h1 variants={fadeUp} className="hero-title">
              I build<br />digital<br /><span>experiences.</span>
            </motion.h1>

            <motion.div variants={fadeUp} className="hero-subtitle">
              Design meets development.
            </motion.div>

            <motion.p variants={fadeUp} className="hero-description">
              I&apos;m <strong>Muhammad Fazil</strong>, a Computer Science graduate, Senior Web Developer and professional Graphic Designer with 4+ years of experience. I combine web development, design, Python and AI to create modern digital solutions.
            </motion.p>

            <motion.div variants={fadeUp} className="hero-buttons">
              <motion.a 
                href="#projects" className="btn btn-primary"
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              >
                Explore My Work <span>↗</span>
              </motion.a>
              <motion.a 
                href="#contact" className="btn btn-secondary"
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>

            <motion.div variants={fadeUp} className="social-links">
              <a href="https://github.com/syeedmfazil8" target="_blank" rel="noopener noreferrer">GH</a>
              <a href="https://www.linkedin.com/in/muhammad-fazil-43848b265/" target="_blank" rel="noopener noreferrer">in</a>
              <a href="mailto:syeedmfazil9@gmail.com">@</a>
            </motion.div>
          </motion.div>

          {/* PROFILE VISUAL */}
          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>
            <div className="orbit orbit-three"></div>

            <motion.div 
              className="profile-card"
              whileHover={{ scale: 1.03, rotateY: 8, rotateX: 8, boxShadow: "0px 20px 40px rgba(0,0,0,0.2)" }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{ perspective: 1000 }}
            >
              <div className="profile-image-container">
                <img src="/profile.jpg.jpeg" alt="Muhammad Fazil" className="profile-image" />
                <div className="profile-image-overlay"></div>
              </div>
              <div className="profile-info">
                <div>
                  <strong>MUHAMMAD FAZIL</strong>
                  <span>Senior Web Developer</span>
                </div>
                <span className="profile-arrow">↗</span>
              </div>
            </motion.div>

            {/* Floating Cards with Continuous 3D Animation */}
            <motion.div variants={floatAnimation(0)} animate="animate" className="floating-card code-card">
              <div className="floating-icon">{"</>"}</div>
              <div><strong>Full Stack Developer</strong><span>Frontend + Backend</span></div>
            </motion.div>

            <motion.div variants={floatAnimation(1)} animate="animate" className="floating1-card graphic-card">
              <div className="floating-icon">✦</div>
              <div><strong>Graphic Designer</strong><span>Creative Design</span></div>
            </motion.div>

            <motion.div variants={floatAnimation(2)} animate="animate" className="floating-card ai-card">
              <div className="floating-icon">AI</div>
              <div><strong>Python & AI</strong><span>Smart Solutions</span></div>
            </motion.div>

            <motion.div 
              className="experience-badge"
              whileHover={{ rotate: 15, scale: 1.1 }}
              transition={{ type: "spring" }}
            >
              <strong>4+</strong>
              <span>YEARS<br />EXPERIENCE</span>
            </motion.div>
          </motion.div>
        </div>

        <a href="#about" className="scroll-indicator">
          <span>SCROLL</span>
          <i></i>
        </a>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="section about-section">
        <div className="container">
          <motion.div 
            className="section-heading"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          >
            <span className="section-number">01 /</span>
            <div>
              <p className="eyebrow">ABOUT ME</p>
              <h2>Creativity meets<br /><span>technology.</span></h2>
            </div>
          </motion.div>

          <div className="about-grid">
            <motion.div 
              className="about-content"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            >
              <p>I completed my Graphic Design course under NAVTTC Pakistan and received international certification in 2022. Since then, I have worked with international and local clients through Fiverr and direct projects.</p>
              <p>Completed my Paid Internship Under PAKISTAN SOFTWARE EXPORT BOARD(PSEB) with Official Certification</p>
              <p>My design background allows me to approach development from both technical and creative perspectives. I care about how a product works, how it looks and how users experience it.</p>
              <div className="stats">
                <motion.div className="stat" whileHover={{ y: -5 }}>
                  <strong>4+</strong><span>Years Creative & Technical Experience</span>
                </motion.div>
                <motion.div className="stat" whileHover={{ y: -5 }}>
                  <strong>50K+</strong><span>Followers · Leopard Media</span>
                </motion.div>
                <motion.div className="stat" whileHover={{ y: -5 }}>
                  <strong>3+</strong><span>Development Domains</span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              className="advantage-card"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="eyebrow">MY ADVANTAGE</p>
              <h3>One mind.<br /><span>Multiple skill sets.</span></h3>
              <p>Web development, graphic design, Python and AI give me the ability to work across different parts of a digital product.</p>
              <div className="advantage-list">
                {["Clean development", "Modern UI design", "Responsive experiences", "Python & AI", "Creative problem solving"].map((item, index) => (
                  <motion.div 
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (index * 0.1) }}
                  >
                    <span>0{index + 1}</span>{item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="section services-section">
        <div className="container">
          <motion.div 
            className="section-heading"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          >
            <span className="section-number">02 /</span>
            <div>
              <p className="eyebrow">WHAT I DO</p>
              <h2>From concept<br />to <span>execution.</span></h2>
            </div>
          </motion.div>

          <div className="services-grid">
            {services.map((service, idx) => (
              <motion.article
                key={service.number}
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
              >
                <div className="service-top">
                  <span>{service.number}</span>
                  <div className="service-icon">{service.icon}</div>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-bottom"><span>EXPLORE</span><span>↗</span></div>
              </motion.article>
            ))}
          </div>

          <motion.div 
            className="skills-section"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          >
            <p className="eyebrow">TECHNOLOGIES & TOOLS</p>
            <div className="skills-list">
              {skills.map((skill) => (
                <motion.span 
                  key={skill} 
                  whileHover={{ scale: 1.15, backgroundColor: "#2563eb", color: "#fff", borderColor: "#2563eb" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="section projects-section">
        <div className="container">
          <motion.div 
            className="section-heading"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          >
            <span className="section-number">03 /</span>
            <div>
              <p className="eyebrow">SELECTED PROJECTS</p>
              <h2>Completed<br /><span>Projects.</span></h2>
            </div>
          </motion.div>

          <div className="projects-list">
            {projects.map((project) => (
              <motion.article
                key={project.number}
                className={`project-item ${activeProject === project.number ? "project-active" : ""}`}
                onMouseEnter={() => setActiveProject(project.number)}
                onMouseLeave={() => setActiveProject(null)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="project-number">{project.number}</div>
                <div className="project-content">
                  <span className="project-category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                </div>
                <motion.a 
                  href={project.link} target="_blank" rel="noopener noreferrer" className="project-link"
                  whileHover={{ scale: 1.2, rotate: 45, backgroundColor: "#2563eb", color: "#fff" }}
                >
                  ↗
                </motion.a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="section experience-section">
        <div className="container">
          <motion.div 
            className="section-heading"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          >
            <span className="section-number">04 /</span>
            <div>
              <p className="eyebrow">MY JOURNEY</p>
              <h2>Experience &<br /><span>growth.</span></h2>
            </div>
          </motion.div>

          <div className="timeline">
            <div className="timeline-line"></div>
            {experience.map((item, index) => (
              <motion.div 
                className="timeline-item" key={`${item.year}-${index}`}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
              >
                <div className="timeline-marker"><span></span></div>
                <div className="timeline-date">{item.year}</div>
                <div className="timeline-content">
                  <h3>{item.role}</h3>
                  <h4>{item.company}</h4>
                  <span className="timeline-location">{item.location}</span>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="education-section"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          >
            <p className="eyebrow">EDUCATION & CERTIFICATION</p>
            <div className="education-grid">
              <motion.div className="education-card" whileHover={{ y: -8, boxShadow: "0 10px 20px rgba(0,0,0,0.05)" }}>
                <span>2021 — 2025</span>
                <h3>Bachelor of Science in Computer Science</h3>
                <p>Mirpur University of Science & Technology (MUST)</p>
              </motion.div>
              <motion.div className="education-card" whileHover={{ y: -8, boxShadow: "0 10px 20px rgba(0,0,0,0.05)" }}>
                <span>2022</span>
                <h3>Graphic Design Certification</h3>
                <p>NAVTTC Pakistan</p>
              </motion.div>
              <motion.div className="education-card" whileHover={{ y: -8, boxShadow: "0 10px 20px rgba(0,0,0,0.05)" }}>
                <span>PSEB</span>
                <h3>Paid Professional Internship</h3>
                <p>Web Development & Government Portal Development</p>
              </motion.div>
              <motion.div className="education-card" whileHover={{ y: -8, boxShadow: "0 10px 20px rgba(0,0,0,0.05)" }}>
                <span>SPECIALIZATION</span>
                <h3>Python, AI & Data Technologies</h3>
                <p>Python programming, AI, data mining and digital image processing.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATEMENT SECTION */}
      <section className="statement-section">
        <div className="statement-glow"></div>
        <div className="container">
          <motion.div 
            className="statement"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="eyebrow">DESIGN × DEVELOPMENT × AI</p>
            <h2>Code with purpose.<br />Design with <em>intention.</em></h2>
            <p>Technology builds the product. Design makes people remember it. AI makes it smarter.</p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <div className="contact-grid">
            <motion.div 
              className="contact-main"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            >
              <p className="eyebrow">LET&apos;S WORK TOGETHER</p>
              <h2>Have an idea?<br />Let&apos;s build it<span> together.</span></h2>
              <p className="contact-description">
                Whether you need a professional website, web application, Python project, AI solution, graphic design or a complete digital experience, I&apos;d love to hear about your project.
              </p>
              <motion.a 
                href="mailto:syeedmfazil9@gmail.com" 
                className="big-email inline-block"
                whileHover={{ x: 10, color: "#2563eb" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                syeedmfazil9@gmail.com <span>↗</span>
              </motion.a>
            </motion.div>

            <motion.div 
              className="contact-details"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.a href="tel:+923165208110" className="contact-box" whileHover={{ y: -5 }}>
                <span>PHONE</span><strong>+92 316 5208110</strong>
              </motion.a>
              <motion.a href="mailto:syeedmfazil9@gmail.com" className="contact-box" whileHover={{ y: -5 }}>
                <span>EMAIL</span><strong>syeedmfazil9@gmail.com</strong>
              </motion.a>
              <motion.a href="https://www.linkedin.com/in/muhammad-fazil-43848b265/" target="_blank" rel="noopener noreferrer" className="contact-box" whileHover={{ y: -5 }}>
                <span>LINKEDIN</span><strong>Muhammad Fazil ↗</strong>
              </motion.a>
              <motion.a href="https://github.com/syeedmfazil8" target="_blank" rel="noopener noreferrer" className="contact-box" whileHover={{ y: -5 }}>
                <span>GITHUB</span><strong>@syeedmfazil8 ↗</strong>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-container">
          <a href="#home" className="footer-logo">F<span>.</span></a>
          <p>© {new Date().getFullYear()} Muhammad Fazil. All rights reserved.</p>
          <div className="footer-links">
            <a href="https://github.com/syeedmfazil8" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/muhammad-fazil-43848b265/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="#home">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
