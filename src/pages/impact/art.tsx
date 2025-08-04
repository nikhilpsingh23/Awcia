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
        Celebrating Indian Art, Culture & Cinema Heritage
      </h2>
      <p className="text-lg text-gray-600">
        The Art, Culture & Heritage wing of AICWA Foundation is dedicated to uplifting the creative roots of Indian cinema by nurturing traditional artists, promoting regional storytelling, and preserving the diverse cultural legacy that fuels our film industry.
      </p>
      <p className="mt-4 text-gray-600">
        Through nationwide fashion shows, film-themed art exhibitions, and folk craft fairs, we spotlight the contributions of costume designers, set artists, makeup experts, storytellers, and folk artisans. We also host film schools and workshops in acting, direction, production, and cinematic arts — ensuring our heritage thrives on and off screen.
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
      To revive, preserve, and promote India’s artistic and cinematic heritage by building sustainable platforms, training ecosystems, and recognition forums that empower creators, artists, and storytellers from every cultural corner of the nation.
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
    title: "Art, Culture & Heritage in Every District",
    points: [
      "Establish vibrant cultural centers and performance spaces in every district of India to celebrate diverse art forms.",
      "Promote regional cinema, folk arts, traditional music, and local craftsmanship through dedicated events and platforms.",
    ],
  },
  {
    title: "Preservation of Traditional Arts",
    points: [
      "Document, archive, and digitally preserve endangered art forms, languages, and rituals across Indian states.",
      "Collaborate with scholars, artists, and institutions to pass on knowledge to younger generations.",
    ],
  },
  {
    title: "Support for Local Artists",
    points: [
      "Provide grants, residencies, and training to local and folk artists to sustain their practice and livelihood.",
      "Create employment and performance opportunities through festivals, exhibitions, and cultural programs.",
    ],
  },
  {
    title: "Cultural Exchange & Integration",
    points: [
      "Facilitate cross-regional cultural exchanges to promote national integration and mutual respect.",
      "Organize inter-state festivals and tours showcasing the richness of India’s diverse traditions.",
    ],
  },
  {
    title: "Education Through Heritage",
    points: [
      "Integrate traditional art, music, and storytelling into school curricula to foster cultural awareness from a young age.",
      "Organize heritage walks, workshops, and museum visits for students and local communities.",
    ],
  },
  {
    title: "Modern Platforms for Traditional Voices",
    points: [
      "Leverage technology and digital media to showcase folk and classical art forms globally.",
      "Partner with OTT platforms, YouTube channels, and streaming services to feature heritage-focused content.",
    ],
  }
]
.map((area, idx) => (
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