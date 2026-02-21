export const galleryImages = Array.from({ length: 30 }).map((_, i) => ({
  id: i + 1,
  title: [
    "Luxury Sedan", "Executive SUV", "Premium Coach", 
    "Airport Transfer", "Corporate Event", "Wedding Special"
  ][i % 6],
  src: `https://images.unsplash.com/photo-${[
    "1549317661-bd32c8ce0db2", "1503376780353-7e6692767b70", 
    "1544620347-c4fd4a3d5957", "1555214107-f2e7c48c636f",
    "1494905998402-395d579af36f", "1506157786151-b8491531f063"
  ][i % 6]}?q=80&w=800&auto=format&fit=crop`,
  category: i % 2 === 0 ? "Premium" : "Executive"
}));