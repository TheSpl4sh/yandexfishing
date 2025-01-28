import React, {useState} from 'react'

const ToggleButton = () => {
    const [active, setActive] = useState("email");
    
  return (
    <div className="flex border-2 border-[#272727] min-h-14 rounded-2xl overflow-hidden p-0.5 bg-[#1c1c1c]">
      <button
        className={`flex-1 py-2 text-center text-sm font-semibold rounded-xl ${
          active === "email"
          ? "bg-[#272727] text-white"
          : "bg-[#1c1c1c] "
        }`}
        onClick={() => setActive("email")}
      >
        Почта
      </button>
      <button
        className={`flex-1 py-2 text-center text-sm font-semibold rounded-xl ${
          active === "phone"
            ? "bg-[#272727] text-white"
            : "bg-[#1c1c1c] hover:text-white"
        }`}
        onClick={() => setActive("phone")}
      >
        Телефон
      </button>
    </div>
  )
}

export default ToggleButton