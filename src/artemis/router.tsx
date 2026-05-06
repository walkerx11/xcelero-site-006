"use client";

import React, { createContext, useContext, useState, useCallback, useEffect, useRef } from "react";

interface RouterContextType {
  path: string;
  navigate: (path: string) => void;
  params: Record<string, string>;
}

const RouterContext = createContext<RouterContextType>({
  path: "/",
  navigate: () => {},
  params: {},
});

export function useRouter() {
  return useContext(RouterContext);
}

function getInitialPath(): string {
  if (typeof window !== "undefined") {
    return window.location.hash.slice(1) || "/";
  }
  return "/";
}

export function RouterProvider({ children }: { children: React.ReactNode }) {
  const [path, setPath] = useState(getInitialPath);

  useEffect(() => {
    const handleHashChange = () => {
      const newHash = window.location.hash.slice(1) || "/";
      setPath(newHash);
      window.scrollTo(0, 0);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navigate = useCallback((newPath: string) => {
    window.location.hash = newPath;
  }, []);

  // Parse params from path like /programs/:id or /ventures/:id
  const params: Record<string, string> = {};
  if (path.startsWith("/programs/") && path.split("/").length === 3) {
    params.id = path.split("/")[2];
  }
  if (path.startsWith("/ventures/") && path.split("/").length === 3) {
    params.id = path.split("/")[2];
  }
  if (path.startsWith("/insights/") && path.split("/").length === 3) {
    params.id = path.split("/")[2];
  }

  return (
    <RouterContext.Provider value={{ path, navigate, params }}>
      {children}
    </RouterContext.Provider>
  );
}

// Link component that works with hash routing
export function Link({ 
  to, 
  children, 
  className, 
  ...props 
}: { 
  to: string; 
  children: React.ReactNode; 
  className?: string;
  onClick?: () => void;
}) {
  const { navigate } = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(to);
    props.onClick?.();
  };

  return (
    <a href={`#${to}`} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
}
