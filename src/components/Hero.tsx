import { Button } from "@/components/ui/button";
import heroPhone from "@/assets/hero-phone.jpg";
import { Play, Star, Users, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary animate-float" style={{ animationDelay: "0s" }}></div>
        <div className="absolute top-40 right-20 w-16 h-16 rounded-full bg-secondary animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 rounded-full bg-accent animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-20 right-40 w-14 h-14 rounded-full bg-primary-glow animate-float" style={{ animationDelay: "0.5s" }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left animate-slide-up">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-muted-foreground">Trusted by 10,000+ students</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Master
              <span className="gradient-primary bg-clip-text text-transparent"> Money Skills </span>
              Like It's a Game
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Learn financial literacy through gamified lessons, earn badges, and level up your money management skills. 
              Built specifically for high school students.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                <Play className="w-5 h-5" />
                Start Learning Free
              </Button>
              <Button variant="feature" size="lg" className="text-lg px-8 py-6">
                Watch Demo
              </Button>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 text-center">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-foreground font-semibold">10K+ Students</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-secondary" />
                <span className="text-foreground font-semibold">95% Pass Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-accent" />
                <span className="text-foreground font-semibold">4.9/5 Rating</span>
              </div>
            </div>
          </div>
          
          {/* Right content - Hero image */}
          <div className="flex-1 relative">
            <div className="relative z-10 animate-float">
              <img 
                src={heroPhone} 
                alt="FinanceQuest App" 
                className="w-full max-w-lg mx-auto shadow-card rounded-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-bold animate-pulse-glow">
                Level Up!
              </div>
            </div>
            
            {/* Floating achievement badges */}
            <div className="absolute top-10 -left-4 bg-card border border-border p-3 rounded-lg shadow-card animate-float" style={{ animationDelay: "1s" }}>
              <div className="text-primary font-bold">+100 XP</div>
              <div className="text-sm text-muted-foreground">Budget Master</div>
            </div>
            
            <div className="absolute bottom-10 -right-4 bg-card border border-border p-3 rounded-lg shadow-card animate-float" style={{ animationDelay: "2s" }}>
              <div className="text-secondary font-bold">Streak: 7 days</div>
              <div className="text-sm text-muted-foreground">Keep it up!</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;