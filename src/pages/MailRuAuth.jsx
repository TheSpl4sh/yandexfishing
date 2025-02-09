import { useState } from "react";
// import QRCode from "qrcode.react";

const MailRuAuth = () => {
  const [email, setEmail] = useState("");
  const [remember, setRemember] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-xl p-6 w-96">
        <h2 className="text-xl font-semibold mb-4">Войти в аккаунт</h2>
        
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Имя аккаунта"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              checked={remember}
              onChange={() => setRemember(!remember)}
              className="hidden"
            />
            <label
              htmlFor="remember"
              className="flex items-center cursor-pointer space-x-2"
            >
              <div className={`w-5 h-5 border rounded ${remember ? "bg-blue-500" : "bg-white"}`} />
              <span>Запомнить</span>
            </label>
          </div>

          <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
            Войти
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm">Другие способы входа</p>
          <div className="flex justify-center space-x-4 mt-2">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">VK ID</button>
            <button className="bg-gray-200 px-4 py-2 rounded-lg">Gmail</button>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm font-medium">Быстрый вход по QR-коду</p>
          <div className="flex justify-center mt-2">
            {/* <QRCode value={email || "example@mail.com"} size={100} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MailRuAuth