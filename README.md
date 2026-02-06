# Checkin App

A private group accountability app where your workout check-in is visible, and skipping is obvious.

## Setup Instructions

### 1. Install Dependencies

```bash
# Install Node dependencies
npm install

# For iOS (macOS only)
cd ios && pod install && cd ..
```

### 2. Environment Variables

Create a `.env` file in the root directory with your Supabase credentials:

```
EXPO_PUBLIC_SUPABASE_URL=your_supabase_url
EXPO_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

**IMPORTANT:** Never commit `.env` to git. It's in `.gitignore` for security.

### 3. Start the App

```bash
# Start Expo development server
npm start

# For iOS
npm run ios

# For Android
npm run android

# For Web
npm run web
```

## Project Structure

```
src/
├── config/           # Supabase configuration
├── services/         # Business logic (Auth, Database, etc.)
├── screens/          # UI screens
│   ├── auth/         # Login, Signup, Password Reset
│   └── [other]       # Feature screens (Phase 2+)
├── components/       # Reusable UI components
├── navigation/       # Navigation setup
└── utils/            # Helper functions (validation, colors, haptics)
```

## Tech Stack

- **Frontend:** React Native (Expo)
- **Backend:** Supabase (Auth + Firestore)
- **Navigation:** React Navigation
- **State Management:** React Hooks
- **UI:** Modern glassmorphism with light/dark mode support

## Security Notes

✅ API keys stored in `.env` (not in code)
✅ `.env` added to `.gitignore`
✅ Supabase Row Level Security (RLS) enabled for data protection
✅ All inputs validated before submission
✅ Sensitive data stored securely (Keychain/EncryptedSharedPreferences)

## Features (MVP)

- [x] Authentication (Email/Password)
- [ ] Google & Apple Sign-In (Phase 1 - coming soon)
- [ ] User Profile (Phase 2)
- [ ] Group Management (Phase 3)
- [ ] Daily Check-In (Phase 4)
- [ ] Group Dashboard (Phase 4)
- [ ] Group Chat (Phase 5)

## Testing

### Phase 1 Testing Checklist

- [ ] App starts without errors
- [ ] Can create account with email/password
- [ ] Can login with valid credentials
- [ ] Error messages show for invalid inputs
- [ ] Forgot Password flow works
- [ ] Logout works
- [ ] Dark mode toggle works
- [ ] Haptic feedback on button taps
- [ ] Smooth transitions between screens

## Next Steps

Once Phase 1 is tested and working:

1. **Phase 2:** Database schema + User profiles
2. **Phase 3:** Group management (create/join groups)
3. **Phase 4:** Daily check-in + Dashboard
4. **Phase 5:** Group chat + Notifications + Polish

---

Built with 💪 for accountability
