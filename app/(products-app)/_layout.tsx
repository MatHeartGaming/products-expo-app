import { useAuthStore } from '@/presentation/auth/store/useAuthStore';
import { Redirect, Stack } from 'expo-router';
import React, { useEffect } from 'react';

const CheckAuthenticationLayout = () => {
    const { status, checkStatus } = useAuthStore();

    useEffect(() => {
        checkStatus();
    }, []);

    if (status === 'checking') {

        return <Redirect href={'/auth/login'} />

    }

    if (status === 'unauthenticated') {
        return <Redirect href={'/auth/login'} />
    }

    return (
        <Stack >
            <Stack.Screen
                name='(home)/index'
                options={{
                    title: 'Productos'
                }}
            />
        </Stack>
    )

}

export default CheckAuthenticationLayout