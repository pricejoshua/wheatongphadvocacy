import ChoroplethMap from "./components/ChoroplethMap";

const sampleData = {
  USA: 75,
  RUS: 50,
  DEU: 25,
  BRA: 10,
};

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-brand-blue text-white py-20 relative overflow-hidden">
        <div className="content-container relative z-10">
          <h1 className="text-6xl font-extrabold mb-6 text-brand-yellow">
            WHEATON GPH ADVOCACY
          </h1>
          <p className="text-xl max-w-2xl mb-8">
            Join us in advocating for global public health initiatives and making a difference in communities worldwide.
          </p>
          <button className="brand-button animate-float">
            GET INVOLVED
          </button>
        </div>
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,50 Q25,25 50,50 T100,50" stroke="currentColor" fill="none" strokeWidth="2"/>
          </svg>
        </div>
      </section>

      {/* USAID Section */}
      <section className="py-16 bg-white">
        <div className="content-container">
          <div className="grid-layout">
            <div className="brand-card">
              <h2 className="text-4xl font-bold mb-4 text-white">
                WHY SHOULD WE CARE ABOUT USAID?
              </h2>
              <p className="text-lg mb-6">
                Learn about USAID's crucial role in global health initiatives and how you can support their mission.
              </p>
              <button className="brand-button">
                LEARN MORE
              </button>
            </div>
            <div className="p-8">
              <ChoroplethMap data={sampleData} minValue={0} maxValue={100} />
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Meeting Section */}
      <section className="py-16 bg-gray-50">
        <div className="content-container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              WEEKLY MEETING
            </h2>
            <p className="text-xl text-gray-600">
              EVERY MONDAY • 7:00—8:00PM
            </p>
            <p className="text-lg font-bold mt-2">
              MEYER SCIENCE CENTER 145
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-brand-blue py-16">
        <div className="content-container text-center">
          <h2 className="text-4xl font-bold text-brand-yellow mb-8">
            CALL YOUR REPS
          </h2>
          <p className="text-white text-xl mb-8 max-w-2xl mx-auto">
            Hundreds of calls from constituents can make a real difference. Join us in advocating for global public health.
          </p>
          <button className="brand-button">
            TAKE ACTION NOW
          </button>
        </div>
      </section>
    </main>
  );
}
