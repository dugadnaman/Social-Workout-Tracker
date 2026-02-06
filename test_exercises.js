// Quick test to check what exercises are in the database
const SUPABASE_URL = 'https://jnyytdyqnmqokrjftnln.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpueXl0ZHlxbm1xb2tyamZ0bmxuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk4NzI3NjcsImV4cCI6MjA4NTQ0ODc2N30.LCA-4obweFIpKCpFvEKkOTNmYJ94oV4Jz9VoMmD61VA';

async function testExercises() {
  const response = await fetch(`${SUPABASE_URL}/rest/v1/exercises?select=id,name,category,muscle_group&order=name&limit=10`, {
    headers: {
      'apikey': SUPABASE_ANON_KEY,
      'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
    },
  });
  
  const data = await response.json();
  console.log('Exercises from API:');
  console.log(JSON.stringify(data, null, 2));
  console.log(`\nTotal returned: ${data.length}`);
}

testExercises();
