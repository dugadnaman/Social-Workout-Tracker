/**
 * Seed exercises into Supabase database
 * Run with: node seed_exercises.js
 */

const SUPABASE_URL = 'https://jnyytdyqnmqokrjftnln.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpueXl0ZHlxbm1xb2tyamZ0bmxuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk4NzI3NjcsImV4cCI6MjA4NTQ0ODc2N30.LCA-4obweFIpKCpFvEKkOTNmYJ94oV4Jz9VoMmD61VA';

const exercises = [
  // Push exercises
  { name: 'Bench Press', category: 'push', muscle_group: 'chest', is_custom: false },
  { name: 'Incline Bench Press', category: 'push', muscle_group: 'chest', is_custom: false },
  { name: 'Dumbbell Bench Press', category: 'push', muscle_group: 'chest', is_custom: false },
  { name: 'Decline Bench Press', category: 'push', muscle_group: 'chest', is_custom: false },
  { name: 'Overhead Press', category: 'push', muscle_group: 'shoulders', is_custom: false },
  { name: 'Dumbbell Shoulder Press', category: 'push', muscle_group: 'shoulders', is_custom: false },
  { name: 'Arnold Press', category: 'push', muscle_group: 'shoulders', is_custom: false },
  { name: 'Push-ups', category: 'push', muscle_group: 'chest', is_custom: false },
  { name: 'Diamond Push-ups', category: 'push', muscle_group: 'triceps', is_custom: false },
  { name: 'Dips', category: 'push', muscle_group: 'chest', is_custom: false },
  { name: 'Tricep Dips', category: 'push', muscle_group: 'triceps', is_custom: false },
  { name: 'Tricep Pushdown', category: 'push', muscle_group: 'triceps', is_custom: false },
  { name: 'Tricep Rope Pushdown', category: 'push', muscle_group: 'triceps', is_custom: false },
  { name: 'Skull Crushers', category: 'push', muscle_group: 'triceps', is_custom: false },
  { name: 'Overhead Tricep Extension', category: 'push', muscle_group: 'triceps', is_custom: false },
  { name: 'Lateral Raises', category: 'push', muscle_group: 'shoulders', is_custom: false },
  { name: 'Front Raises', category: 'push', muscle_group: 'shoulders', is_custom: false },
  { name: 'Cable Flyes', category: 'push', muscle_group: 'chest', is_custom: false },
  { name: 'Pec Deck', category: 'push', muscle_group: 'chest', is_custom: false },
  { name: 'Chest Dips', category: 'push', muscle_group: 'chest', is_custom: false },
  
  // Pull exercises
  { name: 'Deadlift', category: 'pull', muscle_group: 'back', is_custom: false },
  { name: 'Conventional Deadlift', category: 'pull', muscle_group: 'back', is_custom: false },
  { name: 'Sumo Deadlift', category: 'pull', muscle_group: 'back', is_custom: false },
  { name: 'Barbell Row', category: 'pull', muscle_group: 'back', is_custom: false },
  { name: 'Pendlay Row', category: 'pull', muscle_group: 'back', is_custom: false },
  { name: 'Pull-ups', category: 'pull', muscle_group: 'back', is_custom: false },
  { name: 'Weighted Pull-ups', category: 'pull', muscle_group: 'back', is_custom: false },
  { name: 'Chin-ups', category: 'pull', muscle_group: 'back', is_custom: false },
  { name: 'Lat Pulldown', category: 'pull', muscle_group: 'back', is_custom: false },
  { name: 'Wide Grip Lat Pulldown', category: 'pull', muscle_group: 'back', is_custom: false },
  { name: 'Close Grip Lat Pulldown', category: 'pull', muscle_group: 'back', is_custom: false },
  { name: 'Seated Cable Row', category: 'pull', muscle_group: 'back', is_custom: false },
  { name: 'Dumbbell Row', category: 'pull', muscle_group: 'back', is_custom: false },
  { name: 'T-Bar Row', category: 'pull', muscle_group: 'back', is_custom: false },
  { name: 'Face Pulls', category: 'pull', muscle_group: 'shoulders', is_custom: false },
  { name: 'Barbell Curl', category: 'pull', muscle_group: 'biceps', is_custom: false },
  { name: 'EZ Bar Curl', category: 'pull', muscle_group: 'biceps', is_custom: false },
  { name: 'Dumbbell Curl', category: 'pull', muscle_group: 'biceps', is_custom: false },
  { name: 'Hammer Curl', category: 'pull', muscle_group: 'biceps', is_custom: false },
  { name: 'Preacher Curl', category: 'pull', muscle_group: 'biceps', is_custom: false },
  { name: 'Concentration Curl', category: 'pull', muscle_group: 'biceps', is_custom: false },
  { name: 'Cable Curl', category: 'pull', muscle_group: 'biceps', is_custom: false },
  { name: 'Reverse Curl', category: 'pull', muscle_group: 'forearms', is_custom: false },
  { name: 'Shrugs', category: 'pull', muscle_group: 'traps', is_custom: false },
  { name: 'Dumbbell Shrugs', category: 'pull', muscle_group: 'traps', is_custom: false },
  
  // Leg exercises
  { name: 'Squat', category: 'legs', muscle_group: 'quads', is_custom: false },
  { name: 'Back Squat', category: 'legs', muscle_group: 'quads', is_custom: false },
  { name: 'Front Squat', category: 'legs', muscle_group: 'quads', is_custom: false },
  { name: 'Goblet Squat', category: 'legs', muscle_group: 'quads', is_custom: false },
  { name: 'Leg Press', category: 'legs', muscle_group: 'quads', is_custom: false },
  { name: 'Hack Squat', category: 'legs', muscle_group: 'quads', is_custom: false },
  { name: 'Romanian Deadlift', category: 'legs', muscle_group: 'hamstrings', is_custom: false },
  { name: 'Stiff Leg Deadlift', category: 'legs', muscle_group: 'hamstrings', is_custom: false },
  { name: 'Lunges', category: 'legs', muscle_group: 'quads', is_custom: false },
  { name: 'Walking Lunges', category: 'legs', muscle_group: 'quads', is_custom: false },
  { name: 'Bulgarian Split Squat', category: 'legs', muscle_group: 'quads', is_custom: false },
  { name: 'Step Ups', category: 'legs', muscle_group: 'quads', is_custom: false },
  { name: 'Leg Extension', category: 'legs', muscle_group: 'quads', is_custom: false },
  { name: 'Leg Curl', category: 'legs', muscle_group: 'hamstrings', is_custom: false },
  { name: 'Lying Leg Curl', category: 'legs', muscle_group: 'hamstrings', is_custom: false },
  { name: 'Seated Leg Curl', category: 'legs', muscle_group: 'hamstrings', is_custom: false },
  { name: 'Hip Thrust', category: 'legs', muscle_group: 'glutes', is_custom: false },
  { name: 'Glute Bridge', category: 'legs', muscle_group: 'glutes', is_custom: false },
  { name: 'Cable Kickback', category: 'legs', muscle_group: 'glutes', is_custom: false },
  { name: 'Hip Abduction', category: 'legs', muscle_group: 'glutes', is_custom: false },
  { name: 'Hip Adduction', category: 'legs', muscle_group: 'inner thigh', is_custom: false },
  { name: 'Calf Raises', category: 'legs', muscle_group: 'calves', is_custom: false },
  { name: 'Standing Calf Raises', category: 'legs', muscle_group: 'calves', is_custom: false },
  { name: 'Seated Calf Raises', category: 'legs', muscle_group: 'calves', is_custom: false },
  { name: 'Donkey Calf Raises', category: 'legs', muscle_group: 'calves', is_custom: false },
  
  // Core exercises
  { name: 'Plank', category: 'core', muscle_group: 'abs', is_custom: false },
  { name: 'Side Plank', category: 'core', muscle_group: 'obliques', is_custom: false },
  { name: 'Crunches', category: 'core', muscle_group: 'abs', is_custom: false },
  { name: 'Sit-ups', category: 'core', muscle_group: 'abs', is_custom: false },
  { name: 'Hanging Leg Raises', category: 'core', muscle_group: 'abs', is_custom: false },
  { name: 'Lying Leg Raises', category: 'core', muscle_group: 'abs', is_custom: false },
  { name: 'Cable Crunches', category: 'core', muscle_group: 'abs', is_custom: false },
  { name: 'Russian Twists', category: 'core', muscle_group: 'obliques', is_custom: false },
  { name: 'Bicycle Crunches', category: 'core', muscle_group: 'obliques', is_custom: false },
  { name: 'Ab Wheel Rollout', category: 'core', muscle_group: 'abs', is_custom: false },
  { name: 'Dead Bug', category: 'core', muscle_group: 'abs', is_custom: false },
  { name: 'Bird Dog', category: 'core', muscle_group: 'abs', is_custom: false },
  { name: 'Mountain Climbers', category: 'core', muscle_group: 'abs', is_custom: false },
  { name: 'Woodchoppers', category: 'core', muscle_group: 'obliques', is_custom: false },
  { name: 'Pallof Press', category: 'core', muscle_group: 'obliques', is_custom: false },
  
  // Cardio exercises
  { name: 'Running', category: 'cardio', muscle_group: null, is_custom: false },
  { name: 'Treadmill', category: 'cardio', muscle_group: null, is_custom: false },
  { name: 'Cycling', category: 'cardio', muscle_group: null, is_custom: false },
  { name: 'Stationary Bike', category: 'cardio', muscle_group: null, is_custom: false },
  { name: 'Rowing Machine', category: 'cardio', muscle_group: null, is_custom: false },
  { name: 'Elliptical', category: 'cardio', muscle_group: null, is_custom: false },
  { name: 'Jump Rope', category: 'cardio', muscle_group: null, is_custom: false },
  { name: 'Stair Climber', category: 'cardio', muscle_group: null, is_custom: false },
  { name: 'Swimming', category: 'cardio', muscle_group: null, is_custom: false },
  { name: 'HIIT', category: 'cardio', muscle_group: null, is_custom: false },
  { name: 'Burpees', category: 'cardio', muscle_group: null, is_custom: false },
  { name: 'Box Jumps', category: 'cardio', muscle_group: null, is_custom: false },
  { name: 'Battle Ropes', category: 'cardio', muscle_group: null, is_custom: false },
  { name: 'Sprints', category: 'cardio', muscle_group: null, is_custom: false },
];

