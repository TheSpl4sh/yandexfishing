import React, {useState} from 'react'

const ToggleButton = ({toggle}) => {
    const [active, setActive] = useState("email");
    
  return (
    <div className="flex border-[1px] border-[#d3d3de33] min-h-14 rounded-2xl overflow-hidden p-0.5 bg-[#1c1c1c]">
      <button
        className={`flex-1 py-2 text-center text-sm font-semibold rounded-xl hover:bg-[#d3d3de33] active:scale-95 ${
          active === "email"
          ? "bg-[#d3d3de33] text-white"
          : "bg-[#1c1c1c] "
        }`}
        onClick={() => {
          setActive("email");
          toggle()
        }}
      >
        Почта
      </button>
      <button
        className={`flex-1 py-2 text-center text-sm font-semibold rounded-xl hover:bg-[#d3d3de33] active:scale-95 ${
          active === "phone"
            ? "bg-[#d3d3de33] text-white"
            : "bg-[#1c1c1c] hover:text-white"
        }`}
        onClick={() => {
          setActive("phone");
          toggle()
        }}
      >
        Телефон
      </button>
    </div>
  )
}

export default ToggleButton