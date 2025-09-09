import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { companyConfig } from "@/lib/config";
import { Award, Users, MapPin, Clock, Shield, Star, CheckCircle, Target } from "lucide-react";

export default function About() {
  const milestones = [
    {
      year: "1995",
      title: "Company Founded",
      description: "Started as a local delivery service in New York City"
    },
    {
      year: "2000",
      title: "Regional Expansion",
      description: "Extended services to Philadelphia and Boston regions"
    },
    {
      year: "2010",
      title: "Technology Integration",
      description: "Launched real-time tracking and digital platforms"
    },
    {
      year: "2015",
      title: "International Services",
      description: "Added global shipping capabilities and customs support"
    },
    {
      year: "2020",
      title: "Sustainability Initiative",
      description: "Introduced eco-friendly delivery vehicles and packaging"
    },
    {
      year: "2024",
      title: "Modern Fleet",
      description: "Completed modernization of delivery fleet and facilities"
    }
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Reliability",
      description: "Consistent, dependable service you can count on every time"
    },
    {
      icon: <Shield className="h-8 w-8 text-green-500" />,
      title: "Security",
      description: "Your packages are safe with our secure handling processes"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: "Customer Focus",
      description: "Your satisfaction is our top priority in everything we do"
    },
    {
      icon: <Star className="h-8 w-8 text-yellow-500" />,
      title: "Excellence",
      description: "Striving for the highest standards in all our operations"
    }
  ];

  const achievements = [
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: "Industry Leader",
      description: "Recognized as Northeast's top postal service provider"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-green-500" />,
      title: "ISO Certified",
      description: "Quality management system certification"
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-500" />,
      title: "Licensed & Insured",
      description: "Fully licensed with comprehensive insurance coverage"
    }
  ];

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About {companyConfig.name}
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Over a decade of reliable international postal services from South Africa to the world
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 2010, AHTOB Postal Services began as a specialized international shipping service 
                in Centurion, South Africa. Over the years, we've grown into one of South Africa's most trusted 
                postal service providers, serving thousands of customers with international deliveries to the 
                UK, Finland, Ireland, and domestic services across South Africa.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our commitment to reliable international service, competitive pricing, and customer satisfaction 
                has been the driving force behind our growth. Today, we operate a modern fleet of delivery vehicles 
                and maintain strategically located facilities in major South African cities to ensure fast, efficient service.
              </p>
              <p className="text-lg text-muted-foreground">
                We pride ourselves on being more than just a postal service – we're your trusted partners 
                in connecting South Africa to the world. Brought to you by AHTOB and FATF, we deliver excellence.
              </p>
            </div>

            <div>
              <img
                src="../attached_assets/generated_images/AHTOB_postal_facility_building_25ac0388.png"
                alt="Professional AHTOB postal facility in Centurion, South Africa"
                className="rounded-xl shadow-lg w-full h-auto"
                data-testid="img-about-team"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Impact</h2>
            <p className="text-lg text-muted-foreground">The numbers that define our success</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover-elevate">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2" data-testid="text-stat-packages">
                  {companyConfig.stats.packagesDelivered}
                </div>
                <p className="text-muted-foreground">Packages Delivered</p>
              </CardContent>
            </Card>

            <Card className="text-center hover-elevate">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2" data-testid="text-stat-on-time">
                  {companyConfig.stats.onTimeDelivery}
                </div>
                <p className="text-muted-foreground">On-Time Delivery</p>
              </CardContent>
            </Card>

            <Card className="text-center hover-elevate">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2" data-testid="text-stat-locations">
                  {companyConfig.stats.serviceLocations}
                </div>
                <p className="text-muted-foreground">Service Locations</p>
              </CardContent>
            </Card>

            <Card className="text-center hover-elevate">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2" data-testid="text-stat-support">
                  {companyConfig.stats.customerSupport}
                </div>
                <p className="text-muted-foreground">Customer Support</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover-elevate">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground">Key milestones in our company history</p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-px h-full bg-border"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="hover-elevate">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <Badge variant="secondary">{milestone.year}</Badge>
                        </div>
                        <CardTitle className="text-lg">{milestone.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Recognition & Certifications</h2>
            <p className="text-lg text-muted-foreground">
              Our commitment to excellence is recognized by industry leaders
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="hover-elevate">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {achievement.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Commitment</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We're committed to providing exceptional service through our dedicated team of 
              professionals who understand the importance of reliable delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover-elevate">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Experienced Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our drivers and staff average over 10 years of experience in postal and delivery services
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-elevate">
              <CardHeader>
                <Clock className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <CardTitle>24/7 Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Round-the-clock customer support to assist with tracking, questions, and urgent deliveries
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-elevate">
              <CardHeader>
                <MapPin className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <CardTitle>Local Knowledge</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Deep understanding of local areas ensures efficient routing and timely deliveries
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
