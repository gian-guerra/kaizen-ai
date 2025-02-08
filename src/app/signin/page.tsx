'use client'
import { useState} from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { Button } from '@/components/ui/button'


export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen w-full bg-kuro bg-star-pattern flex flex-col items-center justify-center relative overflow-hidden font-japanese">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-matcha/20 via-transparent to-transparent opacity-50" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-sakura/20 via-transparent to-transparent opacity-50" />
  
        <div className="w-full max-w-md p-8 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl relative z-10">
            <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-gradient-to-r from-matcha to-sakura">
              <div className="w-8 h-8 text-gin flex items-center justify-center text-small">改善</div>
            </div>
          </div>
  
          <h1 className="text-3xl font-bold text-gin text-center mb-2">KAIZEN AI</h1>
          <p className="text-sm text-gin/70 text-center mb-8">Improve every day</p>
  
          <form className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-gin placeholder:text-gin/50 focus:border-matcha/50 focus:ring-1 focus:ring-matcha/50 transition-all"
              />
            </div>
  
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-gin placeholder:text-gin/50 focus:border-matcha/50 focus:ring-1 focus:ring-matcha/50 transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gin/50 hover:text-matcha transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
  
            <button className="w-full bg-gradient-to-r from-matcha to-sakura hover:opacity-90 text-gin border-0 rounded-lg p-3 font-medium transition-all">
              Sign in
            </button>
  

            <Button variant="outline" className="w-full border-white/10 bg-white/5 text-gin hover:bg-white/10 rounded-lg p-6">
              <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4 mr-2" />
              Sign in with Google
            </Button>
          </form>
  
          <p className="mt-6 text-center text-sm text-gin/50">
          Don't have an account? Register for free{" "}
            <a href="#" className="text-matcha hover:text-sakura transition-colors font-medium">
              Sign up
            </a>

          </p>
        </div>
      </div>
    )
}