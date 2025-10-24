import { useState, useEffect, useCallback } from 'react';

// Define the type for the deferred event object provided by the browser
interface BeforeInstallPromptEvent extends Event {
  readonly platforms: Array<string>;
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

const usePWAInstall = () => {
  // We explicitly type the state to hold the specific PWA event or null
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState<boolean>(false);

  // Checks if the app is already installed (initial check)
  useEffect(() => {
    // Check for 'standalone' display mode (common way to detect installation)
    const mediaQuery = window.matchMedia('(display-mode: standalone)');
    if (mediaQuery.matches || (navigator as any).standalone) { // (navigator as any) for iOS support
      setIsInstalled(true);
    }
  }, []);

  // Handler for the PWA install event
  const handleBeforeInstallPrompt = useCallback((e: Event) => {
    // Cast the generic Event to the specific PWA type
    const pwaEvent = e as BeforeInstallPromptEvent;
    
    pwaEvent.preventDefault();
    setDeferredPrompt(pwaEvent); // Save the event
  }, []);

  // Handler for appinstalled event
  const handleAppInstalled = useCallback(() => {
    setIsInstalled(true);
    setDeferredPrompt(null);
  }, []);

  useEffect(() => {
    // Add event listeners
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt as EventListener);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      // Cleanup: Remove event listeners
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt as EventListener);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, [handleBeforeInstallPrompt, handleAppInstalled]);

  // Function to trigger the native installation prompt on button click
  const installApp = useCallback(async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      
      // Wait for the user's choice to log the outcome
      const { outcome } = await deferredPrompt.userChoice;
      console.log(`User choice outcome: ${outcome}`);

      // The prompt can only be used once
      setDeferredPrompt(null); 
    }
  }, [deferredPrompt]);

  // isInstallable is true only if the event has been saved AND the app is not installed
  const isInstallable = deferredPrompt !== null && !isInstalled;

  return { isInstallable, installApp };
};

export default usePWAInstall;