import { Link } from "react-router-dom";
import { Play } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Index() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="container mx-auto px-4 md:px-8 lg:px-16 py-6 md:py-8" data-aos="fade-down">
        <div className="flex items-center justify-between">
          <Link to="/" className="font-dynapuff text-2xl md:text-3xl lg:text-4xl text-travel-black">
            Travel.ly
          </Link>
          <div className="hidden lg:flex items-center gap-8 xl:gap-12">
            <Link to="/destinations" className="text-travel-text hover:text-travel-purple transition-colors font-medium">
              Destinations
            </Link>
            <Link to="/hotels" className="text-travel-text hover:text-travel-purple transition-colors font-medium">
              Hotels
            </Link>
            <Link to="/flights" className="text-travel-text hover:text-travel-purple transition-colors font-medium">
              Flights
            </Link>
            <Link to="/bookings" className="text-travel-text hover:text-travel-purple transition-colors font-medium">
              Bookings
            </Link>
            <Link to="/login" className="text-travel-text hover:text-travel-purple transition-colors font-medium">
              Login
            </Link>
            <button className="px-6 py-2 border border-travel-black rounded hover:bg-travel-black hover:text-white transition-colors font-medium">
              Sign up
            </button>
            <select className="text-travel-text font-medium bg-transparent border-none cursor-pointer">
              <option>EN</option>
              <option>ES</option>
              <option>FR</option>
            </select>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-8 lg:px-16 py-8 md:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center" data-aos="fade-up">
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4">
              <p className="text-travel-orange font-bold text-sm md:text-base lg:text-lg uppercase tracking-wide">
                Best Destinations around the world
              </p>
              <h1 className="font-volkhov font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-travel-heading leading-tight">
                Travel, enjoy and live a new and full life
              </h1>
              <p className="text-travel-text text-sm md:text-base lg:text-lg leading-relaxed max-w-lg">
                Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6">
              <button className="bg-travel-yellow hover:bg-travel-yellow/90 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-medium shadow-lg transition-all">
                Find out more
              </button>
              <button className="flex items-center gap-3 text-travel-text-dark hover:text-travel-purple transition-colors group">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-travel-orange flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="w-5 h-5 md:w-6 md:h-6 text-white fill-white ml-1" />
                </div>
                <span className="font-medium">Play Demo</span>
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/068ac0e3993b26def63dd9afd6385eda37232eec?width=1000"
              alt="Traveler with backpack"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-20 lg:py-24" data-aos="fade-up">
        <div className="text-center mb-12 md:mb-16 lg:mb-20" data-aos="fade-up" data-aos-delay="200">
          <p className="text-travel-text font-semibold text-sm md:text-base lg:text-lg uppercase tracking-wide mb-2">
            Category
          </p>
          <h2 className="font-volkhov font-bold text-3xl md:text-4xl lg:text-5xl text-travel-heading">
            We Offer Best Services
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12" data-aos="fade-up" data-aos-delay="400">
          <div className="group text-center space-y-4 hover:bg-white hover:shadow-2xl rounded-3xl p-6 md:p-8 transition-all duration-300 relative">
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-travel-orange opacity-0 group-hover:opacity-100 transition-opacity rounded-tl-3xl rounded-br-lg -z-10"></div>
            <div className="flex justify-center">
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/512797ca3c0e4a7f1e9d8807fc8e7e9287ccb380?width=130" alt="Calculated Weather" className="w-16 h-16 md:w-20 md:h-20" />
            </div>
            <h3 className="font-openSans font-semibold text-lg md:text-xl text-travel-heading">
              Calculated Weather
            </h3>
            <p className="text-travel-text text-sm md:text-base leading-relaxed">
              Built Wicket longer admire do barton vanity itself do in it.
            </p>
          </div>

          <div className="group text-center space-y-4 hover:bg-white hover:shadow-2xl rounded-3xl p-6 md:p-8 transition-all duration-300 relative">
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-travel-orange opacity-0 group-hover:opacity-100 transition-opacity rounded-tl-3xl rounded-br-lg -z-10"></div>
            <div className="flex justify-center">
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/f0c13b46fc05ce628b1655eb31f20a79aa71b8d9?width=80" alt="Best Flights" className="w-16 h-16 md:w-20 md:h-20" />
            </div>
            <h3 className="font-openSans font-semibold text-lg md:text-xl text-travel-heading">
              Best Flights
            </h3>
            <p className="text-travel-text text-sm md:text-base leading-relaxed">
              Engrossed listening. Park gate sell they west hard for the.
            </p>
          </div>

          <div className="group text-center space-y-4 hover:bg-white hover:shadow-2xl rounded-3xl p-6 md:p-8 transition-all duration-300 relative">
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-travel-orange opacity-0 group-hover:opacity-100 transition-opacity rounded-tl-3xl rounded-br-lg -z-10"></div>
            <div className="flex justify-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-travel-circle rounded-full flex items-center justify-center">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="w-10 h-10">
                  <path d="M20 5C11.716 5 5 11.716 5 20C5 28.284 11.716 35 20 35C28.284 35 35 28.284 35 20C35 11.716 28.284 5 20 5Z" stroke="#84829A" strokeWidth="2" />
                  <circle cx="20" cy="20" r="3" fill="#84829A" />
                </svg>
              </div>
            </div>
            <h3 className="font-openSans font-semibold text-lg md:text-xl text-travel-heading">
              Local Events
            </h3>
            <p className="text-travel-text text-sm md:text-base leading-relaxed">
              Barton vanity itself do in it. Preferd to men it engrossed listening.
            </p>
          </div>

          <div className="group text-center space-y-4 hover:bg-white hover:shadow-2xl rounded-3xl p-6 md:p-8 transition-all duration-300 relative">
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-travel-orange opacity-0 group-hover:opacity-100 transition-opacity rounded-tl-3xl rounded-br-lg -z-10"></div>
            <div className="flex justify-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-travel-circle rounded-full flex items-center justify-center">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="w-10 h-10">
                  <circle cx="20" cy="20" r="8" stroke="#84829A" strokeWidth="2" />
                  <circle cx="20" cy="20" r="4" fill="#84829A" />
                </svg>
              </div>
            </div>
            <h3 className="font-openSans font-semibold text-lg md:text-xl text-travel-heading">
              Customization
            </h3>
            <p className="text-travel-text text-sm md:text-base leading-relaxed">
              We deliver outsourced aviation services for military customers
            </p>
          </div>
        </div>
      </section>

      {/* Top Destinations Section */}
      <section className="container mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-20 lg:py-24" data-aos="fade-up">
        <div className="text-center mb-12 md:mb-16" data-aos="fade-up" data-aos-delay="200">
          <p className="text-travel-text font-semibold text-sm md:text-base lg:text-lg uppercase tracking-wide mb-2">
            Top Selling
          </p>
          <h2 className="font-volkhov font-bold text-3xl md:text-4xl lg:text-5xl text-travel-heading">
            Top Destinations
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12" data-aos="fade-up" data-aos-delay="400">
          <div className="group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="overflow-hidden">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/dab39f1ab40be73ce56fc421792fac5fa3168cfa?width=628"
                alt="Rome, Italy"
                className="w-full h-64 md:h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="bg-white p-6 md:p-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-travel-text text-lg font-medium">Rome, Italty</h3>
                <span className="text-travel-text text-lg">$5,42k</span>
              </div>
              <div className="flex items-center gap-2 text-travel-text">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M18.0681 2.76033L11.1931 17.7603C11.1356 17.886 11.038 17.989 10.9157 18.0533C10.7934 18.1177 10.6532 18.1396 10.5171 18.1158C10.381 18.092 10.2566 18.0237 10.1634 17.9217C10.0702 17.8197 10.0134 17.6896 10.002 17.5519L9.42071 10.579L2.44777 9.99771C2.31005 9.98627 2.18001 9.92951 2.07798 9.8363C1.97595 9.7431 1.90769 9.61871 1.88387 9.48258C1.86005 9.34646 1.88201 9.20628 1.94633 9.08397C2.01064 8.96166 2.11368 8.86411 2.23933 8.80658L17.2393 1.93158C17.3553 1.87844 17.4847 1.86205 17.6103 1.88461C17.7358 1.90718 17.8515 1.96762 17.9417 2.05781C18.0319 2.14801 18.0923 2.26365 18.1149 2.38919C18.1374 2.51474 18.121 2.64418 18.0679 2.76014L18.0681 2.76033Z" fill="#080809" />
                </svg>
                <span>10 Days Trip</span>
              </div>
            </div>
          </div>

          <div className="group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="overflow-hidden">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/3269954170e93532da95b6a4f7d50526b510c8fc?width=628"
                alt="London, UK"
                className="w-full h-64 md:h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="bg-white p-6 md:p-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-travel-text text-lg font-medium">London, UK</h3>
                <span className="text-travel-text text-lg">$4.2k</span>
              </div>
              <div className="flex items-center gap-2 text-travel-text">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M18.0681 2.76033L11.1931 17.7603C11.1356 17.886 11.038 17.989 10.9157 18.0533C10.7934 18.1177 10.6532 18.1396 10.5171 18.1158C10.381 18.092 10.2566 18.0237 10.1634 17.9217C10.0702 17.8197 10.0134 17.6896 10.002 17.5519L9.42071 10.579L2.44777 9.99771C2.31005 9.98627 2.18001 9.92951 2.07798 9.8363C1.97595 9.7431 1.90769 9.61871 1.88387 9.48258C1.86005 9.34646 1.88201 9.20628 1.94633 9.08397C2.01064 8.96166 2.11368 8.86411 2.23933 8.80658L17.2393 1.93158C17.3553 1.87844 17.4847 1.86205 17.6103 1.88461C17.7358 1.90718 17.8515 1.96762 17.9417 2.05781C18.0319 2.14801 18.0923 2.26365 18.1149 2.38919C18.1374 2.51474 18.121 2.64418 18.0679 2.76014L18.0681 2.76033Z" fill="#080809" />
                </svg>
                <span>12 Days Trip</span>
              </div>
            </div>
          </div>

          <div className="group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="overflow-hidden">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/33d724676721cccc068fb077096c347acced5c69?width=628"
                alt="Full Europe"
                className="w-full h-64 md:h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="bg-white p-6 md:p-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-travel-text text-lg font-medium">Full Europe</h3>
                <span className="text-travel-text text-lg">$15k</span>
              </div>
              <div className="flex items-center gap-2 text-travel-text">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M18.0681 2.76033L11.1931 17.7603C11.1356 17.886 11.038 17.989 10.9157 18.0533C10.7934 18.1177 10.6532 18.1396 10.5171 18.1158C10.381 18.092 10.2566 18.0237 10.1634 17.9217C10.0702 17.8197 10.0134 17.6896 10.002 17.5519L9.42071 10.579L2.44777 9.99771C2.31005 9.98627 2.18001 9.92951 2.07798 9.8363C1.97595 9.7431 1.90769 9.61871 1.88387 9.48258C1.86005 9.34646 1.88201 9.20628 1.94633 9.08397C2.01064 8.96166 2.11368 8.86411 2.23933 8.80658L17.2393 1.93158C17.3553 1.87844 17.4847 1.86205 17.6103 1.88461C17.7358 1.90718 17.8515 1.96762 17.9417 2.05781C18.0319 2.14801 18.0923 2.26365 18.1149 2.38919C18.1374 2.51474 18.121 2.64418 18.0679 2.76014L18.0681 2.76033Z" fill="#080809" />
                </svg>
                <span>28 Days Trip</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Trip Section */}
      <section className="container mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-20 lg:py-24" data-aos="fade-up">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center" data-aos="fade-up" data-aos-delay="200">
          <div className="space-y-8 md:space-y-12">
            <div className="space-y-4">
              <p className="text-travel-text font-semibold text-sm md:text-base lg:text-lg uppercase tracking-wide">
                Easy and Fast
              </p>
              <h2 className="font-volkhov font-bold text-3xl md:text-4xl lg:text-5xl text-travel-heading leading-tight">
                Book your next trip in 3 easy steps
              </h2>
            </div>
            <div className="space-y-8">
              <div className="flex items-start gap-4 md:gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-travel-yellow rounded-lg flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="white" strokeWidth="2" />
                    <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-travel-text-dark text-lg mb-1">Choose Destination</h3>
                  <p className="text-travel-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 md:gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-travel-orange rounded-lg flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="6" width="18" height="14" rx="2" stroke="white" strokeWidth="2" />
                    <path d="M8 6V4M16 6V4M3 10H21" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-travel-text-dark text-lg mb-1">Make Payment</h3>
                  <p className="text-travel-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 md:gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-travel-purple rounded-lg flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                    <path d="M2 17L12 22L22 17M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-travel-text-dark text-lg mb-1">Reach Airport on Selected Date</h3>
                  <p className="text-travel-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 max-w-md mx-auto lg:ml-auto">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/98b67029393861fa4afee2cae75e65d769e1670c?width=642"
                alt="Greece"
                className="w-full h-48 object-cover rounded-3xl mb-6"
              />
              <h3 className="text-travel-black text-xl font-medium mb-4">Trip To Greece</h3>
              <div className="flex items-center gap-4 text-travel-text-gray text-sm mb-6">
                <span>14-29 June</span>
                <span>|</span>
                <span>by Robbin joseph</span>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-9 h-9 bg-travel-circle rounded-full flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7" stroke="#84829A" strokeWidth="2" />
                  </svg>
                </div>
                <div className="w-9 h-9 bg-travel-circle rounded-full flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8L6 11L13 4" stroke="#84829A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="w-9 h-9 bg-travel-circle rounded-full flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 3V8L11 10" stroke="#84829A" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-travel-border">
                <div className="flex items-center gap-2 text-travel-text-gray">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 0C6.4087 0 4.88258 0.632141 3.75736 1.75736C2.63214 2.88258 2 4.4087 2 6C2 9.3 8 16 8 16C8 16 14 9.3 14 6C14 4.4087 13.3679 2.88258 12.2426 1.75736C11.1174 0.632141 9.5913 0 8 0Z" fill="#84829A" />
                    <circle cx="8" cy="6" r="2" fill="white" />
                  </svg>
                  <span className="text-sm">24 people going</span>
                </div>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M18.3644 1.74705C17.33 0.635129 15.8804 0.00246181 14.3617 0.000116429C12.8417 0.00187547 11.3906 0.634207 10.3546 1.74634L10.0015 2.11946L9.64836 1.74634C7.59251 -0.466322 4.13215 -0.593391 1.91953 1.46246C1.82148 1.5536 1.72679 1.64825 1.63565 1.74634C-0.545218 4.09867 -0.545218 7.7341 1.63565 10.0864L9.48255 18.3615C9.75403 18.6481 10.2064 18.6604 10.493 18.3889C10.5024 18.38 10.5115 18.3709 10.5204 18.3615L18.3645 10.0864C20.5452 7.73435 20.5452 4.09913 18.3644 1.74705Z" fill="#4152CA" />
                </svg>
              </div>
            </div>

            <div className="absolute -bottom-12 -right-8 hidden lg:block bg-white rounded-2xl shadow-xl p-6 max-w-xs">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/60954c3c8a08795ecb652ad45b872ae133976b4c?width=148"
                  alt="Rome"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <p className="text-travel-text-gray text-xs mb-1">Ongoing</p>
                  <h4 className="text-travel-black text-sm font-medium">Trip to rome</h4>
                </div>
              </div>
              <div className="mb-2">
                <p className="text-xs text-travel-purple-light mb-1">
                  <span className="font-bold">40%</span> completed
                </p>
                <div className="w-full h-1.5 bg-travel-circle rounded-full overflow-hidden">
                  <div className="w-2/5 h-full bg-travel-purple-light rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-20 lg:py-24" data-aos="fade-up">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center" data-aos="fade-up" data-aos-delay="200">
          <div className="space-y-6">
            <p className="text-travel-text font-semibold text-sm md:text-base lg:text-lg uppercase tracking-wide">
              Testimonials
            </p>
            <h2 className="font-volkhov font-bold text-3xl md:text-4xl lg:text-5xl text-travel-heading leading-tight">
              What people say about Us.
            </h2>
            <div className="flex gap-3 mt-8">
              <div className="w-3 h-3 rounded-full bg-travel-text-dark"></div>
              <div className="w-3 h-3 rounded-full bg-gray-300"></div>
              <div className="w-3 h-3 rounded-full bg-gray-300"></div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 border-2 border-travel-border relative z-10">
              <div className="flex items-start gap-4 mb-6">
                <img
                  src="data:image/svg+xml,%3Csvg width='68' height='68' viewBox='0 0 68 68' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='34' cy='34' r='34' fill='%23E5E5E5'/%3E%3C/svg%3E"
                  alt="Mike taylor"
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h4 className="font-semibold text-travel-text text-lg">Mike taylor</h4>
                  <p className="text-travel-text text-sm">Lahore, Pakistan</p>
                </div>
              </div>
              <p className="text-travel-text leading-8">
                "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no."
              </p>
            </div>

            <div className="hidden md:block absolute -bottom-8 -right-8 bg-white rounded-xl shadow-lg p-6 border-2 border-travel-border max-w-md">
              <p className="text-travel-text-gray leading-8 mb-6">
                "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no."
              </p>
              <div>
                <h4 className="font-semibold text-travel-text">Chris Thomas</h4>
                <p className="text-travel-text text-sm">CEO of Red Button</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="container mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-16" data-aos="fade-up">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/512797ca3c0e4a7f1e9d8807fc8e7e9287ccb380?width=260" alt="Partner" className="h-12 md:h-16 w-auto" />
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/c981df373a13c4d102f42e5ce2d42e4dfe2c0bc3?width=346" alt="Partner" className="h-12 md:h-16 w-auto" />
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/eab7d6628bf18c706e96cc25496f08dd9bb67bce?width=324" alt="Partner" className="h-12 md:h-16 w-auto" />
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/aa89aab9411b6a50df333f21624cedeb67352427?width=324" alt="Partner" className="h-12 md:h-16 w-auto" />
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/bb29432a060089e55cab30af9d7673a2666f3623?width=188" alt="Partner" className="h-8 md:h-10 w-auto" />
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="container mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-20 lg:py-24" data-aos="fade-up">
        <div className="relative bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-3xl p-8 md:p-12 lg:p-20 overflow-hidden">
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl text-travel-text mb-8 md:mb-12 leading-snug">
              Subscribe to get information, latest news and other interesting offers about Jadoo
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
              <div className="relative flex-1 w-full sm:max-w-md">
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <svg width="21" height="18" viewBox="0 0 21 18" fill="none">
                    <path d="M0.5 0.5L5.9 4.55C6.25556 4.81667 6.74444 4.81667 7.1 4.55L12.5 0.5" stroke="#39425D" strokeLinecap="round" />
                    <rect x="0.5" y="0.5" width="20" height="17" rx="4.5" stroke="#39425D" />
                  </svg>
                </div>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full pl-12 pr-4 py-4 md:py-5 rounded-xl bg-white text-travel-text-dark font-montserrat focus:outline-none focus:ring-2 focus:ring-travel-purple"
                />
              </div>
              <button className="bg-gradient-orange text-white px-8 md:px-10 py-4 md:py-5 rounded-xl font-openSans font-semibold hover:shadow-lg transition-all whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
          <div className="absolute top-0 right-0 opacity-40">
            <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
              <circle cx="35" cy="35" r="35" fill="url(#paint0_linear)" />
              <defs>
                <linearGradient id="paint0_linear" x1="49.6467" y1="1.96393" x2="19.564" y2="77.7643" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#747DEF" />
                  <stop offset="1" stopColor="#5E3BE1" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-12 md:pt-16 lg:pt-20 pb-8" data-aos="fade-up">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
            <div className="lg:col-span-2">
              <Link to="/" className="font-dynapuff text-2xl md:text-3xl text-travel-black inline-block mb-4">
                Travello
              </Link>
              <p className="text-travel-text text-sm leading-relaxed max-w-xs">
                Book your trip in minute, get full Control for much longer.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-travel-black text-lg md:text-xl mb-4 md:mb-6">Company</h3>
              <ul className="space-y-3">
                <li><Link to="/about" className="text-travel-text hover:text-travel-purple transition-colors">About</Link></li>
                <li><Link to="/careers" className="text-travel-text hover:text-travel-purple transition-colors">Careers</Link></li>
                <li><Link to="/mobile" className="text-travel-text hover:text-travel-purple transition-colors">Mobile</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-travel-black text-lg md:text-xl mb-4 md:mb-6">Contact</h3>
              <ul className="space-y-3">
                <li><Link to="/help" className="text-travel-text hover:text-travel-purple transition-colors">Help/FAQ</Link></li>
                <li><Link to="/press" className="text-travel-text hover:text-travel-purple transition-colors">Press</Link></li>
                <li><Link to="/affilates" className="text-travel-text hover:text-travel-purple transition-colors">Affilates</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-travel-black text-lg md:text-xl mb-4 md:mb-6">More</h3>
              <ul className="space-y-3">
                <li><Link to="/airlinefees" className="text-travel-text hover:text-travel-purple transition-colors">Airlinefees</Link></li>
                <li><Link to="/airline" className="text-travel-text hover:text-travel-purple transition-colors">Airline</Link></li>
                <li><Link to="/low-fare-tips" className="text-travel-text hover:text-travel-purple transition-colors">Low fare tips</Link></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-gray-200">
            <div className="flex items-center gap-4">
              <Link to="#" className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-travel-purple hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" />
                </svg>
              </Link>
              <Link to="#" className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-travel-purple hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link to="#" className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-travel-purple hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
            <p className="text-travel-text text-sm">
              © {new Date().getFullYear()} Travello. All rights reserved.
            </p>

          </div>
        </div>
      </footer>
    </div>
  );
}
