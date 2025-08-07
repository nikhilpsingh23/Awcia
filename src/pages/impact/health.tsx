import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";


const HealthPage = () => {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
                <section className="relative h-[50vh] min-h-[300px] sm:h-[70vh] sm:min-h-[650px] flex items-center justify-center">
          <img
            src="/images/aoi-health.jpg"
            alt="Volunteer Hero"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-2xl md:text-[36px] font-bold mb-6">
              Health
            </h1>
            <p className="text-[16px] md:text-2xl max-w-3xl mx-auto">
              Film Industry ke Mazdoor ki Zindagi Bachana Hamari Zimmedari Hai
            </p>
          </div>

          {/* Breadcrumb */}
          <div className="absolute -bottom-6 left-6 z-20">
            <div className="bg-[#e1a535] px-5 py-2 rounded-md shadow text-white font-medium flex items-center space-x-2">
              <a href="/" className="hover:underline">
                Home
              </a>
              <span className="text-[#4b2d0c] font-bold">›</span>
              <span>Health</span>
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
        Health Initiatives for Film Industry Workers
      </h2>
      <p className="text-lg text-gray-600">
        Across the Indian film industry, countless workers, technicians, junior artists, and artists are forced to neglect their medical needs due to lack of money and support. Long working hours, unsafe shooting environments, and lack of healthcare access lead to tragic health outcomes — simply because no one stands up for them.
      </p>
      <p className="mt-4 text-gray-600">
        AICWA Foundation is committed to changing this. From life-saving surgeries and free medicines to annual health checkups and on-set ambulances — we are building a complete healthcare safety net for every worker and their families.
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
      To ensure no cine worker suffers or dies due to lack of medical help — by offering free treatment, financial aid, healthcare access, and emergency support at every stage of their life.
    </p>
  </div>
</section>



        {/* Full-Width Image */}
        <section className="py-10 bg-[#f2f2f2] md:py-16">
          <img
            src="/images/a1.jpg"
            alt="Health Support"
            className="w-full h-auto object-cover"
          />
        </section>

        {/* Key Focus Areas */}
<section className="py-16 bg-[#f2f2f2]">
  <div className="container mx-auto px-4 md:px-10">
    <h2 className="text-2xl md:text-3xl text-center font-semibold text-[#303C69] mb-12">
      Our Key Focus Areas
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: "Emergency Medical Aid for Treatment & Surgeries",
          points: [
            "Urgent financial support for life-saving treatments and surgeries",
            "Assistance for critical hospitalizations",
            "Support for uninsured or low-income film workers",
          ],
        },
        {
          title: "Essential Medicines & Daily Healthcare Support",
          points: [
            "Free medicines for workers with limited monthly income",
            "Daily healthcare kits for routine medical needs",
            "Support for chronic illness medications",
          ],
        },
        {
          title: "Establishment of Charity Hospitals",
          points: [
            "Hospitals dedicated to film workers and their families",
            "Free or subsidized treatment for common and chronic diseases",
            "Access to diagnostic and specialist services",
          ],
        },
        {
          title: "On-Set Ambulance Services & Medical Check-ups",
          points: [
            "Fully equipped ambulances at every set and studio",
            "First-aid stations for immediate emergency response",
            "Regular on-site medical check-ups",
          ],
        },
        {
          title: "Annual Health Camps & Full Body Check-ups",
          points: [
            "Free health screening for all workers and their families",
            "Preventive care and early illness detection",
            "Access to general and specialist doctors",
          ],
        },
        {
          title: "Medical Insurance Awareness & Enrollment Drives",
          points: [
            "Help in enrolling for affordable health insurance schemes",
            "Guidance for claims and policy renewals",
            "Awareness about long-term healthcare security",
          ],
        },
        {
          title: "Accident & Injury Support on Shooting Sets",
          points: [
            "Immediate aid during fire, electric shock, or on-set accidents",
            "Financial support for treatment and rehabilitation",
            "Assistance for long-term recovery and care",
          ],
        },
        {
          title: "Protection Against Industry Negligence & Abandonment",
          points: [
            "Intervention in cases of abandoned injured workers",
            "Ensure access to proper medical care",
            "Support for legal action when necessary",
          ],
        },
        {
          title: "Mental Health Counseling & Stress Management",
          points: [
            "Psychological counseling for depression and anxiety",
            "Workshops on stress and emotional well-being",
            "Support for work-related mental health issues",
          ],
        },
        {
          title: "Family Healthcare Support for Workers’ Families",
          points: [
            "Healthcare coverage for parents, spouses, and children",
            "Medical aid for dependent family members",
            "Access to check-ups and essential treatments",
          ],
        },
        {
          title: "Health Safety Audits on Shooting Sets & Studios",
          points: [
            "Regular audits for fire, electrical, and structural safety",
            "Enforce worker safety protocols",
            "Promote safe working environments on sets",
          ],
        },
        {
          title: "Mobile Health Clinics for Remote Shooting Locations",
          points: [
            "Medical services in remote or rural locations",
            "On-the-go clinics for emergency needs",
            "Support where no hospitals are available",
          ],
        },
        {
          title: "Emergency Medical Relief Fund",
          points: [
            "Dedicated fund for urgent medical financial support",
            "Quick disbursement during health emergencies",
            "Support for workers and their families",
          ],
        },
        {
          title: "Life-Saving Equipment on Sets",
          points: [
            "Install defibrillators and oxygen kits on major sets",
            "Ensure availability of fire safety gear",
            "Improve survival chances during emergencies",
          ],
        },
        {
          title: "Awareness Campaigns on Health Rights & Safety Laws",
          points: [
            "Educate workers about health and safety laws",
            "Awareness of government health schemes",
            "Empowerment to demand workplace protections",
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
            backgroundImage: "url('/images/rural.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
          <div className="relative container mx-auto px-4 md:px-10 flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0 md:space-x-10">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Support Health Initiatives
              </h3>
              <p className="text-white text-lg mb-6">
                Your donation helps organize free health camps, emergency care, and
                treatment for film workers.
              </p>
              <a
                href="/donate"
                className="inline-block bg-[#65b32e] text-white font-semibold px-8 py-4 rounded-full shadow hover:bg-[#57a227] transition-all"
              >
                DONATE FOR HEALTH
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

export default HealthPage;

