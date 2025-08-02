import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Senior, Lincoln High",
    content: "FinanceQuest made budgeting actually fun! I went from spending all my allowance to saving 30% for college.",
    rating: 5,
    avatar: "SC"
  },
  {
    name: "Marcus Johnson", 
    role: "Junior, Roosevelt High",
    content: "The investment simulator helped me understand stocks before I turned 18. Now I'm ahead of my friends!",
    rating: 5,
    avatar: "MJ"
  },
  {
    name: "Aisha Patel",
    role: "Sophomore, Kennedy High", 
    content: "I love the competition with my classmates. We're all leveling up our money skills together!",
    rating: 5,
    avatar: "AP"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            What Students
            <span className="gradient-accent bg-clip-text text-transparent"> Say </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real stories from real students who've transformed their financial futures with FinanceQuest.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-6 shadow-card hover:shadow-glow transition-smooth hover:scale-105 bg-card/50 backdrop-blur-sm border-border relative overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              
              <p className="text-muted-foreground italic">
                "{testimonial.content}"
              </p>
            </Card>
          ))}
        </div>
        
        <div className="text-center bg-card/30 rounded-2xl p-8 backdrop-blur-sm border border-border">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-2xl font-bold text-foreground">4.9/5</span>
          </div>
          <p className="text-muted-foreground">
            Average rating from <span className="font-semibold text-primary">10,000+</span> student reviews
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;