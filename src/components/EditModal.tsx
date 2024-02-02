import React from 'react'
import Modal from 'react-modal'

interface EditedDetails {
  firstName: string
  lastName: string
  email: string
  bookingTime?: Date | null
}

interface EditModalProps {
  isOpen: boolean
  onRequestClose: () => void
  onSave: () => void
  editedDetails: EditedDetails
  onDetailsChange: (field: keyof EditedDetails, value: string) => void
}

const EditModal: React.FC<EditModalProps> = ({
  isOpen,
  onRequestClose,
  onSave,
  editedDetails,
  onDetailsChange,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Edit Modal"
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
      <div className="modal-content">
        <span className="close text-xl" onClick={onRequestClose}>
          &times;
        </span>
        <p className='text-xl text-center'>Edit Details</p>
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
            value={editedDetails.firstName}
            onChange={(e) => onDetailsChange('firstName', e.target.value)}
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
            value={editedDetails.lastName}
            onChange={(e) => onDetailsChange('lastName', e.target.value)}
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
              name="bookingTime"
              value={
                editedDetails?.bookingTime
                  ? new Date(editedDetails?.bookingTime)
                      .toISOString()
                      .split('T')[0]
                  : ''
              }
              onChange={(e) =>
                onDetailsChange(
                  'bookingTime',
                  new Date(e.target.value).toString()
                )
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
            value={editedDetails.email}
            onChange={(e) => onDetailsChange('email', e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="text-white bg-indigo-500 hover:bg-indigo-600 px-5 py-2 rounded-md"
          onClick={onSave}
        >
          Submit
        </button>
      </div>
    </Modal>
  )
}

export default EditModal
