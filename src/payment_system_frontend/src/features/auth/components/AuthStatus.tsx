import React from "react";
import { useAuth } from "../hooks/useAuth";

interface AuthStatusProps {
  onDashboardClick: () => void;
}

export const AuthStatus: React.FC<AuthStatusProps> = ({ onDashboardClick }) => {
  const { user, isAuthenticated, isLoading, logout } = useAuth();

  if (isLoading) {
    return (
      <div className="bg-secondary-800 rounded-2xl shadow-soft p-6 md:p-8 border border-secondary-700">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-500 mx-auto mb-4"></div>
          <p className="text-secondary-300">Verifying authentication...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated || !user) {
    return null; // No mostrar nada si no está autenticado
  }

  return (
    <div className="bg-gradient-to-r from-green-900/50 to-emerald-900/50 rounded-2xl shadow-soft p-6 md:p-8 border border-green-700">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
          Welcome!
        </h2>
        <p className="text-green-300 text-lg">
          You have successfully logged in
        </p>
      </div>

      <div className="space-y-4 mb-6">
        <div className="bg-secondary-800/50 rounded-xl p-4 border border-secondary-700">
          <h3 className="text-lg font-semibold text-white mb-2">
            User Information
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-secondary-300">ID:</span>
              <span className="text-white font-mono">
                {user.id.slice(0, 8)}...{user.id.slice(-8)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-secondary-300">Principal:</span>
              <span className="text-white font-mono">
                {user.principal.slice(0, 8)}...{user.principal.slice(-8)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-secondary-300">Status:</span>
              <span className="text-green-400 font-semibold">
                {user.isActive ? "Active" : "Inactive"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-secondary-300">Registered:</span>
              <span className="text-white">
                {new Date(user.createdAt).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>

        {user.email && (
          <div className="bg-secondary-800/50 rounded-xl p-4 border border-secondary-700">
            <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
            <p className="text-white">{user.email}</p>
          </div>
        )}

        {user.walletAddress && (
          <div className="bg-secondary-800/50 rounded-xl p-4 border border-secondary-700">
            <h3 className="text-lg font-semibold text-white mb-2">
              Wallet Address
            </h3>
            <p className="text-white font-mono text-sm break-all">
              {user.walletAddress}
            </p>
          </div>
        )}
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={logout}
          className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-medium flex items-center justify-center"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
          Sign Out
        </button>
        <button
          onClick={onDashboardClick}
          className="flex-1 bg-white hover:bg-gray-100 text-red-600 border-2 border-red-600 font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-medium flex items-center justify-center"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          Dashboard
        </button>
      </div>
    </div>
  );
};
