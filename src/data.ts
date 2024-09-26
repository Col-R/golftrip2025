export interface Course {
    id: number;
    name: string
    image: string;
    price: number;
    description: string;
    reservationInfo: string;
    awesomeLevel: number;
    address: string;
}

export const courses: Course[] = [
    {
        id: 1,
        name: "Payne's Valley",
        image: 'https://placehold.co/400x200',
        price: 215,
        description: "Payne's Valley, the 19TH Wonder of the World™, is an homage to Ozarks-native and World Golf Hall of Fame member, Payne Stewart. It is the first public-access golf course designed by 82-time PGA TOUR winner, Tiger Woods and his golf course design firm, TGR Design.",
        reservationInfo: 'Bookable 30 days in advance. Discounted rates available for resort guests.',
        awesomeLevel: 10,
        address: '123 Main St, City, Country'
    },
    {
        id: 2,
        name: 'Ozarks National',
        image: 'image2.jpg',
        price: 165,
        description: 'sick ass course',
        reservationInfo: 'Bookable 30 days in advance. Discounted rates available for resort guests.',
        awesomeLevel: 8,
        address: '456 Elm St, City, Country'
    },
    {
        id: 3,
        name: 'Course 3',
        image: 'image3.jpg',
        price: 200,
        description: 'sick ass course',
        reservationInfo: 'Available',
        awesomeLevel: 10,
        address: '789 Oak St, City, Country'
    },
    {
        id: 4,
        name: 'Course 3',
        image: 'image3.jpg',
        price: 200,
        description: 'sick ass course',
        reservationInfo: 'Available',
        awesomeLevel: 10,
        address: '789 Oak St, City, Country'
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


