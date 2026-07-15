// Mock data for trainers (Ex06)
export const trainers = [
  { trainerId: 'T001', name: 'Rajesh Kumar', email: 'rajesh.kumar@cognizant.com', phone: '9876543210', technology: 'React', skills: ['JavaScript', 'React', 'Redux', 'Node.js'] },
  { trainerId: 'T002', name: 'Priya Sharma', email: 'priya.sharma@cognizant.com', phone: '9876543211', technology: 'Java', skills: ['Java', 'Spring Boot', 'Hibernate', 'Microservices'] },
  { trainerId: 'T003', name: 'Amit Patel', email: 'amit.patel@cognizant.com', phone: '9876543212', technology: 'Python', skills: ['Python', 'Django', 'Flask', 'Machine Learning'] },
  { trainerId: 'T004', name: 'Sneha Reddy', email: 'sneha.reddy@cognizant.com', phone: '9876543213', technology: 'Angular', skills: ['TypeScript', 'Angular', 'RxJS', 'NgRx'] },
  { trainerId: 'T005', name: 'Vikram Singh', email: 'vikram.singh@cognizant.com', phone: '9876543214', technology: '.NET', skills: ['C#', 'ASP.NET Core', 'Entity Framework', 'Azure'] },
];

// Mock data for cohorts (Ex05)
export const cohorts = [
  { code: 'COH-2024-001', name: 'React Mastery Batch', status: 'ongoing', startDate: '2024-01-15', endDate: '2024-04-15', trainer: 'Rajesh Kumar', participants: 30 },
  { code: 'COH-2024-002', name: 'Java Full Stack', status: 'completed', startDate: '2024-02-01', endDate: '2024-05-01', trainer: 'Priya Sharma', participants: 25 },
  { code: 'COH-2024-003', name: 'Python Data Science', status: 'ongoing', startDate: '2024-03-10', endDate: '2024-06-10', trainer: 'Amit Patel', participants: 28 },
  { code: 'COH-2024-004', name: 'Angular Advanced', status: 'completed', startDate: '2024-01-20', endDate: '2024-04-20', trainer: 'Sneha Reddy', participants: 22 },
  { code: 'COH-2024-005', name: 'Cloud Native Dev', status: 'ongoing', startDate: '2024-04-01', endDate: '2024-07-01', trainer: 'Vikram Singh', participants: 35 },
];

// Mock data for cricket players (Ex09)
export const players = [
  { name: 'Virat Kohli', score: 95 },
  { name: 'Rohit Sharma', score: 88 },
  { name: 'Shubman Gill', score: 62 },
  { name: 'KL Rahul', score: 75 },
  { name: 'Shreyas Iyer', score: 58 },
  { name: 'Rishabh Pant', score: 82 },
  { name: 'Hardik Pandya', score: 45 },
  { name: 'Ravindra Jadeja', score: 71 },
  { name: 'Jasprit Bumrah', score: 30 },
  { name: 'Mohammed Shami', score: 25 },
  { name: 'Kuldeep Yadav', score: 40 },
];

export const t20Players = ['Suryakumar Yadav', 'Ishan Kishan', 'Rinku Singh', 'Tilak Varma'];
export const ranjiPlayers = ['Sarfaraz Khan', 'Dhruv Jurel', 'Devdutt Padikkal', 'Rajat Patidar'];

// Mock data for office spaces (Ex10)
export const offices = [
  { name: 'Skyline Tower', rent: 75000, address: '123 MG Road, Bangalore', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=150&q=80' },
  { name: 'Tech Park Vista', rent: 45000, address: '45 Whitefield, Bangalore', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=150&q=80' },
  { name: 'Corporate Hub', rent: 92000, address: '78 Cyber City, Gurgaon', image: 'https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=150&q=80' },
  { name: 'StartUp Nest', rent: 32000, address: '12 Koramangala, Bangalore', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=150&q=80' },
  { name: 'Innovation Center', rent: 68000, address: '99 Hinjewadi, Pune', image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=150&q=80' },
  { name: 'Business Bay', rent: 55000, address: '34 BKC, Mumbai', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=150&q=80' },
];

// Mock data for shopping items (Ex07)
export const shoppingItems = [
  { itemName: 'MacBook Pro 16"', price: 249900 },
  { itemName: 'Sony WH-1000XM5', price: 29990 },
  { itemName: 'iPad Air M2', price: 69900 },
  { itemName: 'Apple Watch Ultra', price: 89900 },
  { itemName: 'AirPods Pro 2', price: 24900 },
];

// Mock data for employees (Ex14)
export const employees = [
  { id: 1, name: 'Alice Johnson', role: 'Senior Developer', department: 'Engineering' },
  { id: 2, name: 'Bob Smith', role: 'UX Designer', department: 'Design' },
  { id: 3, name: 'Charlie Brown', role: 'Product Manager', department: 'Product' },
  { id: 4, name: 'Diana Prince', role: 'QA Engineer', department: 'Quality' },
];

// Mock data for flights (Ex12)
export const flights = [
  { id: 'FL001', from: 'Bangalore', to: 'Delhi', departure: '06:00 AM', arrival: '08:45 AM', price: 5499, airline: 'IndiGo' },
  { id: 'FL002', from: 'Bangalore', to: 'Mumbai', departure: '09:30 AM', arrival: '11:15 AM', price: 4299, airline: 'Air India' },
  { id: 'FL003', from: 'Delhi', to: 'Chennai', departure: '12:00 PM', arrival: '02:45 PM', price: 6199, airline: 'Vistara' },
  { id: 'FL004', from: 'Mumbai', to: 'Kolkata', departure: '03:15 PM', arrival: '05:30 PM', price: 5899, airline: 'SpiceJet' },
];

// Blog/Book/Course data for Ex13
export const books = [
  { id: 1, title: 'Clean Code', author: 'Robert C. Martin', genre: 'Programming' },
  { id: 2, title: 'Design Patterns', author: 'Gang of Four', genre: 'Architecture' },
  { id: 3, title: 'The Pragmatic Programmer', author: 'Andy Hunt', genre: 'Programming' },
];

export const blogs = [
  { id: 1, title: 'Understanding React Hooks', author: 'Dan Abramov', date: '2024-03-15' },
  { id: 2, title: 'CSS Grid Mastery', author: 'Rachel Andrew', date: '2024-02-20' },
  { id: 3, title: 'TypeScript Best Practices', author: 'Matt Pocock', date: '2024-04-01' },
];

export const courses = [
  { id: 1, title: 'React Complete Guide', instructor: 'Max Schwarzmüller', duration: '40 hours' },
  { id: 2, title: 'Node.js Advanced', instructor: 'Andrew Mead', duration: '35 hours' },
  { id: 3, title: 'Python for Data Science', instructor: 'Jose Portilla', duration: '25 hours' },
];
