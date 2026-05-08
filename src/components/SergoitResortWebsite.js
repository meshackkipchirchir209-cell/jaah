export default function SergoitResortWebsite() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      <header className="bg-cover bg-center h-[70vh] flex items-center justify-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1400&auto=format&fit=crop')" }}>
        <div className="bg-black/50 p-8 rounded-3xl text-center text-white max-w-2xl shadow-2xl">
          <h1 className="text-5xl font-bold mb-4">Sergoit Resort Hotel</h1>
          <p className="text-lg mb-6">Experience comfort, nature, and relaxation in the heart of Sergoit, Kenya.</p>
          <button className="bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition-transform">
            Book Your Stay
          </button>
        </div>
      </header>

      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-3xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-3">Luxury Rooms</h2>
          <p>Enjoy spacious and elegant rooms designed for comfort and relaxation.</p>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-3">Restaurant & Dining</h2>
          <p>Taste delicious local and international cuisine prepared by expert chefs.</p>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-3">Swimming Pool</h2>
          <p>Relax and unwind in our beautiful outdoor swimming pool surrounded by nature.</p>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">About Us</h2>
          <p className="text-lg leading-relaxed">
            Sergoit Resort Hotel offers a peaceful getaway for travelers, families, and business guests.
            Located in the serene environment of Sergoit, the resort combines modern hospitality with
            natural beauty to create unforgettable experiences.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-10">Gallery</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <img className="rounded-3xl shadow-lg h-64 w-full object-cover" src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop" alt="Hotel Room" />
          <img className="rounded-3xl shadow-lg h-64 w-full object-cover" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop" alt="Pool" />
          <img className="rounded-3xl shadow-lg h-64 w-full object-cover" src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop" alt="Restaurant" />
        </div>
      </section>

      <section className="bg-green-700 text-white py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg mb-2">📍 MCX5+GM, Sergoit, Kenya</p>
        <p className="text-lg mb-6">📞 0748 639537</p>
        <button className="bg-white text-green-700 px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition-transform">
          Call Now
        </button>
      </section>

      <footer className="bg-black text-white text-center py-6">
        <p>© 2026 Sergoit Resort Hotel. All rights reserved.</p>
      </footer>
    </div>
  );
}
