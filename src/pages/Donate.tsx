import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface DonationFormData {
  name: string;
  email: string;
  phone: string;
  address?: string;
  panNumber?: string;
  amount: number;
}

const Donate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<DonationFormData>();
  const navigate = useNavigate();

  const onSubmit = (data: DonationFormData) => {
    console.log(data);
    // Payment integration logic here
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f2f2f2] ">
      <Navbar />

      {/* Hero Section */}
              <section className="relative h-[50vh] min-h-[300px] sm:h-[70vh] sm:min-h-[650px] flex items-center justify-center">
        <img
          src="/images/donation-cover.JPG"
          alt="Donate Cover"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-2xl md:text-4xl font-bold mb-6">
            Aapka diya hua ek paisa, kisi की पूरी ज़िंदगी बदल सकता है|
          </h1>
          <p className="text-[16px] md:text-2xl max-w-3xl mx-auto">
            Help us build a better tomorrow for the unseen hands behind the screen
          </p>
        </div>

        <div className="absolute -bottom-6 left-6 z-20">
          <div className="bg-[#e1a535] px-5 py-2 rounded-md shadow text-white font-medium flex items-center space-x-2">
            <a href="/" className="hover:underline">Home</a>
            <span className="text-[#4b2d0c] font-bold">›</span>
            <span>Donate</span>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <div className="bg-[#faf9f5] py-16 px-4 md:px-10">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-center text-[#303C69] mb-6">“Support Our Mission – Direct Bank Transfer”
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              {...register('name', { required: 'Name is required' })}
              className="w-full border border-gray-300 rounded-md p-3"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

            <input
              type="email"
              placeholder="Email"
              {...register('email', { required: 'Email is required' })}
              className="w-full border border-gray-300 rounded-md p-3"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

            <input
              type="tel"
              placeholder="Phone"
              {...register('phone', { required: 'Phone is required' })}
              className="w-full border border-gray-300 rounded-md p-3"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}

            <input
              type="text"
              placeholder="Address (Optional)"
              {...register('address')}
              className="w-full border border-gray-300 rounded-md p-3"
            />

            <input
              type="text"
              placeholder="PAN Number (Optional)"
              {...register('panNumber')}
              className="w-full border border-gray-300 rounded-md p-3"
            />

            <input
              type="number"
              placeholder="Amount"
              {...register('amount', { required: 'Amount is required', min: 1 })}
              className="w-full border border-gray-300 rounded-md p-3"
            />
            {errors.amount && <p className="text-red-500 text-sm">{errors.amount.message}</p>}

            <button
              type="submit"
              className="w-full bg-[#e97d2f] hover:bg-[#da6e20] text-white font-semibold py-3 rounded-md transition-all"
            >
              Pay ₹{watch('amount') || 0}.00
            </button>

            <div className="mt-4 flex justify-center">
              <img src="/pay.png" alt="Payment Methods" className="h-6 object-contain" />
            </div>
          </form>
        </div>
      </div>

      {/* Bank Details + QR Scanner Section */}
<div className="px-4 md:px-16 py-12 bg-[#f2f2f2] ">
  <div className="max-w-4xl mx-auto bg-[#303C69]  shadow-md border border-gray-200 rounded-xl p-6 md:flex items-center justify-between gap-10">
    
    {/* Left: Bank Details */}
    <div className="flex-1 space-y-2 text-gray-800 text-sm text-white">
      <h3 className="text-xl font-semibold mb-4 text-white">Banking Information</h3>
      <p><strong>Account Holder:</strong> AICWA Foundation</p>
      <p><strong>Bank Name:</strong> HDFC Bank</p>
      <p><strong>Bank Branch:</strong> Powai, Mumbai</p>
      <p><strong>Account No.:</strong> 50200110636055</p>
      <p><strong>IFSC Code:</strong> HDFC0000239</p>
    </div>

    {/* Right: QR Code */}
    <div className="flex-shrink-0 mt-6 md:mt-0">
      <img
        src="/images/upi-pay.png" // Make sure to place this image correctly
        alt="QR Code for Payment"
        className="w-48 h-48 object-contain mx-auto"
      />
    </div>
  </div>
</div>


      {/* Tax Benefit Section */}
      <div className="bg-[#f2f2f2]  py-12 px-4 md:px-16">
        <div className="max-w-5xl mx-auto border border-yellow-300 rounded-xl p-6 shadow-md">
          <h4 className="text-2xl font-semibold mb-4 text-[#13493a]">📢 Tax Benefits (80G & 12A)</h4>
          <p className="mb-4 text-gray-800">
            🧾 <strong>All donations to AICWA Foundation are eligible for tax exemptions under Section 80G.</strong>
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-800">
            <div>
              <h5 className="font-semibold text-[#13493a] mb-1">✅ 80G Exemption:</h5>
              <ul className="list-disc list-inside space-y-1">
                <li>Claim 50% of your donation as deduction in ITR</li>
                <li>Example: Donate ₹10,000 – get ₹5,000 exempted from taxable income</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-[#13493a] mb-1">✅ 12A Registered NGO:</h5>
              <ul className="list-disc list-inside space-y-1">
                <li>Certified under Income Tax Act for public charitable work</li>
                <li>Ensures legal accountability & transparent fund utilization</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Donate;
