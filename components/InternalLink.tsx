import React from 'react';

interface InternalLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  onNavigate?: (href: string) => void;
}

const isExternalHref = (href: string) =>
  href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('tel:');

const InternalLink: React.FC<InternalLinkProps> = ({ href, onNavigate, children, className, onClick, ...rest }) => {
  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (event) => {
    onClick?.(event);

    if (event.defaultPrevented || !onNavigate || isExternalHref(href) || href.startsWith('#')) {
      return;
    }

    event.preventDefault();
    onNavigate(href);
  };

  return (
    <a href={href} className={className} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
};

export default InternalLink;
