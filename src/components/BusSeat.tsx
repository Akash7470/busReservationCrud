import React from 'react'
import { BusDetails } from '../redux/slice/BusSlice'
import clsx from 'clsx'

interface BusSeatProps {
  seat: BusDetails
  onClick: () => void
  isSelected: boolean
}

const BusSeat: React.FC<BusSeatProps> = (props: BusSeatProps) => {
  const { seat, onClick, isSelected } = props
  return (
    <div
      onClick={onClick}
      className={clsx(
        'flex justify-center items-center p-3 h-13 w-[7rem] bg-gray-400 cursor-pointer border border-solid border-black rounded-md drop-shadow-xl',
        seat.status === 'booked'
          ? 'bg-gray-300 text-white pointer-events-none'
          : isSelected
            ? 'bg-red-400 text-white'
            : 'bg-white'
      )}
    >
      {seat.seat}
    </div>
  )
}

export default BusSeat
