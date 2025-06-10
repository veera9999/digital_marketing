export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-ferrariRed">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-white">Contact Us</h2>
        <form className="mt-8 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 mb-4 rounded-lg"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 mb-4 rounded-lg"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 mb-4 rounded-lg"
            rows={4}
          />
          <button
            type="submit"
            className="px-6 py-3 bg-ferrariGold text-black rounded-lg hover:bg-white transition duration-300">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
