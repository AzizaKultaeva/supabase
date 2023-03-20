import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js@2.10.0"

const supabaseUrl = 'https://jnshdcsfkscjbrorejbu.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impuc2hkY3Nma3NjamJyb3JlamJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgxMzA2NjAsImV4cCI6MTk5MzcwNjY2MH0.GpXU5n9cdUiujpZPlaxaUTrV3Y4zPynn9svIV4f9V3w'
const supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks() {
    let { data: Books, error } = await supabase
    .from('Books')
    .select('*')
  
  for (let book of Books) {
    let bookList = document.getElementById('Books');
    bookList.innerHTML += `<tr><td>${book.title}</td><td>${book.Description}</td></tr>`;
  }
}

getBooks();