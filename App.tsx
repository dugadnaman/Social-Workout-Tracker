/**
 * Main App Component
 * 
 * Entry point for the Checkin app
 */

import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootNavigator } from './src/navigation/RootNavigator';
import NotificationService from './src/services/NotificationService';

export default function App() {
  // Initialize notification service on app start
  useEffect(() => {
    const initNotifications = async () => {
      try {
        await NotificationService.initialize();
      } catch (error) {
        console.log('Notification initialization skipped (web or no permission)');
      }
    };
    
    initNotifications();
  }, []);

  return (
    <SafeAreaProvider>
      <RootNavigator />
    </SafeAreaProvider>
  );
}
