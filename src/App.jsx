// import "./App.css"
import { Footer } from "./components/Footer"
import ToggleButton from "./components/ToggleButton"
import YaIdLogo from './assets/YaIdLogo.png'
import vkImg from './assets/vkImg.svg'
import googleImg from './assets/googleImg.svg'
import facebookImg from './assets/facebookImg.svg'
import qrImage from './assets/qrImage.svg'
import moreImg from './assets/moreImg.svg'
import { FaArrowLeft } from "react-icons/fa"
import ButtonComponent from "./components/ButtonComponent";
import { useState } from "react"

const App = () => {
    const [placeholder, setPlaceholder] = useState("Логин или email")


    return (
        <>
            <div className="flex flex-col items-center justify-center gap-2 min-h-screen bg-[#121212] text-white">
                <div className="bg-[#1c1c1c] rounded-3xl p-[32px] max-w-[412px] text-center">
                    <div className="flex items-center justify-between mb-4">
                        <button className="text-xl"><FaArrowLeft /></button>
                        <img className="max-w-40 text-wh invert" src={YaIdLogo} />
                        <h1></h1>
                    </div>
                    <h2 className="text-lg font-semibold mb-4">Войдите с Яндекс ID</h2>
                    <ToggleButton setPlaceholder={setPlaceholder} />
                    <div className="relative w-full mt-5">
                        <button className="absolute left-2 top-1/2 transform -translate-y-1/2 flex items-center gap-1 bg-transparent text-white px-2 py-1 rounded-lg border border-gray-500">
                            <img src="/flag-russia.png" alt="RU" className="w-6 h-4 rounded-sm" />
                        </button>
                        <input
                            type="text"
                            placeholder={placeholder}
                            className="w-full p-3 mb-4 rounded-2xl border-[1px] border-[#d3d3de33] min-h-10 bg-[#1c1c1c] text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-gray-500 text-2xl"
                        />
                    </div>
                    <ButtonComponent
                        name="Войти"
                        backGround="bg-white"
                        textColor="text-[#1f1f24]"
                    />
                    <ButtonComponent
                        name="По лицу или отпечатку"
                        backGround="bg-[#d3d3de33]"
                        textColor="text-white"
                    />
                    <ButtonComponent
                        name="Создать ID"
                        backGround="bg-[#1c1c1c] "
                        textColor="text-white"
                    />
                    <h3>Войти с помощью</h3>
                    <div className="flex items-center justify-center gap-8 mt-5">
                        <img src={vkImg} alt="VK" className="w-8 h-8 cursor-pointer" />
                        <img src={googleImg} alt="Google" className="w-8 h-8 cursor-pointer" />
                        <img src={qrImage} alt="QR-код" className="w-8 h-8 cursor-pointer" />
                        <img src={facebookImg} alt="Facebook" className="w-8 h-8 cursor-pointer" />
                        <img src={moreImg} alt="More" className="w-8 h-2 cursor-pointer" />
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