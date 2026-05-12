import { Link, useNavigate } from 'react-router-dom';

function Header() {

  const navigate = useNavigate();

  return (

    <header className="
      sticky
      top-0
      z-50
      bg-white/90
      backdrop-blur-lg
      border-b
      border-gray-200
      shadow-sm
    ">

      <div className="
        max-w-7xl
        mx-auto
        px-4
        lg:px-6
        py-3
        flex
        items-center
        justify-between
      ">

        {/* LOGO */}
        <div
          onClick={() => navigate('/')}
          className="
            flex
            items-center
            gap-3
            cursor-pointer
            group
          "
        >

          <img
            src="/tickquiz-logo.png"
            alt="TickQuiz Logo"
            className="
              h-11
              w-auto
              object-contain
              group-hover:scale-105
              transition-all
              duration-300
            "
          />

          <div className="hidden sm:block">

            <div className="
              text-2xl
              font-black
              leading-none
              text-gray-900
            ">
              TickQuiz
            </div>

            <div className="
              text-[10px]
              font-semibold
              uppercase
              tracking-wider
              text-blue-600
            ">
              Learn • Compete • Win
            </div>

          </div>

        </div>

        {/* NAVIGATION */}
        <nav aria-label="Main navigation">

          <ul className="
            flex
            items-center
            gap-2
            lg:gap-4
          ">

            <li>

              <Link
                to="/"
                className="
                  px-4
                  py-2
                  rounded-xl
                  text-sm
                  font-bold
                  text-gray-700
                  hover:bg-blue-50
                  hover:text-blue-700
                  transition-all
                  duration-300
                "
              >
                🏠 Home
              </Link>

            </li>

            <li>

              <Link
                to="/about"
                className="
                  px-4
                  py-2
                  rounded-xl
                  text-sm
                  font-bold
                  text-gray-700
                  hover:bg-blue-50
                  hover:text-blue-700
                  transition-all
                  duration-300
                "
              >
                ℹ About
              </Link>

            </li>

            <li>

              <Link
                to="/leaderboard"
                className="
                  hidden
                  sm:block
                  px-4
                  py-2
                  rounded-xl
                  text-sm
                  font-bold
                  text-gray-700
                  hover:bg-yellow-50
                  hover:text-yellow-700
                  transition-all
                  duration-300
                "
              >
                🏆 Leaderboard
              </Link>

            </li>

            <li>

              <Link
                to="/contact"
                className="
                  px-4
                  py-2
                  rounded-xl
                  text-sm
                  font-bold
                  text-gray-700
                  hover:bg-green-50
                  hover:text-green-700
                  transition-all
                  duration-300
                "
              >
                ✉ Contact
              </Link>

            </li>

            

          </ul>

        </nav>

      </div>

    </header>

  );
}

export default Header;