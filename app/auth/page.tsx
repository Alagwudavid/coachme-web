'use client';

import { Eye, EyeOff, Facebook, Linkedin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import AuthNavbar from './components/auth-navbar';
import AuthFooter from './components/auth-footer';
import Tooltip from '@/components/ui/tooltip';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const GoogleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
);

export default function AuthPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Login attempt:', { email, password });
    };

    return (
        <div className="min-h-screen bg-background flex flex-col">
            {/* <AuthNavbar /> */}
            <Navbar />
            <div className="flex-1 flex items-center justify-center p-4">
                <div className="w-full max-w-6xl bg-none overflow-hidden grid grid-cols-1 lg:grid-cols-2 rounded-4xl border">
                    {/* Left Side - Form */}
                    <div className="p-8 md:p-12">
                        <div className="max-w-md mx-auto">
                            {/* Logo/Header */}
                            <div className="mb-8 flex justify-between">
                                <h1 className="text-lg font-bold text-gray-900">Login to your account</h1>
                                <div className="flex flex-col items-end gap-2">
                                    <div className='text-sm font-semibold text-muted-foreground'>Or continue with</div>
                                    <div className='flex items-center gap-3'>
                                        <Tooltip label="Guest account" position="bottom">
                                            <button className="w-10 h-10 bg-muted rounded-full hover:bg-gray-200 transition-colors flex items-center justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-primary" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M20.5 12a2.5 2.5 0 0 1 2.5 2.5v6a2.5 2.5 0 0 1-2.5 2.5h-4a2.5 2.5 0 0 1-2.5-2.5v-6a2.5 2.5 0 0 1 2.5-2.5zm-7.464 2q-.035.245-.036.5v1H4.253a.75.75 0 0 0-.75.749v.578c.001.536.192 1.054.54 1.461c1.253 1.468 3.219 2.213 5.957 2.213q1.694-.002 3-.382v.381c0 .394.066.772.185 1.125Q11.752 22 10 22.001c-3.146 0-5.531-.905-7.098-2.74a3.75 3.75 0 0 1-.898-2.434v-.578A2.25 2.25 0 0 1 4.253 14zM17 14a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zM10 2.005a5 5 0 1 1 0 10a5 5 0 0 1 0-10m0 1.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7"></path></svg>
                                            </button>
                                        </Tooltip>
                                        <Tooltip label="Login with Google" position="bottom">
                                            <button className="w-10 h-10 bg-muted rounded-full hover:bg-gray-200 transition-colors flex items-center justify-center">
                                                <GoogleIcon />
                                            </button>
                                        </Tooltip>
                                        <Tooltip label="Login with Linkedin account" position="bottom">
                                            <button className="w-10 h-10 bg-muted rounded-full hover:bg-gray-200 transition-colors flex items-center justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-sky-600" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z"></path></svg>
                                            </button>
                                        </Tooltip>
                                    </div>
                                </div>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                                        Your Email
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder=""
                                        className="w-full px-4 py-3 bg-muted border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-900 mb-2">
                                        Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="password"
                                            type={showPassword ? 'text' : 'password'}
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder=""
                                            className="w-full px-4 py-3 bg-muted border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary pr-12"
                                            required
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-gray-600"
                                        >
                                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                        </button>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <Link href="/forgot-password" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                        Forgot password?
                                    </Link>
                                    <button
                                        type="submit"
                                        className="px-6 py-2 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/50 transition-all"
                                    >
                                        Log In
                                    </button>
                                </div>
                            </form>

                            <div className="mt-6 text-center">
                                <span className="text-sm text-gray-600">Don't have an account? </span>
                                <Link href="/coachme/auth/register" className="text-sm font-medium text-primary">
                                    Register
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Illustration */}
                    <div className="hidden lg:flex bg-background p-12 items-center justify-center">
                        <div className="relative w-full max-w-lg">
                            <div className="relative">
                                <Image
                                    src={"/assets/task-shedule-management-design.jpg"}
                                    alt={"image of task shedule and management design"}
                                    width={640}
                                    height={640}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            {/* <AuthFooter /> */}
        </div>
    );
}
