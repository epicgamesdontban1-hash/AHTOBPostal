import { ServiceCard } from "@/components/service-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { companyConfig } from "@/lib/config";
import { CheckCircle, Clock, Shield, Globe, Truck, Zap } from "lucide-react";

export default function Services() {
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

  const additionalServices = [
    {
      title: "Business Solutions",
      description: "Customized shipping solutions for businesses of all sizes",
      features: [
        "Volume discounts",
        "Dedicated account manager",
        "Custom pickup schedules",
        "Branded packaging options"
      ],
      icon: "building",
      iconColor: "bg-purple-500/10 text-purple-500"
    },
    {
      title: "Packaging Services",
      description: "Professional packaging to ensure safe delivery",
      features: [
        "Secure packaging materials",
        "Fragile item protection",
        "Custom box sizing",
        "Documentation preparation"
      ],
      icon: "box",
      iconColor: "bg-green-500/10 text-green-500"
    },
    {
      title: "Specialty Handling",
      description: "Special care for valuable and sensitive items",
      features: [
        "Temperature controlled",
        "Hazardous materials",
        "High-value insurance",
        "White glove delivery"
      ],
      icon: "star",
      iconColor: "bg-yellow-500/10 text-yellow-500"
    }
  ];

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Comprehensive postal and delivery solutions designed to meet your shipping needs, 
            from express delivery to international shipping.
          </p>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Core Delivery Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our range of shipping options to find the perfect solution for your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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

          {/* Service Guarantees */}
          <div className="bg-secondary/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Our Service Guarantees
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h4 className="font-semibold text-foreground mb-2">On-Time Delivery</h4>
                <p className="text-sm text-muted-foreground">
                  99.5% of packages delivered on schedule or we make it right
                </p>
              </div>
              <div className="text-center">
                <Shield className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h4 className="font-semibold text-foreground mb-2">Safe & Secure</h4>
                <p className="text-sm text-muted-foreground">
                  Full insurance coverage and secure handling of all packages
                </p>
              </div>
              <div className="text-center">
                <Clock className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h4 className="font-semibold text-foreground mb-2">Real-Time Updates</h4>
                <p className="text-sm text-muted-foreground">
                  Track your package every step of the way with live updates
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Additional Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized solutions for unique shipping requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                features={service.features}
                icon={service.icon}
                iconColor={service.iconColor}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Service Coverage Areas
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We provide comprehensive coverage across major metropolitan areas in the Northeast corridor.
              </p>

              <div className="grid grid-cols-1 gap-4">
                {companyConfig.serviceAreas.map((area, index) => (
                  <Card key={index} className="hover-elevate">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-primary rounded-full"></div>
                          <span className="font-medium text-foreground">{area}</span>
                        </div>
                        <Badge variant="secondary">Active</Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="hover-elevate">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Truck className="h-5 w-5 text-primary" />
                    Fleet Size
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary">150+</div>
                  <p className="text-sm text-muted-foreground">Delivery vehicles</p>
                </CardContent>
              </Card>

              <Card className="hover-elevate">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-blue-500" />
                    Coverage
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-500">50+</div>
                  <p className="text-sm text-muted-foreground">Cities served</p>
                </CardContent>
              </Card>

              <Card className="hover-elevate">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-accent" />
                    Speed
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-accent">Same Day</div>
                  <p className="text-sm text-muted-foreground">Available delivery</p>
                </CardContent>
              </Card>

              <Card className="hover-elevate">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-green-500" />
                    Security
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-500">100%</div>
                  <p className="text-sm text-muted-foreground">Insured packages</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
