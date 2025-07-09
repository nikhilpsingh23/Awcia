import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface DonationFormData {
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
      

      {/* Back to Home Button */}
      <div className="px-6 pt-6">
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-blue-600 hover:text-orange-600 text-sm font-medium"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Home
        </button>
      </div>

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

            <img
              src="/images/upi-pay.png"
              alt="UPI Payment"
              className="w-full h-40 object-contain rounded-md shadow-md"
            />
          </div>

          {/* Right Donation Form */}
          <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Payment Details</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
                Pay ₹ {watch('amount') || 0}.00
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
