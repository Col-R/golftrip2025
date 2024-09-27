export interface Course {
    id: number;
    name: string
    image: string;
    price: number;
    description: string;
    reservationInfo: string;
    awesomeLevel: number;
    website: string;
    
}

export const courses: Course[] = [
    {
        id: 1,
        name: "Payne's Valley",
        image: 'https://bigcedar.com/wp-content/uploads/2020/10/Paynes-Valley-19th-hole.jpg',
        price: 215,
        description: "Payne's Valley, the 19TH Wonder of the World™, is an homage to Ozarks-native and World Golf Hall of Fame member, Payne Stewart. It is the first public-access golf course designed by 82-time PGA TOUR winner, Tiger Woods and his golf course design firm, TGR Design.",
        reservationInfo: 'Bookable 30 days in advance. Discounted rates available for resort guests of Big Cedar Lodge.',
        awesomeLevel: 10,
        website: 'https://bigcedar.com/golf/paynes-valley-course/'
    },
    {
        id: 5,
        name: "Ozarks National",
        image: 'https://bigcedar.com/wp-content/uploads/2019/03/ozarks-national-header.jpg',
        price: 165,
        description: "Among the world-class courses that Big Cedar Lodge offers, is Ozarks National, Missouri's first and only golf course designed by architect duo, Bill Coore and Ben Crenshaw. Measuring 7,036 yards from the back tees, this 18-hole course represents all of what the Ozarks terrain has to show.",
        reservationInfo: 'Bookable 30 days in advance. Discounted rates available for resort guests of Big Cedar Lodge.',
        awesomeLevel: 10,
        website: 'https://bigcedar.com/golf/ozarks-national-course/'
    },
    {
        id: 2,
        name: "Ledgestone",
        image: 'https://images.squarespace-cdn.com/content/v1/54db9e03e4b030e420e8bbc0/1540309892375-I5WNIHF8B6LB5QP9PSSD/BGA_LS_Hole15Tee+copy.jpg',
        price: 69,
        description: "A combination of strategy and consideration for natural design, this dramatic Tom Clark layout features distinct elevation changes that require accurate shot shaping and distance control.",
        reservationInfo: 'Bookable 30 days in advance.',
        awesomeLevel: 8,
        website: 'https://www.ledgestonegolf.com/'
    },
    {
        id: 3,
        name: "Buffalo Ridge",
        image: 'https://bigcedar.com/wp-content/uploads/2019/03/buffalo-ridge-springs-golf-course-hole-2.jpg',
        price: 165,
        description: "Praised as a top golf course in the region, the 18-hole championship course showcases the charm of the Ozarks with rich native grasses, natural rock formations, caves and creeks, lakes and waterfalls and free-ranging North American bison from nearby Dogwood Canyon Nature Park.",
        reservationInfo: 'Bookable 30 days in advance. Discounted rates available for resort guests of Big Cedar Lodge.',
        awesomeLevel: 9,
        website: 'https://bigcedar.com/golf/buffalo-ridge-springs-course/'
    },
    {
        id: 4,
        name: "Thousand Hills",
        image: 'https://www.golfbranson.com/wp-content/uploads/2015/05/Branson-Mo-Golf-Course-Resort-Thousand-Hills-Par-Three.jpg',
        price: 50,
        description: "The golf course at the Thousand Hills Golf Resort in Branson, Missouri is known far and wide as the most popular golf resort in town for good reason.  As your golf journey takes you through beautiful hardwood forests, past unique rock formations, and over Ozark streams you would never guess that you were within a long iron from the 76 strip and Branson's world-famous live music shows.",
        reservationInfo: 'Bookable 30 days in advance.',
        awesomeLevel: 7,
        website: 'https://www.thousandhills.com/branson-golf/'
    },


];

export interface Hotel {
    id: number;
    name: string;
    thoughts?: string;
    image: string;
    price: number;
    address: string;
    rating: number;
    link: string;
}

