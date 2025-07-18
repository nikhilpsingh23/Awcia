import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const RuralPage = () => {
    return (
      <>
      <Navbar />

      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[600px] flex items-center justify-center">
          <img
            src="/images/rural-cover.jpeg"
            alt="Rural Transformation Hero"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Rural Transformation Mission
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Empowering Rural India—One Village, One Family at a Time.
            </p>
          </div>

          {/* Breadcrumb */}
          <div className="absolute -bottom-6 left-6 z-20">
            <div className="bg-[#e1a535] px-5 py-2 rounded-md shadow text-white font-medium flex items-center space-x-2">
              <a href="/" className="hover:underline">Home</a>
              <span className="text-[#4b2d0c] font-bold">›</span>
              <span>Rural Transformation</span>
            </div>
          </div>
        </section>

        <div className="h-10" />

        {/* Introduction */}
        <section className="py-16 bg-[#f2f2f2]">
          <div className="container mx-auto px-4 md:px-10">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Empowering Rural India—One Village, One Family at a Time.
              </h2>
              <p className="text-lg text-gray-600">
                The AICWA Foundation believes true national growth lies in the upliftment of India’s rural heartland. Many film workers come from rural communities that continue to face challenges like poor infrastructure, unemployment, and lack of basic education or healthcare.
              </p>
              <p className="mt-4 text-gray-600">
                Our Rural Transformation initiative connects these underserved communities with essential services, skill training, self-help programs, and sustainable development models to enable long-term change.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-12 bg-[#f2f2f2] text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b2c48] mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              To revitalize rural communities by providing access to clean water, education, healthcare, livelihood opportunities, and self-reliant development — turning villages into empowered, sustainable ecosystems.
            </p>
          </div>
        </section>

        {/* Full-Width Image */}
        <section className="py-10 bg-[#f2f2f2] md:py-16">
          <img
            src="/images/a3.png"
            alt="Rural Support"
            className="w-full h-auto object-cover"
          />
        </section>

        {/* Key Focus Areas */}
        <section className="py-16 bg-[#f2f2f2]">
          <div className="container mx-auto px-4 md:px-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Our Key Focus Areas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Rural Health & Sanitation",
                  points: [
                    "Mobile clinics and health check-up camps in remote villages",
                    "Support for maternal and child health",
                    "Hygiene awareness drives and toilet construction support",
                  ],
                },
                {
                  title: "Skill Training & Employment",
                  points: [
                    "Vocational training for youth and women in rural areas",
                    "Self-employment programs in crafts, tailoring, and agri-processing",
                    "Support for rural entrepreneurship and micro-enterprises",
                  ],
                },
                {
                  title: "Clean Water & Infrastructure",
                  points: [
                    "Installation of handpumps, water filters, and sanitation units",
                    "Village-level solar lighting and renewable energy solutions",
                    "Repairing rural roads and connectivity networks",
                  ],
                },
                {
                  title: "Rural Education Access",
                  points: [
                    "School kits and digital classrooms for rural schools",
                    "Evening learning centers for underprivileged students",
                    "Adult literacy programs for farmers and laborers",
                  ],
                },
                {
                  title: "Women-Led Self-Help Groups",
                  points: [
                    "Formation of SHGs for savings and income generation",
                    "Training in bookkeeping, banking, and group enterprise",
                    "Support for women-led rural cooperatives",
                  ],
                },
                {
                  title: "Sustainable Farming & Environment",
                  points: [
                    "Training in organic farming and soil care",
                    "Tree plantation drives and water conservation",
                    "Support for climate-resilient agriculture practices",
                  ],
                },
              ].map((area, idx) => (
                <div
                  key={idx}
                  className="relative overflow-hidden group rounded-lg shadow-md p-6 bg-white transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-[#303C69] transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0" />
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-white transition-colors duration-300 mb-4">
                      {area.title}
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 group-hover:text-white transition-colors duration-300">
                      {area.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Donate Section */}
        <section
          className="relative py-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://static.toiimg.com/photo/msid-80514186,width-96,height-65.cms')",
          }}
        >
          <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
          <div className="relative container mx-auto px-4 md:px-10 flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0 md:space-x-10">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Support Rural Transformation
              </h3>
              <p className="text-white text-lg mb-6">
                Help us empower villages with education, health, clean water, and skills — building self-reliant communities across India.
              </p>
              <a
                href="/donate"
                className="inline-block bg-[#65b32e] text-white font-semibold px-8 py-4 rounded-full shadow hover:bg-[#57a227] transition-all"
              >
                DONATE FOR RURAL INDIA
              </a>
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left text-white">
              <h4 className="text-2xl font-semibold mb-2">FOR SUPPORT</h4>
              <p>
                <span className="font-semibold">9820982115</span>
                <br />
                <a
                  href="mailto:info@aicwafoundation.org"
                  className="underline text-white"
                >
                  info@aicwafoundation.org
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>


      <Footer />
    </>
      );
    };
export default RuralPage