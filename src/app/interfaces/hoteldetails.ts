export interface Hoteldetails {
    id: number,
    name: string,
    address: string,
    city: string,
    featuredImage: string,
    rooms: [
        {
            id: number,
            name: string,
            hotelId: number,
            roomTypeId: number,
            pricePerNight: number,
            available: boolean,
            maximumGuests: number,
            bookedDates: [
                {
                    id: number,
                    date: string,
                    roomId: number
                }
            ],
            images: [
                {
                    id: number,
                    source: string,
                    roomId: number
                }
            ]
        }
    ]
}
