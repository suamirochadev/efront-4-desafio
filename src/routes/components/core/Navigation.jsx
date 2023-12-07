
const Navbar = () => {

  return (
    <header className={`flex w-full justify-evenly bg-geen-500 p-2`}>
      <div className="container">
        <div className="relative m-4 flex items-center justify-between">
          <div className="max-w-full px-4">
            <a href="/#" className="w-full p-5">
              <img
                src="./logo-icon.svg"
                alt="logo"
                className="w-[50px] h-[50px]"
              />
            </a>
          </div>
          <div className="flex pr- gap-2 sm:flex lg:pr-0">
             <a
               href="/#"
               className="px-2 py-3 text-base font-bold text-black rounded-md border border-solid border-black  hover:text-primary dark:text-black"
             >
              Entrar
             </a>
             <a
                href="/#"
                className="rounded-md bg-[#04C35C] px-2 py-3 text-[#FFFFFF] text-base font-bold font-sans hover:bg-primary/90"
              >
                Inscrever-se
             </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;