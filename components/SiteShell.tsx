import React, { useEffect, useMemo, useRef, useState } from 'react';
import InternalLink from './InternalLink';

type NavLink = {
  label: string;
  href: string;
};

interface SiteShellProps {
  currentPath: string;
  onNavigate: (href: string) => void;
  children: React.ReactNode;
}

const SERVICE_PATHS = [
  { label: 'Mobile App Development', href: '/services/mobile-app-development' },
  { label: 'System Architecture & LLD', href: '/services/system-architecture' },
  { label: 'Flutter App Development', href: '/services/flutter-app-development' },
  { label: 'Web App Development', href: '/services/web-app-development' },
  { label: 'UI/UX Design', href: '/services/ui-ux-design' },
];

const SECTION_IDS = ['journey', 'portfolio', 'services', 'contact'] as const;

const joinClasses = (...classes: Array<string | false | undefined>) => classes.filter(Boolean).join(' ');

const SiteShell: React.FC<SiteShellProps> = ({ currentPath, onNavigate, children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<(typeof SECTION_IDS)[number] | null>(null);
  const servicesMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!servicesMenuRef.current) return;
      if (!servicesMenuRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);

    if (currentPath !== '/') {
      setActiveSection(null);
      return;
    }

    const observedElements = SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (observedElements.length === 0) {
      setActiveSection(null);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (visible?.target?.id && SECTION_IDS.includes(visible.target.id as any)) {
          setActiveSection(visible.target.id as any);
        }
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: [0.1, 0.2, 0.3] }
    );

    observedElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [currentPath]);

  const sectionLinks = useMemo<NavLink[]>(() => {
    const sectionPrefix = currentPath === '/' ? '' : '/';
    return [
      { label: 'Journey', href: `${sectionPrefix}#journey` },
      { label: 'Portfolio', href: `${sectionPrefix}#portfolio` },
      { label: 'Contact', href: `${sectionPrefix}#contact` },
    ];
  }, [currentPath]);

  const closeMenu = () => setIsMenuOpen(false);

  const isActive = (href: string) => {
    if (href.startsWith('/services')) {
      return currentPath === href;
    }
    if (href.startsWith('#') && currentPath === '/') {
      const id = href.slice(1);
      return activeSection === id;
    }
    if (href.startsWith('/#') && currentPath === '/') {
      const id = href.split('#')[1] ?? '';
      return activeSection === id;
    }
    return false;
  };

  const linkClassName = (href: string) =>
    joinClasses(
      'text-xs font-mono uppercase tracking-[0.22em] transition-colors relative',
      isActive(href) ? 'text-zinc-100' : 'text-zinc-400 hover:text-zinc-100'
    );

  return (
    <div className="min-h-screen grid-pattern selection:bg-zinc-800 selection:text-zinc-100">
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-colors duration-300 ${isMenuOpen ? 'bg-black' : 'glass border-b border-zinc-900/50'}`}>
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between relative z-[120]">
          <InternalLink
            href="/"
            onNavigate={onNavigate}
            onClick={closeMenu}
            className="font-mono font-bold text-lg tracking-tighter hover:opacity-70 transition-opacity"
          >
            CODESH<span className="text-zinc-500">LAB</span>
          </InternalLink>

          <div className="hidden md:flex items-center gap-8 justify-end">
            {sectionLinks.map((item) => (
              <InternalLink key={item.label} href={item.href} onNavigate={onNavigate} className={linkClassName(item.href)}>
                {item.label}
                {isActive(item.href) && <span className="absolute left-0 -bottom-2 h-px w-full bg-zinc-700" />}
              </InternalLink>
            ))}

            <div className="h-4 w-px bg-zinc-900/80" />

            <div className="relative" ref={servicesMenuRef}>
              <button
                type="button"
                onClick={() => setIsServicesOpen((value) => !value)}
                className={joinClasses(
                  'text-xs font-mono uppercase tracking-[0.22em] transition-colors flex items-center gap-2',
                  currentPath.startsWith('/services') ? 'text-zinc-100' : 'text-zinc-400 hover:text-zinc-100'
                )}
                aria-haspopup="menu"
                aria-expanded={isServicesOpen}
              >
                Services
                <span className={joinClasses('transition-transform', isServicesOpen && 'rotate-180')}>▾</span>
              </button>
              {currentPath.startsWith('/services') && <span className="absolute left-0 -bottom-2 h-px w-full bg-zinc-700" />}

              {isServicesOpen && (
                <div
                  role="menu"
                  className="absolute right-0 mt-4 w-72 glass border border-zinc-900/60 shadow-2xl"
                >
                  <div className="p-3 space-y-1">
                    {SERVICE_PATHS.map((service) => (
                      <InternalLink
                        key={service.href}
                        href={service.href}
                        onNavigate={(href) => {
                          setIsServicesOpen(false);
                          onNavigate(href);
                        }}
                        className={joinClasses(
                          'block px-3 py-2 font-mono text-[11px] uppercase tracking-[0.22em] border border-transparent transition-colors',
                          currentPath === service.href
                            ? 'text-zinc-100 bg-black/40 border-zinc-800'
                            : 'text-zinc-400 hover:text-zinc-100 hover:bg-black/30 hover:border-zinc-900'
                        )}
                        role="menuitem"
                      >
                        {service.label}
                      </InternalLink>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="h-4 w-px bg-zinc-900/80" />

            <InternalLink
              href="/#contact"
              onNavigate={onNavigate}
              className="inline-flex items-center justify-center px-4 py-2 bg-zinc-100 text-zinc-950 font-mono text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-zinc-300 transition-colors"
            >
              Get a quote
            </InternalLink>
          </div>

          <button
            onClick={() => setIsMenuOpen((value) => !value)}
            className="md:hidden text-zinc-400 hover:text-zinc-100 transition-colors p-2 -mr-2"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
            )}
          </button>
        </div>

        <div
          className={`fixed inset-0 bg-black z-[110] md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="flex flex-col items-center justify-center min-h-screen pt-20 gap-7 px-6">
            {sectionLinks.map((item, idx) => (
              <InternalLink
                key={item.label}
                href={item.href}
                onNavigate={(href) => {
                  closeMenu();
                  onNavigate(href);
                }}
                onClick={closeMenu}
                className={joinClasses(
                  'text-2xl font-mono uppercase tracking-[0.34em] transition-all duration-500 transform py-3 text-center',
                  isActive(item.href) ? 'text-zinc-100' : 'text-zinc-500 hover:text-zinc-100',
                  isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                )}
                style={{ transitionDelay: `${idx * 90}ms` }}
              >
                {item.label}
              </InternalLink>
            ))}

            <button
              type="button"
              onClick={() => setIsMobileServicesOpen((value) => !value)}
              className={joinClasses(
                'text-2xl font-mono uppercase tracking-[0.34em] transition-all duration-500 transform py-3 text-center flex items-center gap-3',
                currentPath.startsWith('/services') ? 'text-zinc-100' : 'text-zinc-500 hover:text-zinc-100',
                isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              )}
              style={{ transitionDelay: `${sectionLinks.length * 90}ms` }}
              aria-expanded={isMobileServicesOpen}
            >
              Services <span className={joinClasses('transition-transform', isMobileServicesOpen && 'rotate-180')}>▾</span>
            </button>

            {isMobileServicesOpen && (
              <div className="w-full max-w-md glass border border-zinc-900/60 p-3 space-y-2">
                {SERVICE_PATHS.map((service) => (
                  <InternalLink
                    key={service.href}
                    href={service.href}
                    onNavigate={(href) => {
                      closeMenu();
                      onNavigate(href);
                    }}
                    onClick={closeMenu}
                    className={joinClasses(
                      'block px-4 py-3 font-mono text-[11px] uppercase tracking-[0.22em] border transition-colors',
                      currentPath === service.href
                        ? 'text-zinc-100 bg-black/40 border-zinc-800'
                        : 'text-zinc-400 border-transparent hover:text-zinc-100 hover:bg-black/30 hover:border-zinc-900'
                    )}
                  >
                    {service.label}
                  </InternalLink>
                ))}
              </div>
            )}

            <InternalLink
              href="/#contact"
              onNavigate={(href) => {
                closeMenu();
                onNavigate(href);
              }}
              onClick={closeMenu}
              className={joinClasses(
                'mt-4 inline-flex items-center justify-center px-6 py-3 bg-zinc-100 text-zinc-950 font-mono text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-zinc-300 transition-all duration-500 transform',
                isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              )}
              style={{ transitionDelay: `${(sectionLinks.length + 2) * 90}ms` }}
            >
              Get a quote
            </InternalLink>

            <div className={`mt-12 pt-12 border-t border-zinc-900 w-56 flex justify-center gap-6 transition-all duration-700 delay-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}>
              <a href="https://github.com/shmehdi01" target="_blank" rel="noreferrer" className="text-zinc-600 hover:text-zinc-100 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
              <a href="https://www.linkedin.com/in/shmehdi01/" target="_blank" rel="noreferrer" className="text-zinc-600 hover:text-zinc-100 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6">{children}</main>

      <footer className="py-12 border-t border-zinc-900 bg-black/50">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left">
            <p className="text-[11px] font-mono text-zinc-600 uppercase tracking-widest">
              CodeSH Lab • Noida, Uttar Pradesh, India
            </p>
            <p className="text-[9px] font-mono text-zinc-700 uppercase tracking-[0.2em]">
              Mobile & Web Engineering Specialist
            </p>
          </div>
          <p className="text-[11px] font-mono text-zinc-600 uppercase tracking-widest">
            Last updated Q1 2026
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SiteShell;
