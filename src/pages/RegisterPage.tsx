import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { AuthLayout, FormButton, FormInput } from "../components"

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    alert(`Register form data:, ${formData.firstName} ${formData.lastName} ${formData.email} ${formData.password} ${formData.confirmPassword} ${formData.acceptTerms} `);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
  };

  return (
    <>
      <AuthLayout
        title="Create an account"
        subtitle="Join us to start shopping your favorite items"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <FormInput
              id="firstName"
              type="text"
              label="First name"
              placeholder="John"
              value={formData.firstName}
              onChange={e => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
              required
            />
            <FormInput
              id="lastName"
              type="text"
              label="Last name"
              placeholder="Doe"
              value={formData.lastName}
              onChange={e => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
              required
            />
          </div>

          <FormInput
            id="email"
            type="email"
            label="Email address"
            placeholder="john@example.com"
            value={formData.email}
            onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
            required
          />

          <FormInput
            id="password"
            type="password"
            label="Password"
            placeholder="Create a password"
            value={formData.password}
            onChange={e => setFormData(prev => ({ ...prev, password: e.target.value }))}
            required
          />

          <FormInput
            id="confirmPassword"
            type="password"
            label="Confirm password"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={e => setFormData(prev => ({ ...prev, confirmPassword: e.target.value }))}
            required
          />

          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="terms"
                type="checkbox"
                className="w-4 h-4 rounded border-gray-300 text-emerald-500 focus:ring-emerald-500/20"
                checked={formData.acceptTerms}
                onChange={e => setFormData(prev => ({ ...prev, acceptTerms: e.target.checked }))}
                required
              />
            </div>
            <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
              I agree to the Terms of Service and Privacy Policy
            </label>
          </div>

          <FormButton type="submit" isLoading={isLoading}>
            Create account
          </FormButton>

          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{' '}
            <Link to="/login" className="text-emerald-600 hover:text-emerald-500 font-medium">
              Sign in
            </Link>
          </p>
        </form>
      </AuthLayout>
    </>
  );
}