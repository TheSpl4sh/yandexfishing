import React from 'react'

const ButtonComponent = ({name, backGround, textColor, handleButtonClick, type = "button"}) => {
  return (
    <button 
      type={type}
      className={`w-full min-h-14 border-[1px] border-[#d3d3de33] mb-4 py-3 px-6 rounded-2xl  ${backGround} ${textColor} text-lg font-bold shadow-md active:scale-95`}
    >

        {name}
    </button>
  )
}

export default ButtonComponent