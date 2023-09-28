// "use client"
import React from 'react'

export default function ContactForm(props) {
  return (
    <form
      id="form"
      onSubmit={props.onFormSubmit}
      action="https://api.web3forms.com/submit"
      method="POST"
      className="form relative flex flex-col text-light
                px-8
                xl:my-6 xl:px-6
                lg:my-5 lg:px-[25px]
                sm:my-3 sm:px-[20px]
                xs:my-5 xs:px-[15px]"
    >
      {/* Comes with Web3Forms plug-in */}
      <input type="hidden" name="access_key" value="89254cb6-fad2-4805-9326-5dc6b80b1154" />
      {/* <input type="hidden" name="subject" value="New Submission from Web3Forms" /> */}
      {/* <input type="hidden" name="redirect" value="https://web3forms.com/success" /> */}
      {/* <input type="checkbox" name="botcheck" id="" style={{ display: "none" }} /> */}


      {/* Container Form Fields Name, Email, Message */}
      <div className="
          w-full h-full flex flex-col"
      >
        {/* Label NAME */}
        <div className="flex flex-col 
                mb-5 
                xl:mb-0
                lg:mb-3
                md:mb-5
                sm:mb-2"
        >
          <label
            htmlFor="name"
            className="border-light/50 text-dark font-extrabold 
                      text-2xl mb-[7px]
                      xl:text-xl xl:mb-[2px]
                      lg:mb-[7px]
                      sm:border-t-[0.5px] sm:mb-1 sm:py-1
                      xs:text-base xs:py-0"
          >
            Naam
          </label>
          <input
            id="name"
            name="name"
            type="text"
            // rows="6"
            value={props.name}
            onChange={props.onNameChange}
            placeholder="Voor-en achternaam"
            style={{ fontStyle: 'italic' }}
            className="input-field font-extrabold
                h-[40px] pl-2 
                xl:h-[35px]
                xs:h-[25px]
                focus:outline-none rounded-[5px] 
                bg-[black]"
          />
        </div>
        {/* Label Email */}
        <div className="flex flex-col 
                mb-5 
                xl:mb-0
                lg:mb-3
                md:mb-5
                sm:mb-2"
        >
          <label
            htmlFor="email"
            className="border-light/50 text-dark font-extrabold
                      text-2xl mb-[7px] mt-4
                      xl:text-xl xl:mb-[2px]
                      lg:mb-[7px]
                      sm:border-t-[0.5px] sm:mb-1 sm:py-1 
                      xs:text-base xs:py-0"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={props.email}
            onChange={props.onEmailChange}
            placeholder="Voer je email adres in"
            style={{ fontStyle: 'italic' }}
            className="input-field font-extrabold
                h-[40px] pl-2
                xl:h-[35px]
                xs:h-[25px]
                focus:outline-none rounded-[5px] 
                bg-[black]"
          />
        </div>
        {/* Label Message */}
        <div className="flex flex-col 
                mb-8 
                xs:mb-4"
        >
          <label
            htmlFor="message"
            className="border-light/50 text-dark font-extrabold
                      text-2xl mb-[7px] mt-4
                      xl:text-xl xl:mb-[2px]
                      lg:mb-[7px]
                      sm:border-t-[0.5px] sm:mb-1 sm:py-1
                      xs:text-base xs:py-0"
          >
            Bericht
          </label>
          <textarea
            id="message"
            name="message"
            type="text"
            // rows="6"
            value={props.message}
            onChange={props.onMessageChange}
            placeholder="Typ hier je bericht"
            style={{ fontStyle: 'italic' }}
            className="input-field font-extrabold
                h-[150px] pl-2 pt-2 
                xl:h-[175px]
                lg:h-[150px]
                xs:h-[120px] xs:pt-0
                focus:outline-none rounded-[5px] 
                bg-[black]"
          />
        </div>
      </div>

      {/* Container Send Button & Validation Message */}
      <div className="
            w-full flex items-center justify-between 
            text-dark"
      >
        <button
          type="submit"
          className="rounded-sm font-extrabold tracking-wider bg-[#f8f0e5] border-[0.5px] 
                   border-light hover:bg-light hover:text-dark 
                   hover:border-dark transition-all duration-[350ms] ease-in-out

                   w-1/5 py-1 text-lg
                   xl:w-1/4
                   lg:w-1/5 lg:py-2
                   md:text-[17px]
                   sm:text-base sm:py-1"
        // disabled={props.loading}
        >
          SEND
        </button>

        {/* Comes with Web3Forms plug-in */}
        {/* <p className="text-base text-center text-gray-400" id="result"></p> */}

        <div className="text-base text-light">
          <i>{props.validation}</i>
        </div>
      </div>

      {/* {props.successMessage &&
        (
          <p className="absolute text-lg text-center rounded-xl bg-light/70 text-dark 
                   w-1/3 p-16 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                   sm:text-[15px] sm:top-1/4 sm:-translate-y-1/4 sm:w-1/2 sm:p-4">
            {props.successMessage}
          </p>
        )
      } */}
    </form>
  )
};
