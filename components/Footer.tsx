export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: 'var(--color-bg-primary)' }} className="border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Footer Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <a href="#hero" className="text-2xl font-bold text-[var(--color-accent-primary)] block mb-4">
              KRAYAA
            </a>
            <p className="text-sm text-[var(--color-text-secondary)]">Korean culture. Your way.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-[var(--color-text-primary)] mb-4">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#whats-coming" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">
                  What's Coming
                </a>
              </li>
              <li>
                <a href="#why-krayaa" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">
                  Why Krayaa
                </a>
              </li>
              <li>
                <a href="#vision" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">
                  Our Story
                </a>
              </li>
            </ul>
          </div>

          {/* For Community */}
          <div>
            <h4 className="font-semibold text-[var(--color-text-primary)] mb-4">Community</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#creators" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">
                  For Creators
                </a>
              </li>
              <li>
                <a href="#brands" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">
                  For Brands
                </a>
              </li>
              <li>
                <a href="#faq" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="font-semibold text-[var(--color-text-primary)] mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:hello@krayaa.com" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">
                  hello@krayaa.com
                </a>
              </li>
              <li>
                <a href="https://instagram.com/krayaa" target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://twitter.com/krayaa" target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[var(--color-border)] my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-[var(--color-text-secondary)]">
          <p>© {currentYear} Krayaa. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="/privacy" className="hover:text-[var(--color-text-primary)] transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-[var(--color-text-primary)] transition-colors">
              Terms of Service
            </a>
            <a href="/contact" className="hover:text-[var(--color-text-primary)] transition-colors">
              Contact
            </a>
          </div>
        </div>

        {/* Made by note */}
        <div className="mt-8 pt-8 border-t border-[var(--color-border)] text-center text-xs text-[var(--color-text-secondary)]">
          <p>Crafted with 🧡 for K-culture lovers in India</p>
        </div>
      </div>
    </footer>
  );
}
