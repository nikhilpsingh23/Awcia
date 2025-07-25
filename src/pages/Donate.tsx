import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface DonationFormData {
  name:string;
  email: string;
  phone: string;
  address?: string;
  panNumber?: string;
  amount: number;
}

const Donate = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm<DonationFormData>();
  const navigate = useNavigate();

  const onSubmit = (data: DonationFormData) => {
    console.log(data);
    // Payment logic here
  };

  return (
    <div className="flex flex-col min-h-screen">

      <Navbar />
      <section className="relative h-[70vh] min-h-[650px] flex items-center justify-center">
        <img
          src="/images/donation-cover.JPG"
          alt="Volunteer Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Aapka diya hua ek paisa, kisi की पूरी ज़िंदगी बदल सकता है|</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Help us build a better tomorrow for the unseen hands behind the screen
          </p>
        </div>

        {/* Left-aligned floating breadcrumb (half overlay) */}
        <div className="absolute -bottom-6 left-6 z-20">
          <div className="bg-[#e1a535] px-5 py-2 rounded-md shadow text-white font-medium flex items-center space-x-2">
            <a href="/" className="hover:underline">Home</a>
            <span className="text-[#4b2d0c] font-bold">›</span>
            <span>Donate</span>
          </div>
        </div>
      </section>

      {/* Main Donation Section */}
      <div className="flex-1 px-4 md:px-16 py-12 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          {/* Left Content with Bank Details and UPI Image */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">AICWA Foundation | NGO</h2>
            <p className="text-gray-700 mb-4">
              Thank you for considering a donation to AICWA Foundation. Your generosity helps fund programs that support film industry workers and their families.
            </p>
            <p className="text-gray-700 mb-4">
              You can contribute via UPI, credit/debit card, or direct bank transfer. All donations are tax-deductible and go directly toward supporting our mission.
            </p>

            <div className="bg-gray-50 border border-gray-200 rounded-md p-4 text-sm text-gray-800 mb-6">
              <h4 className="font-semibold text-lg mb-2">Bank Details:</h4>
              <p><strong>Account Name:</strong> AICWA Foundation</p>
              <p><strong>Bank:</strong> HDFC Bank</p>
              <p><strong>Account Number:</strong> 50200110636055</p>
              <p><strong>IFSC Code:</strong> HDFC0000239</p>
              <p><strong>Branch:</strong> Powai, Mumbai</p>
            </div>

            {/* Tax Benefits Info */}
            <div className="bg-[#fef9ec] border border-yellow-300 rounded-md p-5 text-gray-800 shadow-sm">
              <h4 className="font-semibold text-lg mb-3 flex items-center">
                📢 Tax Benefits You Can Trust (Under Section 80G & 12A)
              </h4>
              <p className="mb-2">
                🧾 <strong>All donations made to AICWA Foundation are eligible for Income Tax Exemption:</strong>
              </p>
              <div className="space-y-3 ml-4">
                <div>
                  <p className="font-medium text-[#13493a]">✅ 80G Exemption:</p>
                  <ul className="list-disc list-inside text-sm text-gray-700">
                    <li>Claim 50% of your donation as deduction in your Income Tax Return</li>
                    <li>(Example: Donate ₹10,000 – get ₹5,000 reduced from taxable income)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-[#13493a]">✅ 12A Registration:</p>
                  <ul className="list-disc list-inside text-sm text-gray-700">
                    <li>Certified under the Income Tax Act for charitable work</li>
                    <li>Ensures legal accountability & fund utilization for public welfare</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Donation Form */}
          <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Payment Details</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
  <input
    type="text"
    placeholder="Full Name"
    {...register("name", { required: "Name is required" })}
    className="w-full border border-gray-300 rounded-md p-3 placeholder-gray-500"
  />
  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
</div>
              <div>
                
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email", { required: "Email is required" })}
                  className="w-full border border-gray-300 rounded-md p-3 placeholder-gray-500"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Phone"
                  {...register("phone", { required: "Phone is required" })}
                  className="w-full border border-gray-300 rounded-md p-3 placeholder-gray-500"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Address (Optional)"
                  {...register("address")}
                  className="w-full border border-gray-300 rounded-md p-3 placeholder-gray-500"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Pan Number (Optional)"
                  {...register("panNumber")}
                  className="w-full border border-gray-300 rounded-md p-3 placeholder-gray-500"
                />
              </div>

              <div>
                <input
                  type="number"
                  placeholder="Amount"
                  defaultValue={0}
                  {...register("amount", { required: "Amount is required", min: 1 })}
                  className="w-full border border-gray-300 rounded-md p-3 placeholder-gray-500"
                />
                {errors.amount && <p className="text-red-500 text-sm mt-1">{errors.amount.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-md transition-colors"
              >
                Pay ₹ {watch('amount')}.00
              </button>

              <div className="mt-4 flex justify-center">
                <img src="/pay.png" alt="Payment Methods" className="h-6 object-contain" />
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Donate;
