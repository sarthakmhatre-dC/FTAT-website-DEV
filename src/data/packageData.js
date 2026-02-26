export const packageContent = {
  vacation: {
    hero: {
      tag: "Leisure & Escape",
      title: "Curated Escapes for the Soul.",
      description: "Our vacation packages are hand-picked journeys designed to eliminate the stress of planning. We bundle premium accommodation and seamless transit into a single itinerary.",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200"
    },
    grid: {
      title: "Exclusive Vacation Deals",
      subtitle: "Hand-picked leisure experiences for families and solo travelers.",
      packages: [
        { 
          id: 1, 
          title: "Maldives Luxury", 
          location: "Male", 
          duration: "5D/4N", 
          capacity: "2 Adults", 
          price: "₹85,000", 
          image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=400", 
          description: "Experience overwater villas and crystal clear lagoons." 
        },
        { 
          id: 2, 
          title: "Swiss Alps", 
          location: "Zermatt", 
          duration: "7D/6N", 
          capacity: "Family", 
          price: "₹1,45,000", 
          image: "https://images.unsplash.com/photo-1502602898657-3e9172f29f78?q=80&w=400", 
          description: "Breathtaking mountain views and world-class skiing." 
        },
        // ... apply similar price fields to remaining items
      ]
    }
  },
  corporate: {
    hero: {
      tag: "Business Logistics",
      title: "Seamless Corporate Mobility.",
      description: "Enterprise-grade travel solutions for your workforce. We ensure on-time arrivals and premium comfort for your executive teams and delegacy.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200"
    },
    grid: {
      title: "Corporate Transit Solutions",
      subtitle: "Reliable fleet management and airport transfers for institutional clients.",
      packages: [
        { 
          id: 1, 
          title: "Executive Airport Drop", 
          location: "Mumbai Hub", 
          duration: "Point-to-Point", 
          capacity: "4 Seats", 
          price: "On Request", 
          image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=400", 
          description: "Priority airport transfers with professional chauffeurs." 
        },
        { 
          id: 2, 
          title: "Monthly Staff Transit", 
          location: "Pan India", 
          duration: "Monthly Contract", 
          capacity: "Varies", 
          price: "Custom Quote", 
          image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=400", 
          description: "Safe and reliable daily commute for your employees." 
        },
        // ... apply similar price fields to remaining items
      ]
    }
  }
};