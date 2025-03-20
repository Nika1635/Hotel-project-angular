export interface Carddetails {
    id: number
    name: string,
    hotelId: number,
    pricePerNight: number,
    available: boolean,
    maximumGuests: number,
    roomTypeId: number,
    bookedDates: [
        {
            id: number,
            date: string,
            roomId: number
        }
    ],
    images: [
        {
            id: number
            source: string,
            roomId: number
        }
    ]
}
