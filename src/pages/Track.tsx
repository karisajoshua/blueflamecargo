import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Package, Search, MapPin, Clock, CheckCircle } from "lucide-react";

const Track = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [isTracking, setIsTracking] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    setIsTracking(true);
    // Integration placeholder - would call actual tracking API
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <Package className="h-16 w-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Track Your Cargo</h1>
          <p className="text-xl max-w-2xl mx-auto text-primary-foreground/90">
            Enter your tracking number to see real-time updates on your shipment
          </p>
        </div>
      </section>

      {/* Tracking Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto p-8">
            <form onSubmit={handleTrack} className="space-y-6">
              <div>
                <label htmlFor="tracking" className="block text-sm font-medium mb-2">
                  Tracking Number
                </label>
                <div className="flex gap-3">
                  <Input
                    id="tracking"
                    type="text"
                    placeholder="Enter your tracking number (e.g., BFC123456789)"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    className="flex-1"
                    required
                  />
                  <Button type="submit" variant="cta" size="lg">
                    <Search className="h-5 w-5 mr-2" />
                    Track
                  </Button>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Your tracking number can be found in your booking confirmation email or shipping documents.
              </p>
            </form>
          </Card>

          {/* Demo Tracking Result */}
          {isTracking && trackingNumber && (
            <Card className="max-w-3xl mx-auto mt-8 p-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">Tracking Details</h2>
                <p className="text-muted-foreground">Tracking Number: {trackingNumber}</p>
              </div>

              <div className="space-y-6">
                {/* Status Timeline */}
                <div className="relative pl-8 space-y-6">
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-accent" />

                  <div className="relative">
                    <div className="absolute -left-[31px] bg-accent rounded-full p-1">
                      <CheckCircle className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <MapPin className="h-4 w-4 text-accent" />
                        <span className="font-semibold">Delivered</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">Your package has been delivered</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        May 15, 2025 - 10:30 AM
                      </p>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-[31px] bg-accent/50 rounded-full p-1">
                      <CheckCircle className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <MapPin className="h-4 w-4 text-accent" />
                        <span className="font-semibold">Out for Delivery</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">Package is on its way to you</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        May 15, 2025 - 8:00 AM
                      </p>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-[31px] bg-accent/50 rounded-full p-1">
                      <CheckCircle className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <MapPin className="h-4 w-4 text-accent" />
                        <span className="font-semibold">Cleared Customs</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">Successfully cleared customs in Nairobi</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        May 14, 2025 - 2:30 PM
                      </p>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-[31px] bg-accent/50 rounded-full p-1">
                      <CheckCircle className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <MapPin className="h-4 w-4 text-accent" />
                        <span className="font-semibold">In Transit</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">Shipment departed from Dubai</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        May 12, 2025 - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-secondary/50 rounded-lg">
                <p className="text-sm text-muted-foreground text-center">
                  <strong>Note:</strong> This is a demo tracking result. In production, this would connect to the
                  actual tracking API to show live shipment data.
                </p>
              </div>
            </Card>
          )}
        </div>
      </section>

      {/* Help Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
            <p className="text-muted-foreground mb-6">
              Can't find your tracking number or having issues? Our customer support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" asChild>
                <a href="tel:+254XXXXXXXXX">Call Us</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="mailto:info@blueflamecargo.com">Email Support</a>
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Track;
