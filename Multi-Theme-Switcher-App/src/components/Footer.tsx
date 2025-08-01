import { useTheme } from '../theme/ThemeContext';
import { themes } from '../theme/themes';

export const Footer = () => {
  const { theme } = useTheme();
  const currentTheme = themes[theme];

  return (
    <footer className={`p-4 text-center ${currentTheme.footer}`}>
      <p>&copy; 2025 Multi-Theme App. All rights reserved.</p>
    </footer>
  );
};
