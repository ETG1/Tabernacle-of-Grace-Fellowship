"use client";

import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Church Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Tabernacle of Grace Fellowship</h3>
            <p className="text-gray-400 mb-4">
              A place of worship and spiritual growth
            </p>
            <div className="flex space-x-4">
              <SocialIcon href="#" icon={<FaFacebook size={20} />} platform="Facebook" />
              <SocialIcon href="#" icon={<FaTwitter size={20} />} platform="Twitter" />
              <SocialIcon href="#" icon={<FaInstagram size={20} />} platform="Instagram" />
              <SocialIcon href="#" icon={<FaYoutube size={20} />} platform="YouTube" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="/" text="Home" />
              <FooterLink href="/about" text="About Us" />
              <FooterLink href="/events" text="Events" />
              <FooterLink href="/give" text="Tithes & Offerings" />
              <FooterLink href="/contact" text="Contact" />
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Service Times</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Sunday Service: 10:00 AM</li>
              <li>Prayer Meeting: Wednesday 6:30 PM</li>
              <li>Youth Service: Friday 6:00 PM</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>📍 123 Church Street</li>
              <li>Your City, South Africa</li>
              <li>📞 +27 12 345 6789</li>
              <li>✉️ info@tgfchurch.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Tabernacle of Grace Fellowship. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, text }: { href: string; text: string }) {
  return (
    <li>
      <Link
        href={href}
        className="text-gray-400 hover:text-white transition-colors"
      >
        {text}
      </Link>
    </li>
  );
}

function SocialIcon({ href, icon, platform }: { href: string; icon: React.ReactNode; platform: string }) {
  return (
    <a
      href={href}
      className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors text-gray-400 hover:text-white"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="sr-only">{platform}</span>
      {icon}
    </a>
  );
} 