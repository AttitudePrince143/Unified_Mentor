import { useTheme } from '../theme/ThemeContext';
import { themes } from '../theme/themes';
import { Link } from 'react-router-dom';

export const Header = () => {
  const { theme, setTheme } = useTheme();
  const currentTheme = themes[theme];

  return (
    <header
      className={`fixed top-0 w-full p-4 shadow-md z-50 flex flex-col md:flex-row items-center gap-4 ${currentTheme.header} ${currentTheme.headerStyle}`}
    >
      <div className={`text-xl ${currentTheme.headerTextStyle}`}>
        Multi-Theme App
      </div>

      <nav className={`flex gap-4 ${currentTheme.headerTextStyle}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value as any)}
        className="p-2 rounded border"
      >
        {Object.keys(themes).map((key) => (
          <option key={key} value={key}>
            {key.toUpperCase()}
          </option>
        ))}
      </select>
    </header>
  );
};
