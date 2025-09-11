"use client";
import { motion } from "framer-motion";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";
import googleLogo from "../../public/logo/google.webp";
import githubLogo from "../../public/logo/github.jpg"
import axios from "axios";

export function DialogDemo() {
    const [open, setOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(true); // ✅ separate state for login/signup
    const [data, setData] = useState({ email: "", password: "" });
    const session=useSession();
    console.log(session);
    

    const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        await signIn("credentials", {
            email: data.email,
            password: data.password,
            redirect: false,
        });
    };

    const handleSignup=async()=>{
        try {
            const response=await axios.post("/api/signup",{
                email:data.email,
                password:data.password
            })
            console.log(response);
            
        } catch (error) {
            console.log(error);
            
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {
                    !session.data && (
                        <Button
                            variant="outline"
                            className="bg-accent hover:bg-accent/90"
                            onClick={() => setIsLogin(true)} // always start with login
                        >
                            Start Monitoring
                        </Button>
                    ) 
                }
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px] border-none shadow-none bg-transparent">
                <motion.div
                    key={isLogin ? "login" : "signup"} // ✅ animate on toggle
                    initial={{ rotateY: 90, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    exit={{ rotateY: -90, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="bg-white p-6 rounded-2xl shadow-lg"
                >
                    <DialogHeader>
                        <DialogTitle className="text-center">
                            {isLogin ? "Login" : "SignUp"}
                        </DialogTitle>
                    </DialogHeader>

                    <div className="space-y-4">
                        <div>
                            <Label>Email</Label>
                            <Input
                                type="email"
                                value={data.email}
                                onChange={(e) => setData({ ...data, email: e.target.value })}
                                placeholder="abc@gmail.com"
                            />
                        </div>

                        <div>
                            <Label>Password</Label>
                            <Input
                                type="password"
                                value={data.password}
                                onChange={(e) => setData({ ...data, password: e.target.value })}
                                placeholder="***********"
                            />
                        </div>

                        <Button
                            type="button"
                            onClick={isLogin?handleLogin:handleSignup}
                            className="w-full"
                            
                        >
                            {isLogin ? "Login" : "Sign Up"}
                        </Button>

                        <Button
                            type="button"
                            onClick={() => signIn("google")}
                            className="bg-black hover:bg-gray-700 flex items-center justify-center w-full"
                        >
                            <img
                                className="h-5 w-5 mr-2"
                                src={googleLogo.src}
                                alt="Google"
                            />
                            Continue with Google
                        </Button>
                         <Button
                            type="button"
                            onClick={() => signIn("github")}
                            className="bg-black hover:bg-gray-700 flex items-center justify-center w-full"
                        >
                            <img
                                className="h-5 w-5 mr-2"
                                src={githubLogo.src}
                                alt="Google"
                            />
                            Continue with Github
                        </Button>
                    </div>

                    <DialogFooter className="mt-4 flex w-full justify-center items-center !justify-center text-center">
                        {isLogin ? (
                            <p>
                                Don&apos;t have an account?{" "}
                                <span
                                    className="text-blue-600 cursor-pointer"
                                    onClick={() => setIsLogin(false)}
                                >
                                    Sign Up
                                </span>
                            </p>
                        ) : (
                            <p>
                                Already have an account?{" "}
                                <span
                                    className="text-blue-600 cursor-pointer"
                                    onClick={() => setIsLogin(true)}
                                >
                                    Login
                                </span>
                            </p>
                        )}
                    </DialogFooter>

                </motion.div>
            </DialogContent>
        </Dialog>
    );
}
