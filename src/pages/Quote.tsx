import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { FileText, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const Quote = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    cargoType: "",
    origin: "",
    destination: "",
    mode: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.email || !formData.phone || !formData.mode) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    // Simulate form submission
    console.log("Quote request submitted:", formData);
    setSubmitted(true);
    toast.success("Quote request submitted successfully!");
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto p-12 text-center">
            <div className="bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-accent" />
            </div>
            <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Your quote request has been received. Our team will review your requirements and get back to you within
              24 hours with a detailed quotation.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground mb-8">
              <p>
                <strong>Email:</strong> {formData.email}
              </p>
              <p>
                <strong>Reference:</strong> BFC-{Date.now().toString().slice(-6)}
              </p>
            </div>
            <Button variant="cta" onClick={() => setSubmitted(false)}>
              Submit Another Request
            </Button>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <FileText className="h-16 w-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Request a Quote</h1>
          <p className="text-xl max-w-2xl mx-auto text-primary-foreground/90">
            Let's help you move your cargo. Fill out the form and get a custom quote within 24 hours.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Contact Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">
                      Full Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="John Doe"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange("fullName", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      Email Address <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">
                    Phone Number <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+254 XXX XXX XXX"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Shipment Details */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Shipment Details</h2>
                <div className="space-y-2">
                  <Label htmlFor="cargoType">Type of Cargo</Label>
                  <Input
                    id="cargoType"
                    type="text"
                    placeholder="e.g., Electronics, Textiles, Machinery"
                    value={formData.cargoType}
                    onChange={(e) => handleInputChange("cargoType", e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="origin">Origin</Label>
                    <Input
                      id="origin"
                      type="text"
                      placeholder="e.g., Dubai, UAE"
                      value={formData.origin}
                      onChange={(e) => handleInputChange("origin", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="destination">Destination</Label>
                    <Input
                      id="destination"
                      type="text"
                      placeholder="e.g., Nairobi, Kenya"
                      value={formData.destination}
                      onChange={(e) => handleInputChange("destination", e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mode">
                    Preferred Mode of Transport <span className="text-destructive">*</span>
                  </Label>
                  <Select value={formData.mode} onValueChange={(value) => handleInputChange("mode", value)} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select transport mode" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="air">Air Freight</SelectItem>
                      <SelectItem value="sea">Sea Freight</SelectItem>
                      <SelectItem value="road">Road Transport</SelectItem>
                      <SelectItem value="multi">Multi-Modal</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="notes">Additional Notes</Label>
                  <Textarea
                    id="notes"
                    placeholder="Any special requirements, dimensions, weight, or additional information..."
                    rows={4}
                    value={formData.notes}
                    onChange={(e) => handleInputChange("notes", e.target.value)}
                  />
                </div>
              </div>

              <div className="pt-4">
                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Submit Quote Request
                </Button>
              </div>

              <p className="text-sm text-muted-foreground text-center">
                By submitting this form, you agree to our terms of service and privacy policy. We'll contact you within
                24 hours with a detailed quotation.
              </p>
            </form>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Quote;
