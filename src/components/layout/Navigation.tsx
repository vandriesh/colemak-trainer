import { Link, useLocation } from 'react-router-dom';
import { Keyboard, Settings as SettingsIcon } from 'lucide-react';

export function Navigation() {
  const location = useLocation();
  
  return (
    <header className="bg-custom-sub-alt border-b border-custom-sub border-opacity-10">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <Keyboard className="w-8 h-8 text-custom-main" />
            <h1 className="text-2xl font-bold text-custom-text">Colemak Practice</h1>
          </Link>
          
            <Link
              to="/settings"
              className={`p-2 rounded-lg transition-all ${
                location.pathname === '/settings'
                  ? 'bg-custom-main text-custom-bg'
                  : 'bg-custom-sub-alt text-custom-text hover:bg-opacity-80'
              }`}
            >
              <SettingsIcon className="w-5 h-5" />
            </Link>
        </div>
      </div>
    </header>
  );
}