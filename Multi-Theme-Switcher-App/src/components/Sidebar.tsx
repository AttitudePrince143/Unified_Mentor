import { useState } from 'react';
import { useTheme } from '../theme/ThemeContext';
import { themes } from '../theme/themes';
import { Link } from 'react-router-dom';
import { Menu, Home, Info, Phone } from 'lucide-react';

export const Sidebar = () => {
  const { theme, setTheme } = useTheme();
  const currentTheme = themes[theme];

  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`fixed top-0 left-0 h-full transition-all duration-300 p-4 shadow-lg flex flex-col ${
        collapsed ? 'w-16' : 'w-64'
      } ${currentTheme.header} z-50`}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="mb-6 text-white self-end"
        title="Toggle Menu"
      >
        <Menu size={24} />
      </button>

      {/* Logo */}
      {!collapsed && (
        <div className={`text-2xl font-bold mb-6 ${currentTheme.headerTextStyle}`}>
          Theme App
        </div>
      )}

      {/* Navigation Links */}
      <nav className={`flex flex-col gap-6 text-base ${currentTheme.headerTextStyle}`}>
        <Link to="/" className="flex items-center gap-2 hover:opacity-80">
          <Home size={20} />
          {!collapsed && 'Home'}
        </Link>
        <Link to="/about" className="flex items-center gap-2 hover:opacity-80">
          <Info size={20} />
          {!collapsed && 'About'}
        </Link>
        <Link to="/contact" className="flex items-center gap-2 hover:opacity-80">
          <Phone size={20} />
          {!collapsed && 'Contact'}
        </Link>
      </nav>

      {/* Theme Switcher */}
      {!collapsed && (
        <div className="mt-auto pt-6">
          <label className="block mb-2 font-semibold">Switch Theme</label>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value as any)}
            className="p-2 rounded w-full text-black"
          >
            {Object.keys(themes).map((key) => (
              <option key={key} value={key}>
                {key.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      )}
    </aside>
  );
};
