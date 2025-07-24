import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const EducationPage = () => {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative h-[70vh] min-h-[650px] flex items-center justify-center">
          <img
            src="/images/V9.jpg"
            alt="Education Hero"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Education for Every Dream
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Lighting Futures – From Film Sets to Global Classrooms.
            </p>
          </div>

          {/* Breadcrumb */}
          <div className="absolute -bottom-6 left-6 z-20">
            <div className="bg-[#e1a535] px-5 py-2 rounded-md shadow text-white font-medium flex items-center space-x-2">
              <a href="/" className="hover:underline">
                Home
              </a>
              <span className="text-[#4b2d0c] font-bold">›</span>
              <span>Education</span>
            </div>
          </div>
        </section>

        {/* Spacer */}
        <div className="h-10" />

        {/* Slogan & Introduction */}
        <section className="py-16 bg-[#f2f2f2]">
          <div className="container mx-auto px-4 md:px-10">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Lighting Futures – From Film Sets to Global Classrooms.
              </h2>
              <p className="text-lg text-gray-600">
                The AICWA Foundation recognizes that behind the glitz and glamour of the Indian film industry lies a hardworking community of crew members whose children often struggle to access quality education. We aim to break this cycle and empower every child to dream bigger.
              </p>
              <p className="mt-4 text-gray-600">
                From basic schooling to international university placements, we provide holistic support including tuition, scholarships, digital learning, and global mentorship for children of Indian film industry workers.
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
              To create equitable access to education for the children of India’s film industry workers—from basic schooling to global higher education—empowering them to build a life beyond limitations.
            </p>
          </div>
        </section>

        {/* Full-Width Image */}
        <section className="py-10 bg-[#f2f2f2] md:py-16">
          <img
            src="/images/education.JPG"
            alt="Education Support"
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
                  title: "Foundational & School-Level Education",
                  points: [
                    "Free school admissions, books, uniforms, and materials",
                    "After-school tuitions and remedial learning support",
                    "Digital access through tablets and online classes",
                    "Scholarships and financial sponsorships",
                    "Parental engagement workshops",
                  ],
                },
                {
                  title: "Support for Higher Education in India",
                  points: [
                    "Career guidance and goal planning",
                    "College admissions and form filling",
                    "Help with scholarships and government schemes",
                    "Vocational training for creative/technical skills",
                  ],
                },
                {
                  title: "Masters & Global Education Programs",
                  points: [
                    "Support for SOPs, CVs, and applications abroad",
                    "Help for IELTS, GRE, and scholarship prep",
                    "Mentorship from alumni studying abroad",
                    "Pre-departure briefings & cultural orientation",
                  ],
                },
                {
                  title: "Mentorship & Counselling",
                  points: [
                    "1:1 mentorship programs from industry professionals",
                    "Career talks and alumni sessions",
                  ],
                },
                {
                  title: "Digital Literacy & Access",
                  points: [
                    "Providing devices and internet access",
                    "Training on basic digital tools and safe practices",
                  ],
                },
                {
                  title: "Outreach & Awareness",
                  points: [
                    "Spreading awareness of education schemes",
                    "Workshops for students and families in low-income communities",
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
            backgroundImage:
              "url('https://images.unsplash.com/photo-1596495577886-d920f1fb7238')",
          }}
        >
          <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
          <div className="relative container mx-auto px-4 md:px-10 flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0 md:space-x-10">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Support Children’s Education
              </h3>
              <p className="text-white text-lg mb-6">
                Help transform the lives of future generations of film workers by giving them access to knowledge, dignity, and dreams.
              </p>
              <a
                href="/donate"
                className="inline-block bg-[#65b32e] text-white font-semibold px-8 py-4 rounded-full shadow hover:bg-[#57a227] transition-all"
              >
                DONATE FOR EDUCATION
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

export default EducationPage;
