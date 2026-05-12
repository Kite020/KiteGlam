const allProducts = [
    //Beauty
    {
      id: 1,
      name: 'Derma Co Skincare Combo',
      price: '₹1899',
      image: require('../img/derma.png'),
      category: 'Skincare',
      page: 'Beauty',
      description:
        'Formulated with dermatologist-approved ingredients, this skincare combo deeply nourishes, hydrates, and protects your skin for a healthy natural glow.'
    },
  
    {
      id: 2,
      name: 'Rare Beauty Blush',
      price: '₹1999',
      image: require('../img/blush.png'),
      category: 'Makeup',
      page: 'Beauty',
      description:
        'This highly pigmented liquid blush delivers a smooth, radiant finish with a lightweight and blendable formula.'
    },
  
    {
      id: 3,
      name: 'Wearified Makeup Brushes',
      price: '₹2699',
      image: require('../img/brushes.png'),
      category: 'Brushes',
      page: 'Beauty',
      description:
        'Made with ultra-soft premium synthetic bristles, these makeup brushes provide flawless blending.'
    },
  
    {
      id: 4,
      name: 'Kimirica Skincare Combo',
      price: '₹2549',
      image: require('../img/kimirica.png'),
      category: 'Skincare',
      page: 'Beauty',
      description:
        'Infused with nourishing botanical extracts and premium skincare ingredients.'
    },
  
    {
      id: 5,
      name: 'Elf Primer',
      price: '₹699',
      image: require('../img/primer.png'),
      category: 'Makeup',
      page: 'Beauty',
      description:
        'This lightweight face primer creates a smooth and flawless base for makeup.'
    },

    //Bags
    {
        id: 161,
        name: 'H&M Ladies Beige Tote Bag',
        price: '₹1399',
        image: require('../img/Tote1.png'),
        category: 'Tote Bags',
        page:'Bag',
        description: 'Crafted from premium durable canvas with reinforced stitching, this elegant beige tote bag offers both style and functionality. Its spacious interior and lightweight design make it perfect for daily use, shopping trips, office essentials, and casual outings.'
    },
    {
        id: 162,
        name: 'Vah Heusen Oversized Shoulder Bag',
        price: '₹1497',
        image: require('../img/Tote2.png'),
        category: 'Tote Bags',
        page:'Bag',
        description: 'Made with high-quality textured faux leather, this oversized shoulder bag combines sophistication with practicality. Featuring a roomy compartment, sturdy handles, and a sleek modern finish, it is ideal for work, travel, and everyday fashion.'
    },
    {
        id: 163,
        name: 'MICHAEL KORS Zip-Around Wristlet',
        price: '₹10500',
        image: require('../img/Clutch1.png'),
        category: 'Clutches',
        page:'Bag',
        description: 'Designed with premium signature leather and luxury craftsmanship, this zip-around wristlet offers elegance with secure organization. The compact yet spacious interior perfectly fits your essentials while adding a refined designer touch to your look.'
    },
    {
        id: 164,
        name: 'JIMMY CHOO Xandra Latte Clutch Bag',
        price: '₹91000',
        image: require('../img/Clutch2.png'),
        category: 'Clutches',
        page:'Bag',
        description: 'A statement luxury clutch crafted from premium textured leather with flawless detailing and a sophisticated silhouette. Its elegant finish, durable construction, and timeless design make it the perfect companion for parties, weddings, and special occasions.'
    },
    {
        id: 165,
        name: 'Women Pleatz25 frame clutch',
        price: '₹2100',
        image: require('../img/Clutch3.png'),
        category: 'Clutches',
        page:'Bag',
        description: 'Featuring a stylish pleated design with a sturdy metal frame closure, this clutch offers a perfect blend of elegance and durability. Its lightweight build and premium fabric finish make it ideal for festive events, dinners, and evening outings.'
    },
    {
        id: 166,
        name: 'Storite Printed Foldable Duffel Bag',
        price: '₹999',
        image: require('../img/Duffel1.png'),
        category: 'Duffel Bags',
        page:'Bag',
        description: 'Made from durable water-resistant fabric, this foldable duffel bag is designed for convenience, travel, and everyday utility. The spacious storage, lightweight construction, and stylish printed design make it a practical yet fashionable travel essential.'
    },
    {
        id: 167,
        name: 'Bella Crossbody Bag',
        price: '₹2449',
        image: require('../img/Hand1.png'),
        category: 'Hand Bags',
        page:'Bag',
        description: 'Crafted from premium faux leather with elegant stitching details, this crossbody bag offers both comfort and style. Its adjustable strap, compact design, and organized compartments make it perfect for daily wear and effortless fashion.'
      },
      {
        id: 168,
        name: 'EXOTIC Studded Pink Hand Bag',
        price: '₹1249',
        image: require('../img/Hand2.png'),
        category: 'Hand Bags',
        page:'Bag',
        description: 'This trendy studded handbag is made with high-quality synthetic leather and durable metallic accents for a bold fashionable look. Featuring spacious storage and a sturdy structure, it is perfect for elevating both casual and party outfits.'
      },
      {
        id: 169,
        name: 'Allen Solly Women Sling Red Purse',
        price: '₹699',
        image: require('../img/Purse1.png'),
        category: 'Purses',
        page:'Bag',
        description: 'Designed with premium faux leather and a sleek compact silhouette, this stylish red sling purse is perfect for carrying essentials with ease. Its lightweight build, adjustable strap, and elegant finish make it a versatile everyday accessory.'
      },
      {
        id: 170,
        name: 'EXOTIC Studded Green Hand Bag',
        price: '₹699',
        image: require('../img/Purse2.png'),
        category: 'Purses',
        page:'Bag',
        description: 'Crafted with durable synthetic leather and stylish studded detailing, this handbag delivers a trendy and eye-catching look. The spacious interior and sturdy handles provide both practicality and long-lasting comfort for everyday use.'
      },
      {
        id: 171,
        name: 'Adidas Unisex Purple Backpack',
        price: '₹1697',
        image: require('../img/Backpack1.png'),
        category: 'Backpacks',
        page:'Bag',
        description: 'Made from high-quality durable polyester, this Adidas backpack offers excellent comfort, storage, and everyday reliability. Featuring padded shoulder straps, multiple compartments, and a stylish sporty design, it is perfect for college, travel, and daily use.'
      },
      {
        id: 172,
        name: 'Savana White Floral Bag',
        price: '₹693',
        image: require('../img/Backpack2.png'),
        category: 'Backpacks',
        page:'Bag',
        description: 'This charming floral backpack is crafted from lightweight yet durable fabric with premium stitching for long-lasting use. Its spacious design, comfortable straps, and elegant floral print make it a perfect blend of fashion and functionality.'
      },

    //accessories

    {
        id: 181,
        name: 'H&M Ladies Wide-brim Straw Hat',
        price: '₹2999',
        image: require('../img/Hat1.png'),
        category: 'Hats',
        page:'Accessories',
        description: 'Crafted from premium lightweight woven straw, this elegant wide-brim hat offers excellent sun protection while adding a chic touch to your outfit. Designed with breathable material and a comfortable inner band, it is perfect for beach vacations, brunch dates, and summer outings.'
      },
      {
        id: 182,
        name: 'H&M Ladies Purple Floral Hat',
        price: '₹599',
        image: require('../img/Hat2.png'),
        category: 'Hats',
        page:'Accessories',
        description: 'Made with soft and durable cotton-blend fabric, this floral hat combines comfort with a stylish feminine look. The lightweight construction and breathable stitching make it ideal for everyday wear, outdoor trips, and casual summer styling.'
      },
      {
        id: 183,
        name: 'AXTITUDE Women Winter French Ski Cap',
        price: '₹599',
        image: require('../img/Hat3.png'),
        category: 'Hats',
        page:'Accessories',
        description: 'Designed using premium wool-blend knitted fabric, this winter ski cap provides warmth, softness, and excellent comfort during colder days. Its stretchable fit and cozy inner lining make it a fashionable yet practical winter essential.'
      },
      {
        id: 184,
        name: 'H&M Ladies Black Belt',
        price: '₹799',
        image: require('../img/Belt1.png'),
        category: 'Belts',
        page:'Accessories',
        description: 'Crafted from high-quality faux leather with a smooth matte finish, this classic black belt is designed for durability and everyday elegance. The sturdy metal buckle and sleek design make it the perfect accessory to elevate both casual and formal outfits.'
      },
      {
        id: 185,
        name: 'H&M Ladies Belt, Set of 3',
        price: '₹999',
        image: require('../img/Belt2.png'),
        category: 'Belts',
        page:'Accessories',
        description: 'This stylish set of 3 belts is made from premium synthetic leather with durable buckle closures for long-lasting use. Featuring versatile colors and modern finishes, these belts are perfect for pairing with jeans, dresses, and trousers.'
      },
      {
        id: 186,
        name: 'CHANEL COCO MADEMOISELLE Women Perfume',
        price: '₹12350',
        image: require('../img/Perfume1.png'),
        category: 'Perfumes',
        page:'Accessories',
        description: 'An iconic luxury fragrance crafted with sophisticated floral and citrus notes that create a timeless and elegant scent. Its long-lasting premium formulation offers a refined and refreshing experience perfect for special occasions and daily wear.'
      },
      {
        id: 187,
        name: 'YSL Mon Paris Women Perfume',
        price: '₹550',
        image: require('../img/Perfume2.png'),
        category: 'Perfumes',
        page:'Accessories',
        description: 'Infused with sweet fruity and floral accords, this perfume delivers a romantic and captivating fragrance experience. The lightweight yet long-lasting formula keeps you feeling fresh and confident throughout the day.'
      },
      {
        id: 188,
        name: 'Cherry Wine Women Perfume',
        price: '₹899',
        image: require('../img/Perfume3.png'),
        category: 'Perfumes',
        page:'Accessories',
        description: 'A rich and luxurious fragrance featuring warm cherry and floral undertones for an irresistible scent. Crafted with premium aromatic oils, this perfume offers long-lasting freshness and an elegant everyday appeal.'
      },
      {
        id: 189,
        name: 'Ladies Brown Pattern Sunglasses',
        price: '₹699',
        image: require('../img/Sunglass1.png'),
        category: 'Sunglasses',
        page:'Accessories',
        description: 'Made with high-quality UV-protected lenses and a durable lightweight frame, these sunglasses provide both eye protection and effortless style. The elegant brown patterned design adds a fashionable statement to any outfit.'
      },
      {
        id: 190,
        name: 'Multicolor Satin Scrunchies',
        price: '₹86',
        image: require('../img/Scrunchy1.png'),
        category: 'Scrunchies',
        page:'Accessories',
        description: 'These soft satin scrunchies are designed to reduce hair breakage and prevent tangles while keeping your hairstyle secure. Featuring vibrant colors and a smooth premium finish, they are perfect for daily styling and comfortable all-day wear.'
      },
      {
        id: 191,
        name: 'Classic Satin Silk Scrunchies',
        price: '₹199',
        image: require('../img/Scrunchy2.png'),
        category: 'Scrunchies',
        page:'Accessories',
        description: 'Crafted from luxurious satin silk fabric, these scrunchies provide a gentle hold without damaging your hair. Their soft texture and elegant finish make them ideal for both casual hairstyles and sophisticated looks.'
      },
      {
        id: 192,
        name: 'Anna Creations Korean Clips',
        price: '₹183',
        image: require('../img/Clip1.png'),
        category: 'Hair Clips',
        page:'Accessories',
        description: 'Made from premium-quality acrylic and durable metal springs, these Korean-style clips provide a secure grip with a trendy aesthetic. Lightweight and stylish, they are perfect for adding a fashionable touch to everyday hairstyles.'
      },
      {
        id: 193,
        name: 'Anna Creations Korean Flower Lock Pins',
        price: '₹173',
        image: require('../img/Clip2.png'),
        category: 'Hair Clips',
        page:'Accessories',
        description: 'Beautifully crafted with floral detailing and sturdy locking pins, these accessories offer both elegance and durability. The lightweight material ensures comfortable wear while keeping your hairstyle neatly in place all day.'
      },
      {
        id: 194,
        name: 'Pink Knotted Headband',
        price: '₹799',
        image: require('../img/Band1.png'),
        category: 'Headbands',
        page:'Accessories',
        description: 'Designed with soft padded fabric and a stylish knotted finish, this headband offers a comfortable fit without causing pressure. Its premium stitching and elegant pink tone make it a perfect accessory for both casual and festive looks.'
      },
      {
        id: 195,
        name: 'Long Pearl Flower Hair Ribbons',
        price: '₹238',
        image: require('../img/Band2.png'),
        category: 'Headbands',
        page:'Accessories',
        description: 'Featuring delicate pearl embellishments and smooth satin ribbons, this elegant hair accessory adds a graceful touch to any hairstyle. Crafted with attention to detail, it is lightweight, durable, and perfect for special occasions.'
      },
      {
        id: 196,
        name: 'Bakefy 6 Pcs Frosted Hair Claw Set',
        price: '₹299',
        image: require('../img/Clutcher1.png'),
        category: 'Clutchers',
        page:'Accessories',
        description: 'Made from durable premium plastic with a frosted matte finish, these hair claws provide a strong and comfortable grip for all hair types. The stylish neutral shades make them perfect for daily use and effortless styling.'
      },
      {
        id: 197,
        name: '7-pack trainer socks for Women',
        price: '₹699',
        image: require('../img/Sock1.png'),
        category: 'Socks',
        page:'Accessories',
        description: 'Crafted from breathable cotton-rich fabric with added stretch for comfort, these trainer socks provide softness and long-lasting durability. The sweat-absorbent material keeps your feet fresh and comfortable throughout the day.'
      },
      {
        id: 198,
        name: 'Women Flower Printed Microfiber Handkerchief',
        price: '₹215',
        image: require('../img/Hanky1.png'),
        category: 'Hankies',
        page:'Accessories',
        description: 'Made from ultra-soft microfiber fabric, these floral printed handkerchiefs are lightweight, highly absorbent, and gentle on the skin. Their premium finish and elegant design make them both practical and stylish for everyday use.'
      },

    //Jewels

    {
        id: 21,
        name: 'Diamond Pendant with Gold Texture',
        price: '₹1899',
        image: require('../img/DiamondPendent1.png'),
        category: 'Pendants',
        page:'Jewels',
        description: 'Elegantly crafted with a premium gold-textured finish and sparkling diamond detailing, this pendant adds timeless sophistication to any outfit. Its lightweight design, durable craftsmanship, and luxurious shine make it perfect for both everyday elegance and special occasions.'
      },
      {
        id: 22,
        name: 'Butterfly Designed Diamond Pendant',
        price: '₹1899',
        image: require('../img/DiamondButterflyPendent1.png'),
        category: 'Pendants',
        page:'Jewels',
        description: 'Featuring a delicate butterfly-inspired design adorned with shimmering stones, this pendant symbolizes grace and beauty. Crafted with premium-quality alloy and a polished finish, it offers long-lasting shine and lightweight comfort for daily wear.'
      },
      {
        id: 23,
        name: 'Butterfly Designed Gold-Diamond Pendant',
        price: '₹1899',
        image: require('../img/DiamondButterflyPendant.png'),
        category: 'Pendants',
        page:'Jewels',
        description: 'This stunning butterfly pendant combines elegant gold plating with sparkling diamond accents for a luxurious feminine look. The detailed craftsmanship and premium materials ensure durability while adding a sophisticated charm to your jewelry collection.'
      },
      {
        id: 24,
        name: 'Rose Gold Plated Floral Pendant',
        price: '₹1899',
        image: require('../img/RosegoldPendant.png'),
        category: 'Pendants',
        page:'Jewels',
        description: 'Beautifully designed with intricate floral detailing and a premium rose gold plated finish, this pendant delivers elegance with a modern touch. Its lightweight structure and polished shine make it a perfect accessory for parties, dinners, and daily styling.'
      },
      {
        id: 25,
        name: 'Pearl Ear Rings Pink Flower Design',
        price: '₹1999',
        image: require('../img/PearlEarrings1.png'),
        category: 'Ear Rings',
        page:'Jewels',
        description: 'Crafted with elegant pearl embellishments and delicate pink floral detailing, these earrings offer a graceful and feminine appeal. The premium-quality materials and lightweight design ensure comfortable wear while adding sophistication to any outfit.'
      },
      {
        id: 26,
        name: 'Diamond Ear Rings with Gold Texture',
        price: '₹1999',
        image: require('../img/DiamondEarrings1.png'),
        category: 'Ear Rings',
        page:'Jewels',
        description: 'Designed with sparkling diamond accents and a luxurious gold-textured finish, these earrings are perfect for elevating your look effortlessly. Their durable craftsmanship, secure closure, and timeless style make them ideal for festive and formal occasions.'
      },
      {
        id: 27,
        name: 'Butterfly Designed Diamond Ear Rings',
        price: '₹1999',
        image: require('../img/DiamondButterflyEarrings1.png'),
        category: 'Ear Rings',
        page:'Jewels',
        description: 'These butterfly-inspired earrings feature dazzling stone embellishments and a polished premium finish for an elegant statement look. Lightweight yet durable, they provide both comfort and glamour for special occasions or stylish everyday wear.'
      },
      {
        id: 28,
        name: 'Rose Gold Floral Design Necklace',
        price: '₹2699',
        image: require('../img/RosegoldNecklace.png'),
        category: 'Necklaces',
        page:'Jewels',
        description: 'Expertly crafted with a stunning floral motif and elegant rose gold plating, this necklace radiates sophistication and charm. Its premium-quality finish and lightweight design make it a beautiful choice for weddings, parties, and elegant evening looks.'
      },
      {
        id: 29,
        name: 'Gemstones Party Necklace',
        price: '₹2699',
        image: require('../img/GemstoneNecklace.png'),
        category: 'Necklaces',
        page:'Jewels',
        description: 'Adorned with vibrant gemstone detailing and crafted with exceptional precision, this party necklace adds instant glamour to any outfit. The luxurious finish and durable construction ensure lasting shine and a standout statement look.'
      },
      {
        id: 30,
        name: 'Silver Trilogy Love Ring',
        price: '₹2549',
        image: require('../img/SilverRing1.png'),
        category: 'Rings',
        page:'Jewels',
        description: 'This elegant trilogy ring symbolizes timeless love and commitment with its sparkling stone arrangement and premium silver finish. Crafted for durability and comfort, it offers a sophisticated design suitable for daily wear and special moments.'
      },
      {
        id: 31,
        name: 'Rose Gold Amethyst Ring',
        price: '₹2549',
        image: require('../img/RosegoldRing1.png'),
        category: 'Rings',
        page:'Jewels',
        description: 'Featuring a stunning amethyst centerpiece set in a luxurious rose gold plated band, this ring delivers elegance with a modern touch. Its premium craftsmanship and polished finish make it a perfect accessory for parties and elegant styling.'
      },
      {
        id: 32,
        name: '925 Sterling Silver Women Ring',
        price: '₹2549',
        image: require('../img/SilverRing2.png'),
        category: 'Rings',
        page:'Jewels',
        description: 'Crafted from authentic 925 sterling silver, this ring combines timeless beauty with exceptional durability and shine. Its elegant minimalist design and comfortable fit make it ideal for everyday elegance and meaningful gifting.'
      },
      {
        id: 33,
        name: 'Silver Zircon Ferns Bracelet',
        price: '₹699',
        image: require('../img/SilverBracelet1.png'),
        category: 'Bracelets',
        page:'Jewels',
        description: 'Designed with sparkling zircon detailing and elegant fern-inspired patterns, this bracelet offers a refined and graceful appearance. The premium silver finish and lightweight design ensure comfortable all-day wear with lasting shine.'
      },
      {
        id: 34,
        name: 'Silver Infinity Love Bracelet',
        price: '₹699',
        image: require('../img/SilverBracelet2.png'),
        category: 'Bracelets',
        page:'Jewels',
        description: 'Featuring a timeless infinity symbol crafted with a polished silver finish, this bracelet beautifully represents endless love and elegance. Its durable clasp and lightweight construction make it suitable for daily wear and gifting.'
      },
      {
        id: 35,
        name: 'Rose Gold Magnolia Flower Bracelet',
        price: '₹699',
        image: require('../img/RosegoldBracelet1.png'),
        category: 'Bracelets',
        page:'Jewels',
        description: 'This beautifully detailed magnolia flower bracelet is crafted with premium rose gold plating for a luxurious feminine finish. Lightweight, elegant, and durable, it adds sophistication to both casual and festive outfits.'
      },
      {
        id: 36,
        name: 'Twisted Infinity Diamond Bracelet',
        price: '₹699',
        image: require('../img/DiamondBracelet1.png'),
        category: 'Bracelets',
        page:'Jewels',
        description: 'Crafted with sparkling diamond accents and an elegant twisted infinity design, this bracelet offers a modern yet timeless appeal. Its premium-quality finish and secure fit make it an ideal accessory for both special occasions and everyday glamour.'
      },
      {
        id: 37,
        name: 'Trio Petals Nose Pin',
        price: '₹699',
        image: require('../img/GoldNosering1.png'),
        category: 'Nose Rings',
        page:'Jewels',
        description: 'Featuring a delicate trio petal design with a polished gold-tone finish, this nose pin adds subtle elegance to your look. Lightweight, skin-friendly, and easy to wear, it is perfect for both traditional and contemporary styling.'
      },
      {
        id: 38,
        name: 'Silver Pink Gemstone Bangles',
        price: '₹699',
        image: require('../img/SilverBangles.png'),
        category: 'Bangles',
        page:'Jewels',
        description: 'These elegant silver bangles are beautifully embellished with pink gemstone accents for a graceful and luxurious appearance. Crafted with premium-quality materials, they offer durability, shine, and comfortable wear for festive occasions.'
      },
      {
        id: 39,
        name: 'Pearl Green Gemstone Bangles',
        price: '₹699',
        image: require('../img/PearlBangles.png'),
        category: 'Bangles',
        page:'Jewels',
        description: 'Designed with shimmering pearls and rich green gemstone detailing, these bangles deliver a classic and sophisticated charm. Their premium finish and durable craftsmanship make them a stunning addition to ethnic and party wear collections.'
      },
      {
        id: 40,
        name: 'Silver Butterfly Anklets',
        price: '₹699',
        image: require('../img/SilverAnklets.png'),
        category: 'Anklets',
        page:'Jewels',
        description: 'These elegant butterfly anklets are crafted with a polished silver finish and delicate detailing for a graceful feminine look. Lightweight, comfortable, and durable, they add a stylish charm to both casual and festive outfits.'
      },
      {
        id: 41,
        name: 'Gold Love Anklets',
        price: '₹699',
        image: require('../img/GoldAnklets.png'),
        category: 'Anklets',
        page:'Jewels',
        description: 'Featuring a beautiful love-inspired design with a premium gold-tone finish, these anklets offer elegance and sophistication in every detail. Their lightweight construction and durable craftsmanship make them perfect for daily wear and gifting.'
      },

    //Footwears
    {
        id: 101,
        name: 'Puma Women Black Fluido Sneakers',
        price: '₹1899',
        image: require('../img/PumaSneakers1.png'),
        category: 'Sneakers',
        page:'Footwears',
        description: 'Designed with breathable mesh fabric and cushioned soles, these Puma sneakers provide exceptional comfort and all-day support. The lightweight construction and sleek black finish make them perfect for workouts, travel, and everyday casual wear.'
      },
      {
        id: 102,
        name: 'Puma Women White Astralis Sneakers',
        price: '₹1899',
        image: require('../img/PumaSneakers2.png'),
        category: 'Sneakers',
        page:'Footwears',
        description: 'Crafted from premium-quality synthetic material with soft cushioned insoles, these white sneakers combine sporty comfort with modern style. Their durable outsole and versatile design make them ideal for daily wear and active lifestyles.'
      },
      {
        id: 103,
        name: 'Ginger White Platform Sandals',
        price: '₹1999',
        image: require('../img/Sandals1.png'),
        category: 'Sandals',
        page:'Footwears',
        description: 'These stylish platform sandals are made with premium faux leather straps and a comfortable elevated sole for effortless elegance. The lightweight design and soft footbed provide comfort while adding a trendy touch to your outfit.'
      },
      {
        id: 104,
        name: 'Mosac Stylish Wedge Sandals',
        price: '₹1999',
        image: require('../img/Sandals2.png'),
        category: 'Sandals',
        page:'Footwears',
        description: 'Crafted with durable synthetic material and a supportive wedge heel, these sandals offer the perfect balance of comfort and sophistication. The cushioned sole and elegant finish make them suitable for both casual outings and special occasions.'
      },
      {
        id: 105,
        name: 'Gokik Customized Peach Clogs',
        price: '₹2699',
        image: require('../img/Crocs1.png'),
        category: 'Crocs',
        page:'Footwears',
        description: 'Made from lightweight EVA material with a soft cushioned footbed, these customized clogs provide superior comfort and flexibility. Their breathable design and playful peach finish make them ideal for daily wear, travel, and relaxed styling.'
      },
      {
        id: 106,
        name: 'Women Self Design Purple Crocs',
        price: '₹2699',
        image: require('../img/Crocs2.png'),
        category: 'Crocs',
        page:'Footwears',
        description: 'Designed with durable water-resistant material and a comfortable ergonomic fit, these purple crocs ensure all-day ease and support. The stylish self-design pattern adds a trendy and unique touch to your casual footwear collection.'
      },
      {
        id: 107,
        name: 'Marc Loire Women Black Block Heels',
        price: '₹2549',
        image: require('../img/Heels1.png'),
        category: 'Heels',
        page:'Footwears',
        description: 'Crafted from premium faux leather with a stable block heel design, these heels offer elegance without compromising comfort. The soft inner lining and durable sole make them perfect for office wear, parties, and evening outings.'
      },
      {
        id: 108,
        name: 'Elle Women White Heels',
        price: '₹2549',
        image: require('../img/Heels2.png'),
        category: 'Heels',
        page:'Footwears',
        description: 'These chic white heels feature a sleek modern silhouette crafted with high-quality synthetic material for a polished finish. The cushioned insole and sturdy heel provide comfort and confidence for long hours of wear.'
      },
      {
        id: 109,
        name: 'SSS Black Long Boots',
        price: '₹699',
        image: require('../img/Boots1.png'),
        category: 'Boots',
        page:'Footwears',
        description: 'Made with durable faux leather and a sturdy anti-slip sole, these long black boots deliver both style and functionality. Their sleek design and comfortable fit make them the perfect statement footwear for winter and casual fashion looks.'
      },
      {
        id: 110,
        name: 'Ginger Women Matte Black Boots',
        price: '₹699',
        image: require('../img/Boots2.png'),
        category: 'Boots',
        page:'Footwears',
        description: 'Featuring a premium matte finish and durable construction, these boots provide a trendy edgy look with lasting comfort. The soft inner lining and supportive sole make them ideal for everyday wear and seasonal styling.'
      },
      {
        id: 111,
        name: 'IYKYK Black Pointed Toe Flats',
        price: '₹699',
        image: require('../img/Flats1.png'),
        category: 'Flats',
        page:'Footwears',
        description: 'Crafted with soft premium material and a sophisticated pointed-toe design, these flats combine elegance with everyday comfort. The lightweight sole and cushioned footbed make them perfect for office wear, casual outings, and daily styling.'
      },
      {
        id: 112,
        name: 'Tryfeet Floral Printed Flats',
        price: '₹699',
        image: require('../img/Flats2.png'),
        category: 'Flats',
        page:'Footwears',
        description: 'These floral printed flats are designed using breathable fabric and a flexible sole for maximum comfort throughout the day. Their charming floral design and lightweight construction make them a stylish addition to any casual wardrobe.'
      },
      {
        id: 113,
        name: 'Yoho Pink Flip-Flops',
        price: '₹699',
        image: require('../img/Slippers1.png'),
        category: 'Slippers',
        page:'Footwears',
        description: 'Made with soft cushioned EVA material and anti-slip soles, these flip-flops offer lightweight comfort and durability for daily wear. The vibrant pink design adds a fun and stylish touch to your casual and home footwear collection.'
      },
      {
        id: 114,
        name: 'Cute Ribboned Black Slippers',
        price: '₹699',
        image: require('../img/Slippers2.png'),
        category: 'Slippers',
        page:'Footwears',
        description: 'Featuring soft padded straps with adorable ribbon detailing, these black slippers provide both comfort and charm. The lightweight sole and premium finish make them perfect for relaxed indoor wear and casual everyday outings.'
      },

    //Watch
    {
        id: 131,
        name: 'Fastrack Quartz Pink Silicone Watch',
        price: '₹859',
        image: require('../img/Fastrack1.png'),
        category: 'Fastrack',
        page:'Watch',
        description: 'Designed with a soft premium silicone strap and precise quartz movement, this stylish Fastrack watch offers both comfort and reliability for everyday wear. The elegant pink finish and lightweight build make it a trendy accessory for casual and sporty looks.'
      },
      {
        id: 132,
        name: 'Fastrack Women Stainless Steel Bracelet Watch',
        price: '₹1722',
        image: require('../img/Fastrack2.png'),
        category: 'Fastrack',
        page:'Watch',
        description: 'Crafted with a durable stainless steel bracelet and sleek analogue dial, this watch delivers a perfect blend of sophistication and modern style. Its premium finish, comfortable fit, and reliable movement make it ideal for daily wear and special occasions.'
      },
      {
        id: 133,
        name: 'Titan Lagan Pink Dial Metal Strap Watch',
        price: '₹1705',
        image: require('../img/Titan1.png'),
        category: 'Titan',
        page:'Watch',
        description: 'Featuring a graceful pink dial paired with a polished metal strap, this Titan watch combines elegance with everyday durability. The premium craftsmanship and precise analogue movement ensure long-lasting performance with timeless style.'
      },
      {
        id: 134,
        name: 'Titan Pink Gold Analogue Watch',
        price: '₹7108',
        image: require('../img/Titan2.png'),
        category: 'Titan',
        page:'Watch',
        description: 'This luxurious Titan watch is beautifully crafted with a sophisticated pink gold finish and a refined analogue display. Designed for elegance and durability, it offers premium quality, a comfortable fit, and a statement look for every occasion.'
      },
      {
        id: 135,
        name: 'Rolex Pink Watch for Ladies',
        price: '₹2719',
        image: require('../img/Rolex1.png'),
        category: 'Rolex',
        page:'Watch',
        description: 'Inspired by timeless luxury styling, this elegant pink watch features a polished finish and premium-quality strap for a sophisticated feminine appeal. Its stylish dial design and durable construction make it a perfect accessory for parties and daily elegance.'
      },
      {
        id: 136,
        name: 'Rolex Daytona Platinum Watch',
        price: '₹54499',
        image: require('../img/Rolex2.png'),
        category: 'Rolex',
        page:'Watch',
        description: 'Crafted with a premium platinum-inspired finish and precision detailing, this Daytona-style watch exudes luxury and sophistication. The durable construction, elegant chronograph-style dial, and premium-quality materials make it a standout statement timepiece.'
      },
      {
        id: 137,
        name: 'Casio Analog Quartz Strap Watch',
        price: '₹3695',
        image: require('../img/Casio1.png'),
        category: 'Casio',
        page:'Watch',
        description: 'Built with reliable quartz movement and a comfortable premium strap, this Casio watch offers durability, precision, and timeless everyday style. Its lightweight design and elegant analogue display make it suitable for both casual and formal wear.'
      },
      {
        id: 138,
        name: 'Casio Enticer Analog Wrist Watch',
        price: '₹7456',
        image: require('../img/Casio2.png'),
        category: 'Casio',
        page:'Watch',
        description: 'Featuring a sophisticated analogue dial with premium stainless steel detailing, this Casio Enticer watch delivers elegance with dependable performance. The refined craftsmanship and comfortable fit make it a perfect addition to any modern wardrobe.'
      },
      {
        id: 139,
        name: 'Timex Fria Round Analog Watch',
        price: '₹3083',
        image: require('../img/Timex1.png'),
        category: 'Timex',
        page:'Watch',
        description: 'This stylish Timex watch is designed with a sleek round dial and premium strap for a refined everyday look. Its precise analogue movement, lightweight feel, and durable construction make it a practical yet fashionable accessory.'
      },
      {
        id: 140,
        name: 'Timex Celestial Analog Watch',
        price: '₹4721',
        image: require('../img/Timex2.png'),
        category: 'Timex',
        page:'Watch',
        description: 'Crafted with elegant detailing and a premium metallic finish, this Timex Celestial watch offers a graceful blend of sophistication and functionality. The durable build and polished design make it perfect for both office wear and special occasions.'
      },
      {
        id: 141,
        name: 'Sonata Analog Dial Mesh Strap Watch',
        price: '₹1322',
        image: require('../img/Sonata1.png'),
        category: 'Sonata',
        page:'Watch',
        description: 'Designed with a stylish mesh strap and sleek analogue dial, this Sonata watch provides both comfort and elegance for daily wear. The premium-quality finish and lightweight design make it a versatile accessory for every outfit.'
      },
      {
        id: 142,
        name: 'Sonata POZE DROP 4 Analog Watch',
        price: '₹1494',
        image: require('../img/Sonata2.png'),
        category: 'Sonata',
        page:'Watch',
        description: 'This trendy Sonata watch features a modern analogue design with durable construction and a fashionable finish. Crafted for comfort and reliability, it is perfect for adding a stylish touch to casual and contemporary looks.'
      },
      {
        id: 143,
        name: 'Fossil Women Riley Multifunction Watch',
        price: '₹6748',
        image: require('../img/Fossil1.png'),
        category: 'Fossil',
        page:'Watch',
        description: 'Featuring multifunction subdials, sparkling embellishments, and premium stainless steel craftsmanship, this Fossil Riley watch delivers luxury with functionality. Its elegant design and reliable movement make it ideal for sophisticated everyday styling.'
      },
      {
        id: 144,
        name: 'Women Fossil Gold Watch Ring',
        price: '₹11995',
        image: require('../img/Fossil2.png'),
        category: 'Fossil',
        page:'Watch',
        description: 'This unique Fossil watch ring combines elegant jewelry styling with practical timekeeping in a luxurious gold-tone finish. Crafted with premium materials and intricate detailing, it offers a fashionable statement piece for modern women.'
      },
    
    //Women
    {
        id: 61,
        name: 'Berryblush Women White Maxi-Dress',
        price: '₹1899',
        image: require('../img/BerryblushWomenWhiteMaxidress.png'),
        category: 'Maxi-Dress',
        page:'Women',
        description: 'Crafted from soft breathable fabric with a graceful flowy silhouette, this white maxi dress offers elegance and all-day comfort. Its premium stitching, lightweight feel, and flattering fit make it perfect for vacations, brunches, parties, and summer outings.'
      },
      {
        id: 62,
        name: 'RSVP Women Black Midi-Dress',
        price: '₹1999',
        image: require('../img/RSVPWomenBlackMididress.png'),
        category: 'Midi-Dress',
        page:'Women',
        description: 'Designed with premium stretchable fabric and a sleek modern silhouette, this black midi dress delivers timeless sophistication and comfort. The elegant finish and flattering fit make it ideal for dinner dates, office parties, and evening occasions.'
      },
      {
        id: 63,
        name: 'Tivante Women Black Mini-Dress',
        price: '₹2699',
        image: require('../img/TivanteWomenBlackMinidress.png'),
        category: 'Mini-Dress',
        page:'Women',
        description: 'This stylish black mini dress is crafted with high-quality fabric for a smooth, comfortable, and flattering fit. Featuring a trendy silhouette with premium finishing, it is perfect for parties, night outings, and statement fashion looks.'
      },
      {
        id: 64,
        name: 'Tokyo Talkies Women Designer Co-ords Set',
        price: '₹2549',
        image: require('../img/TokyoWomenDesignerCoord.png'),
        category: 'Co-ords',
        page:'Women',
        description: 'Made from premium lightweight fabric with a modern coordinated design, this stylish co-ords set offers effortless fashion and comfort. Its trendy fit and elegant detailing make it a perfect choice for casual outings, travel, and chic everyday styling.'
      },
      {
        id: 65,
        name: 'Magenta Women Ethnic Dress',
        price: '₹699',
        image: require('../img/MagentaWomenEthnicdress.png'),
        category: 'Ethnic-Dress',
        page:'Women',
        description: 'Beautifully crafted with soft breathable fabric and elegant ethnic detailing, this dress combines traditional charm with modern comfort. The vibrant color and premium-quality stitching make it ideal for festive occasions, family gatherings, and cultural events.'
      },
      {
        id: 66,
        name: 'Rain&Rainbow Women Printed Kurti',
        price: '₹699',
        image: require('../img/RainWomenPrintedKurti.png'),
        category: 'Kurtis',
        page:'Women',
        description: 'Designed with lightweight breathable fabric and attractive printed patterns, this kurti offers both comfort and elegance for daily wear. Its relaxed fit and premium stitching make it a versatile addition to casual and ethnic wardrobes.'
      },
      {
        id: 67,
        name: 'Corsica Women Maroon Top',
        price: '₹699',
        image: require('../img/CorsicaWomenMaroonTops.png'),
        category: 'Tops',
        page:'Women',
        description: 'Crafted from soft premium fabric with a stylish modern fit, this maroon top delivers both comfort and effortless elegance. The rich color and versatile design make it easy to pair with jeans, skirts, and trousers for multiple fashionable looks.'
      },
      {
        id: 68,
        name: 'Kraus Women Brown Highrise Pants',
        price: '₹699',
        image: require('../img/KrausWomenBrownHighrisePant.png'),
        category: 'Pants',
        page:'Women',
        description: 'These high-rise pants are made with durable stretchable fabric for a comfortable and flattering fit throughout the day. Featuring premium stitching and a sleek tailored silhouette, they are perfect for office wear, casual outings, and everyday styling.'
      },
      {
        id: 69,
        name: 'Yashika Women Designer Pink Saree',
        price: '₹699',
        image: require('../img/YashikaWomenSaree.png'),
        category: 'Saree',
        page:'Women',
        description: 'Elegantly designed with soft flowing fabric and intricate detailing, this pink saree offers a graceful and luxurious appearance. Its lightweight texture, vibrant color, and premium-quality finish make it perfect for weddings, festive occasions, and celebrations.'
      },

  
  ];
  
  export default allProducts;