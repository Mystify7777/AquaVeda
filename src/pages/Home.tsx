import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, BookOpen, Users, TrendingUp, Droplets } from "lucide-react";
import heroImage from "@/assets/hero-aquaveda2.png";

const Home = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Knowledge Repository",
      description: "Access thousands of water sustainability articles, guides, and best practices from experts worldwide.",
    },
    {
      icon: Users,
      title: "Global Community",
      description: "Connect with water conservation experts, researchers, and practitioners from around the globe.",
    },
    {
      icon: TrendingUp,
      title: "Impact Tracking",
      description: "Monitor water conservation projects and their environmental impact with real-time data.",
    },
  ];

  const stats = [
    { value: "10,000+", label: "Articles" },
    { value: "5,000+", label: "Contributors" },
    { value: "150+", label: "Countries" },
    { value: "1M+", label: "Liters Saved" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-aqua">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Water sustainability hero"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-20 sm:py-32">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="p-4 bg-gradient-ocean rounded-2xl animate-float">
                <Droplets className="h-12 w-12 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6">
              Explore. Contribute.{" "}
              <span className="bg-gradient-ocean bg-clip-text text-transparent">
                Sustain.
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Join the world's largest collaborative platform for water sustainability knowledge. 
              Share innovations, learn from experts, and help create a water-secure future.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/knowledge">
                <Button className="btn-hero group">
                  Explore Knowledge
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link to="/community">
                <Button className="btn-hero-outline">
                  Join Community
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Animated wave decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent">
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-ocean animate-wave"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-aqua">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Empowering Water Sustainability
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our platform combines cutting-edge knowledge management with community collaboration 
              to accelerate water conservation innovations worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="category-card water-ripple group">
                  <div className="p-6">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-ocean rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-transform">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-center leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of water sustainability experts sharing knowledge and driving change.
          </p>
          <Link to="/knowledge">
            <Button className="btn-hero">
              Start Exploring
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;