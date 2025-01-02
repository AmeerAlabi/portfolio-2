import React from 'react';
import { Linkedin, Twitter, Mail, Github } from 'lucide-react';

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks: SocialLink[] = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/your-linkedin-profile",
      label: "LinkedIn Profile"
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      href: "https://twitter.com/your-twitter-handle",
      label: "Twitter Profile"
    },
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/your-github",
      label: "GitHub Profile"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:your-email@gmail.com",
      label: "Email Contact"
    }
  ];

  return (
    <footer className="w-full bg-gradient-to-r from-gray-900 to-gray-800 py-4 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Left side - Copyright */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <div className="text-lg md:text-xl font-mono font-semibold text-gray-300">
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Ameer Alabi
              </span>
            </div>
            <p className="text-sm text-gray-400">
              © {currentYear} All rights reserved
            </p>
          </div>

          {/* Right side - Social Links */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-gray-400 hover:text-blue-400 transform hover:scale-110 transition-all duration-200 ease-in-out"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        
        {/* Bottom text */}
        <div className="mt-6 text-center md:text-left">
          <p className="text-sm text-gray-500">
            Built with passion using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;