import { getHomepageContent, getCategories, getProducts } from '@/lib/cosmic'
import { Suspense } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import CategoryGrid from '@/components/CategoryGrid'
import ProductGrid from '@/components/ProductGrid'
import ContactForm from '@/components/ContactForm'
import LoadingSpinner from '@/components/LoadingSpinner'

export default async function HomePage() {
  const [homepageContent, categories, products] = await Promise.all([
    getHomepageContent(),
    getCategories(),
    getProducts()
  ])

  // Get featured products (limit to 6)
  const featuredProducts = products.slice(0, 6)

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {homepageContent && (
          <HeroSection content={homepageContent} />
        )}

        {/* Categories Section */}
        {categories.length > 0 && (
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-ranch-brown mb-4">
                  {homepageContent?.metadata.categories_title || 'Shop by Category'}
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  {homepageContent?.metadata.categories_description || 'Explore our product categories'}
                </p>
              </div>
              <Suspense fallback={<LoadingSpinner />}>
                <CategoryGrid categories={categories} />
              </Suspense>
            </div>
          </section>
        )}

        {/* Featured Products Section */}
        {featuredProducts.length > 0 && (
          <section className="py-16 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-ranch-brown mb-4">
                  {homepageContent?.metadata.featured_products_title || 'Featured Products'}
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  {homepageContent?.metadata.featured_products_description || 'Discover our premium selection'}
                </p>
              </div>
              <Suspense fallback={<LoadingSpinner />}>
                <ProductGrid products={featuredProducts} />
              </Suspense>
            </div>
          </section>
        )}

        {/* Contact Form Section */}
        <ContactForm />
      </main>

      <Footer />
    </div>
  )
}