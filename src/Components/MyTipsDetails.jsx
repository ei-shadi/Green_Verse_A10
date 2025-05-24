import { useEffect, useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const MyTipsDetails = () => {
  const [gardenersTips, setGardenersTips] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tipsResponse = await fetch('http://localhost:3000/gardeners-tips');
        const tipsData = await tipsResponse.json();
        setGardenersTips(tipsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Delete Tips
  const handleDeleteTip = async (id) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
    });

    if (result.isConfirmed) {
      try {
        const response = await fetch(`http://localhost:3000/gardeners-tips/${id}`, {
          method: "DELETE",
        });
        const data = await response.json();

        if (data.deletedCount || response.ok) {
          Swal.fire({
            icon: 'success',
            title: 'Deleted Successfully!',
            showConfirmButton: false,
            timer: 1500,
          });

          const remaining = gardenersTips.filter(tip => tip._id !== id);
          setGardenersTips(remaining);
        } else {
          throw new Error("Deletion failed");
        }
      } catch (error) {
        console.error("Error deleting tip:", error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Could not delete the tip. Please try again later.',
        });
      }
    }
  };

  // Update Tips
  const handleUpdateTip = (id) => {
    console.log(id);
    navigate(`/update-tips/${id}`);
  };

  return (
    <div className="p-4 mb-20">
      <h2 className="text-4xl md:text-5xl font-bold my-14 text-center bg-gradient-to-b from-amber-600 to-[#588157] bg-clip-text text-transparent">
        <span className="text-green-600 inline md:hidden">🌿</span>
        My Garden Tips
        <span className="text-green-600">🌿</span>
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-gradient-to-t from-[#a3b18a] to-[#3a5a40] shadow-md rounded-lg overflow-hidden">
          <thead className="bg-green-100 text-2xl text-center font-bold">
            <tr>
              <th className="py-3 px-4 border-2">Title</th>
              <th className="py-3 px-4 border-2">Category</th>
              <th className="py-3 px-4 border-2">Visibility</th>
              <th className="py-3 px-4 border-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {gardenersTips.map((tip) => (
              <tr
                key={tip._id}
                className="border-b hover:bg-cyan-500 text-white text-xl font-semibold text-center"
              >
                <td className="py-3 px-4 border">{tip.title}</td>
                <td className="py-3 px-4 border">{tip.category}</td>
                <td className="py-3 px-4 border">{tip.availability}</td>
                <td className="py-3 px-4 flex justify-center gap-5">
                  <button
                    onClick={() => handleUpdateTip(tip._id)}
                    className="text-blue-500 hover:text-blue-700 transition-transform transform hover:scale-125 hover:cursor-pointer hover:rotate-20"
                    title="Edit"
                  >
                    <FaEdit size={25} />
                  </button>
                  <button
                    onClick={() => handleDeleteTip(tip._id)}
                    className="text-red-500 hover:text-red-700 transition-transform transform hover:-rotate-20 hover:cursor-pointer hover:scale-125"
                    title="Delete"
                  >
                    <FaTrash size={25} />
                  </button>
                </td>
              </tr>
            ))}
            {gardenersTips.length === 0 && (
              <tr>
                <td colSpan="4" className="py-3 px-4 text-center text-gray-500">
                  No tips added yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTipsDetails;
