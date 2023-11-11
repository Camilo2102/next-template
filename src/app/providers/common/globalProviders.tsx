"use client"

import { AuthProvider } from "./authProvider";
import { LoadingProvider } from "./loadingProvider";
import { NavigationProvider } from "./navigationProvider";
import ToastProvider from "./toastProvider";


export default function GlobalProviders({ children }: { children: React.ReactNode }) {
    return (
      <LoadingProvider>
        <NavigationProvider>
          <ToastProvider>
            <AuthProvider>
              {children}
            </AuthProvider>
          </ToastProvider>
        </NavigationProvider>
      </LoadingProvider>
    )
  }