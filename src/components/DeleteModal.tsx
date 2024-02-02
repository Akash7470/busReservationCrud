import React from 'react'
import Modal from 'react-modal'

interface DeleteModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
}

const DeleteModal: React.FC<DeleteModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Delete Confirmation Modal"
      style={{
        content: {
          border: 'none',
          borderRadius: '0.375rem',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          width: '20rem',
          height: '10rem',
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
      <div>
        <h2 className="text-lg font-bold">Confirm Delete</h2>
        <p>Are you sure you want to delete?</p>
        <div className="flex justify-end mt-4">
          <button
            onClick={() => {
              onConfirm()
              onClose()
            }}
            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2"
          >
            Confirm
          </button>
          <button
            onClick={onClose}
            className="text-gray-700 bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-400 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  )
}

export default DeleteModal
