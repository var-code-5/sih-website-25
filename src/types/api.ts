/**
 * API Types generated from the Swagger schema
 */

// Enum Types
export type Role = 'CITIZEN' | 'GOVERNMENT' | 'ADMIN';
export type IssueStatus = 'PENDING' | 'ONGOING' | 'PAUSED' | 'CLOSED';
export type VoteType = 'UPVOTE' | 'DOWNVOTE';

// Base Types
export interface Error {
  error: string;
}

export interface Department {
  id: string;
  name: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  firebaseUid: string;
  role: Role;
  departmentId?: string | null;
  department?: Department | null;
  createdAt: string;
  updatedAt: string;
}

export interface Image {
  id: string;
  url: string;
  issueId: string;
  createdAt: string;
}

export interface VoteCount {
  upvotes: number;
  downvotes: number;
  userVote?: VoteType | null;
}

export interface Issue {
  id: string;
  title: string;
  description: string;
  latitude: number;
  longitude: number;
  severity: number;
  status: IssueStatus;
  departmentId?: string | null;
  department?: Department | null;
  authorId: string;
  author: User;
  images: Image[];
  votes: VoteCount;
  createdAt: string;
  updatedAt: string;
}

export interface Comment {
  id: string;
  content: string;
  authorId: string;
  author: User;
  issueId?: string | null;
  issue?: Issue | null;
  parentId?: string | null;
  replies: Comment[];
  votes: VoteCount;
  createdAt: string;
  updatedAt: string;
}

export interface Vote {
  id: string;
  type: VoteType;
  userId: string;
  user: User;
  issueId?: string | null;
  issue?: Issue | null;
  commentId?: string | null;
  comment?: Comment | null;
  createdAt: string;
}

export interface Notification {
  id: string;
  message: string;
  read: boolean;
  userId: string;
  user: User;
  issueId?: string | null;
  issue?: Issue | null;
  createdAt: string;
}

export interface PaginationResponse {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// Input Types
export interface IssueInput {
  title: string;
  description: string;
  latitude: number;
  longitude: number;
}

export interface IssueUpdateInput {
  title?: string;
  description?: string;
  latitude?: number;
  longitude?: number;
  replaceImages?: boolean;
}

export interface CommentInput {
  content: string;
  issueId?: string;
  parentId?: string | null;
}

export interface VoteInput {
  type: VoteType;
  issueId?: string | null;
  commentId?: string | null;
}

// Response Types
export interface IssueWithDistance extends Issue {
  distance: number;
}

export interface NearbyIssuesResponse {
  issues: IssueWithDistance[];
  query: {
    latitude: number;
    longitude: number;
    radius: number;
  };
}

export interface PaginatedIssuesResponse {
  issues: Issue[];
  pagination: PaginationResponse;
}

export interface PaginatedCommentsResponse {
  comments: Comment[];
  pagination: PaginationResponse;
}

export interface PaginatedNotificationsResponse {
  notifications: Notification[];
  pagination: PaginationResponse;
}

export interface MessageResponse {
  message: string;
}

export interface IssueResponse {
  message: string;
  issue: Issue;
}

export interface CommentResponse {
  message: string;
  comment: Comment;
}

export interface VoteResponse {
  message: string;
  vote: Vote;
}

export interface DepartmentResponse {
  message: string;
  department: Department;
}

export interface UserResponse {
  message: string;
  user: User;
}

export interface DepartmentsResponse {
  departments: Department[];
}

export interface UsersResponse {
  users: User[];
}
