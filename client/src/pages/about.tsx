import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { companyConfig } from "@/lib/config";
import { Award, Users, MapPin, Clock, Shield, Star, CheckCircle, Target, ArrowRight, Lightbulb, Heart, TrendingUp, Zap } from "lucide-react";

// Import images
import postalFacility from "@assets/generated_images/AHTOB_postal_facility_building_25ac0388.png";

export default function About() {
  const milestones = [
    {
      year: "2025",
      title: "Revolutionary Beginning",
      description: `${companyConfig.founder.name}, age ${companyConfig.founder.age}, founds AHTOB with a vision to modernize postal services`
    },
    {
      year: "2025",
      title: "Technology Integration",
      description: "Launched cutting-edge real-time tracking and digital platforms from day one"
    },
    {
      year: "2025",
      title: "International Focus",
      description: "Immediate expansion to UK, Finland, and Ireland with professional service standards"
    },
    {
      year: "2025",
      title: "Rapid Growth",
      description: "Achieved 300% yearly growth through innovation and exceptional customer service"
    },
    {
      year: "2025",
      title: "Modern Operations",
      description: "State-of-the-art fleet and facilities with youth-driven innovation"
    },
    {
      year: "2025+",
      title: "Future Vision",
      description: "Continuing to revolutionize postal services through next-generation solutions"
    }
  ];

  const getValueIcon = (iconName: string) => {
    switch (iconName) {
      case 'lightbulb':
        return <Lightbulb className="h-8 w-8 text-primary" />;
      case 'shield-check':
        return <Shield className="h-8 w-8 text-green-500" />;
      case 'clock':
        return <Clock className="h-8 w-8 text-blue-500" />;
      case 'heart':
        return <Heart className="h-8 w-8 text-red-500" />;
      default:
        return <Target className="h-8 w-8 text-primary" />;
    }
  };

  const achievements = [
    {
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      title: "Rapid Innovation",
      description: "Revolutionary growth powered by young entrepreneurship"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-green-500" />,
      title: "Quality Certified",
      description: "Professional standards maintained despite young leadership"
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-500" />,
      title: "Fully Licensed",
      description: "All legal requirements met with comprehensive insurance"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-accent text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm">
            {companyConfig.founder.yearFounded} • Revolutionary Leadership
          </Badge>
          <h1 className="text-6xl md:text-7xl font-bold mb-8 animate-fade-in drop-shadow-lg">
            Meet <span className="text-accent">{companyConfig.founder.name}</span>
          </h1>
          <p className="text-2xl max-w-4xl mx-auto leading-relaxed text-white animate-fade-in drop-shadow-lg">
            At just {companyConfig.founder.age} years old, {companyConfig.founder.name} is revolutionizing postal services through innovation, technology, and fresh perspectives.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <div 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="cursor-pointer"
            >
              <Button size="lg" variant="secondary" className="hover:scale-105 transition-transform">
                Our Mission
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary hover:scale-105 transition-all">
                Contact Team
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
      </section>

      {/* Founder Spotlight */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Young Entrepreneur
              </Badge>
              <h2 className="text-5xl font-bold text-foreground mb-6">
                The Future of <span className="text-primary">Postal Services</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {companyConfig.founder.story}
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-card p-6 rounded-2xl border shadow-lg hover-elevate">
                  <div className="text-3xl font-bold text-primary mb-2">{companyConfig.founder.age}</div>
                  <div className="text-sm text-muted-foreground">Years Old</div>
                </div>
                <div className="bg-card p-6 rounded-2xl border shadow-lg hover-elevate">
                  <div className="text-3xl font-bold text-accent mb-2">{companyConfig.founder.yearFounded}</div>
                  <div className="text-sm text-muted-foreground">Founded</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-card rounded-xl border">
                  <Zap className="h-6 w-6 text-primary" />
                  <span className="text-foreground">Next-generation innovation mindset</span>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-card rounded-xl border">
                  <Shield className="h-6 w-6 text-green-500" />
                  <span className="text-foreground">Professional business standards</span>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-card rounded-xl border">
                  <TrendingUp className="h-6 w-6 text-blue-500" />
                  <span className="text-foreground">Rapid growth and expansion focus</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img
                  src={postalFacility}
                  alt="Modern AHTOB headquarters founded by Calvin Botha"
                  className="rounded-3xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute -bottom-8 -left-8 bg-gradient-to-r from-primary to-accent text-white p-6 rounded-2xl shadow-2xl">
                  <div className="text-2xl font-bold">Headquarters</div>
                  <div className="text-sm opacity-90">{companyConfig.contact.address.city}, SA</div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-3xl blur-2xl -z-10 transform scale-110"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Statistics */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
              Growth Metrics
            </Badge>
            <h2 className="text-5xl font-bold text-foreground mb-6">
              Impressive <span className="text-accent">Numbers</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Young leadership delivering exceptional results through innovation and dedication
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-primary/20">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <div className="text-5xl font-bold text-primary mb-3">{companyConfig.stats.packagesDelivered}</div>
                <p className="text-muted-foreground font-medium">Packages Delivered</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-green-500/20">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-green-500" />
                </div>
                <div className="text-5xl font-bold text-green-500 mb-3">{companyConfig.stats.onTimeDelivery}</div>
                <p className="text-muted-foreground font-medium">On-Time Delivery</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-blue-500/20">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-blue-500" />
                </div>
                <div className="text-5xl font-bold text-blue-500 mb-3">{companyConfig.stats.countriesServed}</div>
                <p className="text-muted-foreground font-medium">Countries Served</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-accent/20">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-accent" />
                </div>
                <div className="text-5xl font-bold text-accent mb-3">{companyConfig.stats.customerSupport}</div>
                <p className="text-muted-foreground font-medium">Customer Support</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-24 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Core Values
            </Badge>
            <h2 className="text-5xl font-bold text-foreground mb-6">
              Driven by <span className="text-primary">Purpose</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {companyConfig.mission}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyConfig.values.map((value, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-primary/20 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    {getValueIcon(value.icon)}
                  </div>
                  <CardTitle className="text-2xl font-bold">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Timeline */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Company Timeline
            </Badge>
            <h2 className="text-5xl font-bold text-foreground mb-6">
              Innovation <span className="text-primary">Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {companyConfig.founder.name}'s rapid innovation timeline - all achievements in just one year
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-gradient-to-b from-primary to-accent rounded-full"></div>
            
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                    <Card className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-primary/20">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <Badge className="bg-gradient-to-r from-primary to-accent text-white">
                            {milestone.year}
                          </Badge>
                          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                            <div className="w-3 h-3 bg-primary rounded-full"></div>
                          </div>
                        </div>
                        <CardTitle className="text-2xl font-bold">{milestone.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full border-4 border-background shadow-lg"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements & Recognition */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
              Recognition
            </Badge>
            <h2 className="text-5xl font-bold text-foreground mb-6">
              Excellence <span className="text-accent">Recognized</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Young leadership meeting and exceeding industry standards
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card 
                key={index} 
                className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-primary/20 group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      {achievement.icon}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">{achievement.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Future */}
      <section className="py-24 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">The Future is <span className="text-white/90">Now</span></h2>
            <p className="text-2xl max-w-4xl mx-auto text-white/90 leading-relaxed">
              {companyConfig.vision}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Innovation First</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-white/90">
                  Continuously pushing boundaries with young entrepreneurial energy and fresh ideas
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Rapid Growth</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-white/90">
                  Scaling operations quickly while maintaining quality and personal service
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Customer Love</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-white/90">
                  Building lasting relationships through exceptional service and genuine care
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-16">
            <Link href="/send-package">
              <Button size="lg" variant="secondary" className="hover:scale-105 transition-transform mr-4">
                Join Our Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary hover:scale-105 transition-all">
                Contact {companyConfig.founder.name}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
