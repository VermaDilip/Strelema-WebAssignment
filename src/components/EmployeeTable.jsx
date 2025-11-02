import { Eye, Pencil, Trash2 } from "lucide-react";

export default function EmployeeTable({ employees }) {
  const getInitials = (name) => {
    const parts = name.split(" ");
    return parts.length > 1
      ? `${parts[0][0]}${parts[1][0]}`
      : parts[0][0];
  };

  return (
    <div className="w-full">
      <div className="flex w-full items-start border-b border-gray-500/10">
        <div className="flex flex-1 py-2.5 pr-2.5">
          <span className="text-gray-500 font-outfit text-base font-normal leading-6">
            Employee Name
          </span>
        </div>
        <div className="flex w-[132px] py-2.5 pr-2.5">
          <span className="text-gray-500 font-outfit text-base font-normal leading-6">
            Employee ID
          </span>
        </div>
        <div className="flex w-[172px] py-2.5 pr-2.5">
          <span className="text-gray-500 font-outfit text-base font-normal leading-6">
            Department
          </span>
        </div>
        <div className="flex w-[162px] py-2.5 pr-2.5">
          <span className="text-gray-500 font-outfit text-base font-normal leading-6">
            Designation
          </span>
        </div>
        <div className="flex w-[112px] py-2.5 pr-2.5">
          <span className="text-gray-500 font-outfit text-base font-normal leading-6">
            Address
          </span>
        </div>
        <div className="flex w-[110px] py-2.5 pr-2.5">
          <span className="text-gray-500 font-outfit text-base font-normal leading-6">
            Status
          </span>
        </div>
        <div className="flex w-[100px] py-2.5 pr-2.5">
          <span className="text-gray-500 font-outfit text-base font-normal leading-6">
            Action
          </span>
        </div>
      </div>

      {employees.map((employee) => (
        <div
          key={employee.id}
          className="flex w-full items-start border-b border-gray-500/10"
        >
          <div className="flex flex-1 py-1 pr-2.5 items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-[#003366]/30 flex items-center justify-center">
              <span className="text-dark-500 font-outfit text-sm">
                {getInitials(employee.name)}
              </span>
            </div>
            <span className="text-dark-500 font-outfit text-base font-normal leading-6">
              {employee.name}
            </span>
          </div>
          <div className="flex w-[132px] py-2.5 pr-2.5">
            <span className="text-dark-500 font-outfit text-base font-normal leading-6">
              {employee._id}
            </span>
          </div>
          <div className="flex w-[172px] py-2.5 pr-2.5">
            <span className="text-dark-500 font-outfit text-base font-normal leading-6">
              {employee.department}
            </span>
          </div>
          <div className="flex w-[162px] py-2.5 pr-2.5">
            <span className="text-dark-500 font-outfit text-base font-normal leading-6">
              {employee.designation}
            </span>
          </div>
          <div className="flex w-[112px] py-2.5 pr-2.5"></div>
          <div className="flex w-[110px] py-2.5 pr-2.5">
            <div className="flex py-[3px] px-2 justify-center items-center gap-2.5 rounded bg-primary-500/10">
              <span className="text-primary-500 font-lexend text-xs font-normal leading-[18px]">
                {employee.status}
              </span>
            </div>
          </div>
          <div className="flex w-[100px] py-2.5 pr-2.5 gap-2.5">
            <button className="text-dark-500 hover:text-primary-500 transition-colors">
              <Eye className="w-6 h-6" />
            </button>
            <button className="text-dark-500 hover:text-primary-500 transition-colors">
              <Pencil className="w-6 h-6" />
            </button>
            <button className="text-dark-500 hover:text-destructive transition-colors">
              <Trash2 className="w-6 h-6" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}