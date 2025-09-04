export interface User {
  userId: string;
  displayName: string;
  bio?: string;
  skills: string[];
  reputationScore: number;
  profileImageUrl?: string;
}

export interface Task {
  taskId: string;
  title: string;
  description: string;
  location: {
    lat?: number;
    lng?: number;
    address: string;
  };
  taskType: 'gig' | 'volunteer' | 'collaboration';
  compensation: {
    type: 'paid' | 'unpaid';
    amount?: number;
  };
  postedByUserId: string;
  postedBy: User;
  status: 'open' | 'in_progress' | 'completed' | 'cancelled';
  createdAt: string;
  updatedAt: string;
  requiredSkills?: string[];
}

export interface Gig extends Task {
  gigId: string;
  compensationAmount: number;
  assignedToUserId?: string;
  assignedTo?: User;
}

export interface MentorshipConnection {
  connectionId: string;
  menteeUserId: string;
  mentorUserId: string;
  mentee: User;
  mentor: User;
  status: 'pending' | 'accepted' | 'rejected';
  createdAt: string;
}

export interface Skill {
  skillId: string;
  skillName: string;
}
