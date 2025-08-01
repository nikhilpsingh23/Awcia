import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const ArtPage = () => {
    return (
      <>
      <Navbar />

      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[300px] sm:h-[70vh] sm:min-h-[650px] flex items-center justify-center">
          <img
            src="/images/nagma.JPG"
            alt="Volunteer Hero"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-2xl md:text-[36px] font-bold mb-6">
            Arts, Culture & Welfare Vision
            </h1>
            <p className="text-[16px] md:text-2xl max-w-3xl mx-auto">
            Building Platforms. Creating Futures. Honoring the Creators
            </p>
          </div>

          {/* Breadcrumb */}
          <div className="absolute -bottom-6 left-6 z-20">
            <div className="bg-[#e1a535] px-5 py-2 rounded-md shadow text-white font-medium flex items-center space-x-2">
              <a href="/" className="hover:underline">
                Home
              </a>
              <span className="text-[#4b2d0c] font-bold">›</span>
              <span>Art-Culture-Heritage</span>
            </div>
          </div>
        </section>

        {/* Spacer */}
        <div className="h-10" />

        {/* Slogan & Introduction */}
        <section className="py-16 bg-[#f2f2f2]">
          <div className="container mx-auto px-4 md:px-10">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-semibold text-[#303C69] mb-4">
                Healthy Workers, Stronger Cinema!
              </h2>
              <p className="text-lg text-gray-600">
                The Health Department of AICWA Foundation is committed to the physical and
                mental well-being of every film industry worker — from lightmen, spot boys,
                and make-up artists to stuntmen, sound engineers, and backstage crew.
              </p>
              <p className="mt-4 text-gray-600">
              Pan-India fashion shows, film-themed art exhibitions, and craft fairs to uplift costume designers, makeup artists, visual storytellers, and folk art creators. Film Schools & Workshops: In acting, direction, production, design, and tech roles. Annual recognition of excellence in cinema, dance, fashion, music, and behind-the-scenes roles.
              </p>
            </div>
          </div>
        </section>

         {/* Mission */}
        <section className="py-12 bg-[#f2f2f2] text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#303C69] mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            To establish strong, sustainable infrastructure and support systems across India that promote, protect, and empower the creative community—while reviving arts, cinema, and cultural pride across every state and region.
            </p>
          </div>
        </section>


        {/* Full-Width Image */}
        <section className="py-10 bg-[#f2f2f2] md:py-16">
          <img
            src="/images/art.png"
            alt="Health Support"
            className="w-full h-auto object-cover"
          />
        </section>

        {/* Key Focus Areas */}
        <section className="py-16 bg-[#f2f2f2]">
  <div className="container mx-auto px-4 md:px-10">
    <h2 className="text-2xl md:text-3xl font-semibold text-[#303C69] text-center  mb-12">
      Our Key Focus Areas
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: "Theater in Every District",
          points: [
            "Construct and operate low-cost, high-quality cinema and multipurpose theaters in every district of India.",
            "To provide platforms for regional cinema, cultural performances, and local artists.",
          ],
        },
        {
          title: "Film City in Every StatePlan",
          points: [
            "Regular health check-up camps at film sets, studios, and worker settlements",
            "General health screening, eye checkups, dental camps, and BP/sugar tests",
            "Preventive healthcare education",
          ],
        },
        {
          title: " Production Subsidies & Film Grants",
          points: [
            "Quick-response support for cine workers facing sudden medical emergencies",
            "Ambulance tie-ups and 24x7 helpline (proposed)",
            "Financial aid for surgeries, medications, and hospitalizations in critical cases",
          ],
        },
        {
          title: " Artist & Film Worker Hostels Across India",
          points: [
            "Psychological counseling and therapy for stress, depression, and substance abuse",
            "Awareness sessions to break the stigma around mental health in the industry",
          ],
        },
        {
          title: " Welfare & Security for Artists and WorkersHealth Insurance & Medical Support",
          points: [
            "De-addiction programs for alcohol and drug dependence",
            "Post-recovery employment support and wellness monitoring",
          ],
        },
        {
          title: "Workshops & Awareness Programs",
          points: [
            "Yoga, meditation, and fitness workshops for active workers",
            "Nutritional guidance and health literacy for long-term wellness",
          ],
        },
      ].map((area, idx) => (
        <div
          key={idx}
          className="relative overflow-hidden group rounded-lg shadow-md p-6 bg-white transition-all duration-300"
        >
          {/* Background slide overlay */}
          <div className="absolute inset-0 bg-[#303C69]  transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0" />

          {/* Content */}
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


        {/* Donate Section with Background */}
        <section
          className="relative py-20 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/art-aoi.HEIC')",
          }}
        >
          <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
          <div className="relative container mx-auto px-4 md:px-10 flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0 md:space-x-10">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Support Arts, Culture  Initiatives
              </h3>
              <p className="text-white text-lg mb-6">
              Building Platforms. Creating Futures. Honoring the Creators.
              </p>
              <a
                href="/donate"
                className="inline-block bg-[#65b32e] text-white font-semibold px-8 py-4 rounded-full shadow hover:bg-[#57a227] transition-all"
              >
                DONATE FOR Art & Culture
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
export default ArtPage