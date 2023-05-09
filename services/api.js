import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://yxwhdkfmdblsknqjcwku.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl4d2hka2ZtZGJsc2tucWpjd2t1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM1Mzc2NzQsImV4cCI6MTk5OTExMzY3NH0.ij9rczyyww-Yqh38pQRsNw0xy9GyVzvrxvMJbqPcvVw",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl4d2hka2ZtZGJsc2tucWpjd2t1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM1Mzc2NzQsImV4cCI6MTk5OTExMzY3NH0.ij9rczyyww-Yqh38pQRsNw0xy9GyVzvrxvMJbqPcvVw"
    }
})