import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://vinityadav.dev',
      lastModified: new Date(),
    },
    {
      url: 'https://vinityadav.dev/projects',
      lastModified: new Date(),
    },
    {
      url: 'https://vinityadav.dev/contact',
      lastModified: new Date(),
    },
  ]
}
