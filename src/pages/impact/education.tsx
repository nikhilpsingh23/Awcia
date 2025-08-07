import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const EducationPage = () => {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
                <section className="relative h-[50vh] min-h-[300px] sm:h-[70vh] sm:min-h-[650px] flex items-center justify-center">
          <img
            src="/images/V9.jpg"
            alt="Education Hero"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-2xl md:text-[36px] font-bold mb-6">
              Education for Every Dream
            </h1>
            <p className="text-[16px] md:text-2xl max-w-3xl mx-auto">
              Mazdoor Ke Bacchon Ka Sapna – Humari Zimmedari
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
      <h2 className="text-2xl md:text-3xl font-semibold text-[#303C69] mb-4">
        Educational Empowerment for Cine Workers’ Families
      </h2>
      <p className="text-lg text-gray-600">
        Thousands of workers, technicians, junior artists, and artists in the Indian film industry struggle to provide proper education to their children due to irregular income and long working hours. Many children are forced to abandon their dreams of becoming doctors, engineers, and professionals simply because their parents cannot afford school fees, books, uniforms, or higher education.
      </p>
      <p className="mt-4 text-gray-600">
        We are committed to building free schools, colleges, and universities where these children can study without financial burden and fulfill the dreams their parents once saw for them. Every child deserves a future filled with opportunities — we will ensure they get it.
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
      To make quality education accessible and free for the children of film industry workers—enabling them to dream big, pursue professional careers, and break the cycle of poverty.
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
    <h2 className="text-2xl md:text-3xl font-semibold text-[#303C69] text-center mb-12">
      Our Key Focus Areas
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: "🎓 Free Education from School to College",
          points: [
            "Completely free education from primary to degree programs",
            "Support to prevent dropouts due to financial hardship",
            "Open access to academic and professional growth",
          ],
        },
        {
          title: "🏥 Medical, Engineering & Professional Degree Colleges",
          points: [
            "Build affordable colleges for industry children",
            "Special admissions for film workers’ families",
            "Enable dreams of becoming doctors, engineers, and professionals",
          ],
        },
        {
          title: "📚 Educational Kits – Books, Bags, Uniforms & Essentials",
          points: [
            "Free school supplies for underprivileged children",
            "Annual distribution of complete educational kits",
            "Ensure no child is deprived of learning tools",
          ],
        },
        {
          title: "🎓 Scholarships for Higher Education (India & Abroad)",
          points: [
            "Merit-based scholarships and sponsorships",
            "Support for tuition, exam, and travel expenses",
            "Opportunities for global academic exposure",
          ],
        },
        {
          title: "🏫 Day-Care & After-School Learning Programs",
          points: [
            "Safe and engaging spaces for kids while parents work",
            "Homework support and nutritious meals",
            "Creative and cognitive development activities",
          ],
        },
        {
          title: "🏡 Hostels & Student Accommodation",
          points: [
            "Affordable, secure hostels in major cities",
            "Residential support for long-term study",
            "Separate facilities for boys and girls from remote areas",
          ],
        },
        {
          title: "🎯 Skill Development & Vocational Training Centers",
          points: [
            "Training in industry-relevant practical skills",
            "Career alternatives beyond traditional academics",
            "Job-ready programs to ensure employment opportunities",
          ],
        },
        {
          title: "👨‍👩‍👧‍👦 Fulfilling Dreams of Workers’ Children",
          points: [
            "Uplifting families through educational empowerment",
            "Helping children achieve what their parents dreamed of",
            "No dream left unfulfilled due to poverty",
          ],
        },
        {
          title: "🌟 Talent Discovery & Mentorship Programs",
          points: [
            "Identify talented children early and nurture them",
            "Provide platforms and exposure for growth",
            "Match children with mentors and opportunities",
          ],
        },
        {
          title: "💡 Securing a Bright Future for Every Family",
          points: [
            "Provide full-cycle academic and career support",
            "Ensure families feel confident about their children’s future",
            "Build foundations for a dignified, educated generation",
          ],
        },
        {
          title: "🧭 Career Guidance & Mentorship Support",
          points: [
            "Workshops, counselling, and one-on-one mentorship",
            "Help students make informed career decisions",
            "Bridge the gap between education and employment",
          ],
        },
      ].map((area, idx) => (
        <div
          key={idx}
          className="relative overflow-hidden group rounded-lg shadow-md p-6 bg-white transition-all duration-300"
        >
          {/* Background slide overlay */}
          <div className="absolute inset-0 bg-[#303C69] transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0" />

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
            backgroundImage:
              "url('/images/education-01.JPG')",
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
