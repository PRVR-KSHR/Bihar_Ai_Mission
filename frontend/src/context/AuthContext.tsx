"use client";

import React, { createContext, useContext, useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  isAuthenticated: boolean;
  login: (callbackUrl?: string) => void;
  loginAsDemo: (callbackUrl?: string) => void;
  logout: () => void;
  checkAuth: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const readStoredUser = useCallback((): User | null => {
    try {
      const raw = localStorage.getItem("user");
      if (!raw) return null;
      return JSON.parse(raw) as User;
    } catch {
      return null;
    }
  }, []);

  useEffect(() => {
    const stored = readStoredUser();
    setUser(stored);
    setLoading(false);
  }, [readStoredUser]);

  const login = (callbackUrl?: string) => {
    // Redirect to login page with callback URL
    const url = `/login?callbackUrl=${encodeURIComponent(callbackUrl || "/")}`;
    router.push(url);
  };

  const loginAsDemo = (callbackUrl?: string) => {
    const demoUser: User = {
      id: "demo-user-1",
      name: "Demo User",
      email: "demo@biharaimission.gov.in",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=demo",
    };

    try {
      localStorage.setItem("user", JSON.stringify(demoUser));
    } catch {
      // ignore
    }

    setUser(demoUser);
    router.push(callbackUrl || "/");
  };

  const logout = () => {
    try {
      localStorage.removeItem("user");
    } catch {
      // ignore
    }
    setUser(null);
    router.push("/");
  };

  const checkAuth = async () => {
    const stored = readStoredUser();
    setUser(stored);
  };

  const value: AuthContextType = useMemo(
    () => ({
      user,
      loading,
      isAuthenticated: !!user,
      login,
      loginAsDemo,
      logout,
      checkAuth,
    }),
    [user, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
