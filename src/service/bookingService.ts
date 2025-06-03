import { createBookingDto } from "../Dto/bookingDto";
import { v4 as uuidv4 } from "uuid"
import { confirmBookingRepo, createBookingRepo, getBookingByIdRepo, getIdempotencyKeyWithLockRepo } from "../repository/bookingRepo";
import sequelize from "../db/model/sequelize";


export async function createBookingService(bookingData: createBookingDto) {

    const booking = await createBookingRepo(bookingData)

    return booking
}


export async function confirmBookingService(id: number) {
    const t = await sequelize.transaction()
    try {

        const booking = await getBookingByIdRepo(id)

        if (!booking) {
            throw new Error("failed to get booking by id")
        }

        if (booking.bookingStatus == "confirm") {
           throw new Error("Booking is already confirmed")
        }

        const idempotency = await getIdempotencyKeyWithLockRepo(t, booking.idempotencyKey)

        if (!idempotency) {
            throw new Error("failed to get idempotency key ")
        }

        const confirmBooking = await confirmBookingRepo(id, t)

        if (!confirmBooking) {
            throw new Error("failed to confirm booking")
        }

        await t.commit()

        return confirmBooking

    } catch (e: any) {
        await t.rollback()
        console.log("error in confirm booking repo", e.message)
        throw e
    }

}