import { useContext } from "react";
import {
  FaSeedling,
  FaPen,
  FaLeaf,
  FaLevelUpAlt,
  FaImage,
  FaTags,
  FaUser,
  FaPaperPlane,
} from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";




const ShareGardenTipForm = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const tipData = Object.fromEntries(formData.entries());

    tipData.userName = user.displayName;
    tipData.userEmail = user.email;

    try {
      const response = await fetch("http://localhost:3000/gardeners-tips", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tipData),
      });

      const data = await response.json();
      if (data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Garden Tips Submitted Successfully!",
          html: `<span class="font-bold text-green-500 text-2xl">
          Thank you 
          <span class="text-amber-600 font-bold text-2xl">${user.displayName}</span> 
          For Sharing Your Knowledge!
          </span>`,
          showConfirmButton: true,
          confirmButtonText: "Continue",
          timer: 2000,
          timerProgressBar: true,
        });
        form.reset();
      }
    } catch (err) {
      console.error("Submission error:", err);
    }
  };

  const inputStyle =
    "w-full p-3 border border-green-200 rounded-md bg-white/80 text-gray-800 placeholder-gray-500 shadow-md focus:outline-none focus:ring-2 focus:ring-amber-300";

  const labelStyle = "block text-sm md:text-xl text-cyan-400 font-semibold mb-1 flex items-center gap-2";

  const selectStyle = `${inputStyle} hover:cursor-pointer`;

  return (
    <>
      <Helmet title="Share Garden Tip - Green_Verse" />
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto p-8 bg-gradient-to-t from-[#a3b18a] to-[#3a5a40] shadow-2xl rounded-2xl space-y-6 border border-green-100 my-20 text-white"
      >
        <h2 className="text-3xl font-bold text-cyan-400 flex items-center justify-center gap-3 mb-6 border-b-4 border-amber-500 pb-2  rounded">
          <FaSeedling /> Share a Garden Tip
        </h2>

        <div>
          <label className={labelStyle}>
            <FaPen /> Title
          </label>
          <input
            type="text"
            name="title"
            required
            placeholder="How I Grow Tomatoes Indoors"
            className={inputStyle}
          />
        </div>

        <div>
          <label className={labelStyle}>
            <FaLeaf /> Plant Type / Topic
          </label>
          <input type="text" name="plantType" required className={inputStyle} />
        </div>

        <div>
          <label className={labelStyle}>
            <FaLevelUpAlt /> Difficulty
          </label>
          <select name="difficulty" defaultValue="Easy" className={selectStyle}>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </div>

        <div>
          <label className={labelStyle}>
            <FaLeaf /> Description
          </label>
          <textarea
            name="description"
            required
            rows={4}
            className={inputStyle}
          />
        </div>

        <div>
          <label className={`${labelStyle} flex items-center gap-2`}>
            <FaImage /> Image URL
          </label>
          <input type="url" name="imageUrl" className={inputStyle} />
        </div>

        <div>
          <label className={`${labelStyle} flex items-center gap-2`}>
            <FaTags /> Category
          </label>
          <select
            name="category"
            defaultValue="Plant Care"
            className={`${selectStyle} bg-cyan-100`}
          >
            <option>Plant Care</option>
            <option>Composting</option>
            <option>Vertical Gardening</option>
            <option>Hydroponics</option>
            <option>Urban Gardening</option>
          </select>
        </div>

        <div>
          <label className={labelStyle}>Availability</label>
          <select
            name="availability"
            defaultValue="Public"
            className={`${selectStyle} bg-cyan-100`}
          >
            <option>Public</option>
            <option>Hidden</option>
          </select>
        </div>

        <div className="bg-cyan-600 p-4 rounded-lg text-sm md:text-xl">
          <p className="flex items-center gap-2">
            <FaUser className="text-green-400" />
            <strong>Name:</strong> <span className="text-amber-400 font-bold">{user?.displayName}</span>
          </p>
          <p className="flex items-center gap-2">
            <FaUser className="text-green-400" />
            <strong>Email:</strong> <span className="text-amber-400 font-bold">{user?.email}</span>
          </p>
        </div>

        <button
          type="submit"
          className="flex items-center justify-center gap-2 w-1/2 mx-auto py-3 bg-green-600 text-white rounded-md hover:bg-amber-500 hover:cursor-pointer hover:scale-125 transition duration-300 text-lg font-semibold"
        >
          <FaPaperPlane /> Submit Tip
        </button>
      </form>
    </>
  );
};

export default ShareGardenTipForm;
