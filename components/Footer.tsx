export default function Footer() {
  const COSMIC_BUCKET_SLUG = process.env.COSMIC_BUCKET_SLUG || 'golden-hills-production'

  return (
    <footer className="bg-ranch-brown text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Golden Hills Ranch</h3>
            <p className="text-ranch-cream">
              Premium grass-fed beef and raw milk products from our Montana ranch. 
              Three generations of sustainable farming and quality.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/products" className="text-ranch-cream hover:text-white transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="/categories" className="text-ranch-cream hover:text-white transition-colors">
                  Categories
                </a>
              </li>
              <li>
                <a href="/about-golden-hills-ranch" className="text-ranch-cream hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/beef-cooking-guide" className="text-ranch-cream hover:text-white transition-colors">
                  Cooking Guide
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-ranch-cream">
              Montana Ranch<br />
              Premium Quality Since 1952
            </p>
          </div>
        </div>
        
        <div className="border-t border-ranch-gold/30 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-ranch-cream text-sm">
            © 2025 Golden Hills Ranch. All rights reserved.
          </p>
          
          <a
            href={`https://www.cosmicjs.com?utm_source=bucket_${COSMIC_BUCKET_SLUG}&utm_medium=referral&utm_campaign=app_footer&utm_content=built_with_cosmic`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cosmic-dark hover:bg-cosmic-dark-hover text-white px-4 py-2 rounded-md text-sm font-medium no-underline inline-flex items-center gap-2 transition-colors duration-200 mt-4 md:mt-0"
          >
            <img 
              src="https://cdn.cosmicjs.com/b67de7d0-c810-11ed-b01d-23d7b265c299-logo508x500.svg" 
              alt="Cosmic Logo" 
              className="w-5 h-5"
            />
            Built with Cosmic
          </a>
        </div>
      </div>
    </footer>
  )
}