export default function AIPlanner() {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-4">
            AI Beauty Planner
          </h2>

          <p className="text-gray-600 text-lg">
            Tell us your occasion and let AI create a personalized beauty plan.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Input Card */}
          <div className="bg-white rounded-3xl shadow-lg p-8">

            <h3 className="text-2xl font-semibold mb-6">
              Event Details
            </h3>

            <div className="space-y-4">

              <div>
                <label className="block mb-2 font-medium">
                  Occasion
                </label>

                <input
                  type="text"
                  placeholder="Wedding"
                  className="w-full border rounded-xl p-3"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Days Remaining
                </label>

                <input
                  type="number"
                  placeholder="7"
                  className="w-full border rounded-xl p-3"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Budget
                </label>

                <input
                  type="number"
                  placeholder="5000"
                  className="w-full border rounded-xl p-3"
                />
              </div>

              <button className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold">
                Generate AI Plan
              </button>

            </div>
          </div>

          {/* AI Result Card */}
          <div className="bg-white rounded-3xl shadow-lg p-8">

            <h3 className="text-2xl font-semibold mb-6">
              AI Suggested Plan
            </h3>

            <div className="space-y-4">

              <div className="p-4 rounded-2xl bg-green-50">
                ✔ Hair Spa (Day 1)
              </div>

              <div className="p-4 rounded-2xl bg-green-50">
                ✔ Facial Treatment (Day 3)
              </div>

              <div className="p-4 rounded-2xl bg-green-50">
                ✔ Skin Care Routine (Daily)
              </div>

              <div className="p-4 rounded-2xl bg-green-50">
                ✔ Final Grooming Session (Day 6)
              </div>

              <div className="mt-6 p-5 rounded-2xl bg-slate-100">

                <h4 className="font-semibold mb-2">
                  Estimated Cost
                </h4>

                <p className="text-2xl font-bold text-green-600">
                  ₹4,500
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}