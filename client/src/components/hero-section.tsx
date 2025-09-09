import { Button } from "@/components/ui/button";
import { Link } from "wouter";

// Import hero image
import postalFacility from "@assets/generated_images/AHTOB_postal_facility_building_25ac0388.png";

export function HeroSection() {
  return (
    <section className="hero-gradient text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-accent">AHTOB</span> Postal Services
              <br />
              <span className="text-primary-foreground">From South Africa to the World</span>
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90 leading-relaxed">
              Professional international shipping from Centurion to UK, Finland, Ireland, and across South Africa. 
              Reliable delivery solutions brought to you by AHTOB and FATF.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-accent text-accent-foreground hover:bg-accent/90"
                size="lg"
                data-testid="button-hero-ship-now"
              >
                Ship Now
              </Button>
              <Link href="/tracking">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                  data-testid="button-hero-track-package"
                >
                  Track Package
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <img
              src={postalFacility}
              alt="Modern AHTOB postal facility with professional exterior in Centurion, South Africa"
              className="rounded-xl shadow-2xl w-full h-auto"
              data-testid="img-hero-facility"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}