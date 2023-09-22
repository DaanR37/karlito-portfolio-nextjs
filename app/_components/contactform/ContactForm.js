import React from 'react'

export default function ContactForm(props) {
  return (
    <form
      id="form"
      onSubmit={props.onFormSubmit}
      action="https://api.web3forms.com/submit"
      method="POST"
      className="form flex flex-col justify-between text-light
                px-12 
                xl:px-10 
                lg:px-8 
                md:px-6 
                sm:px-0 sm:mb-16 sm:border-none"
    >
      {/* Comes with Web3Forms plug-in */}
      <input type="hidden" name="access_key" value="89254cb6-fad2-4805-9326-5dc6b80b1154" />
      {/* <input type="hidden" name="subject" value="New Submission from Web3Forms" /> */}
      {/* <input type="hidden" name="redirect" value="https://web3forms.com/success" /> */}
      {/* <input type="checkbox" name="botcheck" id="" style={{ display: "none" }} /> */}

      <div className="flex flex-col">
        <div className="flex flex-col 
                mb-5 
                sm:mb-12">
          <label
            htmlFor="name"
            className="border-light/50 
                      mb-[7px]
                      text-2xl 
                      xl:text-xl 
                      md:text-lg
                      sm:border-t-[0.5px] sm:py-2">
            Naam
          </label>
          <input
            id="name"
            name="name"
            type="text"
            rows="6"
            value={props.name}
            onChange={props.onNameChange}
            placeholder="Voor-en achternaam"
            style={{ fontStyle: 'italic' }}
            className="input-field font-light focus:outline-none h-[40px] rounded-[5px] pl-2 bg-[black]"
          />
        </div>
        <div className="flex flex-col 
                mb-5 
                sm:mb-12">
          <label
            htmlFor="email"
            className="border-light/50 
                         mb-[7px]
                         text-2xl mt-4
                         xl:text-xl 
                         md:text-lg 
                         sm:border-t-[0.5px] sm:py-2 ">
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
            className="input-field font-light focus:outline-none h-[40px] rounded-[5px] pl-2 bg-[black]"
          />
        </div>
        <div className="flex flex-col 
                mb-5 sm:mb-12">
          <label
            htmlFor="message"
            className="border-light/50
                         mb-[7px]
                         text-2xl mt-4
                         xl:text-xl 
                         md:text-lg
                         sm:border-t-[0.5px] sm:py-2">
            Bericht
          </label>
          <textarea
            id="message"
            name="message"
            type="text"
            rows="6"
            value={props.message}
            onChange={props.onMessageChange}
            placeholder="Typ hier je bericht"
            style={{ fontStyle: 'italic' }}
            className="input-field font-light focus:outline-none rounded-[5px] pl-2 pt-2 bg-[black]"
          ></textarea>
        </div>
      </div>

      <div className="w-full flex items-center justify-between">
        <button
          type="submit"
          className="rounded-sm font-semibold bg-transparent border-[0.5px] 
                   border-light hover:bg-light hover:text-dark 
                   hover:border-dark transition-all duration-[350ms] ease-in-out
                   w-1/4 py-2 text-sm
                   sm:w-[18%]"
        // disabled={props.loading}
        >
          Send
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
