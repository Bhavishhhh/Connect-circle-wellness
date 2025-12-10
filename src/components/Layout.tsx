import { ReactNode } from 'react';
import ThemeToggle from './ThemeToggle';

interface LayoutProps {
  children: ReactNode;
  className?: string;
  centered?: boolean;
}

const Layout = ({ children, className = '', centered = false }: LayoutProps) => {
  return (
    <div className={`min-h-screen bg-background ${centered ? 'flex items-center justify-center' : ''} ${className}`}>
      <ThemeToggle />
      <div className="w-full max-w-lg mx-auto px-6 py-8">
        {children}
      </div>
    </div>
  );
};

export default Layout;
