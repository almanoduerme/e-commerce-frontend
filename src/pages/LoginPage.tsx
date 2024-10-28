import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { AuthLayout, FormButton, FormInput } from '../components';


export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    alert(`Login form data:, ${formData.email} ${formData.password} ${formData.rememberMe}`);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
  };

  return (
    <>
      <AuthLayout
        title="Welcome back!"
        subtitle="Enter your credentials to access your account"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <FormInput
            id="email"
            type="email"
            label="Email address"
            placeholder="Enter your email"
            value={formData.email}
            onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
            required
          />

          <FormInput
            id="password"
            type="password"
            label="Password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={e => setFormData(prev => ({ ...prev, password: e.target.value }))}
            required
          />

          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-gray-300 text-emerald-500 focus:ring-emerald-500/20"
                checked={formData.rememberMe}
                onChange={e => setFormData(prev => ({ ...prev, rememberMe: e.target.checked }))}
              />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            <Link to="/forgot-password" className="text-sm text-emerald-600 hover:text-emerald-500">
              Forgot password?
            </Link>
          </div>

          <FormButton type="submit" isLoading={isLoading}>
            Sign in
          </FormButton>

          <p className="text-center text-sm text-gray-600 mt-4">
            Don't have an account?{' '}
            <Link to="/register" className="text-emerald-600 hover:text-emerald-500 font-medium">
              Sign up
            </Link>
          </p>
        </form>
      </AuthLayout>
    </>
  );
}