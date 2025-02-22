'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function Signup() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    console.log(data)
    console.log(error)
    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    if (data.user) {
      console.log({ id: data.user.id, email, username })
      const { error: profileError } = await supabase
        .from('profiles')
        .insert([{ id: data.user.id, email, username }]);

      if (profileError) {
        setError(profileError.message);
      } else {
        setSuccess('Signup successful! Check your email to verify your account.');
        router.push('/signin');
      }
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen w-full bg-kuro bg-star-pattern flex flex-col items-center justify-center relative overflow-hidden font-japanese">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-matcha/20 via-transparent to-transparent opacity-50" />
      <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-sakura/20 via-transparent to-transparent opacity-50" />
  
      <div className="w-full max-w-md p-8 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl relative z-10">
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-full bg-gradient-to-r from-matcha to-sakura">
            <div className="w-8 h-8 text-gin flex items-center justify-center text-small">新規</div>
          </div>
        </div>
  
        <h1 className="text-3xl font-bold text-gin text-center mb-2">KAIZEN AI</h1>
        <p className="text-sm text-gin/70 text-center mb-8">Join our community</p>
  
        {error && <p className="text-sakura bg-white/5 p-3 rounded-lg mb-4 text-sm">{error}</p>}
        {success && <p className="text-matcha bg-white/5 p-3 rounded-lg mb-4 text-sm">{success}</p>}
  
        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-gin placeholder:text-gin/50 focus:border-matcha/50 focus:ring-1 focus:ring-matcha/50 transition-all"
            />
          </div>
  
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-gin placeholder:text-gin/50 focus:border-matcha/50 focus:ring-1 focus:ring-matcha/50 transition-all"
            />
          </div>
  
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-gin placeholder:text-gin/50 focus:border-matcha/50 focus:ring-1 focus:ring-matcha/50 transition-all"
            />
          </div>
  
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-matcha to-sakura hover:opacity-90 text-gin border-0 rounded-lg p-3 font-medium transition-all disabled:opacity-50"
          >
            {loading ? 'Creating account...' : 'Sign up'}
          </button>
  
          <Button variant="outline" className="w-full border-white/10 bg-white/5 text-gin hover:bg-white/10 rounded-lg p-6">
            <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4 mr-2" />
            Sign up with Google
          </Button>
        </form>
  
        <p className="mt-6 text-center text-sm text-gin/50">
          Already have an account?{" "}
          <a href="/signin" className="text-matcha hover:text-sakura transition-colors font-medium">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
