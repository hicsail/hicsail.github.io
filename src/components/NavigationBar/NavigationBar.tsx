import * as React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import './NavigationBar.css';

interface NavItem {
  label: string;
  href: string;
  children?: Array<{ label: string; href: string }>;
}

const NAV_ITEMS: Array<NavItem> = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'People', href: '/people' },
  { label: 'Contact', href: '/#contact' },
  { label: 'Join', href: '/join' },
];

const SailLogo = () => (
  <img src="/img/s_logo.svg" alt="SAIL" className="navLogoIcon" />
);

const DropdownItem: React.FC<{ label: string; href: string }> = ({
  label,
  href,
}) => (
  <ReactRouterLink to={href} className="navDropdownItem">
    {label}
  </ReactRouterLink>
);

const DesktopNavItem: React.FC<NavItem> = ({ label, href, children }) => {
  const [open, setOpen] = React.useState(false);

  if (!children) {
    return (
      <ReactRouterLink to={href} className="navLink">
        {label}
      </ReactRouterLink>
    );
  }

  return (
    <div
      className="navDropdown"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <span className="navLink" style={{ cursor: 'pointer' }}>
        {label}
      </span>
      {open && (
        <div className="navDropdownMenu">
          {children.map((child) => (
            <DropdownItem key={child.href} {...child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default function NavigationBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <div style={{ width: '100%', alignSelf: 'stretch' }}>
      <nav className="navOuter">
        <div className="navInner">
          {/* Logo */}
          <ReactRouterLink to="/" className="navLogo">
            <SailLogo />
            <span className="navLogoText">SAIL</span>
          </ReactRouterLink>

          {/* Desktop links */}
          <div className="navLinks">
            {NAV_ITEMS.map((item) => (
              <DesktopNavItem key={item.href} {...item} />
            ))}
          </div>

          {/* CTA */}
          <ReactRouterLink to="/#contact" className="navCta">
            Get Started
          </ReactRouterLink>

          {/* Mobile hamburger */}
          <button
            className="navHamburger"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((o) => !o)}
          >
            <span
              className="material-symbols-outlined"
              style={{ fontSize: '1.75rem', color: 'white' }}
            >
              {mobileOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="mobileMenu">
          {NAV_ITEMS.flatMap((item) =>
            item.children
              ? item.children.map((child) => (
                  <ReactRouterLink
                    key={child.href}
                    to={child.href}
                    className="mobileLink"
                    onClick={() => setMobileOpen(false)}
                  >
                    {child.label}
                  </ReactRouterLink>
                ))
              : [
                  <ReactRouterLink
                    key={item.href}
                    to={item.href}
                    className="mobileLink"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </ReactRouterLink>,
                ],
          )}
          <ReactRouterLink
            to="/#contact"
            className="mobileCta"
            onClick={() => setMobileOpen(false)}
          >
            Get Started
          </ReactRouterLink>
        </div>
      )}
    </div>
  );
}
