import { HeroSection } from "@/components/hero-section";
import { TrackingInterface } from "@/components/tracking-interface";
import { ServiceCard } from "@/components/service-card";
import { PricingCalculator } from "@/components/pricing-calculator";
import { Card, CardContent } from "@/components/ui/card";
import { companyConfig } from "@/lib/config";

// Import images
import deliveryVan from "@assets/generated_images/AHTOB_delivery_van_with_branding_753032cb.png";
import workerSorting from "@assets/generated_images/AHTOB_worker_sorting_packages_e6115fc1.png";
import packageDelivery from "@assets/generated_images/AHTOB_package_delivery_service_e6d2ab69.png";
import postalFacility from "@assets/generated_images/AHTOB_postal_facility_building_25ac0388.png";

export default function Home() {
  const getIconColorClass = (icon: string) => {
    switch (icon) {
      case "bolt":
        return "bg-primary/10 text-primary";
      case "truck":
        return "bg-accent/10 text-accent";
      case "globe":
        return "bg-blue-500/10 text-blue-500";
      default:
        return "bg-primary/10 text-primary";
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Quick Tracking Section */}
      <TrackingInterface />

      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive postal and delivery solutions tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyConfig.services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.name}
                description={service.description}
                features={service.features}
                icon={service.icon}
                iconColor={getIconColorClass(service.icon)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas & Fleet */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                AHTOB Fleet & International Coverage
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Modern delivery vehicles and comprehensive international shipping from our Centurion headquarters
                to destinations across the UK, Finland, Ireland, and throughout South Africa.
              </p>

              {/* Service Areas */}
              <div className="space-y-4">
                {companyConfig.serviceAreas.map((area, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="text-foreground font-medium">{area}</span>
                  </div>
                ))}
              </div>

              <button className="mt-8 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors hover-elevate">
                View All Locations
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src={deliveryVan}
                alt="Modern AHTOB delivery van with professional branding"
                className="rounded-lg shadow-md w-full h-auto"
                data-testid="img-delivery-van"
              />
              <img
                src={workerSorting}
                alt="Professional AHTOB postal worker in uniform organizing packages"
                className="rounded-lg shadow-md w-full h-auto"
                data-testid="img-postal-worker"
              />
              <img
                src={packageDelivery}
                alt="AHTOB delivery person delivering package to customer doorstep"
                className="rounded-lg shadow-md w-full h-auto"
                data-testid="img-package-delivery"
              />
              <img
                src={postalFacility}
                alt="Modern AHTOB postal facility building in Centurion"
                className="rounded-lg shadow-md w-full h-auto"
                data-testid="img-shipping-packages"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Calculator */}
      <PricingCalculator />

      {/* About Section */}
      <section id="about" className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src={workerSorting}
                alt="Professional team of AHTOB postal workers in uniform"
                className="rounded-xl shadow-lg w-full h-auto"
                data-testid="img-team-postal-workers"
              />
            </div>

            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                About AHTOB Postal Services
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 2010, AHTOB Postal Services has been providing reliable international shipping
                from South Africa for over a decade. Based in Centurion, we specialize in connecting
                South African businesses and individuals to the UK, Finland, Ireland, and domestic destinations.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary" data-testid="text-stat-packages">
                    {companyConfig.stats.packagesDelivered}
                  </div>
                  <div className="text-sm text-muted-foreground">Packages Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary" data-testid="text-stat-on-time">
                    {companyConfig.stats.onTimeDelivery}
                  </div>
                  <div className="text-sm text-muted-foreground">On-Time Delivery</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary" data-testid="text-stat-locations">
                    {companyConfig.stats.serviceLocations}
                  </div>
                  <div className="text-sm text-muted-foreground">Service Locations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary" data-testid="text-stat-support">
                    {companyConfig.stats.customerSupport}
                  </div>
                  <div className="text-sm text-muted-foreground">Customer Support</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <i className="fas fa-check-circle text-green-500"></i>
                  <span className="text-foreground">Licensed and insured delivery service</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-check-circle text-green-500"></i>
                  <span className="text-foreground">Real-time package tracking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-check-circle text-green-500"></i>
                  <span className="text-foreground">Professional trained drivers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}