// data/galleryData.js

// Map your 10 public images to their actual extensions
const imageExtensions = {
  1: "webp", 2: "webp", 3: "webp", 4: "webp", 5: "webp",
  6: "webp", 7: "jpg", 8: "webp", 9: "webp", 10: "webp"
};

const titles = [
  "Corporate Excellence", "VIP Airport Transfer", "Executive Fleet", 
  "Premium Charter", "Elite Business Travel", "Institutional Logistic"
];

const descriptions = [
  "Industry standard sedan for executive movement.",
  "Luxury SUV for high-profile airport transfers.",
  "Spacious coach solutions for corporate events.",
  "Meticulously maintained premium transport.",
  "Dependable fleet for daily enterprise operations.",
  "Customized logistics for large-scale events."
];

export const galleryImages = Array.from({ length: 30 }).map((_, i) => {
  const imageId = (i % 10) + 1; // Logic to cycle through your 10 images
  const ext = imageExtensions[imageId]; // Get the correct extension (webp or jpg)
  
  return {
    id: i + 1,
    title: titles[i % titles.length],
    // Construct the path dynamically with the correct extension
    src: `/galleryImages/galleryImage${imageId}.${ext}`, 
    category: i % 2 === 0 ? "Premium" : "Executive",
    description: "Industry-leading transport solutions tailored for Mumbai's corporate landscape."
  };
});