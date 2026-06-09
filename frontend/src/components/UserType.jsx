export default function UserType() {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-4">
            Personalized For Everyone
          </h2>

          <p className="text-gray-600">
            Choose your profile and receive customized recommendations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition">
            <div className="text-5xl mb-4">👨</div>

            <h3 className="text-2xl font-semibold mb-3">
              Men's Grooming
            </h3>

            <ul className="space-y-2 text-gray-600">
              <li>✔ Beard Styling</li>
              <li>✔ Hair Care Plans</li>
              <li>✔ Skin Care Guidance</li>
              <li>✔ Event Grooming</li>
            </ul>

            <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-xl">
              Continue as Male
            </button>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition">
            <div className="text-5xl mb-4">👩</div>

            <h3 className="text-2xl font-semibold mb-3">
              Women's Beauty
            </h3>

            <ul className="space-y-2 text-gray-600">
              <li>✔ Makeup Suggestions</li>
              <li>✔ Hair Styling Plans</li>
              <li>✔ Skin Care Routines</li>
              <li>✔ Bridal Preparation</li>
            </ul>

            <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-xl">
              Continue as Female
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}