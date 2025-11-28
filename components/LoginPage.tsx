import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface LoginPageProps {
    onLogin: () => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === 'Hardware3.0') {
            onLogin();
        } else {
            setError(true);
            setTimeout(() => setError(false), 500);
        }
    };

    return (
        <div className="w-screen h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden font-sans">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,20,20,1)_0%,rgba(0,0,0,1)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 w-full max-w-md px-6"
            >
                <form onSubmit={handleSubmit} className="flex flex-col items-center gap-6">
                    {/* Input Container */}
                    <motion.div
                        animate={error ? { x: [-5, 5, -5, 5, 0] } : {}}
                        transition={{ duration: 0.4 }}
                        className="w-full relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-zinc-800 to-zinc-900 rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter password"
                            className="w-full bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 text-zinc-200 placeholder-zinc-600 px-6 py-4 rounded-xl outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/20 transition-all text-center tracking-widest text-lg relative z-10"
                            autoFocus
                        />
                    </motion.div>

                    {/* Submit Button (Hidden but accessible via Enter) */}
                    <button type="submit" className="hidden" />

                    {/* Helper Text */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-green-500/80 text-sm font-mono tracking-wide text-center"
                    >
                        Please view Future of Hardware on the desktop site.
                    </motion.p>
                </form>
            </motion.div>
        </div>
    );
};
