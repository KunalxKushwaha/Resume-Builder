import React from 'react'
import { Lock, Mail, User2Icon } from 'lucide-react'
import api from '../configs/api';
import { useDispatch } from 'react-redux'
import { login } from '../app/features/authSlice';
import toast from 'react-hot-toast';

// 🚀 Framer Motion
import { motion, AnimatePresence } from "framer-motion";

const Login = () => {

    const dispatch = useDispatch()
    const query = new URLSearchParams(window.location.search);
    const urlState = query.get("state")
    const [state, setState] = React.useState(urlState || "login")

    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        password: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const endpoint = state === "login" ? "login" : "register";
            const { data } = await api.post(`/api/users/${endpoint}`, formData);

            dispatch(login(data));
            localStorage.setItem('token', data.token)
            toast.success(data.message)
        } catch (error) {
            toast(error?.response?.data?.message || error.message)
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-red-50">

            {/* 🔥 Animate form for login ↔ signup */}
            <AnimatePresence mode="wait">
                <motion.form
                    key={state} // 👈 This makes animation replay on toggle
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 50, scale: 0.92, backdropFilter: "blur(0px)" }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        backdropFilter: "blur(12px)"
                    }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    transition={{
                        duration: 0.55,
                        type: "spring",
                        stiffness: 120,
                        damping: 14
                    }}
                    className="sm:w-[350px] w-full text-center border border-gray-300/40 rounded-2xl px-8 py-2 bg-white/40 backdrop-blur-xl shadow-xl"
                >
                    <h1 className="text-gray-900 text-3xl mt-10 font-medium">
                        {state === "login" ? "Login" : "Sign up"}
                    </h1>

                    <p className="text-gray-600 text-sm mt-2">
                        Please {state} to continue
                    </p>

                    {/* Name (only for signup) */}
                    {state !== "login" && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="flex items-center mt-6 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2"
                        >
                            <User2Icon size={16} color="#6B7280" />
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                className="border-none outline-none ring-0"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </motion.div>
                    )}

                    {/* Email Field */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                        className="flex items-center w-full mt-4 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2"
                    >
                        <Mail size={13} color="#6B7280" />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email id"
                            className="border-none outline-none ring-0"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </motion.div>

                    {/* Password Field */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center mt-4 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2"
                    >
                        <Lock size={13} color="#6B7280" />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="border-none outline-none ring-0"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </motion.div>

                    {/* Forget button */}
                    <div className="mt-4 text-left text-indigo-500">
                        <button className="text-sm" type="reset">
                            Forget password?
                        </button>
                    </div>

                    {/* Submit */}
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        whileHover={{ scale: 1.02 }}
                        type="submit"
                        transition={{ duration: 0.2 }}
                        className="mt-2 w-full h-11 rounded-full text-white bg-indigo-500 hover:opacity-90"
                    >
                        {state === "login" ? "Login" : "Sign up"}
                    </motion.button>

                    {/* Toggle Login ↔ Signup */}
                    <p
                        onClick={() =>
                            setState(prev => (prev === "login" ? "register" : "login"))
                        }
                        className="text-gray-500 text-sm mt-3 mb-11 cursor-pointer"
                    >
                        {state === "login"
                            ? "Don't have an account?"
                            : "Already have an account?"}
                        <span className="text-indigo-500 ml-1 hover:underline">
                            click here
                        </span>
                    </p>
                </motion.form>
            </AnimatePresence>
        </div>
    )
}

export default Login
