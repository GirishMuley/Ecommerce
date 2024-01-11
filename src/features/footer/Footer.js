import React from "react";

function Footer() {
  return (
    <div className="w-full mt-12 ">
      <footer className="bg-gray-800 shadow dark:bg-gray-900 ">
        <div className="p-4 md:py-8">
          <span className="block text-sm text-gray-200 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="#" className="hover:underline">
              FlipKart
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
