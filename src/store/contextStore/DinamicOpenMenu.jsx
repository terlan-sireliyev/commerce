import React, { createContext, useState } from "react";

export const saveContext = createContext();

export default function SaveProvider({ children }) {
  // Menu states
  const [isBasketMenuOpen, setIsBasketMenuOpen] = useState(false);
  const [isNotificationMenuOpen, setIsNotificationsMenuOpen] = useState(false);
  const [isEnvelopeMenuOpen, setIsEnvelopeMenuOpen] = useState(false);
  const [isBarMenuOpen, setIsBarMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isSaveOpen, setSaveOpen] = useState(false);

  // Toggle functions for each menu
  const toggleSave = () => setSaveOpen((prev) => !prev);
  const toggleEnvelopeMenu = () => setIsEnvelopeMenuOpen((prev) => !prev);
  const toggleBarMenu = () => setIsBarMenuOpen((prev) => !prev);
  const toggleBasketMenu = () => setIsBasketMenuOpen((prev) => !prev);
  const toggleUserMenu = () => setIsUserMenuOpen((prev) => !prev);
  const toggleNotificationMenu = () =>
    setIsNotificationsMenuOpen((prev) => !prev);

  return (
    <saveContext.Provider
      value={{
        isSaveOpen,
        toggleSave,
        isBasketMenuOpen,
        toggleBasketMenu,
        isNotificationMenuOpen,
        toggleNotificationMenu,
        isEnvelopeMenuOpen,
        toggleEnvelopeMenu,
        isBarMenuOpen,
        toggleBarMenu,
        isUserMenuOpen,
        toggleUserMenu,
      }}
    >
      {children}
    </saveContext.Provider>
  );
}
