export default function SalonSection() {
  const salons = [
    {
      name: "Glow Studio",
      rating: "4.8",
      service: "Hair • Facial • Spa",
    },
    {
      name: "Urban Groom",
      rating: "4.7",
      service: "Haircut • Beard • Grooming",
    },
    {
      name: "Elite Beauty Lounge",
      rating: "4.9",
      service: "Makeup • Bridal • Spa",
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-4">
            Discover Top Salons
          </h2>

          <p className="text-gray-600">
            Find highly rated salons near your location.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {salons.map((salon, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <div className="h-48 bg-gradient-to-r from-green-200 to-green-100"></div>

              <div className="p-6">

                <h3 className="text-xl font-semibold mb-2">
                  {salon.name}
                </h3>

                <p className="text-gray-600 mb-3">
                  {salon.service}
                </p>

                <div className="flex justify-between items-center">

                  <span className="font-medium">
                    ⭐ {salon.rating}
                  </span>

                  <button className="bg-green-600 text-white px-4 py-2 rounded-xl">
                    View
                  </button>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}