import Sidebar from "../components/Sidebar";

export default function Settings() {
  return (
    <div className="min-h-screen bg-white flex">
      <Sidebar />
      <div className="flex-1 ml-[280px] py-20 px-8">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="mt-4 text-gray-600">Settings page content will go here.</p>
      </div>
    </div>
  );
}