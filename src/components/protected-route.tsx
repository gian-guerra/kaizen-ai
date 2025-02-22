"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";


const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const checkAuth = async () => {
            const { data } = await supabase.auth.getUser();

            if (!data.user) {
                router.push("/signin");
            } else {
                setUser(data.user);
            }

            setLoading(false);
        };

        checkAuth();
    }, []);

    if (loading) return <p>Loading...</p>;
    return <>{user ? children : null}</>;
};

export default ProtectedRoute;
