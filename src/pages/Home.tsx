import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Globe, Truck, Clock, Shield, ArrowRight, Package, Plane, Ship } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import heroCargo1 from "@/assets/hero-cargo.jpg";
import heroCargo2 from "@/assets/hero-cargo-2.jpg";
import heroCargo3 from "@/assets/hero-cargo-3.jpg";
import heroCargo4 from "@/assets/hero-cargo-4.jpg";
import heroCargo5 from "@/assets/hero-cargo-5.jpg";

const Home = () => {
  const autoplayPlugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  );
  
  const fadePlugin = useRef(Fade());

  const heroImages = [heroCargo1, heroCargo2, heroCargo3, heroCargo4, heroCargo5];

  const features = [
    {
      icon: Globe,
      title: "Worldwide Coverage",
      description: "Seamless logistics across continents with our global partner network",
    },
    {
      icon: Truck,
      title: "End-to-End Service",
      description: "Complete supply chain solutions from pickup to final delivery",
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "99.5% on-time performance record with real-time tracking",
    },
    {
      icon: Shield,
      title: "Secure & Compliant",
      description: "Full insurance coverage and regulatory compliance guaranteed",
    },
  ];

  const services = [
    {
      icon: Plane,
      title: "Air Freight",
      description: "Fast international shipping for time-sensitive cargo",
    },
    {
      icon: Ship,
      title: "Sea Freight",
      description: "Cost-effective ocean freight for bulk shipments",
    },
    {
      icon: Package,
      title: "Customs Clearance",
      description: "Expert handling of all customs documentation and compliance",
    },
  ];

  const testimonials = [
    {
      quote: "Blue Flame Cargo Master Int has been our logistics partner for over 3 years — they've never missed a deadline.",
      author: "Jane M.",
      company: "Nairobi Imports Ltd.",
    },
    {
      quote: "They handled our international cargo with precision. Highly recommend!",
      author: "Mark D.",
      company: "Dubai Global Trade",
    },
  ];

  return (
    <div>
      {/* Hero Section with Carousel */}
      <section className="relative h-[600px] overflow-hidden">
        {/* Background Image Carousel */}
        <Carousel
          plugins={[fadePlugin.current, autoplayPlugin.current]}
          className="absolute inset-0"
          opts={{
            loop: true,
            duration: 30,
          }}
          onMouseEnter={autoplayPlugin.current.stop}
          onMouseLeave={autoplayPlugin.current.reset}
        >
          <CarouselContent className="-ml-0">
            {heroImages.map((image, index) => (
              <CarouselItem key={index} className="pl-0">
                <div 
                  className="h-[600px] w-full bg-cover bg-center transition-opacity duration-1000"
                  style={{ backgroundImage: `url(${image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Content Overlay */}
        <div className="container relative z-10 mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-primary-foreground">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Global Reach. Local Expertise. Seamless Logistics.
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Trusted by businesses across Kenya and worldwide for fast, reliable, and secure logistics solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/quote">
                  Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-card/10 border-primary-foreground text-primary-foreground hover:bg-card/20"
                asChild
              >
                <Link to="/track">Track Your Cargo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Blue Flame Cargo Master Int?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine global reach with personalized service to deliver exceptional logistics solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-accent"
                >
                  <div className="bg-accent/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive logistics solutions tailored to your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="p-8 text-center hover:shadow-xl transition-all">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </Card>
              );
            })}
          </div>
          <div className="text-center">
            <Button variant="cta" size="lg" asChild>
              <Link to="/services">
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground">Trusted by businesses worldwide</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <div className="text-4xl text-accent mb-4">"</div>
                <p className="text-lg mb-4 italic">{testimonial.quote}</p>
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.company}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Ship with Confidence?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Get a custom quote within 24 hours and experience logistics excellence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/quote">Request Your Quote</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/20"
              asChild
            >
              <Link to="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
