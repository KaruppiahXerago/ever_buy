"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import { CartDrawer } from "@/components/cart-drawer"
import { useCart } from "@/lib/cart-context"

// Sample product data
const featuredProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 199.99,
    originalPrice: 249.99,
    image: "/wireless-headphones.png",
    rating: 4.5,
    reviews: 128,
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 299.99,
    originalPrice: 399.99,
    image: "/smartwatch-lifestyle.png",
    rating: 4.8,
    reviews: 89,
    badge: "New",
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 79.99,
    originalPrice: 99.99,
    image: "/bluetooth-speaker.png",
    rating: 4.3,
    reviews: 156,
    badge: "Sale",
  },
  {
    id: 4,
    name: "Laptop Stand",
    price: 49.99,
    originalPrice: null,
    image: "/laptop-stand.png",
    rating: 4.6,
    reviews: 73,
    badge: null,
  },
  {
    id: 5,
    name: "USB-C Hub",
    price: 89.99,
    originalPrice: 119.99,
    image: "/usb-c-hub.jpg",
    rating: 4.4,
    reviews: 92,
    badge: "Popular",
  },
  {
    id: 6,
    name: "Wireless Mouse",
    price: 39.99,
    originalPrice: null,
    image: "/wireless-mouse.png",
    rating: 4.2,
    reviews: 204,
    badge: null,
  },
]

const categories = [
  { name: "Electronics", image: "/electronics-category.png", count: 156 },
  { name: "Accessories", image: "/accessories-category.png", count: 89 },
  { name: "Audio", image: "/audio-category.jpg", count: 67 },
  { name: "Computing", image: "/computing-category.jpg", count: 124 },
]

export default function HomePage() {
  const { dispatch } = useCart()

  const addToCart = (product: (typeof featuredProducts)[0]) => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      },
    })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
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

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-balance mb-6">Discover Amazing Tech Products</h2>
          <p className="text-xl text-muted-foreground text-balance mb-8 max-w-2xl mx-auto">
            Find the latest gadgets, electronics, and accessories at unbeatable prices. Quality products with fast
            shipping and excellent customer service.
          </p>
          <Button size="lg" className="text-lg px-8 py-3">
            Shop Now
          </Button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Shop by Category</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Card key={category.name} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 overflow-hidden rounded-lg">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">{category.name}</h4>
                  <p className="text-muted-foreground text-sm">{category.count} products</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Featured Products</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow group">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform"
                    />
                    {product.badge && (
                      <Badge
                        className="absolute top-3 left-3"
                        variant={product.badge === "Sale" ? "destructive" : "default"}
                      >
                        {product.badge}
                      </Badge>
                    )}
                  </div>
                  <div className="p-6">
                    <h4 className="font-semibold text-lg mb-2 text-balance">{product.name}</h4>
                    <div className="flex items-center mb-3">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="ml-1 text-sm font-medium">{product.rating}</span>
                      </div>
                      <span className="text-muted-foreground text-sm ml-2">({product.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-primary">${product.price}</span>
                        {product.originalPrice && (
                          <span className="text-muted-foreground line-through">${product.originalPrice}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <div className="flex space-x-2 w-full">
                    <Button className="flex-1" onClick={() => addToCart(product)}>
                      Add to Cart
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href={`/product/${product.id}`}>View Details</Link>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h5 className="font-bold text-lg mb-4 text-primary">EverBuy</h5>
              <p className="text-muted-foreground text-sm">
                Your trusted partner for quality tech products and exceptional customer service.
              </p>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Quick Links</h6>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="text-muted-foreground hover:text-primary transition-colors">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/categories" className="text-muted-foreground hover:text-primary transition-colors">
                    Categories
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Customer Service</h6>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/shipping" className="text-muted-foreground hover:text-primary transition-colors">
                    Shipping Info
                  </Link>
                </li>
                <li>
                  <Link href="/returns" className="text-muted-foreground hover:text-primary transition-colors">
                    Returns
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Connect</h6>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Newsletter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Social Media
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground text-sm">
            <p>&copy; 2024 EverBuy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
