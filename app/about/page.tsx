"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, Shield, Truck, HeadphonesIcon, Award, Users, Globe, Heart } from "lucide-react"
import { CartDrawer } from "@/components/cart-drawer"

const features = [
  {
    icon: Shield,
    title: "Quality Guarantee",
    description: "All products come with manufacturer warranty and our quality assurance promise.",
  },
  {
    icon: Truck,
    title: "Fast Shipping",
    description: "Free shipping on orders over $100. Express delivery available nationwide.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Our customer service team is available around the clock to help you.",
  },
  {
    icon: Award,
    title: "Best Prices",
    description: "Competitive pricing with regular sales and exclusive member discounts.",
  },
]

const stats = [
  { number: "50K+", label: "Happy Customers" },
  { number: "1000+", label: "Products" },
  { number: "99.9%", label: "Uptime" },
  { number: "24/7", label: "Support" },
]

const team = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image: "/professional-woman-ceo.png",
    bio: "Tech entrepreneur with 15+ years in e-commerce and consumer electronics.",
  },
  {
    name: "Michael Chen",
    role: "CTO",
    image: "/professional-man-cto.png",
    bio: "Former Google engineer specializing in scalable e-commerce platforms.",
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Customer Success",
    image: "/professional-woman-customer-success.jpg",
    bio: "Customer experience expert ensuring every interaction exceeds expectations.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/">
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Link>
              </Button>
              <h1 className="text-2xl font-bold text-primary">EverBuy</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/products" className="text-foreground hover:text-primary transition-colors">
                Products
              </Link>
              <Link href="/categories" className="text-foreground hover:text-primary transition-colors">
                Categories
              </Link>
              <Link href="/about" className="text-primary font-medium">
                About
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <CartDrawer />
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4" variant="secondary">
            About EverBuy
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Your Trusted Tech Partner</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            Since 2020, EverBuy has been dedicated to bringing you the latest and greatest in technology. We believe
            everyone deserves access to premium tech products at fair prices, backed by exceptional customer service.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  At EverBuy, we're passionate about making cutting-edge technology accessible to everyone. Our mission
                  is to bridge the gap between innovation and affordability, ensuring that premium tech products are
                  within reach for all consumers.
                </p>
                <p>
                  We carefully curate our product selection, partnering with trusted manufacturers and emerging brands
                  to offer you the best in electronics, accessories, and smart devices. Every product in our catalog is
                  tested and verified to meet our high standards.
                </p>
                <p>
                  Beyond just selling products, we're building a community of tech enthusiasts who share our passion for
                  innovation and quality. We're here to guide you through your tech journey, from discovery to purchase
                  to ongoing support.
                </p>
              </div>
            </div>
            <div className="relative">
              <img src="/modern-tech-office-workspace.jpg" alt="EverBuy office" className="rounded-lg shadow-lg w-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose EverBuy?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <Card key={member.name} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16 bg-muted/30 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-3">Customer First</h3>
              <p className="text-muted-foreground text-sm">
                Every decision we make is guided by what's best for our customers and their experience.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-3">Innovation</h3>
              <p className="text-muted-foreground text-sm">
                We stay ahead of tech trends to bring you the most innovative products and solutions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-3">Integrity</h3>
              <p className="text-muted-foreground text-sm">
                Honest pricing, transparent policies, and genuine care for our community.
              </p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-primary/5 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Have questions about our products or services? We'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Contact Support</Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/products">Shop Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
