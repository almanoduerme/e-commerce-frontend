import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail } from 'lucide-react';
import AuthLayout from '../components/auth/AuthLayout';
import FormInput from '../components/auth/FormInput';
import FormButton from '../components/auth/FormButton';

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsEmailSent(true);
    alert(`Forgot password form data:, { ${email} }`);
    setIsLoading(false);
  };

  if (isEmailSent) {
    return (
      <AuthLayout
        title="Check your email"
        subtitle="We've sent you instructions to reset your password"
      >
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-6"
          >
            <Mail className="w-8 h-8 text-emerald-600" />
          </motion.div>

          <p className="text-gray-600 mb-8">
            If an account exists with the email you provided, you'll receive a password reset link shortly.
          </p>

          <div className="space-y-4">
            <FormButton onClick={() => setIsEmailSent(false)}>
              Try another email
            </FormButton>

            <Link
              to="/login"
              className="inline-flex items-center justify-center w-full px-4 py-2.5 border border-gray-300 
                rounded-lg text-gray-700 bg-white hover:bg-gray-50 font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to login
            </Link>
          </div>
        </div>
      </AuthLayout>
    );
  }

  return (
    <>
      <AuthLayout
        title="Forgot password?"
        subtitle="No worries! Enter your email and we'll send you reset instructions"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <FormInput
            id="email"
            type="email"
            label="Email address"
            placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />

          <FormButton type="submit" isLoading={isLoading}>
            Send instructions
          </FormButton>

          <Link
            to="/login"
            className="inline-flex items-center justify-center w-full px-4 py-2.5 border border-gray-300 
            rounded-lg text-gray-700 bg-white hover:bg-gray-50 font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to login
          </Link>
        </form>
      </AuthLayout>
    </>
  );
}