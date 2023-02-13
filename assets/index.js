



< !--https://optimistic-darwin-f7997d.netlify.app/ -->
< !DOCTYPE html >
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <title>Document</title>
      <link href="../dist/output.css" rel="stylesheet" />

      <link rel="stylesheet" href="./assets/style/style.css" />
    </head>
    <body>
      <header class="absolute top-0 left-0 right-0 text-white bg-transparent">
        <nav class="py-2 text-[11px]">
          <div
            class="container flex flex-col px-1 mx-auto xl:px-0 md:flex-row md:justify-between"
          >
            <ul class="nav-wrapper">
              <li class="pt-2 md:py-0">
                <a href="#">Call US: +92-123-1234 567</a>
              </li>
            </ul>
            <ul class="flex flex-col justify-between w-6/12 md:flex-row">
              <li class="pt-2 md:py-0">
                <a href="#">About Us</a>
              </li>
              <li class="pt-2 md:py-0">
                <a href="#">Contact us</a>
              </li>
              <li class="pt-2 md:py-0">
                <a href="#">Support</a>
              </li>
              <li class="pt-2 md:py-0">
                <a href="#">What is my IP</a>
              </li>
              <li class="pt-2 text-xs md:py-0">
                <a href="#"><i class="fas fa-globe-africa"></i> EN - $ USD</a>
              </li>
              <li class="pt-2 md:py-0">
                <a href="#"><i class="fa fa-lock"></i> Register</a>
              </li>
              <li class="pt-2 md:py-0">
                <a href="#"><i class="fa fa-key"></i> Login</a>
              </li>
            </ul>
          </div>
        </nav>

        <nav class="py-3 bg-[#1961cf]">
          <div
            class="container flex flex-wrap items-center justify-between px-1 mx-auto xl:px-0 nav-wrapper"
          >
            <div class="flex items-center w-20 mr-2 md:w-24 xl:w-32">
              <img src="./assets/images/logo11.png" alt="" />
            </div>
            <div class="block lg:hidden">
              <button
                onclick="toggle('#navbar')"
                class="flex items-center px-3 py-2 border border-[#1961cf] rounded hover:text-white hover:border-white"
              >
                <svg
                  class="w-3 h-3 fill-current"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            </div>
            <div
              id="navbar"
              class="flex-grow hidden w-full lg:flex lg:items-center lg:w-auto"
            >
              <div class="text-sm lg:flex-grow">
                <a
                  href="#"
                  class="block mt-4 mr-4 lg:inline-block lg:mt-0 hover:text-white"
                >
                  Blacklist Check
                </a>
                <a
                  href="#"
                  class="block mt-4 mr-4 lg:inline-block lg:mt-0 hover:text-white"
                >
                  DNS Propagation check
                </a>
                <a
                  href="#"
                  class="block mt-4 lg:inline-block lg:mt-0 hover:text-white"
                >
                  SFP
                </a>
                <a
                  href="#responsive-header"
                  class="block mt-4 mr-4 lg:inline-block lg:mt-0 hover:text-white"
                >
                  DMARC
                </a>
                <a
                  href="#responsive-header"
                  class="block mt-4 mr-4 lg:inline-block lg:mt-0 hover:text-white"
                >
                  Traceroute
                </a>
                <a
                  href="#responsive-header"
                  class="block mt-4 lg:inline-block lg:mt-0 hover:text-white"
                >
                  IP to Geo
                </a>
                <a
                  href="#responsive-header"
                  class="block mt-4 mr-4 lg:inline-block lg:mt-0 hover:text-white"
                >
                  MY IP
                </a>
                <a
                  href="#responsive-header"
                  class="block mt-4 mr-4 lg:inline-block lg:mt-0 hover:text-white"
                >
                  SSL check
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <section
          class="text-white hero-secion min-h-[120vh] md:min-h-[88vh] xl:pb-16 bg-no-repeat bg-cover flex flex-col justify-end items-center"
        >
          <div class="container items-center px-1 mx-auto text-center xl:px-0">
            <h1 class="font-black text-[45px]">SSL Checker</h1>
            <h6 class="mb-5 font-normal">
              This SSL Checker will help you diagnose problems with your SSL
              certification installation.
            </h6>
            <div class="w-10/12 lg:w-[55%] mx-auto mb-5 text-sm flex rounded-md">
              <input
                class="w-3/4 p-2 bg-blue-600 outline-none md:w-4/5 lg:p-5 rounded-l-md placeholder:text-white/50"
                type="text"
                placeholder="www.ristoolkit.ie"
              />
              <a
                class="w-1/4 p-2 text-center bg-blue-500 rounded-r-md md:w-1/5 lg:p-5"
                href=""
              >Checker SSL</a
              >
            </div>
            <h6 class="font-light text-white/75">
              More information about SSL checker
            </h6>
          </div>
        </section>
        <section class="my-14">
          <div class="container px-1 mx-auto text-center xl:px-0">
            <h2 class="py-2 text-2xl font-medium text-blue-600">Our Features</h2>
            <h1 class="text-3xl font-bold">Why chose Us</h1>
            <p class="w-10/12 py-3 mx-auto lg:w-6/12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              maiores quasi explicabo quas praesentium, pariatur ad eum nobis
              dolor illo.
            </p>
            <div class="flex flex-col justify-around mx-auto md:flex-row">
              <div
                class="md:w-1/3 text-[#6c757d] py-5 mx-5 my-3 md:my-0 text-center border rounded shadow-xl"
              >
                <img class="mx-auto" src="./assets/images/ip1.png" alt="Ip img" />
                <h6 class="font-medium py-2.5 text-xl">Blacklist Check</h6>
                <p class="w-4/5 mx-auto text-center">
                  Right here and now you can check to see if your IP adddress is
                  listed on an anti-spam database will your emails or forum chats
                  get blacked? below is a list of the major...
                </p>
              </div>

              <div
                class="md:w-1/3 text-[#6c757d] py-5 mx-5 my-3 md:my-0 text-center border rounded shadow-xl"
              >
                <img
                  class="mx-auto"
                  src="./assets/images/world.png"
                  alt="Ip img"
                />
                <h6 class="font-medium py-2.5 text-xl">
                  DNS Propagation Checker
                </h6>
                <p class="w-4/5 mx-auto text-center">
                  dnstoolkitle lets you instantly perform a DNS lookup to check a
                  domain names current IP aadddress and DNS record information
                  againt multiple name servers location in...
                </p>
              </div>

              <div
                class="md:w-1/3 text-[#6c757d] py-5 mx-5 my-3 md:my-0 text-center border rounded shadow-xl"
              >
                <img
                  class="mx-auto"
                  src="./assets/images/computer.png"
                  alt="Ip img"
                />
                <h6 class="font-medium py-2.5 text-xl">DNS Lookup</h6>
                <p class="w-4/5 mx-auto text-center">
                  if you can find out the IPv4 or IPv8 address of an internet
                  user, you can get an idea what part of the country or world
                  they're in by using our IP Lookup tool.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="py-14 bg-[#f7f7f7]">
          <div class="container px-1 mx-auto text-center xl:px-0">
            <h2 class="py-2 text-2xl font-medium text-blue-600">
              Awesome Pricing
            </h2>
            <h1 class="text-3xl font-bold">Paid Service</h1>
            <p class="w-10/12 py-3 mx-auto lg:w-6/12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              maiores quasi explicabo quas praesentium, pariatur ad eum nobis
              dolor illo.
            </p>

            <div class="flex flex-col justify-around mx-auto md:flex-row">
              <div
                class="py-10 text-center duration-200 ease-in scale-90 bg-white border rounded shadow-xl hover:scale-95 xl:scale-100 xl:hover:scale-105 lg:w-96 xl:my-3"
              >
                <img
                  class="mx-auto"
                  src="./assets/images/clock.png"
                  alt="Ip img"
                />
                <h6
                  class="font-medium h-11 overflow-y-hidden py-2.5 text-xl uppercase"
                >
                  Fast Performance
                </h6>
                <ul
                  class="mx-auto overflow-y-hidden h-64 text-md leading-loose text-[#6c757d] center w-4/5"
                >
                  <li class="py-1">Join our Premium DNS infrastructure</li>
                  <li class="py-1">and be confident your visitors can</li>
                  <li class="py-1">find you fast - no matter where</li>
                  <li class="py-1">they-re located throughout the</li>
                  <li class="py-1">world - with the Anycast</li>
                  <li class="py-1">DNS Network</li>
                </ul>

                <h2 class="py-5 text-2xl font-semibold text-[#1c65cc]">
                  $02.70/mo
                </h2>
                <button
                  class="px-6 py-2.5 text-lg text-white uppercase bg-[#1c65cc] rounded-md"
                >
                  order now
                </button>
              </div>

              <div
                class="py-10 text-center duration-200 ease-in scale-90 bg-white border rounded shadow-xl hover:scale-95 xl:scale-100 xl:hover:scale-105 lg:w-96 xl:my-3"
              >
                <img
                  class="mx-auto"
                  src="./assets/images/winner.png"
                  alt="Ip img"
                />
                <h6
                  class="font-medium h-11 overflow-y-hidden py-2.5 text-xl uppercase"
                >
                  critical secondary DNS
                </h6>
                <ul
                  class="mx-auto overflow-y-hidden h-64 text-md leading-loose text-[#6c757d] center w-11/12"
                >
                  <li class="py-1">Power autoges and internet routing</li>
                  <li class="py-1">problem can take down your</li>
                  <li class="py-1">primary DNS, making your</li>
                  <li class="py-1">website unavailable and</li>
                  <li class="py-1">leaving your visitors</li>
                  <li class="py-1">high and dry!</li>
                </ul>

                <h2 class="py-5 text-2xl font-semibold text-[#1c65cc]">
                  $03.80/mo
                </h2>
                <button
                  class="px-6 py-2.5 text-lg text-white uppercase bg-[#1c65cc] rounded-md"
                >
                  order now
                </button>
              </div>

              <div
                class="py-10 text-center duration-200 ease-in scale-90 bg-white border rounded shadow-xl hover:scale-95 xl:scale-100 xl:hover:scale-105 lg:w-96 xl:my-3"
              >
                <img
                  class="mx-auto"
                  src="./assets/images/lacker.png"
                  alt="Ip img"
                />
                <h6
                  class="font-medium h-11 overflow-y-hidden py-2.5 text-xl uppercase"
                >
                  close security gaps
                </h6>
                <ul
                  class="mx-auto overflow-y-hidden h-64 text-md leading-loose text-[#6c757d] center w-11/12"
                >`
                  <li class="py-1">All DNS system worldwide have the</li>
                  <li class="py-1">same vulnerability - hackers</li>
                  <li class="py-1">can redirect your visitors ot a</li>
                  <li class="py-1">maliciaus website or</li>
                  <li class="py-1">intercept their personal</li>
                  <li class="py-1">information</li>
                </ul>

                <h2 class="py-5 text-2xl font-semibold text-[#1c65cc]">
                  $02.70/mo
                </h2>
                <button
                  class="px-6 py-2.5 text-lg text-white uppercase bg-[#1c65cc] rounded-md"
                >
                  order now
                </button>
              </div>
            </div>
          </div>
        </section>

        <section class="my-14">
          <div class="container px-1 mx-auto text-center xl:px-0">
            <h2 class="py-2 text-2xl font-medium text-blue-600">Our Service</h2>
            <h1 class="text-3xl font-bold">We Provide Best Services</h1>
            <p class="w-10/12 py-3 mx-auto lg:w-6/12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              maiores quasi explicabo quas praesentium, pariatur ad eum nobis
              dolor illo.
            </p>
            <div class="flex flex-wrap justify-around mx-auto">
              <div
                class="py-5 border my-2 lg:my-4 text-[#6c757d] text-center duration-200 ease-in scale-90 lg:scale-100 bg-[#f7f7f7] rounded shadow-xl outline outline-0 outline-blue-600 lg:hover:scale-110 w-96 lg:hover:outline-4"
              >
                <img
                  class="mx-auto"
                  src="./assets/images/service1.png"
                  alt="Ip img"
                />
                <h6 class="font-medium py-2.5 text-xl">IP Look</h6>
                <p class="w-4/5 mx-auto text-center">
                  If you can find out the IPv4 or IPv6 address of an internet user
                  you can get an idea.
                </p>
              </div>

              <div
                class="scale-90 py-5 text-[#6c757d] border my-2 lg:my-4 text-center duration-200 ease-in lg:scale-100 bg-[#f7f7f7] rounded shadow-xl outline outline-0 outline-blue-600 lg:hover:scale-110 w-96 lg:hover:outline-4"
              >
                <img
                  class="mx-auto"
                  src="./assets/images/service2.png"
                  alt="Ip img"
                />
                <h6 class="font-medium py-2.5 text-xl">Trace Email</h6>
                <p class="w-4/5 mx-auto text-center">
                  In the following steps you'll learn how to find and copy an
                  email header
                </p>
              </div>

              <div
                class="py-5 scale-90 border text-[#6c757d] my-2 lg:my-4 text-center duration-200 ease-in lg:scale-100 bg-[#f7f7f7] rounded shadow-xl outline outline-0 outline-blue-600 lg:hover:scale-110 w-96 lg:hover:outline-4"
              >
                <img
                  class="mx-auto"
                  src="./assets/images/service3.png"
                  alt="Ip img"
                />
                <h6 class="font-medium py-2.5 text-xl">Hide IP</h6>
                <p class="w-4/5 mx-auto text-center">
                  Borrow a different IP address to go any where online and stay
                  hidden.
                </p>
              </div>

              <div
                class="text-[#6c757d] scale-90 py-5 my-2 lg:my-4 border text-center duration-200 ease-in lg:scale-100 bg-[#f7f7f7] rounded shadow-xl outline outline-0 outline-blue-600 lg:hover:scale-110 w-96 lg:hover:outline-4"
              >
                <img
                  class="mx-auto"
                  src="./assets/images/service4.png"
                  alt="Ip img"
                />
                <h6 class="font-medium py-2.5 text-xl">VPN Comparison</h6>
                <p class="w-4/5 mx-auto text-center">
                  VPN service offer up different 'gateway' cities. allowing you to
                  choose.
                </p>
              </div>

              <div
                class="text-[#6c757d] scale-90 py-5 my-2 lg:my-4 border text-center duration-200 ease-in lg:scale-100 bg-[#f7f7f7] rounded shadow-xl outline outline-0 outline-blue-600 lg:hover:scale-110 w-96 lg:hover:outline-4"
              >
                <img
                  class="mx-auto"
                  src="./assets/images/service5.png"
                  alt="Ip img"
                />
                <h6 class="font-medium py-2.5 text-xl">Traceroute</h6>
                <p class="w-4/5 mx-auto text-center">
                  A continuous quality check of the accessibility of your web
                  server. 24 hours per day.
                </p>
              </div>

              <div
                class="py-5 text-[#6c757d] my-2 lg:my-4 scale-90 border text-center duration-200 ease-in lg:scale-100 bg-[#f7f7f7] rounded shadow-xl outline outline-0 outline-blue-600 lg:hover:scale-110 w-96 lg:hover:outline-4"
              >
                <img
                  class="mx-auto"
                  src="./assets/images/service6.png"
                  alt="Ip img"
                />
                <h6 class="font-medium py-2.5 text-xl">SPF Record</h6>
                <p class="w-4/5 mx-auto text-center">
                  These tools are meant to help you deploy SPF record for your
                  domain
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer class="bg-[#1037c9]">
        <div class="container px-1 py-5 mx-auto xl:px-0">
          <div class="flex flex-wrap justify-between w-1/2 mx-auto lg:w-3/12">
            <img
              class="duration-200 ease-in scale-100 cursor-pointer hover:scale-110"
              src="./assets/images/facebook.png"
              alt=""
            />
            <img
              class="duration-200 ease-in scale-100 cursor-pointer hover:scale-110"
              src="./assets/images/twitter.png"
              alt=""
            />
            <img
              class="duration-200 ease-in scale-100 cursor-pointer hover:scale-110"
              src="./assets/images/instragram.png"
              alt=""
            />
            <img
              class="duration-200 ease-in scale-100 cursor-pointer hover:scale-110"
              src="./assets/images/youtube.png"
              alt=""
            />
          </div>
          <p class="px-5 py-3 text-xs text-center text-white">
            DNS Toolkit is an ICANN-accredited domain name registrar.In addition
            to great pricing and a commitment to world-class customer service. we
            offer web hosting email. website builder.premium and expired domain
            names, and SSL certificates.
          </p>
        </div>
        <div class="container px-1 py-2 mx-auto xl:px-0 lg:py-10"><hr /></div>
        <div
          class="container flex flex-wrap justify-around px-1 py-5 mx-auto text-xs text-left text-white xl:px-0"
        >
          <div class="w-full my-3 sm:w-1/2 md:w-3/12 md:my-0">
            <h3 class="py-1">DNS toolkit Services</h3>
            <ul>
              <li>
                <span
                  class="before:content-['\00BB'] text-white text-sm font-medium"
                ></span>
                <a class="text-gray-300 hover:underline hover:text-white" href="#"
                >Blacklist check</a
                >
              </li>

              <li>
                <span
                  class="before:content-['\00BB'] text-white text-sm font-medium"
                ></span>
                <a class="text-gray-300 hover:underline hover:text-white" href="#"
                >DNSPropagation check</a
                >
              </li>

              <li>
                <span
                  class="before:content-['\00BB'] text-white text-sm font-medium"
                ></span>
                <a class="text-gray-300 hover:underline hover:text-white" href="#"
                >SPF</a
                >
              </li>

              <li>
                <span
                  class="before:content-['\00BB'] text-white text-sm font-medium"
                ></span>
                <a class="text-gray-300 hover:underline hover:text-white" href="#"
                >DMARC</a
                >
              </li>

              <li>
                <span
                  class="before:content-['\00BB'] text-white text-sm font-medium"
                ></span>
                <a class="text-gray-300 hover:underline hover:text-white" href="#"
                >Troceroute</a
                >
              </li>

              <li>
                <span
                  class="before:content-['\00BB'] text-white text-sm font-medium"
                ></span>
                <a class="text-gray-300 hover:underline hover:text-white" href="#"
                >IP to Geo</a
                >
              </li>

              <li>
                <span
                  class="before:content-['\00BB'] text-white text-sm font-medium"
                ></span>
                <a class="text-gray-300 hover:underline hover:text-white" href="#"
                >MY IP</a
                >
              </li>

              <li>
                <span
                  class="before:content-['\00BB'] text-white text-sm font-medium"
                ></span>
                <a class="text-gray-300 hover:underline hover:text-white" href="#"
                >SSL check</a
                >
              </li>
            </ul>
          </div>

          <div class="w-full my-3 sm:w-1/2 md:w-3/12 md:my-0">
            <h3 class="py-1">DNS toolkit Services</h3>
            <ul>
              <li>
                <span
                  class="before:content-['\00BB'] text-white text-sm font-medium"
                ></span>
                <a class="text-gray-300 hover:underline hover:text-white" href="#"
                >Flush DNS</a
                >
              </li>

              <li>
                <span
                  class="before:content-['\00BB'] text-white text-sm font-medium"
                ></span>
                <a class="text-gray-300 hover:underline hover:text-white" href="#"
                >DNS Tools</a
                >
              </li>

              <li>
                <span
                  class="before:content-['\00BB'] text-white text-sm font-medium"
                ></span>
                <a class="text-gray-300 hover:underline hover:text-white" href="#"
                >What is MY IP Address</a
                >
              </li>

              <li>
                <span
                  class="before:content-['\00BB'] text-white text-sm font-medium"
                ></span>
                <a class="text-gray-300 hover:underline hover:text-white" href="#"
                >What is DNS?</a
                >
              </li>

              <li>
                <span
                  class="before:content-['\00BB'] text-white text-sm font-medium"
                ></span>
                <a class="text-gray-300 hover:underline hover:text-white" href="#"
                >DNS Article</a
                >
              </li>
            </ul>
          </div>

          <div class="w-full my-3 sm:w-1/2 md:w-3/12 md:my-0">
            <h3 class="py-1">DNS Server Database</h3>
            <ul>
              <li>
                <span
                  class="before:content-['\00BB'] text-white text-sm font-medium"
                ></span>
                <a
                  class="text-gray-300 hover:underline hover:text-white"
                  href="#"
                >
                  DNS Servers</a
                >
              </li>

              <li>
                <span
                  class="before:content-['\00BB'] text-white text-sm font-medium"
                ></span>
                <a class="text-gray-300 hover:underline hover:text-white" href="#"
                >Google DNS</a
                >
              </li>

              <li>
                <span
                  class="before:content-['\00BB'] text-white text-sm font-medium"
                ></span>
                <a class="text-gray-300 hover:underline hover:text-white" href="#"
                >Australian DNS Servers</a
                >
              </li>

              <li>
                <span
                  class="before:content-['\00BB'] text-white text-sm font-medium"
                ></span>
                <a class="text-gray-300 hover:underline hover:text-white" href="#"
                >France DNS Servers</a
                >
              </li>

              <li>
                <span
                  class="before:content-['\00BB'] text-white text-sm font-medium"
                ></span>
                <a class="text-gray-300 hover:underline hover:text-white" href="#"
                >New Zealand DNS Servers</a
                >
              </li>

              <li>
                <span
                  class="before:content-['\00BB'] text-white text-sm font-medium"
                ></span>
                <a class="text-gray-300 hover:underline hover:text-white" href="#"
                >United Kingdom DNS Server</a
                >
              </li>

              <li>
                <span
                  class="before:content-['\00BB'] text-white text-sm font-medium"
                ></span>
                <a class="text-gray-300 hover:underline hover:text-white" href="#"
                >United States DNS Servers</a
                >
              </li>
            </ul>
          </div>

          <div class="w-full my-3 sm:w-1/2 md:w-3/12 md:my-0">
            <h3 class="py-1">Information</h3>
            <ul>
              <li>
                <span
                  class="before:content-['\00BB'] text-white text-sm font-medium"
                ></span>
                <a class="text-gray-300 hover:underline hover:text-white" href="#"
                >Home</a
                >
              </li>

              <li>
                <span
                  class="before:content-['\00BB'] text-white text-sm font-medium"
                ></span>
                <a class="text-gray-300 hover:underline hover:text-white" href="#"
                >About Us</a
                >
              </li>

              <li>
                <span
                  class="before:content-['\00BB'] text-white text-sm font-medium"
                ></span>
                <a class="text-gray-300 hover:underline hover:text-white" href="#"
                >Privacy policy</a
                >
              </li>

              <li>
                <span
                  class="before:content-['\00BB'] text-white text-sm font-medium"
                ></span>
                <a class="text-gray-300 hover:underline hover:text-white" href="#"
                >Report Abuse</a
                >
              </li>

              <li>
                <span
                  class="before:content-['\00BB'] text-white text-sm font-medium"
                ></span>
                <a class="text-gray-300 hover:underline hover:text-white" href="#"
                >Contact Us</a
                >
              </li>

              <li>
                <span
                  class="before:content-['\00BB'] text-white text-sm font-medium"
                ></span>
                <a class="text-gray-300 hover:underline hover:text-white" href="#"
                >Terms of Use</a
                >
              </li>
            </ul>
          </div>
        </div>

        <div class="max-w-full text-white bg-[#0a2fbc]">
          <div class="container px-1 py-5 mx-auto xl:px-0">
            <div
              class="flex flex-col text-xs text-center md:justify-between md:flex-row"
            >
              <p>© Copyright 2016 - City of USA. All rights reserved.</p>
              <p>Designed By: GOCLOUD</p>
            </div>
          </div>
        </div>
      </footer>
      <script src="./assets/javascript/index.js"></script>
    </body>
  </html>
