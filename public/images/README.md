# Dummy Images for Gallery

This folder contains placeholder images for the Mekar Technology website gallery.

In a real implementation, you would replace these with actual project photos:

1. cctv-installation.jpg - CCTV installation photos
2. access-control-setup.jpg - Access control system installation
3. network-infrastructure.jpg - Network setup and configuration
4. office-setup.jpg - Complete office solutions
5. smart-building.jpg - Smart building automation
6. team-work.jpg - Professional team photos

For now, the gallery uses icon-based placeholders with gradient backgrounds to showcase the visual layout.

To add real images:

1. Add your images to this `/public/images/` directory
2. Update the `GallerySection.vue` component to use actual image URLs
3. Use the `<NuxtImg>` component for optimized image loading

Example:

```vue
<NuxtImg
  src="/images/cctv-installation.jpg"
  alt="CCTV Installation"
  width="400"
  height="300"
  class="rounded-xl object-cover"
/>
```
