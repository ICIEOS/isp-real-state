import React from 'react'; 

// Banner One
import BannerImg from '../../../public/assets/images/thumbs/banner-img.png'; 
export const bannerContent = {
    subtitle: 'FinTech Fusion',
    title: 'Start Your Journey to Your Dream Home Today',
    gradientTitle: 'Dream Home',
    desc: "Unlock the Potential of Real Estate and Transform Your Dreams into Reality. Whether you're buying your first home or investing in property, we are here to guide you every step of the way. Make your real estate goals a reality with the right support and resources.",
    thumb: BannerImg
}

// Filter Tabs
export const filterTabs = [
    {
        id: 1,
        text: 'Rent'
    },
    {
        id: 2,
        text: 'Buy'
    },
    {
        id: 3,
        text: 'Sell'
    },
]
  

// About One Content
export const aboutStatistics = {
    icon: <i className="fas fa-users text-gradient"></i>,
    number: '4000+',
    text: 'Satisfied Clients'
}
import aboutContentThumb from '../../../public/assets/images/thumbs/about-img.png'; 
import aboutContentIcon from '../../../public/assets/images/icons/about-icon.svg'; 
export const aboutContent = {
    thumb: aboutContentThumb,
    icon: aboutContentIcon,
    title: 'Your Dream Home Awaits',
    desc: "We specialize in providing seamless real estate experiences, helping you find the perfect property. Whether you're looking to buy, sell, or rent, we offer a wide range of residential, commercial, and industrial properties."
}


