export type Theme = {
  name: string;
  background: string;
  text: string;
  font: string;
  header: string;
  footer: string;
  card: string;
  headerStyle: string;
  headerTextStyle: string;
  paragraphStyle: string;
};

export const themes: Record<string, Theme> = {
  theme1: {
    name: 'theme1',
    background: 'bg-gray-50',
    text: 'text-gray-900',
    font: 'font-sans',
    header: 'bg-white',
    footer: 'bg-gray-100',
    card: 'bg-white border-gray-200',
    headerStyle: 'justify-between',
    headerTextStyle: 'text-blue-600 font-semibold',
    paragraphStyle: 'text-base leading-relaxed text-gray-800',
  },

  theme2: {
    name: 'theme2',
    background: 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700',
    text: 'text-gray-100',
    font: 'font-serif',
    header: 'bg-gray-800',
    footer: 'bg-gray-900',
    card: 'bg-gray-800 border-gray-600 hover:shadow-md hover:ring-1 hover:ring-pink-500',
    headerStyle: 'justify-around',
    headerTextStyle: 'text-pink-300 uppercase tracking-widest font-serif',
    paragraphStyle: 'text-lg leading-loose italic text-gray-300 tracking-wide',
  },

  theme3: {
    name: 'theme3',
    background: 'bg-gradient-to-r from-yellow-200 via-pink-200 to-pink-300',
    text: 'text-pink-800',
    font: 'font-["Pacifico"]',
    header: 'bg-pink-200',
    footer: 'bg-yellow-200',
    card: 'bg-white/70 backdrop-blur-md border-pink-300 animate-fadeIn',
    headerStyle: 'justify-center',
    headerTextStyle: 'text-yellow-800 font-bold text-xl font-["Pacifico"]',
    paragraphStyle: 'text-xl font-medium text-pink-800 tracking-wider',
  },
};

export type ThemeType = keyof typeof themes;
