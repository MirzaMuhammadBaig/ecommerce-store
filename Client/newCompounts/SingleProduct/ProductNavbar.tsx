

function ProductNavbar() {
    return (
      <>
        <div className="isolate bg-white">
          <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
           
          </div>
          <div className="px-6 pt-6 lg:px-8">
            <nav
              className="flex items-center justify-between"
              aria-label="Global"
            >
              <div className="flex lg:flex-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>

                <a href="" className="-m-1.5 p-1.5">
                  <h1 className="font-semibold">Apple iphone SE 32gb</h1>
                </a>
              </div>

              <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4">
                <p className="">Apple cell</p>

                <p className=""> cell phone </p>

                <p className="">Reiview</p>
              </div>
            </nav>
          </div>
            </div>
            {/* <hr /> */}
      </>
    ); 



}

export default ProductNavbar;