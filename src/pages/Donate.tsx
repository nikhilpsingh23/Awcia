import { useForm } from 'react-hook-form';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';
interface DonationFormData {
  email: string;
  phone: string;
  address: string;
  panNumber: string;
  amount: number;
}

const Donate = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, watch } = useForm<DonationFormData>();

  const onSubmit = (data: DonationFormData) => {
    console.log(data);
    // Handle payment gateway integration here
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 flex items-center text-gray-600 hover:text-aicwa-orange transition-colors"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back
      </button>

      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left Column - NGO Information */}
            <div className="bg-aicwa-orange p-8 text-white">
              <div className="flex items-center mb-6">
                <img src="/logo.jpg" alt="AICWA Logo" className="h-12 w-12 mr-3" />
                <h2 className="text-2xl font-bold">AICWA Foundation | NGO</h2>
              </div>
              
              <div className="prose prose-invert">
                <p className="mb-6">
                  To empower and uplift workers, technicians, junior artists, and artists of the Indian film industry—Bollywood and regional—by providing access to healthcare, education, food, housing, and financial support. Our mission includes offering scholarships for higher studies, building training centers, and ensuring every cine worker and their family lives with dignity, security, and opportunity. We aim to support their holistic well-being through emergency aid, legal support, mental health services, and skill development initiatives.
                </p>
                
                <div className="my-8">
                  <h3 className="text-xl font-semibold mb-4">Vision of AICWA Foundation</h3>
                  <p>
                    To build a fair, organized, and supportive ecosystem for Indian film industry workers where no artist or technician is left behind. We envision a future where workers have access to charity hospitals, quality education, low-cost housing, affordable theaters, skill training centers, and recognition through award and fashion events. By bridging critical gaps and promoting unity, our vision is to transform the lives of cine workers and strengthen the foundation of India's creative industries.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold mb-2">Contact Us</h3>
                <p className="flex items-center mt-2">
                <Mail size={16} className="mr-2" /> 
                <a href="mailto:aicwafoundation@gmail.com" className="hover:text-aicwa-orange transition-colors">
                  aicwafoundation@gmail.com
                </a>
              </p>
              <p className="flex items-center mt-2">
                <Phone size={16} className="mr-2" /> 
                <a href="tel:+919820982115" className="hover:text-aicwa-orange transition-colors">
                  +91 9820982115
                </a>
              </p>
              </div>
            </div>

            {/* Right Column - Donation Form */}
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Payment Details</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-aicwa-orange focus:ring-aicwa-orange"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone</label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    {...register("phone", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Please enter a valid 10-digit phone number"
                      }
                    })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-aicwa-orange focus:ring-aicwa-orange"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Address</label>
                  <textarea
                    placeholder="Enter your full address"
                    {...register("address", { required: "Address is required" })}
                    rows={3}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-aicwa-orange focus:ring-aicwa-orange"
                  />
                  {errors.address && (
                    <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">PAN Number</label>
                  <input
                    type="text"
                    placeholder="Enter your PAN number"
                    {...register("panNumber", {
                      required: "PAN number is required",
                      pattern: {
                        value: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
                        message: "Please enter a valid PAN number"
                      }
                    })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-aicwa-orange focus:ring-aicwa-orange"
                  />
                  {errors.panNumber && (
                    <p className="mt-1 text-sm text-red-600">{errors.panNumber.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Amount</label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">₹</span>
                    </div>
                    <input
                      type="number"
                      placeholder="Enter amount"
                      {...register("amount", {
                        required: "Amount is required",
                        min: { value: 100, message: "Minimum donation amount is ₹100" }
                      })}
                      className="block w-full pl-7 rounded-md border-gray-300 focus:border-aicwa-orange focus:ring-aicwa-orange"
                    />
                  </div>
                  {errors.amount && (
                    <p className="mt-1 text-sm text-red-600">{errors.amount.message}</p>
                  )}
                </div>

                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-aicwa-orange hover:bg-aicwa-orange/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-aicwa-orange"
                  >
                    Pay ₹{watch("amount") || "0.00"}
                  </button>
                </div>

                <div className="mt-4">
                  <img 
                    src="/pay.png" 
                    alt="Accepted Payment Methods" 
                    className="h-8 object-contain"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;