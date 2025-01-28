// import "./App.css"
import { Footer } from "./components/Footer"
import ToggleButton from "./components/ToggleButton"
import YaIdLogo from './assets/YaIdLogo.png'
import { FaArrowLeft } from "react-icons/fa";

const App = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#121212] text-white">
            <div className="bg-[#1c1c1c] rounded-3xl p-5 w-11/12 max-w-md text-center">
                <div className="flex items-center justify-between mb-4">
                    <button className="text-xl"><FaArrowLeft /></button>
                    <img className="max-w-40 text-wh invert" src={YaIdLogo}/>
                    <h1></h1>
                </div>
                <h2 className="text-lg font-semibold mb-4">Войдите с Яндекс ID</h2>
                <ToggleButton />
                <div className="mt-5">
                    <input 
                        type="text" 
                        placeholder="Логин или email" 
                        className="w-full p-2 rounded-md border-2 border-[#272727] min-h-14 bg-[#1c1c1c] text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-gray-500"
                    />
                </div>
                <button className="w-full mt-4 p-2 rounded-md bg-white text-black hover:bg-gray-200">Войти</button>
                <button className="w-full mt-2 p-2 rounded-md bg-gray-700 text-gray-400 hover:bg-gray-600">Создать ID</button>
                <div className="flex justify-center gap-3 mt-5">
                    <img src="vk-icon.png" alt="VK" className="w-8 h-8 cursor-pointer" />
                    <img src="google-icon.png" alt="Google" className="w-8 h-8 cursor-pointer" />
                    <img src="qr-icon.png" alt="QR-код" className="w-8 h-8 cursor-pointer" />
                    <img src="more-icon.png" alt="More" className="w-8 h-8 cursor-pointer" />
                </div>
            </div>
            <div className="text-center mt-5 text-sm text-gray-400">
                <p>Яндекс ID — ключ от всех сервисов<br /><a href="#" className="text-blue-500">Узнать больше</a></p>
                <p>Ru · Справка и поддержка · © 2001–2025, Яндекс</p>
            </div>
        </div>
    </>
  )
}

export default App