import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store/Store";
import { deleteBooking, updateBookingDetails } from "../redux/slice/BusSlice";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";

interface EditedDetails {
  firstName: string;
  lastName: string;
  email: string;
  bookingTime?: Date | string | undefined;
}

const Dashboard = () => {
  const dispatch = useDispatch();

  const bookedSeats = useSelector((state: RootState) =>
    state.bus.busSeatDetails.filter((seat) => seat.status === "booked")
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editSeat, setEditSeat] = useState<number | null>(null);
  const [editedDetails, setEditedDetails] = useState<EditedDetails>({
    firstName: "",
    lastName: "",
    email: "",
    bookingTime: undefined,
  });
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [seatToDelete, setSeatToDelete] = useState<number | null>(null);

  const openModal = (seat: number) => {
    const seatDetails = bookedSeats.find((s) => s.seat === seat);
    if (seatDetails && seatDetails.bookingDetails) {
      setEditedDetails(seatDetails.bookingDetails);
      setEditSeat(seat);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditSeat(null);
  };

  const handleSave = () => {
    if (editSeat !== null) {
      dispatch(
        updateBookingDetails({
          seat: editSeat,
          firstName: editedDetails.firstName,
          lastName: editedDetails.lastName,
          email: editedDetails.email,
          bookingTime: editedDetails.bookingTime,
        })
      );
      closeModal();
    }
  };

  const handleDeleteBooking = (seat: number) => {
    setSeatToDelete(seat);
    setDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    if (seatToDelete !== null) {
      dispatch(deleteBooking({ seat: seatToDelete }));
    }
  };

  const onDetailsChange = (field: string, value: Date | string | null) => {
    setEditedDetails((prevDetails: EditedDetails) => ({
      ...prevDetails,
      [field]: field === "bookingTime" ? value : value,
    }));
  };

  return (
    <div className="relative overflow-x-auto sm:rounded-lg top-[3rem]">
      {/* <table className="w-full text-sm text-left rtl:text-right text-blue-400 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Seat No.
            </th>
            <th scope="col" className="px-6 py-3">
              First Name
            </th>
            <th scope="col" className="px-6 py-3">
              Last Name
            </th>
            <th scope="col" className="px-6 py-3">
              Date of Booking
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Edit
            </th>
            <th scope="col" className="px-6 py-3">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {bookedSeats.map((seat) => (
            <tr
              key={seat.seat}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {seat.seat}
              </td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {seat.bookingDetails?.firstName}
              </td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {seat.bookingDetails?.lastName}
              </td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {
                  new Date(seat.bookingDetails?.bookingTime)
                    .toISOString()
                    .split('T')[0]
                }
              </td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {seat.bookingDetails?.email}
              </td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <button
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  onClick={() => openModal(seat.seat)}
                >
                  Edit
                </button>
              </td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <button
                  className="font-medium text-red-600 dark:text-red-500 hover:underline"
                  onClick={() => handleDeleteBooking(seat.seat)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}

      <div className="flex px-5 flex-row items-center gap-10 card ">
        {bookedSeats.map((seat, index) => (
          <>
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg py-5 shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div className="flex flex-row items-center ">
                <img
                  className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBn2_APqcLIZ0dEBD_6Rvk3H5NEUEC0cYTVw&usqp=CAU"
                  alt=""
                />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <p className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Seat no.:{" "}
                    <span className="mb-2 text-base tracking-tight text-blue-400 dark:text-white">
                      {seat.seat}
                    </span>
                  </p>
                  <p className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Date of Booking:{" "}
                    <span className="mb-2 text-base tracking-tight text-blue-400">
                      {" "}
                      {
                        new Date(seat.bookingDetails?.bookingTime)
                          .toISOString()
                          .split("T")[0]
                      }
                    </span>
                  </p>
                  <p className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Name.:{" "}
                    <span className="mb-2 text-base tracking-tight text-blue-400 dark:text-white">
                      {seat.bookingDetails?.firstName}{" "}
                      {seat.bookingDetails?.lastName}
                    </span>
                  </p>
                  <p className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Email Address:{" "}
                    <span className="mb-2 text-base tracking-tight text-blue-400 dark:text-white">
                      {seat.bookingDetails?.email}
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div>
                  <button
                    onClick={() => openModal(seat.seat)}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-500 hover:bg-yellow-600 rounded-lg"
                  >
                    Edit
                  </button>
                </div>
                <div>
                  <button
                   
                    onClick={() => handleDeleteBooking(seat.seat)}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-500 hover:bg-red-600 rounded-lg"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>

      <EditModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        onSave={handleSave}
        editedDetails={editedDetails}
        onDetailsChange={onDetailsChange}
      />

      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={confirmDelete}
      />
    </div>
  );
};

export default Dashboard;
