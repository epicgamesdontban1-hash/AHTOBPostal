import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { companyConfig } from "@/lib/config";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    setIsSubmitting(false);
  };

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Get in touch for international shipping solutions, customer support, or any questions about our AHTOB services
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <Card className="h-fit">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Main Office</p>
                      <p className="text-muted-foreground">
                        {companyConfig.contact.address.street}<br />
                        {companyConfig.contact.address.city}, {companyConfig.contact.address.state} {companyConfig.contact.address.zip}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <p className="text-muted-foreground">{companyConfig.contact.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-muted-foreground">{companyConfig.contact.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Hours</p>
                      <p className="text-muted-foreground">
                        Mon-Fri: 8AM-6PM<br />
                        Sat: 9AM-3PM
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Other Locations */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Other Locations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {companyConfig.locations.slice(1).map((location, index) => (
                      <div key={index} className="text-sm">
                        <p className="font-medium text-foreground">{location.name}</p>
                        <p className="text-muted-foreground">{location.phone}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Send className="h-5 w-5 text-primary" />
                    Send us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          required
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          data-testid="input-first-name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          required
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          data-testid="input-last-name"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          data-testid="input-email"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          data-testid="input-phone"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Select required value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)}>
                        <SelectTrigger data-testid="select-subject">
                          <SelectValue placeholder="" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="quote">Shipping Quote</SelectItem>
                          <SelectItem value="issue">Package Issue</SelectItem>
                          <SelectItem value="business">Business Account</SelectItem>
                          <SelectItem value="support">Customer Support</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder=""
                        data-testid="textarea-message"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isSubmitting}
                      data-testid="button-send-message"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Need Immediate AHTOB Support?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              For urgent international shipping needs or immediate support, contact our Centurion office directly
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover-elevate">
              <CardContent className="p-6">
                <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
                <p className="text-2xl font-bold text-primary mb-2">{companyConfig.contact.phone}</p>
                <p className="text-sm text-muted-foreground">Available during business hours</p>
              </CardContent>
            </Card>

            <Card className="text-center hover-elevate">
              <CardContent className="p-6">
                <Mail className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
                <p className="text-lg font-medium text-blue-500 mb-2">{companyConfig.contact.email}</p>
                <p className="text-sm text-muted-foreground">We respond within 2 hours</p>
              </CardContent>
            </Card>

            <Card className="text-center hover-elevate">
              <CardContent className="p-6">
                <Clock className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Emergency Support</h3>
                <p className="text-lg font-medium text-green-500 mb-2">24/7 Available</p>
                <p className="text-sm text-muted-foreground">For urgent package issues</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
