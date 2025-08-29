import { Logo } from "../index.js";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section className="relative overflow-hidden py-5 bg-[#081229] text-white">
      <div className="relative flex justify-center items-center text-center z-10 mx-auto max-w-7xl px-4">
        <div className="md:flex md:justify-center md:gap-32 md:items-center">
          <div>
            <div className="flex h-full flex-col md:gap-10 justify-center items-center">
              <div className="mb-4 inline-flex">
                <Link to="/">
                  <Logo />
                </Link>
              </div>
              <div>
                <p className="text-sm text-white">
                  &copy; Copyright 2025. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
          <div className="flex mt-5 md:flex md:gap-20 md:justify-around md:items-center md:px-12">
            <div className="p-2">
              <div className="h-full">
                <h3 className="mb-4 text-base underline underline-offset-8 font-semibold text-white">
                  Company
                </h3>
                <ul>
                  <li className="mb-4">
                    <Link className="text-sm font-medium text-white" to="/">
                      Features
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link className="text-sm font-medium text-white" to="/">
                      Pricing
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link className="text-sm font-medium text-white" to="/">
                      Affiliate Program
                    </Link>
                  </li>
                  <li>
                    <Link className="text-sm font-medium text-white" to="/">
                      Press Kit
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="p-2">
              <div className="h-full">
                <h3 className="mb-4 text-base underline underline-offset-8 font-semibold text-white">
                  Support
                </h3>
                <ul>
                  <li className="mb-4">
                    <Link className="text-sm font-medium text-white" to="/">
                      Account
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link className="text-sm font-medium text-white" to="/">
                      Help
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link className="text-sm font-medium text-white" to="/">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link className="text-sm font-medium text-white" to="/">
                      Customer Support
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="p-2">
              <div className="h-full">
                <h3 className="mb-4 text-base underline underline-offset-8 font-semibold text-white">
                  Legals
                </h3>
                <ul>
                  <li className="mb-4">
                    <Link className="text-sm font-medium text-white" to="/">
                      Terms &amp; Conditions
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link className="text-sm font-medium text-white" to="/">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link className="text-sm font-medium text-white" to="/">
                      Licensing
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
