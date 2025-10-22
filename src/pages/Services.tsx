import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Plane, Ship, Truck, Package, Warehouse, HardHat, FileCheck, Globe } from "lucide-react";
import freightImage from "@/assets/services-freight.jpg";
import customsImage from "@/assets/services-customs.jpg";

const Services = () => {
  const services = [
    {
      icon: Plane,
      title: "Air Freight Forwarding",
      description:
        "End-to-end freight solutions by air for time-sensitive cargo. We manage every leg of your cargo's journey with speed and precision, ensuring on-time delivery across all major global airports.",
      features: ["Express shipping", "Door-to-door delivery", "Cargo insurance", "Real-time tracking"],
      image: freightImage,
    },
    {
      icon: Ship,
      title: "Sea Freight Forwarding",
      description:
        "Cost-effective ocean freight solutions for bulk shipments. Whether FCL or LCL, we handle your sea cargo with expertise, managing everything from booking to port clearance.",
      features: ["FCL & LCL options", "Port-to-port service", "Competitive rates", "Global coverage"],
      image: freightImage,
    },
    {
      icon: FileCheck,
      title: "Customs Clearance",
      description:
        "We ensure smooth and fast customs processing, minimizing delays and penalties. Our experienced team handles all documentation, compliance checks, and regulatory requirements.",
      features: ["Import/Export clearance", "Documentation support", "Duty optimization", "Compliance assurance"],
      image: customsImage,
    },
    {
      icon: Globe,
      title: "Import & Export Logistics",
      description:
        "Reliable solutions for importers and exporters—fully compliant with Kenyan and international laws. We simplify cross-border trade with expert guidance and seamless processes.",
      features: ["Trade compliance", "Documentation handling", "Regulatory guidance", "Multi-modal transport"],
      image: freightImage,
    },
    {
      icon: Warehouse,
      title: "Warehousing & Distribution",
      description:
        "Secure storage and last-mile delivery services tailored to your business needs. Our modern facilities provide safe storage with flexible distribution options.",
      features: ["Climate-controlled storage", "Inventory management", "Last-mile delivery", "Order fulfillment"],
      image: customsImage,
    },
    {
      icon: HardHat,
      title: "Project Cargo Handling",
      description:
        "Heavy, oversized, or time-sensitive cargo? We've got the expertise and equipment to handle complex project cargo that requires specialized handling and transport solutions.",
      features: ["Heavy lift cargo", "Route surveys", "Special equipment", "Technical expertise"],
      image: freightImage,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">
            Comprehensive logistics solutions tailored to meet your unique business requirements
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                    isEven ? "" : "lg:grid-flow-dense"
                  }`}
                >
                  <div className={isEven ? "" : "lg:col-start-2"}>
                    <Card className="p-8 h-full">
                      <div className="bg-accent/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                        <Icon className="h-8 w-8 text-accent" />
                      </div>
                      <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                      <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-accent" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Button variant="cta" asChild>
                        <Link to="/quote">Request Quote</Link>
                      </Button>
                    </Card>
                  </div>
                  <div className={isEven ? "" : "lg:col-start-1 lg:row-start-1"}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-lg shadow-xl w-full h-[400px] object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Additional Services</h2>
            <p className="text-lg text-muted-foreground">We go beyond basic logistics</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-6 text-center">
              <Package className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Cargo Insurance</h3>
              <p className="text-muted-foreground">Comprehensive coverage for your valuable shipments</p>
            </Card>
            <Card className="p-6 text-center">
              <Truck className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Ground Transportation</h3>
              <p className="text-muted-foreground">Reliable trucking services across East Africa</p>
            </Card>
            <Card className="p-6 text-center">
              <Globe className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Supply Chain Consulting</h3>
              <p className="text-muted-foreground">Expert advice to optimize your logistics operations</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Let us handle your logistics needs. Request a custom quote today.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/quote">Get Your Free Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
