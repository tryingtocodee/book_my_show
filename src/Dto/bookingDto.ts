export type createBookingDto = {
    userId : number
    theaterId : number
    movieId : number 
    idempotencyKey : string
}