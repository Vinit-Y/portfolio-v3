"use client";
import React from 'react';

export const Modal = ({
  children,
  toggleModal,
}: {
  children: React.ReactNode;
  toggleModal: () => void;
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 max-w-md w-full shadow-xl relative">
        <button
          onClick={toggleModal}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};
