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
            Saving India’s Art, Culture & Cinema is Saving Our Identity
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
        Reviving India’s Art, Culture & Cinema Heritage
      </h2>
      <p className="text-lg text-gray-600">
        India’s art and cultural heritage is not just history — it is the living heartbeat of millions of artists, craftsmen, theatre performers, and storytellers who keep our traditions alive. But today, these artists are struggling to survive. Theatres are shutting down, folk artists have no stage, and ancient art forms are fading into oblivion because of lack of recognition, opportunities, and financial support.
      </p>
      <p className="mt-4 text-gray-600">
        AICWA Foundation is committed to preserving and reviving India’s diverse art, culture, and cinema heritage. We are building affordable theatres in every district, creating Film Cities in every state, and giving artists the platforms they deserve. Whether it’s a street performer or a regional filmmaker, we ensure that every artist finds an audience, earns a livelihood, and gets the dignity of their craft.
      </p>
      <p className="mt-4 text-gray-600">
        From digital archiving of endangered art forms to empowering folk artists with global platforms, AICWA Foundation will stand with every artist whose voice needs to be heard. Our goal is to make Indian Art & Culture a movement that uplifts communities, creates employment, and ensures that no artist is left behind in the journey of cinema and heritage.
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
      To empower artists and preserve India’s cultural legacy by building creative infrastructure, expanding access, and celebrating every voice from folk to film.
    </p>
  </div>
</section>

{/* Full-Width Image */}
<section className="py-10 bg-[#f2f2f2] md:py-16">
  <img
    src="/images/art.png"
    alt="Art, Culture & Heritage Support"
    className="w-full h-auto object-cover"
  />
</section>

{/* Key Focus Areas */}
<section className="py-16 bg-[#f2f2f2]">
  <div className="container mx-auto px-4 md:px-10">
    <h2 className="text-2xl md:text-3xl font-semibold text-[#303C69] text-center mb-12">
      AICWA Foundation’s Key Initiatives in Art, Culture & Heritage
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: "🎭 Theatre Construction in Every District",
          points: [
            "Building theatres across India with affordable ticket pricing to promote regional films and increase employment for artists & technicians.",
          ],
        },
        {
          title: "🎬 Film City Development in Every State",
          points: [
            "Establishing state-wise Film Cities to centralize shooting locations for movies, serials, ads, web series, and documentaries — generating large-scale employment.",
          ],
        },
        {
          title: "💰 Financial Support for Local & Folk Artists",
          points: [
            "Providing grants, residencies, and training to traditional artists, street performers, folk musicians, and craftsmen for sustainable livelihoods.",
          ],
        },
        {
          title: "📜 Preservation of Endangered Art Forms",
          points: [
            "Documenting, archiving, and digitally preserving India’s fading languages, rituals, and art forms for future generations.",
          ],
        },
        {
          title: "🎉 Employment through Cultural Events & Festivals",
          points: [
            "Organizing exhibitions, art fairs, folk craft melas, and inter-state cultural festivals to create continuous performance opportunities.",
          ],
        },
        {
          title: "🌍 Global Platforms for Traditional Voices",
          points: [
            "Partnering with OTT platforms, YouTube channels, and streaming services to showcase India’s folk & classical art globally.",
          ],
        },
        {
          title: "🕺 Supporting Theatre Artists & Street Performers",
          points: [
            "Ensuring dignified platforms, stage shows, and consistent income opportunities for theatre artists, street dancers, and road-side performers.",
          ],
        },
        {
          title: "🏛️ Heritage Education for Students",
          points: [
            "Conducting workshops, heritage walks, and museum visits to introduce children to India’s cultural roots and traditional arts.",
          ],
        },
        {
          title: "🏫 Collaboration with Schools & Institutions",
          points: [
            "Introducing folk music, storytelling, and craftsmanship into school curriculums to preserve and promote India’s artistic heritage.",
          ],
        },
        {
          title: "🏆 Crafting Recognition Forums & Awards",
          points: [
            "Creating awards, honors, and recognition platforms to celebrate the contribution of traditional artists, artisans, and regional filmmakers.",
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