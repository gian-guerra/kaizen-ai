'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';


const AuthHandler = () => {
    useEffect(() => {
        const handleSession = async () => {
            const { data } = await supabase.auth.getSession();
            if (data?.session) {
                window.history.replaceState(null, '', window.location.pathname); // Remove token from URL
            }
        };

        handleSession();
    }, []);

    return null; // This component has no UI, it just runs logic in the background
};

export default AuthHandler;
