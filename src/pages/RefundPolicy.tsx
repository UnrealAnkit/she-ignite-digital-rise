import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Clock, CreditCard, Mail, AlertTriangle, CheckCircle, Calendar, Users } from "lucide-react";

const RefundPolicy = () => {
  const lastUpdated = "January 15, 2025";

  const refundSections = [
    {
      title: "Refund Eligibility",
      icon: CheckCircle,
      content: [
        "Refunds are available for event registrations cancelled at least 48 hours before the event start time",
        "Training program refunds are available if cancelled within 7 days of registration and before the program begins",
        "Digital products and courses are eligible for refunds within 14 days of purchase if not accessed",
        "Membership subscriptions can be cancelled anytime, with refunds prorated for unused time",
        "Refunds are not available for completed events, training sessions, or accessed digital content"
      ]
    },
    {
      title: "Refund Process",
      icon: CreditCard,
      content: [
        "Submit a refund request through our contact form or email us at info@sheleadsindia.in",
        "Include your registration details, order number, and reason for cancellation",
        "We will review your request within 2-3 business days",
        "Approved refunds will be processed within 5-7 business days",
        "Refunds will be issued to the original payment method used for the transaction"
      ]
    },
    {
      title: "Processing Time",
      icon: Clock,
      content: [
        "Refund requests are reviewed within 2-3 business days",
        "Approved refunds are processed within 5-7 business days",
        "Bank transfers may take additional 3-5 business days to reflect in your account",
        "Credit card refunds typically appear within 1-2 billing cycles",
        "You will receive email confirmation once the refund is processed"
      ]
    },
    {
      title: "Non-Refundable Items",
      icon: AlertTriangle,
      content: [
        "Completed events, workshops, or training sessions",
        "Digital content that has been accessed or downloaded",
        "Customized or personalized services",
        "Third-party fees or charges (payment processing fees)",
        "Services that have been partially or fully delivered"
      ]
    },
    {
      title: "Special Circumstances",
      icon: Shield,
      content: [
        "Force majeure events (natural disasters, pandemics) may result in event rescheduling rather than refunds",
        "Technical issues preventing access to digital content will be resolved or refunded at our discretion",
        "Medical emergencies may qualify for special consideration with proper documentation",
        "We reserve the right to make exceptions on a case-by-case basis",
        "All special circumstances are subject to management approval"
      ]
    },
    {
      title: "Contact Information",
      icon: Mail,
      content: [
        "Email: info@sheleadsindia.in for all refund inquiries",
        "Include your full name, order/registration number, and detailed reason for refund",
        "Response time: Within 24 hours during business days",
        "Phone: +918806661434 for urgent matters",
        "Business hours: Monday to Friday, 9 AM to 6 PM IST"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="py-16 md:py-24 text-white relative bg-cover bg-center bg-no-repeat min-h-[60vh] md:min-h-[70vh] w-full overflow-hidden"
        style={{ 
          backgroundImage: 'url(/media/market-place.JPG)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundAttachment: 'scroll',
          margin: 0,
          padding: 0
        }}
      >
        {/* Light overlay for mobile, darker for desktop */}
        <div className="absolute inset-0 bg-black bg-opacity-10 md:bg-opacity-25"></div>
        
        <div className="w-full px-4 relative z-10 flex items-center min-h-[50vh] md:min-h-[60vh]">
          <div className="max-w-4xl mx-auto text-center w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4 md:mb-6 drop-shadow-2xl text-shadow-strong">
              Refund Policy
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 opacity-95 font-light leading-relaxed drop-shadow-xl text-shadow-medium max-w-3xl mx-auto">
              We want you to be completely satisfied with our services. Learn about our refund policy and process.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm opacity-90">
              <Calendar className="w-4 h-4" />
              <span>Last updated: {lastUpdated}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
                Our Refund Commitment
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At SHELeads India, we are committed to providing excellent service and ensuring your satisfaction. 
                We understand that sometimes circumstances change, and you may need to cancel or request a refund. 
                This policy outlines our refund process and terms to ensure transparency and fairness.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We strive to process all refund requests promptly and fairly. If you have any questions about 
                our refund policy or need assistance with a refund request, please don't hesitate to contact us.
              </p>
            </div>

            {/* Refund Sections */}
            <div className="space-y-8">
              {refundSections.map((section, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <section.icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl md:text-2xl text-foreground">
                        {section.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Reference */}
            <Card className="mt-12 border-0 shadow-lg bg-gradient-to-r from-primary/5 to-primary/10">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl text-foreground">
                  Quick Reference
                </CardTitle>
                <CardDescription className="text-lg">
                  Key information about our refund policy at a glance.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Event Cancellation</h4>
                    <p className="text-muted-foreground">
                      48 hours notice required for full refund
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Training Programs</h4>
                    <p className="text-muted-foreground">
                      7 days from registration, before program starts
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Digital Products</h4>
                    <p className="text-muted-foreground">
                      14 days if not accessed
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Processing Time</h4>
                    <p className="text-muted-foreground">
                      5-7 business days after approval
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="mt-8 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl text-foreground">
                  Need Help with a Refund?
                </CardTitle>
                <CardDescription className="text-lg">
                  Contact us for assistance with refund requests or questions about our policy.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <h4 className="font-semibold text-foreground">Email</h4>
                      <p className="text-muted-foreground">info@sheleadsindia.in</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-primary" />
                    <div>
                      <h4 className="font-semibold text-foreground">Phone</h4>
                      <p className="text-muted-foreground">+918806661434</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Updates Notice */}
            <div className="mt-8 p-6 bg-muted/50 rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Policy Updates
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Refund Policy from time to time to reflect changes in our services or legal requirements. 
                We will notify you of any material changes by posting the updated policy on our website and updating the 
                "Last updated" date. We encourage you to review this policy periodically.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RefundPolicy;