// Property Data 
import propertyThumb1 from '../../../public/assets/images/thumbs/property-1.png'; 
import propertyThumb2 from '../../../public/assets/images/thumbs/property-2.png'; 
import propertyThumb3 from '../../../public/assets/images/thumbs/property-3.png'; 
import propertyThumb4 from '../../../public/assets/images/thumbs/property-4.png'; 
import propertyThumb5 from '../../../public/assets/images/thumbs/property-5.png'; 
import propertyThumb6 from '../../../public/assets/images/thumbs/property-6.png'; 
import propertyThumb7 from '../../../public/assets/images/thumbs/property-7.png'; 
import propertyThumb8 from '../../../public/assets/images/thumbs/property-8.png'; 
import propertyThumb9 from '../../../public/assets/images/thumbs/property-9.png'; 
import propertyThumb10 from '../../../public/assets/images/thumbs/property-10.png'; 
import propertyThumb11 from '../../../public/assets/images/thumbs/property-11.png'; 
import propertyThumb12 from '../../../public/assets/images/thumbs/property-12.png'; 
export const properties = [
    {
        id: 1,
        thumb: propertyThumb1,
        price: '$300.00',
        day: '/per day',
        title: 'Modern Elegance in the Heart of the City',
        desc: 'A perfect blend of contemporary design and luxurious comfort. This stunning residence offers spacious interiors, sleek architecture, and a sophisticated lifestyle.',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        location: '66 Broklyant, New York America',
        amenities: [
            {
                icon: <i className="fas fa-bed"></i>,
                text: '2 Beds',
            },
            {
                icon: <i className="fas fa-bath"></i>,
                text: ' 1 Baths ',
            }
        ],
        btnText: 'Book Now',
        dataSort: 'Newest',
        dataStatuses: 'Sell',
        dataTypes: 'Houses',
        dataLocations: "Bangladesh",
    },
    {
        id: 2,
        thumb: propertyThumb2,
        price: '$450.00',
        day: '/per day',
        title: 'Minimalist Masterpiece with Panoramic Views',
        desc: 'Experience the beauty of simplicity with this architecturally designed home, featuring clean lines, floor-to-ceiling windows, and breathtaking natural surroundings.',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        location: '66 Broklyant, New York America',
        amenities: [
            {
                icon: <i className="fas fa-bed"></i>,
                text: '4 Beds',
            },
            {
                icon: <i className="fas fa-bath"></i>,
                text: ' 2 Baths ',
            }
        ],
        btnText: 'Book Now',
        dataSort: 'Best Seller',
        dataStatuses: 'Buy',
        dataTypes: 'Apartments',
        dataLocations: "Japan",
    },
    {
        id: 3,
        thumb: propertyThumb3,
        price: '$500.00',
        day: '/per day',
        title: 'Urban Luxury Meets Contemporary Charm',
        desc: 'This stylish, modern home is crafted for those who appreciate high-end finishes, open-plan living, and a seamless indoor-outdoor experience.',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        location: '66 Broklyant, New York America',
        amenities: [
            {
                icon: <i className="fas fa-bed"></i>,
                text: '4 Beds',
            },
            {
                icon: <i className="fas fa-bath"></i>,
                text: ' 3 Baths ',
            }
        ],
        btnText: 'Book Now',
        dataSort: 'Best Match',
        dataStatuses: 'Rent',
        dataTypes: 'Office',
        dataLocations: "Korea",
    },
    {
        id: 4,
        thumb: propertyThumb4,
        price: '$600.00',
        day: '/per day',
        title: 'Resort-Style Living with a Private Pool',
        desc: 'Enjoy the ultimate retreat with this breathtaking property, complete with an expansive poolside lounge, sleek interiors, and unmatched tranquility.',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        location: '66 Broklyant, New York America',
        amenities: [
            {
                icon: <i className="fas fa-bed"></i>,
                text: '5 Beds',
            },
            {
                icon: <i className="fas fa-bath"></i>,
                text: ' 4 Baths ',
            }
        ],
        btnText: 'Book Now',
        dataSort: 'Low Price',
        dataStatuses: 'Sell',
        dataTypes: 'Villa',
        dataLocations: "Singapore",
    },
    {
        id: 5,
        thumb: propertyThumb5,
        price: '$650.00',
        day: '/per day',
        title: 'Nature-Inspired Architectural Beauty',
        desc: 'Set amidst lush greenery, this home offers a perfect balance of modern design and natural elements, creating a peaceful sanctuary for you and your family.',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        location: '66 Broklyant, New York America',
        amenities: [
            {
                icon: <i className="fas fa-bed"></i>,
                text: '6 Beds',
            },
            {
                icon: <i className="fas fa-bath"></i>,
                text: ' 4 Baths ',
            }
        ],
        btnText: 'Book Now',
        dataSort: 'High Price',
        dataStatuses: 'Buy',
        dataTypes: 'Houses',
        dataLocations: "Germany",
    },
    {
        id: 6,
        thumb: propertyThumb6,
        price: '$700.00',
        day: '/per day',
        title: 'Seaside Serenity with Unparalleled Views',
        desc: 'Wake up to mesmerizing oceanfront scenery in this luxurious coastal property, designed to blend seamlessly with its stunning surroundings.',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        location: '66 Broklyant, New York America',
        amenities: [
            {
                icon: <i className="fas fa-bed"></i>,
                text: '7 Beds',
            },
            {
                icon: <i className="fas fa-bath"></i>,
                text: ' 3 Baths ',
            }
        ],
        btnText: 'Book Now',
        dataSort: 'Medium Price',
        dataStatuses: 'Rent',
        dataTypes: 'Apartments',
        dataLocations: "Thailand",
    },
    {
        id: 7,
        thumb: propertyThumb7,
        price: '$350.00',
        day: '/per day',
        title: 'Guiding You Home with Experience',
        desc: 'Real Estate is a vast industry that deals with the buying, selling, and renting of properties. It inv transactions related to residential, commercial, and industrial properties. Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo, posuere lobor mattis fmentum ullam',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        location: '66 Broklyant, New York America',
        amenities: [
            {
                icon: <i className="fas fa-bed"></i>,
                text: '7 Beds',
            },
            {
                icon: <i className="fas fa-bath"></i>,
                text: ' 3 Baths ',
            }
        ],
        btnText: 'Book Now',
        dataSort: 'Best Seller',
        dataStatuses: 'Sell',
        dataTypes: 'Office',
        dataLocations: "Bangladesh",
    },
    {
        id: 8,
        thumb: propertyThumb8,
        price: '$530.00',
        day: '/per day',
        title: 'A Tradition of Trust in Real Estate ',
        desc: 'Real Estate is a vast industry that deals with the buying, selling, and renting of properties. It inv transactions related to residential, commercial, and industrial properties. Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo, posuere lobor mattis fmentum ullam',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        location: '66 Broklyant, New York America',
        amenities: [
            {
                icon: <i className="fas fa-bed"></i>,
                text: '7 Beds',
            },
            {
                icon: <i className="fas fa-bath"></i>,
                text: ' 3 Baths ',
            }
        ],
        btnText: 'Book Now',
        dataSort: 'Best Match',
        dataStatuses: 'Buy',
        dataTypes: 'Villa',
        dataLocations: "Japan",
    },
    {
        id: 9,
        thumb: propertyThumb9,
        price: '$560.00',
        day: '/per day',
        title: 'Target Audience and Reflect the Values',
        desc: 'Real Estate is a vast industry that deals with the buying, selling, and renting of properties. It inv transactions related to residential, commercial, and industrial properties. Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo, posuere lobor mattis fmentum ullam',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        location: '66 Broklyant, New York America',
        amenities: [
            {
                icon: <i className="fas fa-bed"></i>,
                text: '7 Beds',
            },
            {
                icon: <i className="fas fa-bath"></i>,
                text: ' 3 Baths ',
            }
        ],
        btnText: 'Book Now',
        dataSort: 'Low Price',
        dataStatuses: 'Rent',
        dataTypes: 'Houses',
        dataLocations: "Korea",
    },
    {
        id: 10,
        thumb: propertyThumb10,
        price: '$680.00',
        day: '/per day',
        title: 'Making House Hunting an Adventure ',
        desc: 'Real Estate is a vast industry that deals with the buying, selling, and renting of properties. It inv transactions related to residential, commercial, and industrial properties. Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo, posuere lobor mattis fmentum ullam',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        location: '66 Broklyant, New York America',
        amenities: [
            {
                icon: <i className="fas fa-bed"></i>,
                text: '7 Beds',
            },
            {
                icon: <i className="fas fa-bath"></i>,
                text: ' 3 Baths ',
            }
        ],
        btnText: 'Book Now',
        dataSort: 'High Price',
        dataStatuses: 'Sell',
        dataTypes: 'Apartments',
        dataLocations: "Singapore",
    },
    {
        id: 11,
        thumb: propertyThumb11,
        price: '$580.00',
        day: '/per day',
        title: 'Opening New Doors to Your Future ',
        desc: 'Real Estate is a vast industry that deals with the buying, selling, and renting of properties. It inv transactions related to residential, commercial, and industrial properties. Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo, posuere lobor mattis fmentum ullam',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        location: '66 Broklyant, New York America',
        amenities: [
            {
                icon: <i className="fas fa-bed"></i>,
                text: '7 Beds',
            },
            {
                icon: <i className="fas fa-bath"></i>,
                text: ' 3 Baths ',
            }
        ],
        btnText: 'Book Now',
        dataSort: 'Newest',
        dataStatuses: 'Buy',
        dataTypes: 'Office',
        dataLocations: "Germany",
    },
    {
        id: 12,
        thumb: propertyThumb12,
        price: '$563.00',
        day: '/per day',
        title: 'Your Journey to Home Starts Here ',
        desc: 'Real Estate is a vast industry that deals with the buying, selling, and renting of properties. It inv transactions related to residential, commercial, and industrial properties. Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo, posuere lobor mattis fmentum ullam',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        location: '66 Broklyant, New York America',
        amenities: [
            {
                icon: <i className="fas fa-bed"></i>,
                text: '7 Beds',
            },
            {
                icon: <i className="fas fa-bath"></i>,
                text: ' 3 Baths ',
            }
        ],
        btnText: 'Book Now',
        dataSort: 'Best Seller',    
        dataStatuses: 'Rent',
        dataTypes: 'Villa',
        dataLocations: "Thailand",
    },
]


