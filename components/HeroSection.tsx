import { HomepageContent } from '@/types'

interface HeroSectionProps {
  content: HomepageContent
}

export default function HeroSection({ content }: HeroSectionProps) {
  const backgroundImage = content.metadata.hero_background_image?.imgix_url
  
  return (
    <section 
      className="hero-section"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage}?w=1920&h=800&fit=crop&auto=format,compress)` : undefined
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {content.metadata.hero_title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-ranch-cream">
          {content.metadata.hero_subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/products" className="btn-primary">
            Shop Products
          </a>
          <a href="/about-golden-hills-ranch" className="btn-secondary">
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}