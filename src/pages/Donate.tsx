import { useForm } from 'react-hook-form';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';

interface DonationFormData {
  amount: number;
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const Donate = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, watch } = useForm<DonationFormData>();

  const onSubmit = (data: DonationFormData) => {
    console.log(data);
    // Handle payment gateway integration here
  };

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Back Button */}
      <div className="absolute top-4 left-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-white hover:text-aicwa-orange transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back
        </button>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto text-center text-white mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Support Our Mission</h1>
          <p className="text-xl opacity-90">Help us empower film industry workers and their families</p>
        </div>

        <div className="max-w-xl mx-auto bg-[#de7621]/90 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Donate</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <input
                type="number"
                placeholder="Amount you want to donate"
                {...register("amount", {
                  required: "Amount is required",
                  min: { value: 100, message: "Minimum donation amount is ₹100" }
                })}
                className="w-full p-3 rounded-md bg-white/90 placeholder-gray-500"
              />
              {errors.amount && (
                <p className="mt-1 text-sm text-white">{errors.amount.message}</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First name"
                {...register("firstName", { required: "First name is required" })}
                className="p-3 rounded-md bg-white/90 placeholder-gray-500"
              />
              <input
                type="text"
                placeholder="Last name"
                {...register("lastName", { required: "Last name is required" })}
                className="p-3 rounded-md bg-white/90 placeholder-gray-500"
              />
            </div>

            <input
              type="email"
              placeholder="Your email address"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })}
              className="w-full p-3 rounded-md bg-white/90 placeholder-gray-500"
            />

            <textarea
              placeholder="Message (optional)"
              {...register("message")}
              rows={4}
              className="w-full p-3 rounded-md bg-white/90 placeholder-gray-500"
            />

            <button
              type="submit"
              className="w-full bg-white text-[#de7621] py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Send message
            </button>

            <div className="mt-4">
              <p className="text-white text-sm text-center">We accept:</p>
              <div className="flex justify-center mt-2">
                <img 
                  src="/pay.png" 
                  alt="Accepted Payment Methods" 
                  className="h-8 object-contain"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Donate;