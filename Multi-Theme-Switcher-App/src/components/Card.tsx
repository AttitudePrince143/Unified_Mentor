import React from 'react';
import { useTheme } from '../theme/ThemeContext';
import { themes } from '../theme/themes';

interface CardProps {
  title: string;
  description: string;
  image: string;
}

export const Card: React.FC<CardProps> = ({ title, description, image }) => {
  const { theme } = useTheme();
  const currentTheme = themes[theme];

  return (
    <div className={`p-4 m-2 border rounded shadow hover:scale-105 transform transition duration-300 ${currentTheme.card}`}>
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-contain mb-4 rounded"
      />
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
};
