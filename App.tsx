import React, { useEffect, useState } from 'react';
import HomeContent from './components/HomeContent';
import MobileAppDevelopmentPage from './components/MobileAppDevelopmentPage';
import SystemArchitecturePage from './components/SystemArchitecturePage';
import WebEngineeringPage from './components/WebEngineeringPage';
import ServicePage from './components/ServicePage';
import SiteShell from './components/SiteShell';

const SERVICE_PAGES: Record<string, { title: string; paragraphs: string[] }> = {
  '/services/mobile-app-development': {
    title: 'Mobile App Development Services',
    paragraphs: [],
  },
  '/services/system-architecture': {
    title: 'System Architecture & LLD Design',
    paragraphs: [],
  },
  '/services/flutter-app-development': {
    title: 'Flutter App Developer in Noida, India',
    paragraphs: [
      'CodeSH Lab builds Flutter applications for startups and growing businesses that need a production-ready launch without the overhead of a large agency.',
      'I focus on clean architecture, maintainable code, and responsive user experiences so the app can move from MVP to real customer usage with less rework.',
      'If you need a Flutter build that is fast, dependable, and easy to extend, I can help shape the product and ship it end to end.',
    ],
  },
  '/services/web-app-development': {
    title: 'Web Engineering Services',
    paragraphs: [],
  },
  '/services/ui-ux-design': {
    title: 'UI/UX Design Services — Clean, Modern, Conversion-Focused',
    paragraphs: [
      'Good product design should reduce friction, clarify the offer, and make the next step obvious. That is the kind of UI/UX work I prefer to deliver.',
      'I work on clear information hierarchy, conversion-minded layouts, and interfaces that feel modern without becoming decorative noise.',
      'If you need design support before development or want to tighten an existing product, CodeSH Lab can help turn the idea into a cleaner experience.',
    ],
  },
};

const ROUTE_META: Record<string, { title: string; description: string; url: string }> = {
  '/': {
    title: 'Flutter & Web App Developer Noida | CodeSH Lab',
    description:
      'CodeSH Lab builds production-ready Flutter apps, web apps & UI/UX for startups. Based in Noida, India. Fast delivery, clean architecture. Get a free quote.',
    url: 'https://www.codesh.in/',
  },
  '/services': {
    title: 'Services | CodeSH Lab',
    description:
      'Flutter, Android, web app development, and UI/UX design services from CodeSH Lab in Noida, India.',
    url: 'https://www.codesh.in/services',
  },
  '/services/mobile-app-development': {
    title: 'Mobile App Development Services | CodeSH Lab',
    description:
      'Production-ready mobile app development using Android (Kotlin) and Flutter. Performance-focused builds with clean architecture and scalable foundations.',
    url: 'https://www.codesh.in/services/mobile-app-development',
  },
  '/services/system-architecture': {
    title: 'System Architecture & LLD Design | CodeSH Lab',
    description:
      'Low-level design (LLD) and system architecture services for scalable products. Modular designs, performance strategies, and production-ready foundations.',
    url: 'https://www.codesh.in/services/system-architecture',
  },
  '/services/flutter-app-development': {
    title: 'Flutter App Developer in Noida, India | CodeSH Lab',
    description:
      'Production-ready Flutter app development for startups and businesses in Noida, India. Clean architecture, reliable delivery, and MVP-to-scale execution.',
    url: 'https://www.codesh.in/services/flutter-app-development',
  },
  '/services/web-app-development': {
    title: 'Web App Development for Startups - Noida | CodeSH Lab',
    description:
      'High-performance web engineering using React, TypeScript, and Node.js. Fast, secure, scalable web applications tailored to business goals.',
    url: 'https://www.codesh.in/services/web-app-development',
  },
  '/services/ui-ux-design': {
    title: 'UI/UX Design Services - CodeSH Lab',
    description:
      'Conversion-focused UI/UX design services for startups and growing businesses. Clear product flows, modern interfaces, and founder-led execution.',
    url: 'https://www.codesh.in/services/ui-ux-design',
  },
};

const isServicePath = (pathname: string) => pathname in SERVICE_PAGES;
const isBreadcrumbPath = (pathname: string) => pathname !== '/';

const getInitialPathname = () => {
  const fallbackPath = new URLSearchParams(window.location.search).get('p');

  if (fallbackPath && fallbackPath.startsWith('/')) {
    return fallbackPath;
  }

  return window.location.pathname || '/';
};

