import { TrackingInterface } from "@/components/tracking-interface";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Package, Truck, Clock, MapPin, Search, Info } from "lucide-react";

export default function Tracking() {
  const trackingTips = [
    {
      icon: <Search className="h-5 w-5 text-primary" />,
      title: "Track Multiple Packages",
      description: "You can track up to 10 packages at once by separating tracking numbers with commas"
    },
    {
      icon: <Clock className="h-5 w-5 text-blue-500" />,
      title: "Real-Time Updates",
      description: "Tracking information is updated every 30 minutes throughout the delivery process"
    },
    {
      icon: <Package className="h-5 w-5 text-green-500" />,
      title: "Delivery Notifications",
      description: "Sign up for SMS or email notifications to get delivery updates automatically"
    },
    {
      icon: <MapPin className="h-5 w-5 text-orange-500" />,
      title: "Precise Location",
      description: "Get detailed location information at every step of your package's journey"
    }
  ];

  const trackingStates = [
    {
      status: "Package Created",
      description: "Shipping label created and package information received",
      color: "bg-blue-500"
    },
    {
      status: "Picked Up",
      description: "Package collected from sender location",
      color: "bg-yellow-500"
    },
    {
      status: "In Transit",
      description: "Package is moving through our delivery network",
      color: "bg-orange-500"
    },
    {
      status: "Out for Delivery",
      description: "Package is on the delivery vehicle for final delivery",
      color: "bg-purple-500"
    },
    {
      status: "Delivered",
      description: "Package successfully delivered to recipient",
      color: "bg-green-500"
    }
  ];

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Track Your Package
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Enter your tracking number to see real-time updates on your package delivery status
          </p>
        </div>
      </section>

      {/* Tracking Interface */}
      <TrackingInterface showTitle={false} />

      {/* Tracking Information */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Tracking Tips */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Tracking Tips & Information
              </h2>
              <div className="space-y-6">
                {trackingTips.map((tip, index) => (
                  <Card key={index} className="hover-elevate">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          {tip.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">{tip.title}</h3>
                          <p className="text-muted-foreground">{tip.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Tracking States Guide */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Understanding Tracking Status
              </h2>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Info className="h-5 w-5 text-primary" />
                    Package Status Guide
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {trackingStates.map((state, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className={`w-3 h-3 ${state.color} rounded-full mt-2 flex-shrink-0`}></div>
                      <div>
                        <h4 className="font-medium text-foreground">{state.status}</h4>
                        <p className="text-sm text-muted-foreground">{state.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Need Help with Your Package?
            </h2>
            <p className="text-lg text-muted-foreground">
              We're here to assist you with any tracking or delivery questions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover-elevate">
              <CardHeader>
                <Package className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Package Issues</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Missing package or delivery concerns? We'll help resolve any issues quickly.
                </p>
                <Badge variant="secondary" className="cursor-pointer hover-elevate" data-testid="badge-report-issue">
                  Report Issue
                </Badge>
              </CardContent>
            </Card>

            <Card className="text-center hover-elevate">
              <CardHeader>
                <Truck className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <CardTitle>Delivery Options</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Change delivery address, schedule delivery, or provide delivery instructions.
                </p>
                <Badge variant="secondary" className="cursor-pointer hover-elevate" data-testid="badge-delivery-options">
                  Manage Delivery
                </Badge>
              </CardContent>
            </Card>

            <Card className="text-center hover-elevate">
              <CardHeader>
                <Clock className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <CardTitle>Customer Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Speak with our customer service team for personalized assistance.
                </p>
                <Badge variant="secondary" className="cursor-pointer hover-elevate" data-testid="badge-contact-support">
                  Contact Support
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
