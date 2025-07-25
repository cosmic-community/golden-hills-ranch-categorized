# Golden Hills Ranch Website

![Golden Hills Ranch](https://imgix.cosmicjs.com/e656ec70-a044-11ed-81f2-f50e185dd248-U6t80TWJ1DM.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A premium e-commerce website for Golden Hills Ranch, showcasing their grass-fed beef and raw milk products. Built with Next.js 15 and powered by Cosmic CMS, this site features a beautiful product catalog, category browsing, and rich content management for ranch information and cooking guides.

## Features

- **Dynamic Product Showcase** - Browse premium beef cuts and raw milk products with detailed descriptions
- **Category Organization** - Products organized by Premium Cuts, Raw Milk Products, and Cooking Accessories
- **Rich Product Pages** - Multiple images, detailed descriptions, pricing, and weight information
- **Educational Content** - Cooking guides and ranch history managed through Cosmic CMS
- **Responsive Design** - Optimized for all devices with beautiful image galleries
- **SEO Optimized** - Meta descriptions and search-friendly structure
- **Dynamic Homepage** - Hero section and featured content managed via Cosmic CMS

## Clone this Bucket and Code Repository

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Bucket and Code Repository](https://img.shields.io/badge/Clone%20this%20Bucket-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](http://localhost:3040/projects/new?clone_bucket=6883b5d745a59f0b52cf8873&clone_repository=6883f2e4e53a6ae87114d328)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Add raw milk products'="

### Code Generation Prompt

> Build a Next.js website that uses my existing objects in this bucket. Set apiEnvironment: staging in cosmic config

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Cosmic CMS** - Headless content management
- **Bun** - Fast package manager and runtime

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account and bucket

### Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   bun install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```

4. Add your Cosmic credentials to `.env.local`:
   ```
   COSMIC_BUCKET_SLUG=your-bucket-slug
   COSMIC_READ_KEY=your-read-key
   COSMIC_WRITE_KEY=your-write-key
   ```

5. Run the development server:
   ```bash
   bun dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Cosmic SDK Examples

### Fetching Products with Categories
```typescript
import { cosmic } from '@/lib/cosmic'

export async function getProducts() {
  try {
    const response = await cosmic.objects
      .find({ type: 'products' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as Product[]
  } catch (error) {
    if (error.status === 404) {
      return []
    }
    throw error
  }
}
```

### Fetching Homepage Content
```typescript
export async function getHomepageContent() {
  try {
    const response = await cosmic.objects.findOne({
      type: 'homepage-content',
      slug: 'homepage-content'
    })
    
    return response.object as HomepageContent
  } catch (error) {
    if (error.status === 404) {
      return null
    }
    throw error
  }
}
```

## Cosmic CMS Integration

This website integrates with your Cosmic bucket's content structure:

- **Products** - Complete product catalog with images, pricing, categories, and inventory status
- **Categories** - Product categorization with descriptions and featured images
- **Pages** - Content pages for cooking guides, ranch information, and other educational content
- **Homepage Content** - Dynamic hero section and featured content areas

All content is fetched server-side for optimal SEO and performance, with automatic image optimization through Cosmic's imgix integration.

## Deployment Options

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Netlify
1. Build the project: `bun run build`
2. Deploy the `out` folder to Netlify
3. Configure environment variables

For production, set these environment variables in your hosting platform:
- `COSMIC_BUCKET_SLUG`
- `COSMIC_READ_KEY` 
- `COSMIC_WRITE_KEY`

<!-- README_END -->