'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { 
  LayoutDashboard, 
  Upload, 
  Package, 
  Flower,
  Menu,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Uploads', href: '/uploads', icon: Upload },
  { name: 'Orders', href: '/orders', icon: Package },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={cn(
      "bg-gray-900 text-white transition-all duration-300",
      isCollapsed ? "w-16" : "w-64"
    )}>
      <div className="flex items-center justify-between p-4">
        {!isCollapsed && (
          <div className="flex items-center space-x-2">
            <Flower className="h-8 w-8 text-green-400" />
            <span className="text-xl font-bold">BloomCraft</span>
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-white hover:bg-gray-800"
        >
          {isCollapsed ? <Menu className="h-5 w-5" /> : <X className="h-5 w-5" />}
        </Button>
      </div>

      <nav className="mt-8">
        <div className="space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center px-4 py-3 text-sm font-medium transition-colors",
                  isActive 
                    ? "bg-green-600 text-white border-r-2 border-green-400" 
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                )}
              >
                <item.icon className="mr-3 h-5 w-5" />
                {!isCollapsed && item.name}
              </Link>
            );
          })}
        </div>
      </nav>

      {!isCollapsed && (
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-gray-800 p-3 rounded-lg">
            <p className="text-sm text-gray-400">Admin Panel</p>
            <p className="text-xs text-gray-500 mt-1">Manage your flower business</p>
          </div>
        </div>
      )}
    </div>
  );
}