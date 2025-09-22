import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  Star, 
  Clock, 
  Target, 
  Zap,
  ArrowRight,
  Sparkles,
  BookOpen,
  Lightbulb,
  IndianRupee
} from "lucide-react";

const Newsletter = () => {
  const features = [
    {
      icon: Lightbulb,
      title: "Simple",
      description: "AI hacks, automation tricks & digital strategies explained in plain English."
    },
    {
      icon: BookOpen,
      title: "MarTech Made Real Stories, Real Wins",
      description: "case studies from Indian women entrepreneurs who've walked your path."
    },
    {
      icon: Zap,
      title: "Tools That Save Hours",
      description: "curated tech shortcuts & templates that you can apply instantly."
    },
    {
      icon: TrendingUp,
      title: "Growth That Pays Back",
      description: "strategies designed to bring real clients, not just likes."
    }
  ];

  const painPoints = [
    "Endless Googling but no clear direction",
    "Marketing courses that burn your money without results",
    "Confusion around AI, digital tools, and \"what's next\" in business growth"
  ];

  const proofPoints = [
    "300+ women entrepreneurs already learning with SHELeadsIndia",
    "Trainers who've delivered 100+ workshops on AI, LinkedIn & Digital Marketing",
    "Backed by SHELeadsIndia – a growing movement of women entrepreneurs across India"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              <Sparkles className="w-4 h-4 mr-2" />
              Exclusive for Women Entrepreneurs
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              SHELeadsIndia 99 Growth Newsletter – Landing Page Copy
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              The Newsletter That Helps Women Entrepreneurs Grow with MarTech – Just{" "}
              <span className="text-primary font-bold">99/month</span>
            </p>
            
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
              Stop wasting time on scattered advice. Get a weekly growth playbook tailored for women 
              entrepreneurs, packed with AI, marketing, and MarTech insights you can actually use.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
                Subscribe for 99/month
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <p className="text-sm text-muted-foreground">
                Cancel anytime • No long-term commitment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Struggle Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                The Struggle (Pain Points)
              </h2>
              <p className="text-lg text-muted-foreground">
                Running a business as a woman entrepreneur isn't easy. You've probably felt this:
              </p>
            </div>

            <div className="grid md:grid-cols-1 gap-6">
              {painPoints.map((point, index) => (
                <Card key={index} className="border-l-4 border-l-red-500 bg-red-50/50 dark:bg-red-950/20">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-lg text-foreground">{point}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-lg text-muted-foreground">
                We get it. And that's exactly why we built this newsletter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Promise Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                The Promise (Solution)
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                For the price of a cutting chai, you'll unlock a weekly newsletter that gives you:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl text-foreground">
                        {feature.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-muted-foreground">
                All designed for women entrepreneurs only.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why 99 Section */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Why 99?
            </h2>
            
            <Card className="border-0 shadow-lg bg-background/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-center">
                  <p className="text-lg text-foreground leading-relaxed">
                    Because growth should be accessible. We wanted to create something so valuable, yet so affordable, that saying "no" would feel like losing out. For less than your monthly data recharge, you get insights that can literally pay back in your first client win.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Proof & Trust Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Proof & Trust (Credibility)
              </h2>
            </div>

            <div className="space-y-6">
              {proofPoints.map((point, index) => (
                <Card key={index} className="border-0 shadow-lg bg-green-50/50 dark:bg-green-950/20">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                      <p className="text-lg text-foreground">{point}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-lg text-muted-foreground">
                This isn't theory. It's practical. Tested. And built for women like you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Grow Smart?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Your growth journey starts here. Join the SHELeadsIndia Growth Newsletter today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Subscribe for 99/month
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            
            <p className="text-sm mt-6 opacity-80">
              Exclusively for women entrepreneurs. Because your business deserves strategies that understand you.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Newsletter;
