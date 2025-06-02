export type createBookingDto = {
    userId : number
    theaterId : number
    movieId : number 
    idempotencyKey : string
    bookingStatus : "pending" | "cancel" | "confirm"
    notificationSent : boolean
}