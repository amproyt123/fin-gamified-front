import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Trophy, Target } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Choose Your Path",
    description: "Start with beginner-friendly modules on budgeting, saving, and basic financial concepts.",
    icon: Target,
    color: "border-primary text-primary"
  },
  {
    step: "02", 
    title: "Complete Challenges",
    description: "Tackle interactive scenarios, quizzes, and mini-games that teach real money skills.",
    icon: Play,
    color: "border-secondary text-secondary"
  },
  {
    step: "03",
    title: "Earn Rewards",
    description: "Collect XP, unlock achievements, and climb leaderboards as you master each skill.",
    icon: Trophy,
    color: "border-accent text-accent"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-card/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            How
            <span className="gradient-secondary bg-clip-text text-transparent"> FinanceQuest </span>
            Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our proven 3-step approach makes learning financial literacy as addictive as your favorite mobile game.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
              <Card className={`p-8 text-center max-w-sm shadow-card hover:shadow-glow transition-smooth border-2 ${step.color} bg-card/50 backdrop-blur-sm animate-slide-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-full border-2 ${step.color} mx-auto mb-4 flex items-center justify-center`}>
                    <step.icon className="w-8 h-8" />
                  </div>
                  <div className={`text-2xl font-bold ${step.color.split(' ')[1]} mb-2`}>
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </Card>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block">
                  <ArrowRight className="w-8 h-8 text-muted-foreground animate-pulse" />
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-6">
            Start Your Financial Journey
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;