// Property Type Data
import propertyTypeIcon1 from '../../../public/assets/images/icons/property-type-icon1.svg';
import propertyTypeIcon2 from '../../../public/assets/images/icons/property-type-icon2.svg';
import propertyTypeIcon3 from '../../../public/assets/images/icons/property-type-icon3.svg';
export const propertyTypes = [ 
    {
        icon: propertyTypeIcon1,
        title: 'Expert Guidance & Market Insights',
        desc: 'Our team of experienced professionals provides in-depth market analysis, expert advice, and personalized support to help you make informed real estate decisions.'
    },
    {
        icon: propertyTypeIcon2,
        title: 'Wide Range of Properties',
        desc: "Whether you're looking for a cozy home, a commercial space, or an investment opportunity, we offer a diverse selection of properties to match your needs and budget."
    },
    {
        icon: propertyTypeIcon3,
        title: 'Seamless & Hassle-Free Process',
        desc: 'From property search to final paperwork, we handle every step with transparency and efficiency, ensuring a smooth and stress-free experience.'
    },
]


// CountUp Data
export const counts = [ 
    {
        number: '200',
        text: 'HAPPY PATIENTS'
    },
    {
        number: '20',
        text: 'SAVED HEARTS '
    },
    {
        number: '10k',
        text: 'EXPERT DOCTORS'
    },
    {
        number: '900',
        text: 'SERENITY WORK '
    },
]


