import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store/Store'
import { BusDetails, bookSeat } from '../redux/slice/BusSlice'
import BusSeat from './BusSeat'
import steeringWheel from '../assets/steering-wheel-icon.svg'
import SeatModal from './SeatModal'

const BusBooking: React.FC = () => {
  const dispatch = useDispatch()
  const busSeatDetails = useSelector(
    (state: RootState) => state.bus.busSeatDetails
  )

  const [selectedSeat, setSelectedSeat] = useState<number[]>([])
  const [email, setEmail] = useState<string>('')
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [dateOfBooking, setDateOfBooking] = useState<string>('')

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const navigate = useNavigate();

  const handleSeatClick = (seat: number) => {
    if (busSeatDetails.find((s) => s.seat === seat)?.status !== 'booked') {
      setSelectedSeat((prevSelectedSeats) =>
        prevSelectedSeats.includes(seat)
          ? prevSelectedSeats.filter((selectedSeat) => selectedSeat !== seat)
          : [...prevSelectedSeats, seat]
      )
    }
  }

  const handleBookSeat = () => {
    if (
      selectedSeat.length > 0 &&
      firstName !== '' &&
      lastName !== '' &&
      dateOfBooking !== '' &&
      email !== ''
    ) {
      selectedSeat.forEach((seat) => {
        dispatch(
          bookSeat({
            seat,
            bookingDetails: {
              firstName,
              lastName,
              email,
              bookingTime: new Date(dateOfBooking),
            },
          })
        )
      })

      setSelectedSeat([])
      setFirstName('')
      setLastName('')
      setDateOfBooking('')
      setEmail('')
      setIsModalOpen(false)
      navigate('/dashboard')
      
    }
  }

  const generateDeckSeatDetails = (deck: 'Lower' | 'Upper'): BusDetails[] => {
    const deckSeatDetails: BusDetails[] = []
    const numberOfSeats = 20
    const startingSeatNumber = deck === 'Lower' ? 1 : 21

    for (
      let seatNumber = startingSeatNumber;
      seatNumber <= startingSeatNumber + numberOfSeats - 1;
      seatNumber++
    ) {
      const seat = busSeatDetails.find((s) => s.seat === seatNumber) || {
        seat: seatNumber,
        status: 'open',
      }
      deckSeatDetails.push(seat)
    }

    return deckSeatDetails
  }

  const handleContinue = () => {
    if (selectedSeat.length > 0) {
      setIsModalOpen(true)
    }
  }

  return (
    <div className="bg-indigo-100 h-full p-6 container text-center mx-auto rounded-lg">
      <h1 className="text-black-100 text-3xl mb-3">Bus Ticket Booking</h1>
      <div className=" flex flex-col items-center gap-8">
        <div className="bg-indigo-400 w-1/2 text-white p-4 rounded-md text-xl">
          <h2>Click on an Available seat to proceed with your transaction</h2>
        </div>
        <div className="w-65% flex flex-col gap-4">
          {(['Lower', 'Upper'] as const).map((deck) => (
            <>
              <h3 className="text-left">{deck + ' Deck'}</h3>
              <div
                key={deck}
                className="px-5 py-5 bg-white rounded-xl border-black shadow-md border-l-4"
              >
                <div className="flex justify-center gap-32">
                  {deck === 'Lower' && (
                    <img height={'30rem'} width={'30rem'} src={steeringWheel} />
                  )}
                  <div className="flex flex-wrap gap-5 w-85%">
                    {generateDeckSeatDetails(deck).map((seat) => (
                      <BusSeat
                        key={seat.seat}
                        seat={seat}
                        onClick={() => handleSeatClick(seat.seat)}
                        isSelected={selectedSeat.includes(seat.seat)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      <button
        className="w-40 mt-5 py-2 rounded-md bg-indigo-400 hover:bg-indigo-500 text-white text-xl "
        onClick={handleContinue}
        disabled={selectedSeat.length === 0}
      >
        Continue
      </button>
      {selectedSeat.length > 0 && (
        <SeatModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          selectedSeat={selectedSeat}
          firstName={firstName}
          setFirstName={setFirstName}
          lastName={lastName}
          setLastName={setLastName}
          dateOfBooking={dateOfBooking}
          setDateOfBooking={setDateOfBooking}
          email={email}
          setEmail={setEmail}
          onBookSeat={handleBookSeat}
        />
      )}
    </div>
  )
}

export default BusBooking;
