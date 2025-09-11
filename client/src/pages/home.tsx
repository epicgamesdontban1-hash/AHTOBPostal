import { HeroSection } from "@/components/hero-section";
import { TrackingInterface } from "@/components/tracking-interface";
import { ServiceCard } from "@/components/service-card";
import { PricingCalculator } from "@/components/pricing-calculator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { companyConfig } from "@/lib/config";
import { Star, CheckCircle, ArrowRight, Clock, Users, Shield, TrendingUp } from "lucide-react";

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
    <div className="overflow-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* Quick Tracking Section */}
      <TrackingInterface />

      {/* Founder Story Section - NEW */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              {companyConfig.founder.yearFounded} • Young Entrepreneur
            </Badge>
            <h2 className="text-5xl font-bold text-foreground mb-6">
              Founded by <span className="text-primary">{companyConfig.founder.name}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {companyConfig.founder.story}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="bg-card rounded-2xl p-8 border shadow-lg hover-elevate">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Age {companyConfig.founder.age} Innovation</h3>
                    <p className="text-sm text-muted-foreground">Next-generation thinking</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Bringing fresh perspectives and cutting-edge technology to traditional postal services.
                </p>
              </div>
              
              <div className="bg-card rounded-2xl p-8 border shadow-lg hover-elevate">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Shield className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Professional Excellence</h3>
                    <p className="text-sm text-muted-foreground">Industry-leading standards</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Combining youthful energy with professional service quality and reliability.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img
                  src={postalFacility}
                  alt="Modern AHTOB headquarters founded by Calvin Botha"
                  className="rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-4 rounded-2xl shadow-xl">
                  <div className="text-2xl font-bold">{companyConfig.founder.yearFounded}</div>
                  <div className="text-sm opacity-90">Founded</div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-2xl -z-10 transform scale-110"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
              Premium Services
            </Badge>
            <h2 className="text-5xl font-bold text-foreground mb-6">
              Next-Generation <span className="text-accent">Delivery</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Revolutionary postal services designed for the modern world, with technology and innovation at the core.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyConfig.services.map((service, index) => (
              <div
                key={service.id}
                className="group relative bg-card rounded-2xl p-8 border shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {service.popular && (
                  <Badge className="absolute -top-2 right-4 bg-accent text-accent-foreground">
                    Most Popular
                  </Badge>
                )}
                
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${getIconColorClass(service.icon)}`}>
                    {service.icon === 'bolt' && <Clock className="h-8 w-8" />}
                    {service.icon === 'truck' && <Shield className="h-8 w-8" />}
                    {service.icon === 'globe' && <Users className="h-8 w-8" />}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{service.name}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-primary mb-4">{service.price}</div>
                </div>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/send-package">
                  <Button 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                    variant={service.popular ? "default" : "outline"}
                  >
                    Choose {service.name}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Growing Fast, Delivering Faster</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Our numbers speak for themselves - rapid growth powered by innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="text-4xl font-bold mb-2">{companyConfig.stats.packagesDelivered}</div>
                <div className="text-white/90">Packages Delivered</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="text-4xl font-bold mb-2">{companyConfig.stats.onTimeDelivery}</div>
                <div className="text-white/90">On-Time Delivery</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="text-4xl font-bold mb-2">{companyConfig.stats.countriesServed}</div>
                <div className="text-white/90">Countries Served</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="text-4xl font-bold mb-2">{companyConfig.stats.yearlyGrowth}</div>
                <div className="text-white/90">Yearly Growth</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Fleet & Coverage */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Modern Fleet
              </Badge>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                State-of-the-Art <span className="text-primary">Technology</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                From our modern headquarters in {companyConfig.contact.address.city}, we serve destinations worldwide 
                with cutting-edge technology and a commitment to excellence that only young innovation can bring.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {companyConfig.serviceAreas.map((area, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-card rounded-lg border">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="text-foreground font-medium text-sm">{area}</span>
                  </div>
                ))}
              </div>

              <Button size="lg" className="hover:scale-105 transition-transform">
                View All Locations
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <img
                  src={deliveryVan}
                  alt="Modern AHTOB delivery fleet"
                  className="rounded-2xl shadow-lg w-full h-auto hover:scale-105 transition-transform duration-500"
                />
                <img
                  src={packageDelivery}
                  alt="Professional delivery service"
                  className="rounded-2xl shadow-lg w-full h-auto hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-6 mt-8">
                <img
                  src={workerSorting}
                  alt="Modern package processing"
                  className="rounded-2xl shadow-lg w-full h-auto hover:scale-105 transition-transform duration-500"
                />
                <img
                  src={postalFacility}
                  alt="AHTOB headquarters"
                  className="rounded-2xl shadow-lg w-full h-auto hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - NEW */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">What Our Customers Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real feedback from real customers who trust AHTOB with their deliveries
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {companyConfig.testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Calculator */}
      <PricingCalculator />

      {/* Call to Action Section - NEW */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-accent text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold mb-6">
            Ready to Ship with the Future?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of customers who trust AHTOB for their international and domestic shipping needs. 
            Experience the difference young innovation makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/send-package">
              <Button size="lg" variant="secondary" className="hover:scale-105 transition-transform">
                Get Quote Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/tracking">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary hover:scale-105 transition-all">
                Track Package
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}