import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const WomenPage = () => {
    return (
      <>
      <Navbar />

      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative h-[70vh] min-h-[650px] flex items-center justify-center">
          <img
            src="/images/story-cover.png"
            alt="Women Empowerment Hero"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Women Empowerment Initiatives
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Empowering Every Woman Behind the Cinema.
            </p>
          </div>

          {/* Breadcrumb */}
          <div className="absolute -bottom-6 left-6 z-20">
            <div className="bg-[#e1a535] px-5 py-2 rounded-md shadow text-white font-medium flex items-center space-x-2">
              <a href="/" className="hover:underline">Home</a>
              <span className="text-[#4b2d0c] font-bold">›</span>
              <span>Women Empowerment</span>
            </div>
          </div>
        </section>

        <div className="h-10" />

        {/* Slogan & Introduction */}
        <section className="py-16 bg-[#f2f2f2]">
          <div className="container mx-auto px-4 md:px-10">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Empowering Every Woman Behind the Cinema.
              </h2>
              <p className="text-lg text-gray-600">
                The AICWA Foundation is committed to empowering women working in the Indian film industry — including makeup artists, costume designers, background dancers, scriptwriters, and technicians — many of whom face systemic gender-based challenges and lack of recognition.
              </p>
              <p className="mt-4 text-gray-600">
                Our goal is to support women in every stage of their journey — from skill-building to leadership — and foster a safer, more inclusive industry through awareness, training, legal aid, and community strength.
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
              To uplift, protect, and empower every woman in the film industry — from grassroots workers to aspiring leaders — by building confidence, creating safe spaces, and providing opportunities for growth.
            </p>
          </div>
        </section>

        {/* Full-Width Image */}
        <section className="py-10 bg-[#f2f2f2] md:py-16">
          <img
            src="/images/a4.png"
            alt="Women Empowerment Support"
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
                  title: "Vocational & Skill Development",
                  points: [
                    "Training in makeup, costume, editing, and camera work",
                    "Workshops in entrepreneurship, digital literacy, and finance",
                    "Support for career reintegration after motherhood or gaps",
                  ],
                },
                {
                  title: "Leadership & Creative Mentorship",
                  points: [
                    "1:1 mentoring from senior women in cinema and TV",
                    "Workshops in scriptwriting, direction, and production",
                    "Encouraging women-led storytelling and content",
                  ],
                },
                {
                  title: "Legal & Financial Aid",
                  points: [
                    "Legal awareness on workplace rights and contracts",
                    "Support during cases of exploitation or harassment",
                    "Micro-grants for women-led creative projects",
                  ],
                },
                {
                  title: "Mental Health & Confidence Building",
                  points: [
                    "Counseling support for stress and self-worth",
                    "Confidence-building workshops and group sessions",
                  ],
                },
                {
                  title: "Safety, Dignity & Workplace Equity",
                  points: [
                    "Gender-sensitivity training on film sets",
                    "Support helplines and complaint redressal mechanisms",
                    "Awareness of POSH (Prevention of Sexual Harassment) laws",
                  ],
                },
                {
                  title: "Community & Advocacy",
                  points: [
                    "Building women’s circles within production houses",
                    "Showcasing women’s work through festivals and screenings",
                    "Advocating for gender parity in the film industry workforce",
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
              "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpe8Vr-8ZcIKrPE-AkV9fZ9UslV6aduY8iNQ&s')",
          }}
        >
          <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
          <div className="relative container mx-auto px-4 md:px-10 flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0 md:space-x-10">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Support Women Empowerment
              </h3>
              <p className="text-white text-lg mb-6">
                Help us create a safer, more inclusive film industry where every woman can grow, lead, and thrive.
              </p>
              <a
                href="/donate"
                className="inline-block bg-[#65b32e] text-white font-semibold px-8 py-4 rounded-full shadow hover:bg-[#57a227] transition-all"
              >
                DONATE FOR WOMEN
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
export default WomenPage