// portfolio  Data
import portfolioThumb1 from '../../../public/assets/images/thumbs/portfolio1.png'; 
import portfolioThumb2 from '../../../public/assets/images/thumbs/portfolio2.png'; 
import portfolioThumb3 from '../../../public/assets/images/thumbs/portfolio3.png'; 
import portfolioThumb4 from '../../../public/assets/images/thumbs/portfolio4.png'; 
export const portfolios = [
    {
        thumb: portfolioThumb1,
        title: 'Outsourcing business',
        desc: 'Real Estate is a vast industry that deals with the buying, selling, and renting of properties',
        btnIcon: <i className="fas fa-arrow-right"></i>
    },
    {
        thumb: portfolioThumb2,
        title: 'Outsourcing business',
        desc: 'Real Estate is a vast industry that deals with the buying, selling, and renting of properties',
        btnIcon: <i className="fas fa-arrow-right"></i>
    },
    {
        thumb: portfolioThumb3,
        title: 'Outsourcing business',
        desc: 'Real Estate is a vast industry that deals with the buying, selling, and renting of properties',
        btnIcon: <i className="fas fa-arrow-right"></i>
    },
    {
        thumb: portfolioThumb4,
        title: 'Outsourcing business',
        desc: 'Real Estate is a vast industry that deals with the buying, selling, and renting of properties',
        btnIcon: <i className="fas fa-arrow-right"></i>
    },
]


// Testimonial Data
import quoteIcon from '../../../public/assets/images/icons/quote.svg';
export const testimonials = [
    {
        name: 'Emma R',
        designation: 'A Seamless Home-Buying Experience!',
        desc: 'From start to finish, the team made my home-buying journey effortless. Their expertise, attention to detail, and dedication helped me find my dream home. Highly recommended!', 
        quote: quoteIcon
    },
    {
        name: 'James M',
        designation: 'Professional and Trustworthy Service!',
        desc: 'I was looking for a reliable property management company, and Prestige Property Management exceeded my expectations. They handled everything with transparency and professionalism!', 
        quote: quoteIcon
    },
    {
        name: 'Sophia L',
        designation: 'Found My Perfect Investment Property!',
        desc: 'Thanks to their market knowledge and expert advice, I made a smart investment in real estate. Their team guided me every step of the way!', 
        quote: quoteIcon
    },
    {
        name: 'Michael T',
        designation: 'Luxury, Comfort, and Convenience!',
        desc: 'The selection of properties was outstanding! They truly understand what clients are looking for. My new home is everything I dreamed of!', 
        quote: quoteIcon
    },
]

