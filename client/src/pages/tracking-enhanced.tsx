import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Package, MapPin, Clock, CheckCircle, Truck, Plane, AlertCircle, Search } from "lucide-react";

interface TrackingEvent {
  status: string;
  location: string;
  timestamp: string;
  description: string;
  icon?: React.ReactNode;
}

interface PackageInfo {
  trackingNumber: string;
  status: string;
  origin: string;
  destination: string;
  service: string;
  estimatedDelivery: string;
  currentLocation: string;
  events: TrackingEvent[];
  senderName?: string;
  recipientName?: string;
  weight?: string;
  value?: string;
}

export default function TrackingEnhanced() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [packageInfo, setPackageInfo] = useState<PackageInfo | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Sample tracking data with different scenarios
  const sampleTrackingData: Record<string, PackageInfo> = {
    "AHT20250911TEST": {
      trackingNumber: "AHT20250911TEST",
      status: "In Transit",
      origin: "Centurion, South Africa",
      destination: "London, United Kingdom",
      service: "Lightning Express",
      estimatedDelivery: "2025-09-15",
      currentLocation: "Cape Town International Airport, SA",
      senderName: "John Smith",
      recipientName: "Emma Johnson",
      weight: "2.5kg",
      value: "R2,500",
      events: [
        {
          status: "Package Received",
          location: "Centurion, South Africa",
          timestamp: "2025-09-11T09:00:00Z",
          description: "Package received at AHTOB facility",
          icon: <Package className="h-5 w-5 text-blue-500" />
        },
        {
          status: "Processing",
          location: "Centurion, South Africa", 
          timestamp: "2025-09-11T11:30:00Z",
          description: "Package processed and prepared for shipping",
          icon: <CheckCircle className="h-5 w-5 text-green-500" />
        },
        {
          status: "In Transit",
          location: "Cape Town International Airport, SA",
          timestamp: "2025-09-11T14:45:00Z",
          description: "Package in transit to international departure point",
          icon: <Truck className="h-5 w-5 text-orange-500" />
        }
      ]
    },
    "AHT20250910DLVR": {
      trackingNumber: "AHT20250910DLVR",
      status: "Delivered",
      origin: "Johannesburg, South Africa",
      destination: "Helsinki, Finland",
      service: "Local Pro",
      estimatedDelivery: "2025-09-10",
      currentLocation: "Delivered",
      senderName: "Mary Wilson",
      recipientName: "Aki Virtanen",
      weight: "1.2kg",
      value: "R1,800",
      events: [
        {
          status: "Package Received",
          location: "Johannesburg, South Africa",
          timestamp: "2025-09-07T08:00:00Z",
          description: "Package received at AHTOB facility",
          icon: <Package className="h-5 w-5 text-blue-500" />
        },
        {
          status: "International Transit",
          location: "OR Tambo International Airport, SA",
          timestamp: "2025-09-07T15:30:00Z",
          description: "Departed South Africa for international delivery",
          icon: <Plane className="h-5 w-5 text-purple-500" />
        },
        {
          status: "Customs Clearance",
          location: "Helsinki Airport, Finland",
          timestamp: "2025-09-09T10:15:00Z",
          description: "Package cleared customs in Finland",
          icon: <CheckCircle className="h-5 w-5 text-green-500" />
        },
        {
          status: "Out for Delivery",
          location: "Helsinki, Finland",
          timestamp: "2025-09-10T08:30:00Z",
          description: "Package out for final delivery",
          icon: <Truck className="h-5 w-5 text-orange-500" />
        },
        {
          status: "Delivered",
          location: "Helsinki, Finland",
          timestamp: "2025-09-10T14:22:00Z",
          description: "Package delivered successfully. Signed by recipient.",
          icon: <CheckCircle className="h-5 w-5 text-green-600" />
        }
      ]
    },
    "AHT20250908PROB": {
      trackingNumber: "AHT20250908PROB",
      status: "Exception",
      origin: "Cape Town, South Africa",
      destination: "Dublin, Ireland",
      service: "Smart Standard",
      estimatedDelivery: "2025-09-14",
      currentLocation: "Dublin Customs, Ireland",
      senderName: "David Brown",
      recipientName: "Sean O'Connor",
      weight: "5.0kg",
      value: "R4,200",
      events: [
        {
          status: "Package Received",
          location: "Cape Town, South Africa",
          timestamp: "2025-09-08T10:00:00Z",
          description: "Package received at AHTOB facility",
          icon: <Package className="h-5 w-5 text-blue-500" />
        },
        {
          status: "International Transit",
          location: "Cape Town International Airport, SA",
          timestamp: "2025-09-08T18:45:00Z",
          description: "Departed South Africa for international delivery",
          icon: <Plane className="h-5 w-5 text-purple-500" />
        },
        {
          status: "Exception - Customs Hold",
          location: "Dublin Customs, Ireland",
          timestamp: "2025-09-10T12:00:00Z",
          description: "Package held for additional customs documentation. Contact AHTOB customer service.",
          icon: <AlertCircle className="h-5 w-5 text-red-500" />
        }
      ]
    }
  };

  // Check localStorage for user's packages
  const getUserPackages = (): PackageInfo[] => {
    try {
      const packages = JSON.parse(localStorage.getItem('packages') || '[]');
      return packages.map((pkg: any) => ({
        trackingNumber: pkg.trackingNumber,
        status: pkg.status,
        origin: `${pkg.senderCity}, South Africa`,
        destination: `${pkg.recipientCity}, ${pkg.destination}`,
        service: pkg.quote?.service || 'Standard',
        estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        currentLocation: pkg.events?.[pkg.events.length - 1]?.location || 'Processing',
        senderName: pkg.senderName,
        recipientName: pkg.recipientName,
        weight: `${pkg.weight}kg`,
        value: `R${pkg.value}`,
        events: pkg.events || []
      }));
    } catch {
      return [];
    }
  };

  const handleTrack = async () => {
    if (!trackingNumber.trim()) {
      setError("Please enter a tracking number");
      return;
    }

    setLoading(true);
    setError("");
    setPackageInfo(null);

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Check user's packages first
    const userPackages = getUserPackages();
    const userPackage = userPackages.find(pkg => 
      pkg.trackingNumber.toLowerCase() === trackingNumber.toLowerCase()
    );

    if (userPackage) {
      setPackageInfo(userPackage);
    } else if (sampleTrackingData[trackingNumber.toUpperCase()]) {
      setPackageInfo(sampleTrackingData[trackingNumber.toUpperCase()]);
    } else {
      // Generate dynamic tracking info for unknown numbers
      const dynamicPackageInfo = generateDynamicTrackingInfo(trackingNumber);
      setPackageInfo(dynamicPackageInfo);
    }

    setLoading(false);
  };

  const generateDynamicTrackingInfo = (trackingNum: string): PackageInfo => {
    const hash = trackingNum.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const statuses = ['Package Received', 'Processing', 'In Transit', 'Customs Clearance', 'Out for Delivery'];
    const locations = [
      'Centurion, South Africa',
      'Cape Town International Airport, SA', 
      'OR Tambo International Airport, SA',
      'International Transit',
      'Destination Country'
    ];
    
    const currentStatusIndex = hash % statuses.length;
    const isValidFormat = /^AHT\d{8}[A-Z]{4}$/.test(trackingNum);

    if (!isValidFormat) {
      return {
        trackingNumber: trackingNum,
        status: "Invalid",
        origin: "Unknown",
        destination: "Unknown", 
        service: "Unknown",
        estimatedDelivery: "Unknown",
        currentLocation: "Invalid tracking number format",
        events: [
          {
            status: "Invalid Format",
            location: "System",
            timestamp: new Date().toISOString(),
            description: "Tracking number format is invalid. AHTOB tracking numbers follow the format: AHT########XXXX",
            icon: <AlertCircle className="h-5 w-5 text-red-500" />
          }
        ]
      };
    }

    const events: TrackingEvent[] = [];
    for (let i = 0; i <= currentStatusIndex; i++) {
      const timestamp = new Date(Date.now() - (currentStatusIndex - i) * 24 * 60 * 60 * 1000).toISOString();
      events.push({
        status: statuses[i],
        location: locations[i] || locations[locations.length - 1],
        timestamp,
        description: `Package ${statuses[i].toLowerCase()}`,
        icon: i === currentStatusIndex ? 
          <Clock className="h-5 w-5 text-blue-500" /> : 
          <CheckCircle className="h-5 w-5 text-green-500" />
      });
    }

    return {
      trackingNumber: trackingNum,
      status: statuses[currentStatusIndex],
      origin: "South Africa",
      destination: "International",
      service: "Smart Standard",
      estimatedDelivery: new Date(Date.now() + (5 - currentStatusIndex) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      currentLocation: locations[currentStatusIndex],
      events
    };
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('en-ZA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'delivered': return 'bg-green-100 text-green-800 border-green-200';
      case 'in transit': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'processing': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'exception': return 'bg-red-100 text-red-800 border-red-200';
      case 'invalid': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Package Tracking
          </Badge>
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Track Your <span className="text-primary">Package</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-time package tracking with detailed delivery updates
          </p>
        </div>

        {/* Tracking Input */}
        <Card className="shadow-2xl border-2 mb-8">
          <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10">
            <CardTitle className="text-2xl flex items-center space-x-2">
              <Search className="h-6 w-6" />
              <span>Enter Tracking Number</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="text"
                placeholder="Enter your tracking number (e.g., AHT20250911TEST)"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value.toUpperCase())}
                className="flex-1 text-lg p-4"
                onKeyPress={(e) => e.key === 'Enter' && handleTrack()}
              />
              <Button 
                onClick={handleTrack} 
                disabled={loading}
                className="px-8 py-4 text-lg min-w-32"
              >
                {loading ? "Tracking..." : "Track Package"}
              </Button>
            </div>
            {error && (
              <p className="text-red-500 mt-4 flex items-center">
                <AlertCircle className="h-4 w-4 mr-2" />
                {error}
              </p>
            )}
            
            {/* Sample tracking numbers */}
            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <p className="text-sm font-medium mb-2">Try these sample tracking numbers:</p>
              <div className="flex flex-wrap gap-2">
                {Object.keys(sampleTrackingData).map((sampleNumber) => (
                  <button
                    key={sampleNumber}
                    onClick={() => setTrackingNumber(sampleNumber)}
                    className="text-sm bg-primary/10 hover:bg-primary/20 text-primary px-3 py-1 rounded-md transition-colors"
                  >
                    {sampleNumber}
                  </button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tracking Results */}
        {packageInfo && (
          <Card className="shadow-2xl border-2">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <CardTitle className="text-2xl flex items-center space-x-2">
                  <Package className="h-6 w-6" />
                  <span>Package Details</span>
                </CardTitle>
                <Badge className={`px-4 py-2 text-lg font-medium border-2 ${getStatusColor(packageInfo.status)}`}>
                  {packageInfo.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              {/* Package Overview */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-1">Tracking Number</p>
                  <p className="font-mono font-bold text-lg">{packageInfo.trackingNumber}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-1">Service Type</p>
                  <p className="font-medium">{packageInfo.service}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-1">Estimated Delivery</p>
                  <p className="font-medium">{packageInfo.estimatedDelivery}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-1">Current Location</p>
                  <p className="font-medium">{packageInfo.currentLocation}</p>
                </div>
              </div>

              <Separator className="my-8" />

              {/* Route Information */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="font-bold text-lg mb-4 flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-green-500" />
                    From
                  </h3>
                  <p className="text-muted-foreground">{packageInfo.origin}</p>
                  {packageInfo.senderName && (
                    <p className="text-sm font-medium mt-1">Sender: {packageInfo.senderName}</p>
                  )}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-4 flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-red-500" />
                    To
                  </h3>
                  <p className="text-muted-foreground">{packageInfo.destination}</p>
                  {packageInfo.recipientName && (
                    <p className="text-sm font-medium mt-1">Recipient: {packageInfo.recipientName}</p>
                  )}
                </div>
              </div>

              {/* Package Details */}
              {(packageInfo.weight || packageInfo.value) && (
                <>
                  <Separator className="my-8" />
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    {packageInfo.weight && (
                      <div>
                        <h3 className="font-bold text-lg mb-2">Weight</h3>
                        <p className="text-muted-foreground">{packageInfo.weight}</p>
                      </div>
                    )}
                    {packageInfo.value && (
                      <div>
                        <h3 className="font-bold text-lg mb-2">Declared Value</h3>
                        <p className="text-muted-foreground">{packageInfo.value}</p>
                      </div>
                    )}
                  </div>
                </>
              )}

              <Separator className="my-8" />

              {/* Tracking Timeline */}
              <div>
                <h3 className="font-bold text-xl mb-6 flex items-center">
                  <Clock className="h-6 w-6 mr-2" />
                  Tracking History
                </h3>
                <div className="space-y-6">
                  {packageInfo.events.map((event, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-card border-2 border-primary/20 rounded-full flex items-center justify-center">
                        {event.icon || <Package className="h-5 w-5 text-primary" />}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <h4 className="font-semibold text-lg">{event.status}</h4>
                          <span className="text-sm text-muted-foreground">
                            {formatDate(event.timestamp)}
                          </span>
                        </div>
                        <p className="text-muted-foreground mt-1">{event.description}</p>
                        <p className="text-sm text-muted-foreground mt-1 flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {event.location}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Customer Service Contact */}
              <Separator className="my-8" />
              <div className="bg-primary/5 p-6 rounded-xl">
                <h3 className="font-bold text-lg mb-2">Need Help?</h3>
                <p className="text-muted-foreground mb-4">
                  Contact our customer service team for any questions about your shipment.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="outline" className="flex-1">
                    Call +27 12 345 6789
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Email support@ahtob.co.za
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}