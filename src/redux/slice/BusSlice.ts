import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface BusDetails {
  seat: number
  status: 'open' | 'booked'
  bookingDetails?: {
    firstName: string
    lastName: string
    email: string
    bookingTime?: Date | string
  }
}
export interface BusState {
  busesDetails: {
    busId: number
    capacity: number
    booked: number
    reserved: number
    open: number
  }[]
  busSeatDetails: BusDetails[]
}

const generateBusSeatDetails = (capacity: number): BusDetails[] => {
  const busSeatDetails: BusDetails[] = []
  for (let seat = 1; seat <= capacity; seat++) {
    busSeatDetails.push({ seat, status: 'open' })
  }
  return busSeatDetails
}

const initialState: BusState = {
  busesDetails: [
    { busId: 1, capacity: 40, booked: 10, reserved: 2, open: 28 },
  ],
  busSeatDetails: generateBusSeatDetails(40),
}

const busSlice = createSlice({
  name: 'bus',
  initialState,
  reducers: {
    bookSeat(
      state,
      action: PayloadAction<{
        seat: number
        bookingDetails: {
          firstName: string
          lastName: string
          email: string
          bookingTime?: Date
        }
      }>
    ) {
      const { seat, bookingDetails } = action.payload
      const seatIndex = state.busSeatDetails.findIndex(
        (item) => item.seat === seat
      )
      if (seatIndex !== -1) {
        state.busSeatDetails[seatIndex].status = 'booked'
        state.busSeatDetails[seatIndex].bookingDetails = bookingDetails
      }
    },
    updateBookingDetails(
      state,
      action: PayloadAction<{
      seat: number
        firstName: string
        lastName: string
        email: string
        bookingTime?: Date | string
      }>
    ) {
      const { seat, firstName, lastName, email, bookingTime } = action.payload
      const seatIndex = state.busSeatDetails.findIndex(
        (item) => item.seat === seat
      )

      if (
        seatIndex !== -1 &&
        state.busSeatDetails[seatIndex].status === 'booked'
      ) {
        const bookingDetails = state.busSeatDetails[seatIndex].bookingDetails

        if (bookingDetails) {
          const newBookingDetails = {
            ...bookingDetails,
            firstName,
            lastName,
            email,
            bookingTime:
              bookingTime instanceof Date
                ? bookingTime
                : bookingTime,
          }

          state.busSeatDetails[seatIndex].bookingDetails = newBookingDetails
        }
      }
    },
    deleteBooking(state, action: PayloadAction<{ seat: number }>) {
      const { seat } = action.payload;
      const seatIndex = state.busSeatDetails.findIndex(item => item.seat === seat);
      if (seatIndex !== -1 && state.busSeatDetails[seatIndex].status === 'booked') {
        state.busSeatDetails[seatIndex].status = 'open';
        state.busSeatDetails[seatIndex].bookingDetails = undefined;
      }
    },
  },
})

export const { bookSeat, updateBookingDetails, deleteBooking } = busSlice.actions

export default busSlice.reducer
