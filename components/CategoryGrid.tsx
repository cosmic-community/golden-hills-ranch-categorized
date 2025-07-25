import { Category } from '@/types'
import Link from 'next/link'

interface CategoryGridProps {
  categories: Category[]
}

export default function CategoryGrid({ categories }: CategoryGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {categories.map((category) => (
        <Link 
          key={category.id} 
          href={`/categories/${category.slug}`}
          className="card group"
        >
          {category.metadata.image && (
            <div className="aspect-w-16 aspect-h-9 overflow-hidden">
              <img
                src={`${category.metadata.image.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
                alt={category.metadata.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
                width={400}
                height={200}
              />
            </div>
          )}
          <div className="p-6">
            <h3 className="text-xl font-semibold text-ranch-brown mb-2">
              {category.metadata.name}
            </h3>
            {category.metadata.description && (
              <p className="text-gray-600">
                {category.metadata.description}
              </p>
            )}
          </div>
        </Link>
      ))}
    </div>
  )
}