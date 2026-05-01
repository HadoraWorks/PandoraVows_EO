import { useEffect, useMemo, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './App.css'

function App() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [activeImage, setActiveImage] = useState(null)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.fromTo(
      '.hero__content > *',
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.12,
        ease: 'power3.out',
      },
    )

    gsap.utils.toArray('.reveal').forEach((section) => {
      gsap.fromTo(
        section,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
          },
        },
      )
    })

    gsap.to('.cta__glow', {
      opacity: 0.6,
      duration: 2,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
    })
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const services = [
    {
      title: 'Full Wedding Planning',
      description:
        'End-to-end planning for couples who want a seamless, worry-free journey.',
      highlights: [
        'Dedicated lead planner',
        'Budget & timeline management',
        'Vendor curation',
        'Design direction',
      ],
    },
    {
      title: 'Partial Planning',
      description:
        'For couples who already started, but need expert guidance to refine details.',
      highlights: [
        'Vendor review & coordination',
        'Planning checkpoints',
        'Timeline polish',
        'Venue walkthrough',
      ],
    },
    {
      title: 'Wedding Day Coordination',
      description:
        'We orchestrate the day so you can be fully present for every moment.',
      highlights: [
        'On-site team',
        'Run-of-show management',
        'Vendor alignment',
        'Guest flow assistance',
      ],
    },
  ]

  const packages = [
    {
      name: 'Essential',
      price: '$1,200',
      features: [
        'Initial consultation',
        'Vendor recommendations',
        'Wedding timeline planning',
        'Day coordination (8 hours)',
      ],
    },
    {
      name: 'Signature',
      price: '$2,500',
      features: [
        'Full planning support',
        'Vendor coordination',
        'Design & concept assistance',
        'Unlimited revisions',
        'Full day coordination',
      ],
      highlight: true,
    },
    {
      name: 'Luxury',
      price: '$5,000+',
      features: [
        'All Signature features',
        'Custom concept design',
        'Full vendor management',
        'On-site team (full crew)',
        'Premium support',
      ],
    },
  ]

  const processSteps = [
    {
      title: 'Consultation',
      description: 'Share your story, vision, and priorities with our lead planner.',
    },
    {
      title: 'Planning & Concept',
      description: 'We craft the mood, flow, and vendor team tailored to you.',
    },
    {
      title: 'Coordination',
      description: 'We align every vendor, timeline, and detail to perfection.',
    },
    {
      title: 'Execution Day',
      description: 'Relax and celebrate while we orchestrate every moment.',
    },
  ]

  const testimonials = [
    {
      quote:
        'Pandora made our wedding feel effortless. Every detail was intentional and calm.',
      name: 'Sinta & Arga',
      type: 'Intimate garden wedding',
    },
    {
      quote:
        'The team felt like trusted friends. Our guests keep talking about the flow.',
      name: 'Karin & Daffa',
      type: 'Modern ballroom celebration',
    },
    {
      quote:
        'Professional, warm, and precise. We felt supported from day one.',
      name: 'Nadia & Reza',
      type: 'Traditional Javanese wedding',
    },
  ]

  const faqs = [
    {
      question: 'How early should we book?',
      answer: 'We recommend 9-12 months before your date to secure top vendors.',
    },
    {
      question: 'Can you work with our budget?',
      answer:
        'Yes. We prioritize transparency and help align expectations with your goals.',
    },
    {
      question: 'Do you handle vendor negotiations?',
      answer:
        'We coordinate vendor communication, contracts, and timelines on your behalf.',
    },
  ]

  const gallery = [
    {
      src: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=900&q=80',
      alt: 'Romantic wedding couple portrait',
      category: 'Indoor',
    },
    {
      src: 'https://images.unsplash.com/photo-1769812343590-485512e27838?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Elegant wedding table setting',
      category: 'Indoor',
    },
    {
      src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80',
      alt: 'Outdoor wedding ceremony',
      category: 'Outdoor',
    },
    {
      src: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=900&q=80',
      alt: 'Wedding couple walking outdoors',
      category: 'Outdoor',
    },
    {
      src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80',
      alt: 'Traditional wedding ceremony',
      category: 'Traditional',
    },
    {
      src: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80',
      alt: 'Modern wedding reception lighting',
      category: 'Modern',
    },
    {
      src: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=900&q=80',
      alt: 'Bridal moment candid',
      category: 'Traditional',
    },
    {
      src: 'https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?auto=format&fit=crop&w=900&q=80',
      alt: 'Wedding details flatlay',
      category: 'Modern',
    },
  ]

  const filters = ['All', 'Indoor', 'Outdoor', 'Traditional', 'Modern']
  const filteredGallery = useMemo(() => {
    if (activeFilter === 'All') {
      return gallery
    }
    return gallery.filter((item) => item.category === activeFilter)
  }, [activeFilter, gallery])

  return (
    <>
      <header className={`nav ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav__inner">
          <div className="nav__brand">Pandora Vowz</div>
          <nav className="nav__links">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#gallery">Gallery</a>
            <a href="#packages">Packages</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="button button--solid" href="#contact">
            Plan Your Wedding
          </a>
        </div>
      </header>

      <section className="hero" id="hero">
        <div className="hero__overlay"></div>
        <div className="hero__content">
          <p className="eyebrow">Premium Wedding Organizer</p>
          <h1>Crafting Timeless Wedding Experiences</h1>
          <p className="hero__subheadline">
            From intimate ceremonies to grand celebrations, Pandora brings your
            vision to life.
          </p>
          <div className="hero__actions">
            <a className="button button--solid" href="#contact">
              Plan Your Wedding
            </a>
            <a className="button button--ghost" href="#packages">
              View Packages
            </a>
          </div>
          <div className="hero__meta">
            <span>Trusted by 200+ couples</span>
            <span>Jakarta • Bali • Destination</span>
          </div>
        </div>
      </section>

      <section className="trust-bar reveal">
        <div className="trust-bar__inner">
          <p>Trusted by 200+ couples</p>
          <div className="trust-bar__logos">
            <span>Maison Flor</span>
            <span>Velvet Venue</span>
            <span>Laurel Studio</span>
            <span>Serene Events</span>
          </div>
        </div>
      </section>

      <section className="section about reveal" id="about">
        <div className="section__header">
          <p className="eyebrow">About Pandora</p>
          <h2>Every moment curated with calm precision.</h2>
        </div>
        <div className="about__grid">
          <div className="about__text">
            <p>
              Pandora was founded to turn once-in-a-lifetime moments into
              seamless, unforgettable experiences. We blend elegant design with
              meticulous coordination so you can focus on the celebration.
            </p>
            <ul>
              <li>Personalized planning</li>
              <li>Attention to detail</li>
              <li>Experienced team</li>
            </ul>
          </div>
          <div className="about__image" role="img" aria-label="Pandora team">
            <div className="about__image-overlay"></div>
          </div>
        </div>
      </section>

      <section className="section services reveal" id="services">
        <div className="section__header">
          <p className="eyebrow">Services</p>
          <h2>Guidance for every stage of your celebration.</h2>
        </div>
        <div className="card-grid">
          {services.map((service) => (
            <article className="card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section gallery reveal" id="gallery">
        <div className="section__header">
          <p className="eyebrow">Portfolio</p>
          <h2>Wedding stories told in light, texture, and detail.</h2>
        </div>
        <div className="filter-row">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`filter ${filter === activeFilter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="gallery__grid">
          {filteredGallery.map((image) => (
            <button
              className="gallery__item"
              type="button"
              key={image.src}
              onClick={() => setActiveImage(image)}
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
              <span>{image.category}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="section packages reveal" id="packages">
        <div className="section__header">
          <p className="eyebrow">Packages</p>
          <h2>Clear pricing, flexible to your vision.</h2>
        </div>
        <div className="card-grid">
          {packages.map((item) => (
            <article
              className={`card card--pricing ${item.highlight ? 'highlight' : ''}`}
              key={item.name}
            >
              {item.highlight && <span className="badge">Most Popular</span>}
              <h3>{item.name}</h3>
              <p className="price">{item.price}</p>
              <ul>
                {item.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <a className="button button--ghost" href="#contact">
                Get Proposal
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section process reveal" id="process">
        <div className="section__header">
          <p className="eyebrow">Process</p>
          <h2>Simple, transparent, and guided at every step.</h2>
        </div>
        <div className="process__steps">
          {processSteps.map((step, index) => (
            <div className="process__step" key={step.title}>
              <div className="process__number">0{index + 1}</div>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section testimonials reveal" id="testimonials">
        <div className="section__header">
          <p className="eyebrow">Testimonials</p>
          <h2>Couples who felt held, seen, and celebrated.</h2>
        </div>
        <div className="card-grid">
          {testimonials.map((item) => (
            <article className="card" key={item.name}>
              <p className="quote">“{item.quote}”</p>
              <p className="name">{item.name}</p>
              <span className="meta">{item.type}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section faq reveal" id="faq">
        <div className="section__header">
          <p className="eyebrow">FAQ</p>
          <h2>Answers before you ask.</h2>
        </div>
        <div className="faq__grid">
          {faqs.map((item) => (
            <div className="faq__item" key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta reveal" id="contact">
        <div className="cta__glow"></div>
        <div className="cta__content">
          <p className="eyebrow">Ready when you are</p>
          <h2>Let’s Plan Your Special Day</h2>
          <p>
            Share your date and vision. We will respond within 24 hours with the
            next steps.
          </p>
          <div className="cta__actions">
            <a className="button button--solid" href="https://wa.me/6281234567890">
              WhatsApp Us
            </a>
            <a className="button button--ghost" href="mailto:hello@pandoravowz.com">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer__inner">
          <div>
            <h3>Pandora Vowz</h3>
            <p>Elegant wedding planning for couples who value calm luxury.</p>
          </div>
          <div>
            <h4>Contact</h4>
            <p>hello@pandoravowz.com</p>
            <p>+62 812 3456 7890</p>
          </div>
          <div>
            <h4>Follow</h4>
            <p>Instagram · Pinterest · TikTok</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <p>
              <a href="#services">Services</a> · <a href="#packages">Packages</a>
            </p>
          </div>
        </div>
      </footer>

      <a
        className="floating-cta"
        href="https://wa.me/6281234567890"
        aria-label="Chat via WhatsApp"
      >
        <span>WhatsApp</span>
      </a>

      {activeImage && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveImage(null)}
        >
          <div className="lightbox__content" onClick={(event) => event.stopPropagation()}>
            <img src={activeImage.src} alt={activeImage.alt} />
            <button
              type="button"
              className="lightbox__close"
              onClick={() => setActiveImage(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default App