const App: React.FC = () => {
  const [pathname, setPathname] = useState(getInitialPathname);

  useEffect(() => {
    const handlePopState = () => {
      setPathname(window.location.pathname || '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const fallbackPath = new URLSearchParams(window.location.search).get('p');
    if (fallbackPath && fallbackPath.startsWith('/')) {
      window.history.replaceState({}, '', fallbackPath);
      setPathname(fallbackPath);
    }

    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      document.getElementById(id)?.scrollIntoView({ behavior: 'auto', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [pathname]);

  useEffect(() => {
    const meta = ROUTE_META[pathname] ?? ROUTE_META['/'];
    const image = 'https://www.codesh.in/og-image.png';

    document.title = meta.title;

    const setMetaTag = (selector: string, attribute: 'name' | 'property', key: string, content: string) => {
      let element = document.head.querySelector<HTMLMetaElement>(selector);

      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }

      element.setAttribute('content', content);
    };

    const setCanonical = (href: string) => {
      let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', 'canonical');
        document.head.appendChild(element);
      }

      element.setAttribute('href', href);
    };

    setCanonical(meta.url);
    setMetaTag('meta[name="description"]', 'name', 'description', meta.description);
    setMetaTag('meta[name="robots"]', 'name', 'robots', 'index, follow');

    setMetaTag('meta[property="og:type"]', 'property', 'og:type', 'website');
    setMetaTag('meta[property="og:locale"]', 'property', 'og:locale', 'en_IN');
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', meta.url);
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', meta.title);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', meta.description);
    setMetaTag('meta[property="og:image"]', 'property', 'og:image', image);

    setMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setMetaTag('meta[name="twitter:url"]', 'name', 'twitter:url', meta.url);
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', meta.title);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', meta.description);
    setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', image);
  }, [pathname]);

  useEffect(() => {
    const existingBreadcrumb = document.getElementById('schema-breadcrumb');
    if (existingBreadcrumb) {
      existingBreadcrumb.remove();
    }

    if (!isBreadcrumbPath(pathname)) {
      return;
    }

    const breadcrumbItems: Array<{ name: string; item: string }> = [
      { name: 'Home', item: 'https://codesh.in' },
      { name: 'Services', item: 'https://codesh.in/services' },
    ];

    if (pathname === '/services') {
      // Services index page only needs Home -> Services.
    } else if (pathname === '/services/mobile-app-development') {
      breadcrumbItems.push({ name: 'Mobile App Development', item: 'https://codesh.in/services/mobile-app-development' });
    } else if (pathname === '/services/system-architecture') {
      breadcrumbItems.push({ name: 'System Architecture & LLD Design', item: 'https://codesh.in/services/system-architecture' });
    } else if (pathname === '/services/flutter-app-development') {
      breadcrumbItems.push({ name: 'Flutter App Development', item: 'https://codesh.in/services/flutter-app-development' });
    } else if (pathname === '/services/web-app-development') {
      breadcrumbItems.push({ name: 'Web Engineering', item: 'https://codesh.in/services/web-app-development' });
    } else if (pathname === '/services/ui-ux-design') {
      breadcrumbItems.push({ name: 'UI/UX Design', item: 'https://codesh.in/services/ui-ux-design' });
    } else {
      return;
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'schema-breadcrumb';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbItems.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.item,
      })),
    });
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, [pathname]);

  const handleNavigate = (href: string) => {
    if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('tel:')) {
      window.location.href = href;
      return;
    }

    if (href.startsWith('#')) {
      const hash = href.slice(1);
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return;
    }

    if (href === pathname) {
      return;
    }

    const [nextPathname, nextHash] = href.split('#');
    window.history.pushState({}, '', href);
    setPathname(nextPathname || '/');

    if (nextHash) {
      window.requestAnimationFrame(() => {
        document.getElementById(nextHash)?.scrollIntoView({ behavior: 'auto', block: 'start' });
      });
    }
  };

  const page = isServicePath(pathname) ? SERVICE_PAGES[pathname] : null;

  return (
      <SiteShell currentPath={pathname} onNavigate={handleNavigate}>
        {pathname === '/services/mobile-app-development' ? (
          <MobileAppDevelopmentPage onNavigate={handleNavigate} />
        ) : pathname === '/services/system-architecture' ? (
          <SystemArchitecturePage onNavigate={handleNavigate} />
        ) : pathname === '/services/web-app-development' ? (
          <WebEngineeringPage onNavigate={handleNavigate} />
        ) : page ? (
          <ServicePage title={page.title} paragraphs={page.paragraphs} onNavigate={handleNavigate} />
        ) : pathname === '/services' ? (
          <ServicePage
            title="Services for Startups and Growing Products"
            paragraphs={[
              'CodeSH Lab provides Flutter app development, Android development, web app development, and UI/UX design from Noida, India.',
              'The focus is production-ready execution for startups and businesses that want a clear, founder-led delivery process.',
              'Use the service pages to explore each offering or get in touch if you want help shaping the product roadmap.',
            ]}
            onNavigate={handleNavigate}
          />
        ) : (
          <HomeContent onNavigate={handleNavigate} />
        )}
      </SiteShell>
    );
  };

export default App;
