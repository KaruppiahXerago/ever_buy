"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { CartDrawer } from "@/components/cart-drawer"

const categories = [
  {
    name: "Electronics",
    image: "/electronics-category.png",
    count: 156,
    description: "Latest smartphones, tablets, and electronic gadgets",
    subcategories: ["Smartphones", "Tablets", "Smart Home", "Wearables"],
  },
  {
    name: "Audio",
    image: "/audio-category.jpg",
    count: 67,
    description: "Premium headphones, speakers, and audio equipment",
    subcategories: ["Headphones", "Speakers", "Earbuds", "Audio Accessories"],
  },
  {
    name: "Computing",
    image: "/computing-category.jpg",
    count: 124,
    description: "Laptops, desktops, and computer accessories",
    subcategories: ["Laptops", "Keyboards", "Mice", "Monitors", "Storage"],
  },
  {
    name: "Accessories",
    image: "/accessories-category.png",
    count: 89,
    description: "Cases, stands, cables, and other tech accessories",
    subcategories: ["Phone Cases", "Laptop Stands", "Cables", "Chargers"],
  },
  {
    name: "Gaming",
    image: "/ultimate-gaming-setup.png",
    count: 45,
    description: "Gaming peripherals and accessories",
    subcategories: ["Gaming Keyboards", "Gaming Mice", "Controllers", "Headsets"],
  },
  {
    name: "Photography",
    image: "/assorted-camera-gear.png",
    count: 32,
    description: "Cameras, lenses, and photography equipment",
    subcategories: ["Cameras", "Lenses", "Tripods", "Camera Bags"],
  },
]

export default function CategoriesPage() {
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
              <Link href="/categories" className="text-primary font-medium">
                Categories
              </Link>
              <Link href="/about" className="text-foreground hover:text-primary transition-colors">
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
        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Shop by Category</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our carefully curated categories to find exactly what you're looking for. From cutting-edge
            electronics to essential accessories.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Card key={category.name} className="hover:shadow-lg transition-all duration-300 group cursor-pointer">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium">
                      {category.count} items
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold">{category.name}</h3>
                    <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>

                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{category.description}</p>

                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                      Popular Items
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {category.subcategories.slice(0, 3).map((sub) => (
                        <span key={sub} className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground">
                          {sub}
                        </span>
                      ))}
                      {category.subcategories.length > 3 && (
                        <span className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground">
                          +{category.subcategories.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button className="w-full group-hover:bg-primary/90 transition-colors" asChild>
                      <Link href="/products">
                        Browse {category.name}
                        <ChevronRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-muted/30 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Can't find what you're looking for?</h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Browse our complete product catalog or use our search feature to find specific items.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/products">View All Products</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/about">Contact Support</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
