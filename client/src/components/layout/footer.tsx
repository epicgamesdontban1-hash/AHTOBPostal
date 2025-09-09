import { Link } from "wouter";
import { companyConfig } from "@/lib/config";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-primary text-primary-foreground w-8 h-8 rounded-lg flex items-center justify-center font-bold">
                A
              </div>
              <span className="font-bold text-lg text-foreground">
                {companyConfig.name}
              </span>
            </div>
            <p className="text-muted-foreground mb-4">
              {companyConfig.description}
            </p>
            <div className="flex space-x-3">
              {companyConfig.socialLinks.map((social) => (
                <Link
                  key={social.platform}
                  href={social.url}
                  data-testid={`link-social-${social.platform}`}
                >
                  <span className="text-muted-foreground hover:text-primary transition-colors hover-elevate p-2 rounded-md">
                    <i className={social.icon}></i>
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {companyConfig.footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} data-testid={`link-footer-${link.name.toLowerCase().replace(" ", "-")}`}>
                    <span className="text-muted-foreground hover:text-primary transition-colors hover-elevate px-2 py-1 rounded-md">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              {companyConfig.footerLinks.services.map((service, index) => (
                <li key={`service-${index}-${service.name}`}>
                  <Link href={service.href} data-testid={`link-footer-service-${service.name.toLowerCase().replace(" ", "-")}`}>
                    <span className="text-muted-foreground hover:text-primary transition-colors hover-elevate px-2 py-1 rounded-md">
                      {service.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-2">
              {companyConfig.footerLinks.support.map((support) => (
                <li key={support.href}>
                  <Link href={support.href} data-testid={`link-footer-support-${support.name.toLowerCase().replace(" ", "-")}`}>
                    <span className="text-muted-foreground hover:text-primary transition-colors hover-elevate px-2 py-1 rounded-md">
                      {support.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground mb-2">
            © {new Date().getFullYear()} {companyConfig.fullName}. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground/70">
            Brought to you by AHTOB and FATF | Connecting South Africa to the World
          </p>
        </div>
      </div>
    </footer>
  );
}