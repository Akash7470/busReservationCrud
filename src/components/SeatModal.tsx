import React from 'react'
import Modal from 'react-modal'

interface SeatModalProps {
  isOpen: boolean
  onClose: () => void
  selectedSeat: number[]
  name: string
  setName: (name: string) => void
  firstName: string
  setFirstName: (firstName: string) => void
  lastName: string
  setLastName: (lastName: string) => void
  dateOfBooking: Date
  setDateOfBooking: (dateOfBooking: string) => void
  email: string
  setEmail: (email: string) => void
  onBookSeat: () => void
}

const SeatModal: React.FC<SeatModalProps> = ({
  isOpen,
  onClose,
  selectedSeat,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  dateOfBooking,
  setDateOfBooking,
  email,
  setEmail,
  onBookSeat,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Selected Seat Details Modal"
      style={{
        content: {
          border: 'none',
          borderRadius: '0.375rem',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          width: '30rem',
          height: '30rem',
          backgroundColor: '#FFFFFF',
          outline: 'none',
          paddingBottom: '1.5rem',
          margin: 'auto',
        },
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
      }}
    >
      <form>
        <div>
          <h2 className="text-lg font-bold">Selected Seat Details</h2>
          <p>Seat number: {selectedSeat.join(', ')}</p>
          <div>
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              First name
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter first name"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="last_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Last name
            </label>
            <input
              type="text"
              id="last_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter last name"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="dateOfBooking"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Date of Booking:
              <input
                type="date"
                id="dateOfBooking"
                required
                value={dateOfBooking ? dateOfBooking?.split('T')[0] : ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setDateOfBooking(e?.target?.value)
                }
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </label>
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <button
          type="submit"
          className="text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={onBookSeat}
        >
          Submit
        </button>
      </form>
    </Modal>
  )
}

export default SeatModal
