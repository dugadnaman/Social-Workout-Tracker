# Checkin App - Complete Setup & Build Guide

## Quick Start (Development)

### 1. Install Dependencies
```bash
cd checkin-app
npm install --legacy-peer-deps
```

### 2. Environment Variables
Create `.env` file in `checkin-app/` folder:
```
EXPO_PUBLIC_SUPABASE_URL=https://jnyytdyqnmqokrjftnln.supabase.co
EXPO_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
EXPO_PUBLIC_DEV_BYPASS_AUTH=true
```

### 3. Run Development Server
```bash
npm start
```
- Press `w` for web (http://localhost:19006)
- Press `a` for Android (requires emulator)
- Press `i` for iOS (requires Mac with Xcode)

---

## 🚀 Building for Real Devices (APK/IPA)

### Prerequisites
1. Install EAS CLI globally:
```bash
npm install -g eas-cli
```

2. Login to Expo:
```bash
eas login
```

### Build Android APK (Easiest)
```bash
cd checkin-app
eas build --platform android --profile preview-apk
```

This will:
- Build an APK file in the Expo cloud (~10-15 minutes)
- Provide a download link when complete
- APK can be installed directly on any Android device

**To install APK on Android:**
1. Download the APK from the link provided
2. Transfer to your Android phone
3. Open the APK file and tap "Install"
4. Enable "Install from unknown sources" if prompted

### Build iOS (Requires Apple Developer Account - $99/year)
```bash
eas build --platform ios --profile preview
```

---

## 📱 Testing Push Notifications

⚠️ **Push notifications require a physical device**

They will NOT work on:
- Web browser
- iOS Simulator  
- Some Android emulators

### To test notifications:
1. Build an APK using the command above
2. Install on a physical Android device
3. Open the app and go to **Profile → Settings**
4. Enable **Push Notifications**
5. Enable **Daily Reminder**
6. You'll receive a reminder at the scheduled time!

---

## 🗄️ Database Setup (Supabase)

1. Go to [Supabase Dashboard](https://app.supabase.com)
2. Open your project
3. Go to **SQL Editor**
4. Copy & paste contents of `supabase/schema.sql`
5. Click **Run**

---

## 📁 Project Structure

```
checkin-app/
├── App.tsx              # Entry point
├── app.json             # Expo config
├── eas.json             # Build config (APK settings)
├── src/
│   ├── components/      # Reusable UI (Button, GlassCard, TextInput)
│   ├── config/          # Supabase client setup
│   ├── navigation/      # Navigation structure
│   ├── screens/         # All app screens
│   │   ├── auth/        # Login, Signup, Forgot Password
│   │   ├── checkin/     # Daily check-in interface
│   │   ├── groups/      # Group management, chat, details
│   │   ├── profile/     # User profile, edit profile
│   │   ├── settings/    # App settings with notification toggles
│   │   └── stats/       # Statistics dashboard with charts
│   ├── services/        # API & business logic
│   │   ├── AuthService.ts
│   │   ├── ProfileService.ts
│   │   ├── GroupService.ts
│   │   ├── CheckinService.ts
│   │   ├── MessageService.ts
│   │   ├── StatsService.ts
│   │   └── NotificationService.ts
│   └── utils/           # Helpers (colors, haptics, validation)
└── supabase/
    └── schema.sql       # Complete database schema
```

---

## ✅ Features Implemented

| Phase | Feature | Status |
|-------|---------|--------|
| 1 | Authentication (Login, Signup, Forgot Password) | ✅ Complete |
| 2 | User Profiles (View, Edit) | ✅ Complete |
| 3 | Groups (Create, Join, View, Leave) | ✅ Complete |
| 4 | Daily Check-ins | ✅ Complete |
| 5 | Group Messaging (Real-time chat) | ✅ Complete |
| 6 | Statistics & Settings | ✅ Complete |
| 7 | Push Notifications (Daily reminders) | ✅ Complete |

---

## 🎨 Dark Mode

The app automatically follows your system theme:
- **iOS:** Settings → Display & Brightness → Dark/Light
- **Android:** Settings → Display → Dark theme
- **Windows:** Settings → Personalization → Colors → Dark

All screens are optimized for both light and dark modes.

---

## 🔧 Troubleshooting

### "Module not found" errors
```bash
npm install --legacy-peer-deps
npx expo start -c  # Clear cache and restart
```

### Build fails on EAS
```bash
eas build --platform android --profile preview-apk --clear-cache
```

### Supabase connection issues
- Verify your `.env` file exists in checkin-app folder
- Check that variables start with `EXPO_PUBLIC_`
- Run `schema.sql` in Supabase SQL Editor if tables are missing

### App crashes on start
```bash
# Clear all caches
rm -rf node_modules
rm -rf .expo
npm install --legacy-peer-deps
npm start -c
```

---

## 📞 Support

If you encounter issues:
1. Check the terminal for error messages
2. Verify all environment variables are set
3. Make sure Supabase schema is applied
4. Try clearing caches (see Troubleshooting above)
