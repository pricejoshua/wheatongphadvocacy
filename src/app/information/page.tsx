// A page with informational links. Each link will have a short description in a dropdown
import React from 'react';

export const metadata = {
  title: "Information",
  description: "Information about Global Public Health Advocacy at Wheaton College",
};

export default function Information() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-brand-blue text-white py-20 relative overflow-hidden">
        <div className="content-container relative z-10">
          <h1 className="text-6xl font-extrabold mb-6 text-brand-yellow">
            Information
          </h1>
          <p className="text-xl max-w-2xl mb-8">
            Learn more about global public health initiatives and how you can
            make a difference in communities worldwide.
          </p>
        </div>
        <div className="absolute inset-0 opacity-20">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path
              d="M0,50 Q25,25 50,50 T100,50"
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
            />
          </svg>
        </div>
      </section>
    </main>
  );
}