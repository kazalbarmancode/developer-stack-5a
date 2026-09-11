interface MobileNavProps {
  isOpen: boolean;
}

export default function MobileNav({ isOpen }: MobileNavProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-6 space-y-4 shadow-lg">
      <ul className="flex flex-col gap-3 text-base font-medium text-gray-700">
        <li>
          <a href="#" className="block py-1 hover:text-blue-600">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="block py-1 hover:text-blue-600">
            Technologies
          </a>
        </li>
        <li>
          <a href="#" className="block py-1 hover:text-blue-600">
            Projects
          </a>
        </li>
        <li>
          <a href="#" className="block py-1 hover:text-blue-600">
            About
          </a>
        </li>
        <li>
          <a href="#" className="block py-1 hover:text-blue-600">
            Contact
          </a>
        </li>
      </ul>

      <div className="pt-2 flex flex-col gap-2 border-t border-gray-100">
        <button className="w-full text-center py-2 font-medium text-gray-700 hover:text-blue-600">
          Sign In
        </button>
        <button className="w-full btn btn-secondary text-white font-medium py-2 rounded-full shadow-sm">
        Sing Up
        </button>
      </div>
    </div>
  );
}