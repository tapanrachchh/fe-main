import React from "react";

import Navbar from "./_components/navbar";

export default function BookingSeatPage() {
  return (
    <>
      <Navbar />
      <main className="container h-screen max-w-[770px] py-9">
        <div className="mx-auto grid place-content-center">
          <svg
            width="388"
            height="47"
            viewBox="0 0 388 47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.23364 7.98832L2.02101 12.0448C1.74064 12.5588 1.95987 13.2027 2.49565 13.4388L30.8073 25.9151C30.9344 25.9711 31.0717 26 31.2106 26H355.796C355.931 26 356.064 25.9728 356.188 25.9199L385.487 13.4319C386.03 13.2004 386.255 12.5513 385.973 12.0331L383.766 7.98828C383.601 7.68466 383.346 7.4913 383 7.47209C374.726 7.01182 265.519 1.01284 194.5 1C123.098 0.987091 13.2996 7.011 4.99983 7.47211C4.65449 7.4913 4.39927 7.68468 4.23364 7.98832Z"
              fill="#102132"
              stroke="#102132"
            />
            <path
              d="M25.0943 44.9078C25.811 45.8915 26.9328 46.4301 28.1339 46.3439C43.1644 45.2649 132.998 39 192.5 39C252.202 39 342.441 45.3072 357.015 46.3546C358.148 46.4361 359.202 45.9603 359.929 45.0671L385.867 13.2141C386.009 13.0396 386.025 12.8342 385.963 12.6759C385.904 12.5245 385.776 12.4142 385.578 12.4044C370.162 11.6391 264.267 6.51117 194.5 6.5C124.176 6.48874 17.3358 11.6644 2.30474 12.4103C2.11189 12.4199 1.98342 12.5258 1.9211 12.6721C1.85626 12.8244 1.86438 13.0236 1.99238 13.1993L25.0943 44.9078Z"
              fill="white"
              stroke="#102132"
            />
            <path
              opacity="0.5"
              d="M27.1933 41.7889C28.0091 42.8572 29.2555 43.4479 30.5966 43.358C45.283 42.3731 133.864 36.5963 192.5 36.5C251.49 36.4031 340.719 41.9563 355.033 42.8727C356.307 42.9543 357.484 42.4208 358.304 41.4412L378.696 17.0595C379.228 16.4228 378.871 15.4553 378.042 15.423C362.81 14.8299 262.064 11.0087 194.486 11C126.355 10.9913 24.2474 15.2781 9.34137 15.92C8.53433 15.9547 8.17155 16.8794 8.66181 17.5214L27.1933 41.7889Z"
              fill="#ABB7C4"
            />
            <path
              d="M144.642 24.264C144.678 24.768 144.882 25.164 145.242 25.464C145.602 25.764 146.082 25.908 146.67 25.908C147.174 25.908 147.594 25.8 147.906 25.584C148.218 25.368 148.386 25.056 148.386 24.66C148.386 24.384 148.29 24.168 148.122 24C147.954 23.832 147.714 23.712 147.426 23.616C147.126 23.532 146.706 23.436 146.178 23.34C145.626 23.244 145.158 23.124 144.774 22.968C144.39 22.812 144.066 22.572 143.826 22.248C143.586 21.936 143.466 21.516 143.466 20.988C143.466 20.508 143.586 20.088 143.838 19.704C144.09 19.332 144.438 19.044 144.894 18.828C145.35 18.624 145.866 18.516 146.454 18.516C147.054 18.516 147.582 18.636 148.062 18.852C148.53 19.08 148.902 19.392 149.178 19.776C149.442 20.172 149.598 20.616 149.622 21.12H148.266C148.218 20.688 148.026 20.34 147.702 20.076C147.366 19.812 146.958 19.68 146.454 19.68C145.962 19.68 145.566 19.788 145.278 20.004C144.99 20.22 144.846 20.508 144.846 20.892C144.846 21.168 144.93 21.384 145.098 21.54C145.266 21.708 145.506 21.828 145.794 21.9C146.082 21.984 146.49 22.068 147.03 22.164C147.57 22.26 148.038 22.392 148.434 22.548C148.818 22.716 149.142 22.944 149.394 23.256C149.634 23.568 149.766 23.988 149.766 24.492C149.766 24.996 149.634 25.44 149.37 25.824C149.106 26.22 148.734 26.532 148.266 26.748C147.786 26.964 147.258 27.072 146.658 27.072C145.986 27.072 145.41 26.952 144.906 26.712C144.402 26.472 144.006 26.148 143.718 25.716C143.43 25.284 143.286 24.792 143.286 24.24L144.642 24.264ZM151.149 20.568C151.485 19.92 151.953 19.428 152.565 19.068C153.177 18.708 153.897 18.528 154.713 18.528C155.337 18.528 155.913 18.648 156.417 18.888C156.921 19.128 157.341 19.476 157.665 19.92C157.977 20.364 158.181 20.88 158.277 21.456H156.897C156.753 20.928 156.489 20.508 156.105 20.196C155.709 19.896 155.229 19.74 154.653 19.74C154.125 19.74 153.669 19.872 153.285 20.136C152.889 20.4 152.589 20.76 152.385 21.216C152.169 21.672 152.073 22.2 152.073 22.8C152.073 23.4 152.169 23.928 152.385 24.384C152.589 24.852 152.889 25.212 153.285 25.476C153.669 25.74 154.125 25.86 154.653 25.86C155.229 25.86 155.709 25.716 156.093 25.404C156.477 25.104 156.741 24.684 156.885 24.144H158.265C158.169 24.744 157.965 25.26 157.653 25.692C157.341 26.136 156.933 26.472 156.429 26.712C155.925 26.952 155.349 27.072 154.713 27.072C153.897 27.072 153.177 26.904 152.565 26.544C151.953 26.196 151.485 25.704 151.149 25.056C150.813 24.408 150.657 23.664 150.657 22.8C150.657 21.96 150.813 21.216 151.149 20.568ZM162.766 18.6C163.342 18.6 163.858 18.72 164.302 18.936C164.734 19.152 165.082 19.464 165.322 19.872C165.562 20.28 165.694 20.748 165.694 21.276C165.694 21.84 165.538 22.332 165.25 22.752C164.95 23.184 164.554 23.484 164.062 23.652L165.838 27H164.302L162.706 23.952H160.834V27H159.454V18.6H162.766ZM160.834 22.752H162.658C163.15 22.752 163.546 22.62 163.834 22.356C164.122 22.092 164.278 21.732 164.278 21.276C164.278 20.832 164.122 20.472 163.834 20.208C163.546 19.944 163.15 19.8 162.658 19.8H160.834V22.752ZM166.954 18.6H172.438V19.824H168.334V22.152H171.718V23.34H168.334V25.776H172.582V27H166.954V18.6ZM173.715 18.6H179.199V19.824H175.095V22.152H178.479V23.34H175.095V25.776H179.343V27H173.715V18.6ZM180.477 27V18.6H181.737L185.829 24.552V18.6H187.185V27H185.925L181.833 21.048V27H180.477ZM191.306 18.6H197.87V19.824H195.278V27H193.898V19.824H191.306V18.6ZM198.911 18.588H200.291V22.128H204.191V18.588H205.571V27H204.191V23.352H200.291V27H198.911V18.588ZM207.102 18.6H208.482V27H207.102V18.6ZM211.064 24.264C211.1 24.768 211.304 25.164 211.664 25.464C212.024 25.764 212.504 25.908 213.092 25.908C213.596 25.908 214.016 25.8 214.328 25.584C214.64 25.368 214.808 25.056 214.808 24.66C214.808 24.384 214.712 24.168 214.544 24C214.376 23.832 214.136 23.712 213.848 23.616C213.548 23.532 213.128 23.436 212.6 23.34C212.048 23.244 211.58 23.124 211.196 22.968C210.812 22.812 210.488 22.572 210.248 22.248C210.008 21.936 209.888 21.516 209.888 20.988C209.888 20.508 210.008 20.088 210.26 19.704C210.512 19.332 210.86 19.044 211.316 18.828C211.772 18.624 212.288 18.516 212.876 18.516C213.476 18.516 214.004 18.636 214.484 18.852C214.952 19.08 215.324 19.392 215.6 19.776C215.864 20.172 216.02 20.616 216.044 21.12H214.688C214.64 20.688 214.448 20.34 214.124 20.076C213.788 19.812 213.38 19.68 212.876 19.68C212.384 19.68 211.988 19.788 211.7 20.004C211.412 20.22 211.268 20.508 211.268 20.892C211.268 21.168 211.352 21.384 211.52 21.54C211.688 21.708 211.928 21.828 212.216 21.9C212.504 21.984 212.912 22.068 213.452 22.164C213.992 22.26 214.46 22.392 214.856 22.548C215.24 22.716 215.564 22.944 215.816 23.256C216.056 23.568 216.188 23.988 216.188 24.492C216.188 24.996 216.056 25.44 215.792 25.824C215.528 26.22 215.156 26.532 214.688 26.748C214.208 26.964 213.68 27.072 213.08 27.072C212.408 27.072 211.832 26.952 211.328 26.712C210.824 26.472 210.428 26.148 210.14 25.716C209.852 25.284 209.708 24.792 209.708 24.24L211.064 24.264ZM219.933 18.6L221.373 18.588L223.161 25.248L225.033 18.6H226.341L228.153 25.248L229.965 18.6H231.369L228.969 27H227.349L225.633 20.82L223.953 27H222.333L219.933 18.6ZM230.711 27L233.855 18.6H235.499L238.631 27H237.155L236.363 24.924H232.919L232.139 27H230.711ZM233.303 23.748H235.979L234.635 20.088L233.303 23.748ZM237.46 18.588H239.08L241.288 22.44L243.556 18.588H245.104L241.972 23.892V27H240.592V23.892L237.46 18.588Z"
              fill="#2D2D2D"
            />
          </svg>
        </div>

        <p className="text-sm font-light text-gray-500">₹ 160.00</p>
        <hr />

        <div className="mt-2 grid grid-cols-[repeat(20,_minmax(0,_32px))] items-center justify-between gap-3">
          <div className="grid size-8 place-content-center rounded-sm">
            <p className="text-sm text-text">L</p>
          </div>
          <div className="invisible grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">1</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">1</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">2</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">3</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">4</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">5</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">6</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">7</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">8</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">9</p>
          </div>
          <div className="invisible grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">9</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">10</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">11</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">12</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">13</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">14</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">15</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">16</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">17</p>
          </div>

          <div className="grid size-8 place-content-center rounded-sm">
            <p className="text-sm text-text">K</p>
          </div>
          <div className="invisible grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">1</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">1</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">2</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">3</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">4</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">5</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">6</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">7</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">8</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">9</p>
          </div>
          <div className="invisible grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">9</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">10</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">11</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">12</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">13</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">14</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">15</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">16</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">17</p>
          </div>

          <div className="grid size-8 place-content-center rounded-sm">
            <p className="text-sm text-text">J</p>
          </div>
          <div className="invisible grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">1</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">1</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">2</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">3</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">4</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">5</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">6</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">7</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">8</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">9</p>
          </div>
          <div className="invisible grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">9</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">10</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">11</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">12</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">13</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">14</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">15</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">16</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">17</p>
          </div>

          <div className="grid size-8 place-content-center rounded-sm">
            <p className="text-sm text-text">I</p>
          </div>
          <div className="invisible grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">1</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">1</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">2</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">3</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">4</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">5</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">6</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">7</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">8</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">9</p>
          </div>
          <div className="invisible grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">9</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">10</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">11</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">12</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">13</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">14</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">15</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">16</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">17</p>
          </div>

          <div className="grid size-8 place-content-center rounded-sm">
            <p className="text-sm text-text">H</p>
          </div>
          <div className="invisible grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">1</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">1</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">2</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">3</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">4</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">5</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">6</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">7</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">8</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">9</p>
          </div>
          <div className="invisible grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">9</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">10</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">11</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">12</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">13</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">14</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">15</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">16</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">17</p>
          </div>

          <div className="grid size-8 place-content-center rounded-sm">
            <p className="text-sm text-text">G</p>
          </div>
          <div className="invisible grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">1</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">1</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">2</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">3</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">4</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">5</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">6</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">7</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">8</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">9</p>
          </div>
          <div className="invisible grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">9</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">10</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">11</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">12</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">13</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">14</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">15</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">16</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">17</p>
          </div>

          <div className="grid size-8 place-content-center rounded-sm">
            <p className="text-sm text-text">F</p>
          </div>
          <div className="invisible grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">1</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">1</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">2</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">3</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">4</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">5</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">6</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">7</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">8</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">9</p>
          </div>
          <div className="invisible grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">9</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">10</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">11</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">12</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">13</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">14</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">15</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">16</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">17</p>
          </div>

          <div className="grid size-8 place-content-center rounded-sm">
            <p className="text-sm text-text">E</p>
          </div>
          <div className="invisible grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">1</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">1</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">2</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">3</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">4</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">5</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">6</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">7</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">8</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">9</p>
          </div>
          <div className="invisible grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">9</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">10</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">11</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">12</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">13</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">14</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">15</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">16</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">17</p>
          </div>

          <div className="grid size-8 place-content-center rounded-sm">
            <p className="text-sm text-text">D</p>
          </div>
          <div className="invisible grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">1</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">1</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">2</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">3</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">4</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">5</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">6</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">7</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">8</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">9</p>
          </div>
          <div className="invisible grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">9</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">10</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">11</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">12</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">13</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">14</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">15</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">16</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">17</p>
          </div>

          <div className="grid size-8 place-content-center rounded-sm">
            <p className="text-sm text-text">C</p>
          </div>
          <div className="invisible grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">1</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">1</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">2</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">3</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">4</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">5</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">6</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">7</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">8</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">9</p>
          </div>
          <div className="invisible grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">9</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">10</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">11</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">12</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">13</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">14</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">15</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">16</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">17</p>
          </div>

          <div className="grid size-8 place-content-center rounded-sm">
            <p className="text-sm text-text">B</p>
          </div>
          <div className="invisible grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">1</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">1</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">2</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">3</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">4</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">5</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">6</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">7</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">8</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">9</p>
          </div>
          <div className="invisible grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">9</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">10</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">11</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">12</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">13</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">14</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">15</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">16</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">17</p>
          </div>

          <div className="grid size-8 place-content-center rounded-sm">
            <p className="text-sm text-text">A</p>
          </div>
          <div className="invisible grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">1</p>
          </div>
          <div className="invisible grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">1</p>
          </div>
          <div className="invisible grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">2</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">1</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">2</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">3</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">4</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">5</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">6</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">7</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">8</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">9</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">10</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">11</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">12</p>
          </div>
          <div className="grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">13</p>
          </div>
          <div className="invisible grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">14</p>
          </div>
          <div className="invisible grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">15</p>
          </div>
          <div className="invisible grid size-8 place-content-center rounded-sm border-2 border-[#b9f18c]">
            <p className="text-sm font-medium text-text">16</p>
          </div>
        </div>
      </main>
    </>
  );
}