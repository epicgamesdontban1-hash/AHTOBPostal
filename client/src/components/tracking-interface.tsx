import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Package, MapPin, Clock } from "lucide-react";

interface TrackingEvent {
  status: string;
  location: string;
  description: string;
  timestamp: string;
  isCompleted: boolean;
}

interface TrackingResult {
  trackingNumber: string;
  status: string;
  events: TrackingEvent[];
}

export function TrackingInterface({ showTitle = true }: { showTitle?: boolean }) {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [result, setResult] = useState<TrackingResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleTrack = async () => {
    if (!trackingNumber.trim()) return;
    
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock tracking data
    const mockResult: TrackingResult = {
      trackingNumber: trackingNumber,
      status: "In Transit",
      events: [
        {
          status: "Package Created",
          location: "New York, NY",
          description: "Package information received",
          timestamp: "Today 8:30 AM",
          isCompleted: true,
        },
        {
          status: "Picked Up",
          location: "New York, NY",
          description: "Package picked up from sender",
          timestamp: "Today 10:30 AM",
          isCompleted: true,
        },
        {
          status: "In Transit",
          location: "Distribution Center",
          description: "Package in transit to delivery center",
          timestamp: "Today 2:15 PM",
          isCompleted: true,
        },
        {
          status: "Out for Delivery",
          location: "Philadelphia, PA",
          description: "Package out for delivery",
          timestamp: "Tomorrow 9:00 AM",
          isCompleted: false,
        },
        {
          status: "Delivered",
          location: "Philadelphia, PA",
          description: "Package delivered to recipient",
          timestamp: "Tomorrow 2:00 PM",
          isCompleted: false,
        },
      ],
    };
    
    setResult(mockResult);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleTrack();
    }
  };

  return (
    <section className="bg-card py-16 border-b border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {showTitle && (
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Track Your Package
            </h2>
            <p className="text-muted-foreground">
              Enter your tracking number to see real-time delivery status
            </p>
          </div>
        )}

        <div className="bg-secondary/50 rounded-xl p-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input
                type="text"
                placeholder=""
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                onKeyPress={handleKeyPress}
                className="tracking-input"
                data-testid="input-tracking-number"
              />
            </div>
            <Button 
              onClick={handleTrack}
              disabled={isLoading || !trackingNumber.trim()}
              data-testid="button-track"
            >
              <Search className="mr-2 h-4 w-4" />
              {isLoading ? "Tracking..." : "Track"}
            </Button>
          </div>

          {result && (
            <div className="mt-6" data-testid="div-tracking-result">
              <Card className="border border-border">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <Package className="h-5 w-5" />
                      Package {result.trackingNumber}
                    </CardTitle>
                    <Badge 
                      variant={result.status === "Delivered" ? "default" : "secondary"}
                      data-testid="badge-package-status"
                    >
                      {result.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {result.events.map((event, index) => (
                      <div 
                        key={index}
                        className="flex items-start space-x-4 relative"
                        data-testid={`div-tracking-event-${index}`}
                      >
                        {/* Timeline indicator */}
                        <div className="flex flex-col items-center">
                          <div 
                            className={`w-3 h-3 rounded-full ${
                              event.isCompleted ? 'bg-green-500' : 'bg-muted-foreground/30'
                            }`}
                          />
                          {index < result.events.length - 1 && (
                            <div 
                              className={`w-px h-8 ${
                                event.isCompleted ? 'bg-green-500/30' : 'bg-muted-foreground/20'
                              }`}
                            />
                          )}
                        </div>
                        
                        {/* Event details */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between">
                            <div>
                              <p className={`font-medium ${
                                event.isCompleted ? 'text-foreground' : 'text-muted-foreground'
                              }`}>
                                {event.description}
                              </p>
                              <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1">
                                  <MapPin className="h-3 w-3" />
                                  {event.location}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Clock className="h-3 w-3" />
                                  {event.timestamp}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