export const hotels: Hotel[] = [
    {
        id: 1,
        name: 'Hyatt Vacation Club at the Lodges',
        thoughts: "This would probably be my choice. We can get a 2 Bedroom Villa with Kitchen, Living Room, 2 Bed, and 1 sofa bed for a good price. We'll each have our own space and plenty of room to chill.",
        image: 'https://th.bing.com/th/id/OIP.2_JCEzVdx__bKO0Vjc3uWgAAAA?rs=1&pid=ImgDetMain',
        price: 200,
        address: '147 Welk Resort Circle, Branson, MO',
        rating: 4,
        link: 'https://www.hyatt.com/en-US/hotel/missouri/hyatt-vacation-club-at-the-lodges-at-timber-ridge/sgfsl'
    },
    {
        id: 2,
        name: 'Big Cedar Lodge',
        thoughts: "This is definitely the priciest option, but it's also right next to like 5 golf courses. 2 bedroom with kitchenette and a sleeper sofa. Luxurious, convenient. Go for this if we want to ball out a bit.",
        image: 'https://res.cloudinary.com/resortsandlodges/image/fetch/w_800,h_520,c_fill/https://media.travelnetsolutions.com/1e5d2c1592e6a237d3639ef10dffc2a2/original.jpg',
        price: 500,
        address: '190 Top Of The Rock Rd, Ridgedale, MO 65739',
        rating: 5,
        link: 'https://bigcedar.com/'
    },
    {
        id: 3,
        name: 'Still Waters Resort',
        thoughts: "This is a decent option, but it's a bit further from the golf courses. 3 bedroom with a jacuzzi that could come in clutch after a long day on the course.",
        image: 'https://images.trvl-media.com/hotels/1000000/430000/425400/425339/74e518d1_z.jpg',
        price: 225,
        address: '21 Stillwater, Branson, MO',
        rating: 3,
        link: 'https://www.stillwatersresort.com/'
    },

    {
        id: 4,
        name: 'Club Wyndham Branson at The Meadows',
        thoughts: 'I fuck with this one heavily. Definitely a no-frills thing, 2 bedroom condo with a sleeper sofa. About 20 mins from the golf course. Excellent price for what you get, and Wyndham is legit. Kai and I stayed at one just like this in Myrtle and it was pimp.',
        image: 'https://clubwyndham.wyndhamdestinations.com/content/dam/wyndham/wyndham-vacation-clubs/resorts/cw-branson-meadows/standard/002-branson-meadows-gallery-standard-overview.jpg',
        price: 141,
        address: '110 Willow Bend Dr, Branson, MO',
        rating: 3.5,
        link: 'https://clubwyndham.wyndhamdestinations.com/us/en/resorts/wyndham-hotels-resorts/united-states-of-america/missouri/branson/club-wyndham-branson-at-the-meadows?msockid=36c2c07235fc6a043b01cdef34546be9'
    },

];

export interface DateSpan {
    startDate: string;
    endDate: string;
}



export interface Dates {
    id: number;
    dateSpan: DateSpan;
}

export const dates: Dates[] = [
    {
        id: 1,
        dateSpan: {
            startDate: '2025-06-01',
            endDate: '2025-06-10'
        },

    },
    {
        id: 2,
        dateSpan: {
            startDate: '2025-07-01',
            endDate: '2025-07-15'
        },

    },
    {
        id: 3,
        dateSpan: {
            startDate: '2025-08-01',
            endDate: '2025-08-10'
        },
    }
];

export interface Car {
    id: number;
    type: string;
    make: string;
    model: string;
    price: number;
    image: string;
}

export const cars: Car[] = [
    {
        id: 1,
        type: 'Compact SUV',
        make: 'Hyundai',
        model: 'Kona',
        price: 92,
        image: 'https://assets.gcs.ehi.com/content/national/data/vehicle/bookingCountries/US/SUVS/CFAR.doi.132.high.imageSmallSideProfileNodePath.png/1722271304686.png'
    },
    {
        id: 2,
        type: 'Minivan',
        make: 'Chrysler',
        model: 'Pacifica',
        price: 82,
        image: 'https://assets.gcs.ehi.com/content/national/data/vehicle/bookingCountries/US/VANS/MVAR.doi.132.high.imageSmallSideProfileNodePath.png/1618263096675.png'
    },
    {
        id: 3,
        type: 'Standard SUV',
        make: 'Chevrolet',
        model: 'Equinox',
        price: 94.50,
        image: 'https://assets.gcs.ehi.com/content/national/data/vehicle/bookingCountries/US/SUVS/SFAR.doi.132.high.imageSmallSideProfileNodePath.png/1722271524866.png'
    },
    {
        id: 4,
        type: 'Midsize SUV',
        make: 'Nissan ',
        model: 'Rogue',
        price: 95,
        image: 'https://assets.gcs.ehi.com/content/national/data/vehicle/bookingCountries/US/SUVS/IFAR.doi.132.high.imageSmallSideProfileNodePath.png/1714578511986.png'
    },
    {
        id: 5,
        type: 'Pickup',
        make: 'Ford ',
        model: 'F-150',
        price: 85,
        image: 'https://assets.gcs.ehi.com/content/national/data/vehicle/bookingCountries/US/TRUCKS/PPBR.doi.132.high.imageSmallSideProfileNodePath.png/1714590520061.png'
    },
];