async function seedExercises() {
  console.log('Seeding exercises...');
  
  // First, let's check what's in the database
  const checkResponse = await fetch(`${SUPABASE_URL}/rest/v1/exercises?select=id,name&limit=5`, {
    headers: {
      'apikey': SUPABASE_ANON_KEY,
      'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
    },
  });
  
  const existingExercises = await checkResponse.json();
  console.log('Existing exercises sample:', existingExercises);
  
  // Delete all existing non-custom exercises
  console.log('Deleting old exercises...');
  const deleteResponse = await fetch(`${SUPABASE_URL}/rest/v1/exercises?is_custom=eq.false`, {
    method: 'DELETE',
    headers: {
      'apikey': SUPABASE_ANON_KEY,
      'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
      'Prefer': 'return=minimal',
    },
  });
  
  if (!deleteResponse.ok) {
    console.log('Delete response:', deleteResponse.status, await deleteResponse.text());
  }
  
  // Insert new exercises in batches
  console.log(`Inserting ${exercises.length} exercises...`);
  
  const batchSize = 20;
  for (let i = 0; i < exercises.length; i += batchSize) {
    const batch = exercises.slice(i, i + batchSize);
    
    const response = await fetch(`${SUPABASE_URL}/rest/v1/exercises`, {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation',
      },
      body: JSON.stringify(batch),
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Error inserting batch ${i / batchSize + 1}:`, response.status, errorText);
    } else {
      const inserted = await response.json();
      console.log(`Batch ${i / batchSize + 1}: Inserted ${inserted.length} exercises`);
    }
  }
  
  // Verify
  const verifyResponse = await fetch(`${SUPABASE_URL}/rest/v1/exercises?select=id,name,category&order=name&limit=10`, {
    headers: {
      'apikey': SUPABASE_ANON_KEY,
      'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
    },
  });
  
  const verifiedExercises = await verifyResponse.json();
  console.log('\nVerification - First 10 exercises:');
  verifiedExercises.forEach(e => console.log(`  - ${e.name} (${e.category})`));
  
  console.log('\nDone!');
}

seedExercises().catch(console.error);
