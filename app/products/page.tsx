"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, Search, Filter, ChevronLeft } from "lucide-react"
import { CartDrawer } from "@/components/cart-drawer"
import { useCart } from "@/lib/cart-context"
import { useState } from "react"

// Extended product data
const allProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 199.99,
    originalPrice: 249.99,
    image: "/wireless-headphones.png",
    rating: 4.5,
    reviews: 128,
    badge: "Best Seller",
    category: "Audio",
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
    category: "Electronics",
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
    category: "Audio",
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
    category: "Accessories",
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
    category: "Computing",
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
    category: "Computing",
  },
  {
    id: 7,
    name: "Gaming Keyboard",
    price: 129.99,
    originalPrice: 159.99,
    image: "/gaming-keyboard.png",
    rating: 4.7,
    reviews: 145,
    badge: "Gaming",
    category: "Computing",
  },
  {
    id: 8,
    name: "Webcam HD",
    price: 69.99,
    originalPrice: null,
    image: "/hd-webcam.png",
    rating: 4.1,
    reviews: 87,
    badge: null,
    category: "Electronics",
  },
  {
    id: 9,
    name: "Phone Case",
    price: 24.99,
    originalPrice: 34.99,
    image: "/colorful-phone-case-display.png",
    rating: 4.3,
    reviews: 312,
    badge: "Sale",
    category: "Accessories",
  },
]

export default function ProductsPage() {
  const { dispatch } = useCart()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("featured")
  const [addedProducts, setAddedProducts] = useState<Set<number>>(new Set())

  const addToCart = (product: (typeof allProducts)[0]) => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      },
    })

    setAddedProducts((prev) => new Set(prev).add(product.id))
    setTimeout(() => {
      setAddedProducts((prev) => {
        const newSet = new Set(prev)
        newSet.delete(product.id)
        return newSet
      })
    }, 2000)
  }

  // Filter and sort products
  const filteredProducts = allProducts
    .filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        case "rating":
          return b.rating - a.rating
        case "name":
          return a.name.localeCompare(b.name)
        default:
          return 0
      }
    })

  const categories = ["all", "Electronics", "Audio", "Computing", "Accessories"]

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
              <Link href="/products" className="text-primary font-medium">
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

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">All Products</h1>
          <p className="text-muted-foreground text-lg">
            Discover our complete collection of premium tech products and accessories.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:space-x-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex space-x-4">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-40">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="name">Name A-Z</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredProducts.length} of {allProducts.length} products
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="hover:shadow-lg transition-shadow group">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
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
                <div className="p-4">
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
                      <span className="text-xl font-bold text-primary">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-muted-foreground line-through text-sm">${product.originalPrice}</span>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <div className="flex space-x-2 w-full">
                  <Button
                    className="flex-1"
                    onClick={() => addToCart(product)}
                    disabled={addedProducts.has(product.id)}
                  >
                    {addedProducts.has(product.id) ? "Added" : "Add to Cart"}
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href={`/product/${product.id}`}>View</Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-2">No products found</h3>
            <p className="text-muted-foreground mb-4">Try adjusting your search or filter criteria.</p>
            <Button
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("all")
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
