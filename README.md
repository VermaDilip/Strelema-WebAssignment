# CombinedApp - Employee Management System

A modern React-based employee management application with authentication, dashboard, and various HR management features. The app combines a travel-themed landing page with a comprehensive admin dashboard for managing employees, departments, attendance, leaves, holidays, and training.

## Live Demo

Check out the live version of the Strelema React Web Application here:  

🌐 [Strelema Live Site](https://strelema-travelly.netlify.app/)

## 🚀 Features

- **Landing Page**: Travel-themed marketing page with animations
- **Authentication**: Secure login system with JWT tokens
- **Admin Dashboard**: Complete employee management interface
- **Employee Management**: View, search, and paginate employee data
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Clean, professional interface with shadcn/ui components

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS, PostCSS
- **Icons**: Lucide React
- **Routing**: React Router DOM v7
- **HTTP Client**: Axios
- **Animations**: AOS (Animate On Scroll)
- **State Management**: React Context API

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager
- Git

## 🔧 Installation & Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd CombinedApp
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

The application uses a backend API hosted at `https://strelema-task.onrender.com/api`. No additional environment variables are required as the API endpoints are hardcoded in the configuration.

### 4. Development Server

```bash
npm run dev
```

The application will start on `http://localhost:5173`

### 5. Build for Production

```bash
npm run build
```

### 6. Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
CombinedApp/
├── public/
│   └── vite.svg
├── src/
│   ├── api/
│   │   ├── authApi.js          # Authentication API calls
│   │   ├── axiosConfig.js      # Axios interceptors and config
│   │   └── employeeApi.js      # Employee data API calls
│   ├── components/
│   │   ├── EmployeeTable.jsx   # Employee data table
│   │   ├── Icons.jsx           # Icon components
│   │   ├── InputField.jsx      # Reusable input component
│   │   ├── LoginCard.jsx       # Login form component
│   │   ├── Pagination.jsx      # Pagination component
│   │   ├── Sidebar.jsx         # Navigation sidebar
│   │   └── TableSkeleton.jsx   # Loading skeleton
│   ├── context/
│   │   └── AuthContext.jsx     # Authentication context
│   ├── lib/
│   │   └── utils.js            # Utility functions
│   ├── pages/
│   │   ├── AdminDashboard.jsx  # Main dashboard
│   │   ├── Attendance.jsx      # Attendance management
│   │   ├── Departments.jsx     # Department management
│   │   ├── Employees.jsx       # Employee listing
│   │   ├── Holidays.jsx        # Holiday management
│   │   ├── LandingPage.jsx     # Marketing landing page
│   │   ├── Leaves.jsx          # Leave management
│   │   ├── LoginPage.jsx       # Login page
│   │   ├── Settings.jsx        # Settings page
│   │   └── Training.jsx        # Training management
│   ├── routes/
│   │   └── AppRoutes.jsx       # Application routing
│   ├── types/
│   │   └── employee.js         # Employee data types and mock data
│   ├── App.jsx                 # Main app component
│   ├── index.css               # Global styles
│   └── main.jsx                # App entry point
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🔗 API Endpoints

The application integrates with the following API endpoints:

### Authentication
- `POST /api/auth/login` - User login
  - Body: `{ phone: string, password: string }`
  - Response: `{ token: string, user: object }`

### Employees
- `GET /api/employees?page={page}&limit={limit}` - Get paginated employees
  - Headers: `Authorization: Bearer {token}`
  - Response: `{ data: Employee[], total: number, page: number, limit: number }`

## 🎨 Design Decisions

### Architecture
- **Component-Based**: Modular React components for reusability
- **Context API**: Simple state management for authentication
- **Protected Routes**: Route-level authentication guards
- **Fallback Data**: Mock data fallback when API is unavailable

### Styling
- **Tailwind CSS**: Utility-first CSS framework for rapid development
- **Custom Colors**: Travel-themed color palette with custom CSS variables
- **Responsive Design**: Mobile-first approach with breakpoint-specific styles
- **Animations**: AOS library for scroll-triggered animations on landing page

### User Experience
- **Loading States**: Skeleton loaders during data fetching
- **Error Handling**: Graceful error handling with user feedback
- **Pagination**: Efficient data loading with pagination controls
- **Search & Filter**: UI placeholders for future search functionality

### Performance
- **Lazy Loading**: Components loaded as needed
- **Optimized Builds**: Vite for fast development and optimized production builds
- **Minimal Dependencies**: Carefully selected dependencies to reduce bundle size

## 🚀 Deployment

The application is configured for deployment on platforms like Netlify, Vercel, or any static hosting service:

1. Build the project: `npm run build`
2. Deploy the `dist` folder contents
3. Ensure the backend API is accessible from the deployment domain

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -am 'Add your feature'`
4. Push to branch: `git push origin feature/your-feature`
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 📞 Support

For questions or support, please contact the development team.
