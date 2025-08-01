export const About = () => {
  return (
    <main className="mt-24 px-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">About This App</h2>
      <p className="text-lg leading-relaxed">
        This React application demonstrates a multi-theme system with dynamic styling and smooth
        layout changes. It includes three unique themes, each with its own font, background,
        layout, and card styles. The app uses React Router for navigation between Home, About, and
        Contact pages, and fetches product data from a public API to populate the homepage.
        Everything is managed via React Context, and user preferences are saved with localStorage.
      </p>
    </main>
  );
};
