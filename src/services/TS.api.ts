import axios from "axios";

// Base URL for backend (Spring Boot running on port 9090)
const API = axios.create({
  baseURL: "http://localhost:9090/api", // adjust "/api" if your backend uses a different prefix
});

// Interfaces
export interface LoginResponse {
  token: string;
}

export interface Route {
  id: number;
  name: string;
  source: string;
  destination: string;
  time: string;
  availableSeats: number;
}

export interface Booking {
  id: number;
  routeName: string;
  source: string;
  destination: string;
  seatNumber: string;
  date: string;
}

export interface UserProfile {
  id: number;
  name: string;
  email: string;
}

// ================== API FUNCTIONS ==================

// Auth
export const loginUser = (data: { email: string; password: string }) =>
  API.post<LoginResponse>("/auth/login", data);

export const registerUser = (data: { email: string; password: string }) =>
  API.post<any>("/auth/register", data);

// Routes
export const searchRoutes = (data: { source: string; destination: string; date: string }) =>
  API.post<Route[]>("/buses/search", data);

// Reservations
export const bookSeat = (data: { userId: number; busId: number; seatNumber: string }) =>
  API.post<any>("/reservations/book", data);

export const getUserBookings = (userId: number) =>
  API.get<Booking[]>(`/reservations/user/${userId}`);

export const cancelBooking = (id: number) =>
  API.delete<any>(`/reservations/${id}`);

// Admin
export const adminAddRoute = (data: { name: string; source: string; destination: string; time: string }) =>
  API.post<any>("/admin/routes", data);

// User Profile
export const getUserProfile = (userId: number) =>
  API.get<UserProfile>(`/users/${userId}`);

export const updateUserProfile = (profile: UserProfile) =>
  API.put<UserProfile>(`/users/${profile.id}`, profile);
