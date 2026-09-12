 import FooterLogo from "../../assets/logo-text.png";


export default function Footer() {

    
  return (
    <div className="bg-gray-50 border-t border-gray-200 mt-16 py-10 items-center">
      <div className="container mx-auto px-4 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start gap-4">
          <img
            src={FooterLogo}
            alt="footer-logo"
            className="h-8 object-contain"
          />
          <p className="text-gray-600 text-sm max-w-sm">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>

          <ul className="flex items-center gap-4 text-sm font-medium text-gray-600">
            <li>
              <a href="#" className="hover:text-purple-600 transition-colors">
                GitHub
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-600 transition-colors">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-600 transition-colors">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h2 className=" font-bold text-gray-400 uppercase tracking-wider mb-4">
            Products
          </h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <a href="#" className="hover:text-purple-600 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-600 transition-colors">
                Technologies
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-600 transition-colors">
                Projects
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h2 className=" font-bold text-gray-400 uppercase tracking-wider mb-4">
            Company
          </h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <a href="#" className="hover:text-purple-600 transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-600 transition-colors">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-600 transition-colors">
                Careers
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text- font-bold text-gray-400 uppercase tracking-wider mb-4">
            LEGAL
          </h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <a href="#" className="hover:text-purple-600 transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-600 transition-colors">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between  border-gray-200 mt-10 pt-6 mx-10 text-xs text-gray-500">
        <p>© 2026 Dev Stack. All rights reserved.</p>
        <div className="mx-10">
          <ul className="flex gap-2 ">
            <li>
              <a href="#" className="hover:text-purple-600 transition-colors">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-600 transition-colors">
                Terms
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}