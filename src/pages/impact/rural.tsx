import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const RuralPage = () => {
    return (
      <>
      <Navbar />

      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[300px] sm:h-[70vh] sm:min-h-[650px] flex items-center justify-center">
          <img
            src="/images/rural-cover.jpeg"
            alt="Rural Transformation Hero"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-2xl md:text-[36px] font-bold mb-6">
              Rural Transformation Mission
            </h1>
            <p className="text-[16px] md:text-2xl max-w-3xl mx-auto">
              Transforming Rural India — Bringing Hope to Every Home
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
      <h2 className="text-2xl md:text-3xl font-semibold text-[#303C69] mb-4">
        Rural Transformation – Building Dreams, Changing Lives
      </h2>
      <p className="text-lg text-gray-600">
        In countless villages across India, families still sleep hungry, children drop out of school due to lack of fees, and elders live without access to healthcare. Mud huts collapse in monsoons, girls are married off early, and families carry loved ones on bikes because ambulances are unaffordable.
      </p>
      <p className="mt-4 text-gray-600">
        We are committed to changing this harsh reality by building proper homes, ensuring clean water, providing healthcare, quality education, and skill-based employment — creating a future where every rural family lives with dignity and self-reliance.
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
      To uplift rural families by providing basic necessities, permanent housing, free education, healthcare, skill training, clean water, and digital access — turning neglected villages into empowered communities.
    </p>
  </div>
</section>

{/* Full-Width Image */}
<section className="py-10 bg-[#f2f2f2] md:py-16">
  <img
    src="/images/rural1.jpeg"
    alt="Rural Support"
    className="w-full h-auto object-cover"
  />
</section>

{/* Key Focus Areas */}
<section className="py-16 bg-[#f2f2f2]">
  <div className="container mx-auto px-4 md:px-10">
    <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#303C69] mb-12">
      Our Key Focus Areas
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: "Clothing & Basic Necessities Distribution",
          points: [
            "Providing clothes, footwear, ration kits, and hygiene supplies to rural families",
          ],
        },
        {
          title: "Affordable Housing Support",
          points: [
            "Financial aid for building permanent homes to replace unsafe mud houses",
          ],
        },
        {
          title: "Access to Healthcare & Medical Aid",
          points: [
            "Free health camps, ambulance services, and critical treatment assistance",
          ],
        },
        {
          title: "Rural Education Empowerment",
          points: [
            "Free school to college education, with books, cycles, tablets, and uniforms",
          ],
        },
        {
          title: "Marriage Support for Underprivileged Families",
          points: [
            "Helping families conduct safe, dignified marriages for daughters in need",
          ],
        },
        {
          title: "Employment & Skill Development Programs",
          points: [
            "Vocational training and entrepreneurship support to create local livelihoods",
          ],
        },
        {
          title: "Agricultural Support for Farmers",
          points: [
            "Providing seeds, tools, fertilizers, and tractor aid to reduce debt burden",
          ],
        },
        {
          title: "Village Infrastructure Development",
          points: [
            "Installing water pumps, solar lights, toilets, and building rural roads",
          ],
        },
        {
          title: "Support for Shops & Small Businesses",
          points: [
            "Helping locals set up kirana shops and micro-businesses for self-reliance",
          ],
        },
        {
          title: "Ambulance & Emergency Services",
          points: [
            "Providing village-level ambulance access for urgent medical needs",
          ],
        },
        {
          title: "Nutrition & Food Security Initiatives",
          points: [
            "Distribution of ration kits and cooked meals to fight rural hunger",
          ],
        },
        {
          title: "Support for Abandoned Elders & Destitute",
          points: [
            "Creating safe shelters for elderly and destitute people left behind",
          ],
        },
        {
          title: "Village-level Digital Empowerment",
          points: [
            "Providing internet access, digital literacy, and recharge support",
          ],
        },
        {
          title: "Youth Development & Future Building",
          points: [
            "Scholarships and mentorship for rural children to become professionals",
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
              "url('/images/rural-child.jpeg')",
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