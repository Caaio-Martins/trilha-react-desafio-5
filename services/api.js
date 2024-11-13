import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://yfvmrjmzxgrrdyapwasw.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlmdm1yam16eGdycmR5YXB3YXN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE0NDc3OTUsImV4cCI6MjA0NzAyMzc5NX0.mxxtz5nuI75cm6x4ulaS4qLfOUipXZ4Mri0tSOP9UP0",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlmdm1yam16eGdycmR5YXB3YXN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE0NDc3OTUsImV4cCI6MjA0NzAyMzc5NX0.mxxtz5nuI75cm6x4ulaS4qLfOUipXZ4Mri0tSOP9UP0"
    }
})