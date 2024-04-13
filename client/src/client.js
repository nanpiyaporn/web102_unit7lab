import { createClient } from '@supabase/supabase-js'

const URL = 'https://zztckcckxbczjnjebicw.supabase.co';

const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp6dGNrY2NreGJjempuamViaWN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI5NjM4NjYsImV4cCI6MjAyODUzOTg2Nn0.32BeRJRh9KPLT2yjjnaRkZMTwwrixPle8B3Af8JJzBg';



export const supabase = createClient(URL, API_KEY);