// Blog Data
import blogThumb1 from '../../../public/assets/images/thumbs/blog1.png'; 
import blogThumb2 from '../../../public/assets/images/thumbs/blog2.png'; 
import blogThumb3 from '../../../public/assets/images/thumbs/blog3.png'; 
import blogThumb4 from '../../../public/assets/images/thumbs/property-4.png'; 
import blogThumb5 from '../../../public/assets/images/thumbs/property-5.png'; 
import blogThumb6 from '../../../public/assets/images/thumbs/property-6.png'; 

export const blogs = [
    {
        id: 1,
        thumb: blogThumb1,
        admin: 'Stanio Lainto',
        meta: [
            {
                icon: <i className="fas fa-user"></i>,
                text: ' By admin'
            },
            {
                icon: <i className="fas fa-comments"></i>,
                text: 'Comments (30)'
            },
        ],
        title: 'Luxury Living Redefined',
        desc: 'Experience sophistication and comfort in this breathtaking modern villa. Featuring stunning architecture, expansive living spaces, and a private pool, this home is designed for those who seek elegance and relaxation.',
        linkText: 'Read More',
    },
    {
        id: 2,
        thumb: blogThumb2,
        date: '28 Mar',
        admin: 'John Doe',
        meta: [
            {
                icon: <i className="fas fa-user"></i>,
                text: ' By admin'
            },
            {
                icon: <i className="fas fa-comments"></i>,
                text: 'Comments (50)'
            },
        ],
        title: 'Contemporary Elegance in Nature’s Embrace',
        desc: 'Nestled in a lush green environment, this stylish home offers a perfect blend of modern design and natural beauty. Spacious balconies, open floor plans, and premium finishes create an inviting atmosphere.',
        linkText: 'Read More',
    },
    {
        id: 3,
        thumb: blogThumb3,
        admin: 'Rakibul Islam',
        meta: [
            {
                icon: <i className="fas fa-user"></i>,
                text: ' By admin'
            },
            {
                icon: <i className="fas fa-comments"></i>,
                text: 'Comments (10)'
            },
        ],
        title: 'A Modern Masterpiece for Urban Living',
        desc: 'Discover a stunning blend of luxury and convenience with this sleek contemporary residence. Designed for city dwellers who crave style and functionality, this property is a perfect fit for modern lifestyles.',
        linkText: 'Read More',
    },
    {
        id: 4,
        thumb: blogThumb4,
        admin: 'Alex',
        meta: [
            {
                icon: <i className="fas fa-user"></i>,
                text: ' By admin'
            },
            {
                icon: <i className="fas fa-comments"></i>,
                text: 'Comments (10)'
            },
        ],
        title: 'Experience the Best in Real Estate Services',
        desc: 'Real estate is a lucrative industry that involves the buying, selling, and renting of properties. It encompasses residential, commercial, and industrial properties. Real estate agents play a crucial role in facilitating transactions and helping.',
        linkText: 'Read More',
    },
    {
        id: 5,
        thumb: blogThumb5,
        admin: 'Jenon Doe',
        meta: [
            {
                icon: <i className="fas fa-user"></i>,
                text: ' By admin'
            },
            {
                icon: <i className="fas fa-comments"></i>,
                text: 'Comments (10)'
            },
        ],
        title: 'Let Us Find the Perfect Property for You: Elite Realty Services',
        desc: 'Real estate is a lucrative industry that involves the buying, selling, and renting of properties. It encompasses residential, commercial, and industrial properties. Real estate agents play a crucial role in facilitating transactions and helping.',
        linkText: 'Read More',
    },
    {
        id: 6,
        thumb: blogThumb6,
        admin: 'Akramul Hoq',
        meta: [
            {
                icon: <i className="fas fa-user"></i>,
                text: ' By admin'
            },
            {
                icon: <i className="fas fa-comments"></i>,
                text: 'Comments (10)'
            },
        ],
        title: 'Investing in Real Estate Made Easy: The Door to Your New Home',
        desc: 'Real estate is a lucrative industry that involves the buying, selling, and renting of properties. It encompasses residential, commercial, and industrial properties. Real estate agents play a crucial role in facilitating transactions and helping.',
        linkText: 'Read More',
    },
]

