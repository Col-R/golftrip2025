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
    price: number;
    address: string;
    link: string;
}

export const hotels: Hotel[] = [
    {
        id: 1,
        name: 'Hotel Sunshine',
        price: 120,
        address: '321 Beach Rd, City, Country',
        link: 'http://hotelsunshine.com'
    },
    {
        id: 2,
        name: 'Mountain Retreat',
        price: 180,
        address: '654 Hill St, City, Country',
        link: 'http://mountainretreat.com'
    },
    {
        id: 3,
        name: 'City Central Hotel',
        price: 200,
        address: '987 Downtown Ave, City, Country',
        link: 'http://citycentralhotel.com'
    }
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
    price: number;
    image: string;
}

export const cars: Car[] = [
    {
        id: 1,
        type: 'SUV',
        price: 30000,
        image: 'suv.jpg'
    },
    {
        id: 2,
        type: 'Sedan',
        price: 25000,
        image: 'sedan.jpg'
    },
    {
        id: 3,
        type: 'Convertible',
        price: 45000,
        image: 'convertible.jpg'
    }
];


