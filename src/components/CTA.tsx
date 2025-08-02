import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, Clock, Users } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero"></div>
      
      {/* Animated elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-1/4 w-24 h-24 rounded-full bg-primary animate-float" style={{ animationDelay: "0s" }}></div>
        <div className="absolute bottom-10 right-1/4 w-20 h-20 rounded-full bg-accent animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 rounded-full bg-secondary animate-float" style={{ animationDelay: "2s" }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-slide-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to
            <span className="gradient-primary bg-clip-text text-transparent"> Level Up </span>
            Your Money Game?
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of students who are already building financial confidence and real-world money skills.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              <Smartphone className="w-5 h-5" />
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="feature" size="lg" className="text-lg px-8 py-6">
              Schedule Demo
            </Button>
          </div>
          
          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="font-semibold text-foreground">2 Minutes Setup</div>
                <div className="text-sm text-muted-foreground">Start learning immediately</div>
              </div>
            </div>
            
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <div>
                <div className="font-semibold text-foreground">Join 10K+ Students</div>
                <div className="text-sm text-muted-foreground">Learning together</div>
              </div>
            </div>
            
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <div className="font-semibold text-foreground">Mobile & Desktop</div>
                <div className="text-sm text-muted-foreground">Learn anywhere, anytime</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;