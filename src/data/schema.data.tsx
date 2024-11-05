export const indexSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Wallpaper dan Interior Premium",
    description:
      "Verata Wallpaper dan Interior Jogja menawarkan kualitas impor kebutuhan wallpaper dan interior untuk memperindah ruang Anda.",
    brand: {
      "@type": "Brand",
      name: "Verata Wallpaper dan Interior Jogja",
    },
    category: "Wallpaper dan Interior",
    image:
      "https://res.cloudinary.com/dxao06apr/image/upload/v1729950357/dont%20delete%20before%20check/ssyk2vjb7yyvi5bv7sfg.jpg",
    url: "https://verata.vercel.app",
    offers: {
      "@type": "Offer",
      url: "https://verata.vercel.app/catalog",
      priceCurrency: "IDR",
      price: "500000",
      itemCondition: "https://schema.org/NewCondition",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "3",
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Mahardhika",
        },
        datePublished: "2024-10-23",
        reviewBody: "Produk wallpaper di Verata sangat bagus dan mudah dipasang.",
        name: "Ulasan Produk Wallpaper",
        rating: {
          "@type": "Rating",
          bestRating: "5",
          worstRating: "1",
          ratingValue: "5",
        },
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Ihsan",
        },
        datePublished: "2024-10-27",
        reviewBody: "Produk wallpaper di Verata harga terjangkau.",
        name: "Ulasan Produk Wallpaper",
        rating: {
          "@type": "Rating",
          bestRating: "5",
          worstRating: "1",
          ratingValue: "4.8",
        },
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Dewi",
        },
        datePublished: "2024-11-03",
        reviewBody: "Produk wallpaper di Verata cukup lengkap.",
        name: "Ulasan Produk Wallpaper",
        rating: {
          "@type": "Rating",
          bestRating: "5",
          worstRating: "1",
          ratingValue: "4.8",
        },
      },
    ],
  };
  