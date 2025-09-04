import { Task, User, Gig, MentorshipConnection } from '../types';

export const mockUsers: User[] = [
  {
    userId: '1',
    displayName: 'Alex Chen',
    bio: 'Full-stack developer passionate about local community building',
    skills: ['JavaScript', 'React', 'Node.js', 'Design'],
    reputationScore: 4.8,
    profileImageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex'
  },
  {
    userId: '2',
    displayName: 'Sarah Johnson',
    bio: 'Graphic designer and local organizer',
    skills: ['Graphic Design', 'Event Planning', 'Photography'],
    reputationScore: 4.6,
    profileImageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah'
  },
  {
    userId: '3',
    displayName: 'Mike Rodriguez',
    bio: 'Marketing consultant and community mentor',
    skills: ['Marketing', 'Social Media', 'Consulting'],
    reputationScore: 4.9,
    profileImageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike'
  }
];

export const mockTasks: Task[] = [
  {
    taskId: '1',
    title: 'Help with Local Farmer\'s Market Setup',
    description: 'Need assistance setting up booth displays and organizing products for Saturday morning farmer\'s market. Great opportunity to connect with local vendors.',
    location: {
      address: 'Downtown Park, Main Street'
    },
    taskType: 'volunteer',
    compensation: {
      type: 'unpaid'
    },
    postedByUserId: '2',
    postedBy: mockUsers[1],
    status: 'open',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    requiredSkills: ['Event Planning', 'Organization']
  },
  {
    taskId: '2',
    title: 'Website Design for Local Coffee Shop',
    description: 'Small coffee shop needs a modern, mobile-friendly website. Looking for someone with design and development skills.',
    location: {
      address: '123 Coffee Lane'
    },
    taskType: 'gig',
    compensation: {
      type: 'paid',
      amount: 500
    },
    postedByUserId: '3',
    postedBy: mockUsers[2],
    status: 'open',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    requiredSkills: ['Web Design', 'JavaScript', 'React']
  },
  {
    taskId: '3',
    title: 'Collaborative Art Project Planning',
    description: 'Looking to organize a community mural project. Need creative minds to help plan and coordinate with local artists.',
    location: {
      address: 'Community Center, Oak Street'
    },
    taskType: 'collaboration',
    compensation: {
      type: 'unpaid'
    },
    postedByUserId: '1',
    postedBy: mockUsers[0],
    status: 'open',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    requiredSkills: ['Art', 'Project Management', 'Community Outreach']
  }
];

export const mockGigs: Gig[] = [
  {
    ...mockTasks[1],
    gigId: 'g1',
    compensationAmount: 500
  }
];

export const mockMentorshipConnections: MentorshipConnection[] = [
  {
    connectionId: '1',
    menteeUserId: '1',
    mentorUserId: '3',
    mentee: mockUsers[0],
    mentor: mockUsers[2],
    status: 'accepted',
    createdAt: new Date().toISOString()
  }
];
