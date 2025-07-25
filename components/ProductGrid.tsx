import { Product } from '@/types'
import Link from 'next/link'

interface ProductGridProps {
  products: Product[]
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => {
        const firstImage = product.metadata.images?.[0]
        
        return (
          <Link 
            key={product.id} 
            href={`/products/${product.slug}`}
            className="card group"
          >
            {firstImage && (
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <img
                  src={`${firstImage.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
                  alt={product.metadata.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
                  width={400}
                  height={200}
                />
              </div>
            )}
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-ranch-brown">
                  {product.metadata.name}
                </h3>
                <div className="text-right">
                  <span className="text-2xl font-bold text-ranch-gold">
                    ${product.metadata.price.toFixed(2)}
                  </span>
                  {product.metadata.weight && (
                    <p className="text-sm text-gray-500">
                      {product.metadata.weight}
                    </p>
                  )}
                </div>
              </div>
              
              {product.metadata.category && (
                <span className="inline-block bg-ranch-gold/10 text-ranch-brown text-xs px-2 py-1 rounded-full mb-2">
                  {product.metadata.category.metadata.name}
                </span>
              )}
              
              <div 
                className="text-gray-600 text-sm line-clamp-3"
                dangerouslySetInnerHTML={{ 
                  __html: product.metadata.description.replace(/<[^>]*>/g, '').substring(0, 120) + '...' 
                }}
              />
              
              <div className="mt-4 flex justify-between items-center">
                <span className={`text-sm px-2 py-1 rounded-full ${
                  product.metadata.in_stock 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {product.metadata.in_stock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}