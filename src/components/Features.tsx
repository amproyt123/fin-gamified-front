import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import featuresBg from "@/assets/features-bg.jpg";
import { 
  Gamepad2, 
  Trophy, 
  Target, 
  BookOpen, 
  Zap, 
  Users2, 
  TrendingUp, 
  Shield 
} from "lucide-react";

const features = [
  {
    icon: Gamepad2,
    title: "Gamified Learning",
    description: "Turn financial concepts into fun, interactive challenges with XP, levels, and rewards.",
    color: "text-primary"
  },
  {
    icon: Trophy,
    title: "Achievement System",
    description: "Unlock badges and trophies as you master budgeting, investing, and saving skills.",
    color: "text-accent"
  },
  {
    icon: Target,
    title: "Goal Setting",
    description: "Set and track financial goals with visual progress indicators and milestone celebrations.",
    color: "text-secondary"
  },
  {
    icon: BookOpen,
    title: "Interactive Lessons",
    description: "Learn through scenarios and simulations that mirror real-world financial decisions.",
    color: "text-primary"
  },
  {
    icon: Zap,
    title: "Daily Streaks",
    description: "Build consistent learning habits with daily challenges and streak rewards.",
    color: "text-accent"
  },
  {
    icon: Users2,
    title: "Peer Competition",
    description: "Compete with friends and classmates on leaderboards and group challenges.",
    color: "text-secondary"
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description: "Monitor your financial literacy growth with detailed analytics and insights.",
    color: "text-primary"
  },
  {
    icon: Shield,
    title: "Safe Learning",
    description: "Practice with virtual money in a risk-free environment before real-world application.",
    color: "text-accent"
  }
];

const Features = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src={featuresBg} 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Why Students
            <span className="gradient-primary bg-clip-text text-transparent"> Love </span>
            FinanceQuest
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We've reimagined financial education to be engaging, interactive, and actually fun. 
            Here's what makes our platform different.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 shadow-card hover:shadow-glow transition-smooth hover:scale-105 bg-card/50 backdrop-blur-sm border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-card-foreground">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="gaming" size="lg" className="text-lg px-8 py-6">
            Explore All Features
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;