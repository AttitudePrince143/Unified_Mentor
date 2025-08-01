export const Contact = () => {
  return (
    <main className="mt-24 px-4 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <form className="bg-white dark:bg-gray-800 p-6 rounded shadow space-y-4">
        <div>
          <label htmlFor="name" className="block font-semibold mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
            placeholder="Your Name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-semibold mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block font-semibold mb-1">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
            placeholder="Type your message here..."
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </main>
  );
};
