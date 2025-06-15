import { NavLink } from 'react-router-dom';
import { FaUser, FaWallet, FaFileAlt, FaNotesMedical, FaChartBar } from 'react-icons/fa';

export default function Sidebar() {
  const links = [
    { name: 'Profile', path: '/', icon: <FaUser /> },
    { name: 'Assets', path: '/assets', icon: <FaWallet /> },
    { name: 'Liabilities', path: '/liabilities', icon: <FaChartBar /> },
    { name: 'Docs', path: '/docs', icon: <FaFileAlt /> },
    { name: 'Diary', path: '/diary', icon: <FaNotesMedical /> },
  ];

  return (
    <div className="w-64 min-h-screen bg-white shadow-lg p-6 fixed top-0 left-0 z-10">
      <h1 className="text-2xl font-bold mb-8 text-blue-600">📊 Myfyn</h1>
      <nav className="space-y-4">
        {links.map(link => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg transition ${
                isActive ? 'bg-blue-100 text-blue-700 font-semibold' : 'text-gray-700 hover:bg-blue-50'
              }`
            }
          >
            {link.icon}
            {link.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
