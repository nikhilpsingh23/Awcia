import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const WomenPage = () => {
    return (
      <>
      <Navbar />

      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[300px] sm:h-[70vh] sm:min-h-[650px] flex items-center justify-center">
          <img
            src="/images/story-cover.png"
            alt="Women Empowerment Hero"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-2xl md:text-[36px] font-bold mb-6">
              Women Empowerment 
            </h1>
            <p className="text-[16px] md:text-2xl max-w-3xl mx-auto">
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
              <h2 className="text-2xl md:text-3xl font-semibold text-[#303C69] mb-4">
                Empowering Every Woman Behind the Cinema.
              </h2>
              <p className="text-lg text-gray-600">
                Behind every bright light of the Indian film industry, there are countless women fighting battles no one sees. From makeup artists and costume designers to junior artists and lead actresses, women across every department face daily exploitation, harassment, and discrimination. They are blackmailed, denied fair wages, falsely accused with FIRs, and forced to suffer in silence — because they have no one to stand for them.
              </p>
              <p className="mt-4 text-gray-600">
                Many leave their hometowns and families, dreaming of a career in cinema, but are trapped by powerful people who misuse their vulnerability. Their struggle isn’t just professional; it’s a battle for dignity, safety, and survival in an industry that often turns a blind eye.
              </p>
              <p className="mt-4 text-gray-600">
                We are here to change that.
              </p>
              <p className="mt-4 text-gray-600">
                We will fight for every woman’s right to work safely, earn fairly, and live with respect. From legal battles to workplace safety, from skill development to financial aid, and from mental health support to marriage assistance — we are committed to being their strength at every step.
              </p>
              <p className="mt-4 text-gray-600">
                Because their dreams are as important as anyone else’s. And no woman in this industry should ever feel alone again.
              </p>
            </div>
          </div>
        </section>

        {/* Key Focus Areas */}
        <section className="py-16 bg-[#f2f2f2]">
          <div className="container mx-auto px-4 md:px-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#303C69] text-center mb-12">
              Our Key Focus Areas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Legal & Financial Aid",
                  points: [
                    "Legal support for cases of exploitation, harassment, or false FIRs.",
                    "Free legal counseling and case filing assistance for women in the industry.",
                    "Financial aid for women facing non-payment of salaries and dues.",
                    "Micro-grants for women-led creative projects and self-employment."
                  ],
                },
                {
                  title: "Women’s Safety & Workplace Protection",
                  points: [
                    "24x7 helpline support for immediate assistance.",
                    "Deployment of safety officers and grievance redressal mechanisms on shooting sets.",
                    "Gender-sensitivity training for production houses and teams.",
                    "Strict monitoring of POSH (Prevention of Sexual Harassment) compliance on sets."
                  ],
                },
                {
                  title: "Vocational & Skill Development",
                  points: [
                    "Free courses in makeup, hair styling, costume design, choreography, editing, and direction.",
                    "Career re-integration support for women returning after maternity or career gaps.",
                    "Digital literacy and entrepreneurship workshops to enhance employability."
                  ],
                },
                {
                  title: "Mental Health & Emotional Support",
                  points: [
                    "Counseling sessions to deal with workplace stress, harassment trauma, and confidence-building.",
                    "Support groups and emotional well-being programs for female artists and workers."
                  ],
                },
                {
                  title: "Community Building & Leadership Mentorship",
                  points: [
                    "Creating women’s support circles within production teams.",
                    "Mentorship from senior women in cinema and television.",
                    "Encouraging women-led storytelling and creative leadership in the industry."
                  ],
                },
                {
                  title: "Marriage & Family Support",
                  points: [
                    "Financial assistance for marriage expenses of women workers and their daughters.",
                    "Support programs for women balancing family responsibilities with careers.",
                    "Safe hostels and accommodation facilities for women migrating from rural areas for work."
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
              "url('/images/m4.jpg')",
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