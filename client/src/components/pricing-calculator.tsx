import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

interface PricingResult {
  cost: string;
  deliveryDate: string;
}

export function PricingCalculator() {
  const [result, setResult] = useState<PricingResult | null>(null);
  const [formData, setFormData] = useState({
    fromZip: "",
    toZip: "",
    weight: "",
    serviceType: "",
  });

  const handleCalculate = () => {
    // Mock calculation
    const basePrice = parseFloat(formData.weight) * 2.5;
    const serviceMultiplier = formData.serviceType === "same-day" ? 3 : 
                              formData.serviceType === "express" ? 1.5 : 1;
    const totalCost = (basePrice * serviceMultiplier).toFixed(2);
    
    const deliveryDays = formData.serviceType === "same-day" ? 0 : 
                        formData.serviceType === "express" ? 1 : 3;
    
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + deliveryDays);
    
    setResult({
      cost: `$${totalCost}`,
      deliveryDate: deliveryDate.toLocaleDateString('en-US', { 
        weekday: 'long', 
        month: 'short', 
        day: 'numeric' 
      }),
    });
  };

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Calculate Shipping Cost
          </h2>
          <p className="text-lg text-muted-foreground">
            Get instant pricing for your delivery needs
          </p>
        </div>

        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Shipping Calculator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="from-zip">From ZIP Code</Label>
                <Input
                  id="from-zip"
                  placeholder="10001"
                  value={formData.fromZip}
                  onChange={(e) => setFormData(prev => ({ ...prev, fromZip: e.target.value }))}
                  data-testid="input-from-zip"
                />
              </div>
              <div>
                <Label htmlFor="to-zip">To ZIP Code</Label>
                <Input
                  id="to-zip"
                  placeholder="10002"
                  value={formData.toZip}
                  onChange={(e) => setFormData(prev => ({ ...prev, toZip: e.target.value }))}
                  data-testid="input-to-zip"
                />
              </div>
              <div>
                <Label htmlFor="weight">Package Weight (lbs)</Label>
                <Input
                  id="weight"
                  type="number"
                  placeholder="2.5"
                  value={formData.weight}
                  onChange={(e) => setFormData(prev => ({ ...prev, weight: e.target.value }))}
                  data-testid="input-weight"
                />
              </div>
              <div>
                <Label htmlFor="service-type">Service Type</Label>
                <Select value={formData.serviceType} onValueChange={(value) => setFormData(prev => ({ ...prev, serviceType: value }))}>
                  <SelectTrigger data-testid="select-service-type">
                    <SelectValue placeholder="Select service type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="standard">Standard (3-5 days)</SelectItem>
                    <SelectItem value="express">Express (1-2 days)</SelectItem>
                    <SelectItem value="same-day">Same Day</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button 
              onClick={handleCalculate}
              className="w-full"
              disabled={!formData.fromZip || !formData.toZip || !formData.weight || !formData.serviceType}
              data-testid="button-calculate-price"
            >
              <Search className="mr-2 h-4 w-4" />
              Calculate Price
            </Button>

            {result && (
              <div className="bg-secondary/50 rounded-lg p-4 border border-border" data-testid="div-pricing-result">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-foreground">Estimated Cost:</span>
                  <span className="text-2xl font-bold text-primary" data-testid="text-estimated-cost">
                    {result.cost}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-2" data-testid="text-delivery-date">
                  Delivery by {result.deliveryDate}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
