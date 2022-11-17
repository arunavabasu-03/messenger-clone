"use client";
function LogoutButton() {
  return (
    <button
      onClick={() => console.log("logout")}
      className="bg-blue-500 hover:bg-blue-700 I text-white font-bold py-2 px-4 rounded"
    >
      Sign Out
    </button>
  );
}

export default LogoutButton;
