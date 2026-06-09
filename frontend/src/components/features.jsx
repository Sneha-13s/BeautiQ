import { Sparkles, Calendar, MapPin, Bot } from "lucide-react";

const features = [
  {
    icon: <Bot size={28} />,
    title: "AI Beauty Planner",
    description:
      "Get personalized beauty and grooming plans based on your event and preferences.",
  },
  {
    icon: <Calendar size={28} />,
    title: "Easy Booking",
    description:
      "Book salon appointments instantly without calling or waiting.",
  },
  {
    icon: <MapPin size={28} />,
    title: "Nearby Salons",
    description:
      "Discover top-rated salons near your location.",
  },
  {
    icon: <Sparkles size={28} />,
    title: "Smart Recommendations",
    description:
      "Receive AI-powered service recommendations based on your budget.",
  },
];

export default function Features() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          Why Choose BeautiQ?
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Everything you need for beauty, grooming, and wellness in one place.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-3xl shadow-md hover:shadow-xl transition"
            >
              <div className="mb-4 text-green-600">
                {feature.icon}
              </div>

              <h3 className="font-semibold text-xl mb-2">
                {feature.title}
              </h3>

              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}