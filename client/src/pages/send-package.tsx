import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { companyConfig } from "@/lib/config";
import { Package, MapPin, Calculator, Clock, Shield, CheckCircle } from "lucide-react";

interface PackageData {
  senderName: string;
  senderEmail: string;
  senderPhone: string;
  senderAddress: string;
  senderCity: string;
  senderPostal: string;
  recipientName: string;
  recipientEmail: string;
  recipientPhone: string;
  recipientAddress: string;
  recipientCity: string;
  recipientPostal: string;
  destination: string;
  serviceType: string;
  packageType: string;
  weight: string;
  length: string;
  width: string;
  height: string;
  value: string;
  contents: string;
  specialInstructions: string;
}

export default function SendPackage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<PackageData>({
    senderName: '',
    senderEmail: '',
    senderPhone: '',
    senderAddress: '',
    senderCity: '',
    senderPostal: '',
    recipientName: '',
    recipientEmail: '',
    recipientPhone: '',
    recipientAddress: '',
    recipientCity: '',
    recipientPostal: '',
    destination: '',
    serviceType: '',
    packageType: '',
    weight: '',
    length: '',
    width: '',
    height: '',
    value: '',
    contents: '',
    specialInstructions: ''
  });

  const [quote, setQuote] = useState<{
    price: number;
    deliveryDays: string;
    service: string;
  } | null>(null);

  const destinations = [
    { code: 'UK', name: 'United Kingdom', flag: '🇬🇧' },
    { code: 'FI', name: 'Finland', flag: '🇫🇮' },
    { code: 'IE', name: 'Ireland', flag: '🇮🇪' },
    { code: 'ZA', name: 'South Africa (Domestic)', flag: '🇿🇦' }
  ];

  const serviceTypes = [
    { 
      id: 'standard', 
      name: 'Smart Standard', 
      days: '5-10 business days', 
      price: 149,
      features: ['Full package insurance', 'Bulk discounts available', 'Customs clearance included', 'Digital tracking updates', 'Email notifications']
    },
    { 
      id: 'express', 
      name: 'Lightning Express', 
      days: '2-4 days', 
      price: 299,
      features: ['Real-time GPS tracking', 'Signature confirmation', 'Door-to-door service', 'Insurance included', '24/7 support']
    },
    { 
      id: 'domestic', 
      name: 'Local Pro', 
      days: '1-2 days', 
      price: 59,
      features: ['Multiple pickup points', 'SMS & WhatsApp updates', 'Competitive pricing', 'Rapid local delivery', 'Local support team']
    }
  ];

  const packageTypes = [
    { id: 'envelope', name: 'Envelope/Document', maxWeight: '2kg' },
    { id: 'small', name: 'Small Package', maxWeight: '5kg' },
    { id: 'medium', name: 'Medium Package', maxWeight: '15kg' },
    { id: 'large', name: 'Large Package', maxWeight: '30kg' }
  ];

  const calculateQuote = () => {
    const service = serviceTypes.find(s => s.id === formData.serviceType);
    const weightMultiplier = parseFloat(formData.weight) * 25;
    const basePrice = service?.price || 450;
    const finalPrice = basePrice + weightMultiplier;

    setQuote({
      price: finalPrice,
      deliveryDays: service?.days || '7-14 business days',
      service: service?.name || 'Smart Standard'
    });
  };

  const generateTrackingNumber = () => {
    const prefix = 'AHT';
    const timestamp = Date.now().toString().slice(-8);
    const random = Math.random().toString(36).substring(2, 6).toUpperCase();
    return `${prefix}${timestamp}${random}`;
  };

  const handleSubmit = async () => {
    // Generate tracking number
    const trackingNumber = generateTrackingNumber();
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Store package data in localStorage (simulating database)
    const packageData = {
      ...formData,
      trackingNumber,
      quote,
      status: 'Package Received',
      createdAt: new Date().toISOString(),
      events: [
        {
          status: 'Package Received',
          location: `${companyConfig.contact.address.city}, South Africa`,
          timestamp: new Date().toISOString(),
          description: 'Your package has been received at our facility'
        }
      ]
    };
    
    const existingPackages = JSON.parse(localStorage.getItem('packages') || '[]');
    existingPackages.push(packageData);
    localStorage.setItem('packages', JSON.stringify(existingPackages));
    
    setStep(5);
  };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (step === 3 && formData.serviceType) {
      calculateQuote();
    }
    setStep(prev => prev + 1);
  };

  const prevStep = () => setStep(prev => prev - 1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Send Package
          </Badge>
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Send Your <span className="text-primary">Package</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional international shipping made simple. Get your quote and ship with confidence.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-4">
            {[1, 2, 3, 4, 5].map((stepNum) => (
              <div key={stepNum} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                  step >= stepNum 
                    ? 'bg-primary text-white' 
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  {stepNum < step || step === 5 ? <CheckCircle className="h-5 w-5" /> : stepNum}
                </div>
                {stepNum < 5 && (
                  <div className={`w-8 h-1 mx-2 transition-all ${
                    step > stepNum ? 'bg-primary' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <Card className="shadow-2xl border-2">
          <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10">
            <CardTitle className="text-2xl flex items-center space-x-2">
              {step === 1 && <><MapPin className="h-6 w-6" /> <span>Sender Information</span></>}
              {step === 2 && <><MapPin className="h-6 w-6" /> <span>Recipient Information</span></>}
              {step === 3 && <><Package className="h-6 w-6" /> <span>Package Details</span></>}
              {step === 4 && <><Calculator className="h-6 w-6" /> <span>Review & Quote</span></>}
              {step === 5 && <><CheckCircle className="h-6 w-6" /> <span>Package Submitted</span></>}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            {/* Step 1: Sender Information */}
            {step === 1 && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="senderName">Full Name *</Label>
                    <Input
                      id="senderName"
                      value={formData.senderName}
                      onChange={(e) => updateFormData('senderName', e.target.value)}
                      placeholder=""
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="senderEmail">Email Address *</Label>
                    <Input
                      id="senderEmail"
                      type="email"
                      value={formData.senderEmail}
                      onChange={(e) => updateFormData('senderEmail', e.target.value)}
                      placeholder=""
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="senderPhone">Phone Number *</Label>
                    <Input
                      id="senderPhone"
                      value={formData.senderPhone}
                      onChange={(e) => updateFormData('senderPhone', e.target.value)}
                      placeholder=""
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="senderCity">City *</Label>
                    <Input
                      id="senderCity"
                      value={formData.senderCity}
                      onChange={(e) => updateFormData('senderCity', e.target.value)}
                      placeholder=""
                      className="mt-2"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="senderAddress">Street Address *</Label>
                  <Textarea
                    id="senderAddress"
                    value={formData.senderAddress}
                    onChange={(e) => updateFormData('senderAddress', e.target.value)}
                    placeholder=""
                    className="mt-2"
                    rows={3}
                  />
                </div>
                <div>
                  <Label htmlFor="senderPostal">Postal Code *</Label>
                  <Input
                    id="senderPostal"
                    value={formData.senderPostal}
                    onChange={(e) => updateFormData('senderPostal', e.target.value)}
                    placeholder=""
                    className="mt-2 max-w-xs"
                  />
                </div>
              </div>
            )}

            {/* Step 2: Recipient Information */}
            {step === 2 && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="recipientName">Full Name *</Label>
                    <Input
                      id="recipientName"
                      value={formData.recipientName}
                      onChange={(e) => updateFormData('recipientName', e.target.value)}
                      placeholder=""
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="recipientEmail">Email Address</Label>
                    <Input
                      id="recipientEmail"
                      type="email"
                      value={formData.recipientEmail}
                      onChange={(e) => updateFormData('recipientEmail', e.target.value)}
                      placeholder=""
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="recipientPhone">Phone Number *</Label>
                    <Input
                      id="recipientPhone"
                      value={formData.recipientPhone}
                      onChange={(e) => updateFormData('recipientPhone', e.target.value)}
                      placeholder=""
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="destination">Destination Country *</Label>
                    <Select onValueChange={(value) => updateFormData('destination', value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="" />
                      </SelectTrigger>
                      <SelectContent>
                        {destinations.map((dest) => (
                          <SelectItem key={dest.code} value={dest.code}>
                            {dest.flag} {dest.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="recipientAddress">Street Address *</Label>
                  <Textarea
                    id="recipientAddress"
                    value={formData.recipientAddress}
                    onChange={(e) => updateFormData('recipientAddress', e.target.value)}
                    placeholder=""
                    className="mt-2"
                    rows={3}
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="recipientCity">City *</Label>
                    <Input
                      id="recipientCity"
                      value={formData.recipientCity}
                      onChange={(e) => updateFormData('recipientCity', e.target.value)}
                      placeholder=""
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="recipientPostal">Postal Code *</Label>
                    <Input
                      id="recipientPostal"
                      value={formData.recipientPostal}
                      onChange={(e) => updateFormData('recipientPostal', e.target.value)}
                      placeholder=""
                      className="mt-2"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Package Details */}
            {step === 3 && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="packageType">Package Type *</Label>
                    <Select onValueChange={(value) => updateFormData('packageType', value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="" />
                      </SelectTrigger>
                      <SelectContent>
                        {packageTypes.map((type) => (
                          <SelectItem key={type.id} value={type.id}>
                            {type.name} (Max {type.maxWeight})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="weight">Weight (kg) *</Label>
                    <Input
                      id="weight"
                      type="number"
                      value={formData.weight}
                      onChange={(e) => updateFormData('weight', e.target.value)}
                      placeholder=""
                      className="mt-2"
                      step="0.1"
                      min="0.1"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <Label htmlFor="length">Length (cm)</Label>
                    <Input
                      id="length"
                      type="number"
                      value={formData.length}
                      onChange={(e) => updateFormData('length', e.target.value)}
                      placeholder=""
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="width">Width (cm)</Label>
                    <Input
                      id="width"
                      type="number"
                      value={formData.width}
                      onChange={(e) => updateFormData('width', e.target.value)}
                      placeholder=""
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="height">Height (cm)</Label>
                    <Input
                      id="height"
                      type="number"
                      value={formData.height}
                      onChange={(e) => updateFormData('height', e.target.value)}
                      placeholder=""
                      className="mt-2"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="value">Declared Value (ZAR) *</Label>
                    <Input
                      id="value"
                      type="number"
                      value={formData.value}
                      onChange={(e) => updateFormData('value', e.target.value)}
                      placeholder=""
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="serviceType">Service Type *</Label>
                    <Select onValueChange={(value) => updateFormData('serviceType', value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceTypes.map((service) => (
                          <SelectItem key={service.id} value={service.id}>
                            {service.name} - R{service.price} ({service.days})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="contents">Package Contents *</Label>
                  <Textarea
                    id="contents"
                    value={formData.contents}
                    onChange={(e) => updateFormData('contents', e.target.value)}
                    placeholder=""
                    className="mt-2"
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="specialInstructions">Special Instructions</Label>
                  <Textarea
                    id="specialInstructions"
                    value={formData.specialInstructions}
                    onChange={(e) => updateFormData('specialInstructions', e.target.value)}
                    placeholder=""
                    className="mt-2"
                    rows={2}
                  />
                </div>
              </div>
            )}

            {/* Step 4: Review & Quote */}
            {step === 4 && quote && (
              <div className="space-y-8">
                <div className="bg-primary/5 p-6 rounded-xl border-2 border-primary/20">
                  <h3 className="text-2xl font-bold text-primary mb-4">Your Quote</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-foreground">R{quote.price}</div>
                      <div className="text-sm text-muted-foreground">Total Cost</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-foreground">{quote.deliveryDays}</div>
                      <div className="text-sm text-muted-foreground">Delivery Time</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-foreground">{quote.service}</div>
                      <div className="text-sm text-muted-foreground">Service Type</div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-lg mb-4">Sender Details</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Name:</strong> {formData.senderName}</p>
                      <p><strong>Email:</strong> {formData.senderEmail}</p>
                      <p><strong>Phone:</strong> {formData.senderPhone}</p>
                      <p><strong>Address:</strong> {formData.senderAddress}, {formData.senderCity}, {formData.senderPostal}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-4">Recipient Details</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Name:</strong> {formData.recipientName}</p>
                      <p><strong>Email:</strong> {formData.recipientEmail}</p>
                      <p><strong>Phone:</strong> {formData.recipientPhone}</p>
                      <p><strong>Address:</strong> {formData.recipientAddress}, {formData.recipientCity}, {formData.recipientPostal}</p>
                      <p><strong>Country:</strong> {destinations.find(d => d.code === formData.destination)?.name}</p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="font-bold text-lg mb-4">Package Information</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <p><strong>Type:</strong> {packageTypes.find(p => p.id === formData.packageType)?.name}</p>
                    <p><strong>Weight:</strong> {formData.weight} kg</p>
                    <p><strong>Dimensions:</strong> {formData.length}×{formData.width}×{formData.height} cm</p>
                    <p><strong>Value:</strong> R{formData.value}</p>
                    <p><strong>Contents:</strong> {formData.contents}</p>
                    {formData.specialInstructions && (
                      <p><strong>Special Instructions:</strong> {formData.specialInstructions}</p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: Success */}
            {step === 5 && (
              <div className="text-center space-y-8">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="h-12 w-12 text-green-600" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-foreground mb-4">Package Submitted Successfully!</h3>
                  <p className="text-xl text-muted-foreground mb-6">
                    Your package has been registered in our system.
                  </p>
                  <div className="bg-primary/10 p-6 rounded-xl border-2 border-primary/20 max-w-md mx-auto">
                    <p className="text-sm text-muted-foreground mb-2">Your Tracking Number:</p>
                    <p className="text-2xl font-bold text-primary font-mono">{localStorage.getItem('lastTrackingNumber') || 'AHT12345678ABCD'}</p>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Save this tracking number to monitor your package's journey.
                  </p>
                </div>
              </div>
            )}
          </CardContent>

          {/* Navigation Buttons */}
          {step < 5 && (
            <div className="px-8 pb-8">
              <div className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  disabled={step === 1}
                  className="min-w-24"
                >
                  Previous
                </Button>
                <Button
                  onClick={step === 4 ? handleSubmit : nextStep}
                  disabled={
                    (step === 1 && (!formData.senderName || !formData.senderEmail || !formData.senderPhone)) ||
                    (step === 2 && (!formData.recipientName || !formData.destination)) ||
                    (step === 3 && (!formData.packageType || !formData.weight || !formData.serviceType))
                  }
                  className="min-w-24"
                >
                  {step === 4 ? 'Submit Package' : 'Next'}
                </Button>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}