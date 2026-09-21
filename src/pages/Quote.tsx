import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { FileText, CheckCircle, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

// Validation schema
const quoteSchema = z.object({
  fullName: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  email: z.string().trim().email("Invalid email address").max(255, "Email is too long"),
  phone: z.string().trim().min(10, "Phone number is too short").max(20, "Phone number is too long"),
  cargoType: z.string().trim().max(200, "Cargo type is too long"),
  origin: z.string().trim().max(200, "Origin is too long"),
  destination: z.string().trim().max(200, "Destination is too long"),
  mode: z.string().min(1, "Please select a transport mode"),
  notes: z.string().trim().max(1000, "Notes are too long"),
});

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
    
    // Validate form data using Zod
    try {
      quoteSchema.parse(formData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
        return;
      }
    }

    // Format message for WhatsApp
    const reference = `BFC-${Date.now().toString().slice(-6)}`;
    const whatsappMessage = `🚚 *Quote Request from Blue Flame Cargo Master Int Cargo*

📋 *Contact Details:*
Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}

📦 *Shipment Details:*
${formData.cargoType ? `Cargo Type: ${formData.cargoType}` : ''}
${formData.origin ? `Origin: ${formData.origin}` : ''}
${formData.destination ? `Destination: ${formData.destination}` : ''}
Transport Mode: ${formData.mode === 'air' ? 'Air Freight' : formData.mode === 'sea' ? 'Sea Freight' : formData.mode === 'road' ? 'Road Transport' : 'Multi-Modal'}

${formData.notes ? `📝 *Additional Notes:*\n${formData.notes}` : ''}

Reference: ${reference}`;

    // Encode message for WhatsApp URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/254728268660?text=${encodedMessage}`;

    // Navigate to WhatsApp (avoids popup blocker)
    window.location.href = whatsappURL;
    
    // Show success state
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="cta" 
                onClick={() => {
                  const encodedMessage = encodeURIComponent(`Following up on quote reference: BFC-${Date.now().toString().slice(-6)}`);
                  window.open(`https://wa.me/254728268660?text=${encodedMessage}`, '_blank');
                }}
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Open WhatsApp Chat
              </Button>
              <Button variant="outline" onClick={() => setSubmitted(false)}>
                Submit Another Request
              </Button>
            </div>
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
