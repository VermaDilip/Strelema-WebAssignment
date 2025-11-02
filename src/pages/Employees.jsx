import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { getEmployees } from "../api/employeeApi";
import { mockEmployees } from "../types/employee";
import { Search, Filter, PlusCircle, LogOut } from "lucide-react";
import EmployeeTable from "../components/EmployeeTable";
import Pagination from "../components/Pagination";
import Sidebar from "../components/Sidebar";
import TableSkeleton from "../components/TableSkeleton";

export default function Employees() {
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { token, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    fetchEmployees();
  }, [currentPage]);

  const fetchEmployees = async () => {
    try {
      setLoading(true);
      const response = await getEmployees(currentPage, recordsPerPage, token);
      setEmployees(response.data || []);
    } catch (err) {
      console.error("API failed, using mock data:", err);
      // Fallback to mock data
      const startIndex = (currentPage - 1) * recordsPerPage;
      const endIndex = startIndex + recordsPerPage;
      setEmployees(mockEmployees.slice(startIndex, endIndex));
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex">
        <Sidebar />
        <div className="flex-1 ml-[280px] py-20 px-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold text-gray-900">All Employees</h1>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>

          {/* Search and Filters */}
          <div className="flex items-center gap-5 mb-[30px]">
            <div className="flex w-[330px] h-[50px] px-4 py-[13px] items-center gap-2.5 rounded-[10px] border border-gray-500/10">
              <Search className="w-6 h-6 text-dark-500" />
              <input
                type="text"
                placeholder="Search"
                className="flex-1 bg-transparent border-none outline-none text-dark-500/20 font-lexend text-base font-normal leading-6 placeholder:text-dark-500/20"
              />
            </div>

            <div className="flex-1" />

            <button className="flex h-[50px] px-5 justify-center items-center gap-2.5 rounded-[10px] border border-gray-500/20">
              <Filter className="w-6 h-6 text-dark-500" />
              <span className="text-dark-500 font-outfit text-base font-normal leading-6">
                Filter
              </span>
            </button>

            <button className="flex h-[50px] px-5 justify-center items-center gap-2.5 rounded-[10px] bg-gradient-primary">
              <PlusCircle className="w-6 h-6 text-white" />
              <span className="text-white font-outfit text-base font-normal leading-6">
                Add New Employee
              </span>
            </button>
          </div>

          {/* Table Skeleton */}
          <TableSkeleton />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex">
      <Sidebar />
      <div className="flex-1 ml-[280px] py-20 px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-gray-900">All Employees</h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>

        {/* Search and Filters */}
        <div className="flex items-center gap-5 mb-[30px]">
          <div className="flex w-[330px] h-[50px] px-4 py-[13px] items-center gap-2.5 rounded-[10px] border border-gray-500/10">
            <Search className="w-6 h-6 text-dark-500" />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 bg-transparent border-none outline-none text-dark-500/20 font-lexend text-base font-normal leading-6 placeholder:text-dark-500/20"
            />
          </div>

          <div className="flex-1" />

          <button className="flex h-[50px] px-5 justify-center items-center gap-2.5 rounded-[10px] border border-gray-500/20">
            <Filter className="w-6 h-6 text-dark-500" />
            <span className="text-dark-500 font-outfit text-base font-normal leading-6">
              Filter
            </span>
          </button>

          <button className="flex h-[50px] px-5 justify-center items-center gap-2.5 rounded-[10px] bg-gradient-primary">
            <PlusCircle className="w-6 h-6 text-white" />
            <span className="text-white font-outfit text-base font-normal leading-6">
              Add New Employee
            </span>
          </button>
        </div>

        {/* Employee Table */}
        <div className="rounded-[10px] border border-gray-500/20 p-5">
          <EmployeeTable employees={employees} />

          <div className="mt-[14px]">
            <Pagination
              currentPage={currentPage}
              totalPages={6}
              totalRecords={60}
              recordsPerPage={recordsPerPage}
              onPageChange={setCurrentPage}
              onRecordsPerPageChange={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
}