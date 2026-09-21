import { Card } from "@/components/ui/card";
import { Globe, Target, Eye, Users } from "lucide-react";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Blue Flame Cargo Master Int</h1>
          <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">
            Your trusted logistics partner for seamless global freight solutions
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Our Story</h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Blue Flame Cargo Master Int Ltd is a trusted logistics partner offering expert clearing and forwarding
                solutions across East Africa and beyond. With a strong base in Kenya, a global logistics network, and a
                passionate team, we ensure your cargo reaches its destination efficiently and hassle-free.
              </p>
              <p>
                Founded with a vision to bridge the gap between local expertise and global reach, we have grown into
                one of the most reliable names in the logistics industry. Our commitment to excellence and customer
                satisfaction drives everything we do.
              </p>
              <p>
                Today, we serve hundreds of businesses ranging from small enterprises to large corporations, handling
                everything from standard freight to complex project cargo with equal dedication and precision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg text-muted-foreground">
                To simplify global logistics and deliver reliable, cost-effective solutions to our clients. We strive
                to be the partner businesses can depend on for their most critical shipments.
              </p>
            </Card>
            <Card className="p-8">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg text-muted-foreground">
                To be Africa's most trusted name in freight forwarding and customs clearance, setting the standard for
                excellence in logistics services across the continent and beyond.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Global Coverage */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Globe className="h-16 w-16 text-accent mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Global Coverage</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              With a network spanning across continents, we deliver your cargo anywhere in the world
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              "East Africa",
              "Middle East",
              "Europe",
              "Asia",
              "North America",
              "South America",
              "Australia",
              "Global Coverage",
            ].map((region, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <p className="font-semibold">{region}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Users className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Work With Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div>
                <h3 className="text-xl font-semibold mb-3">Experienced Team</h3>
                <p className="text-primary-foreground/80">
                  Decades of combined experience in international logistics and customs clearance
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
                <p className="text-primary-foreground/80">
                  Round-the-clock customer service to handle your queries and concerns
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Competitive Rates</h3>
                <p className="text-primary-foreground/80">
                  Best-in-market pricing without compromising on service quality
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
