'use client';

import { Task } from '../types';
import { Card } from './Card';
import { Tag } from './Tag';
import { ProfileAvatar } from './ProfileAvatar';
import { MapPin, Clock, DollarSign } from 'lucide-react';

interface TaskCardProps {
  task: Task;
  onClick?: () => void;
}

export function TaskCard({ task, onClick }: TaskCardProps) {
  const getTaskTypeColor = (type: string) => {
    switch (type) {
      case 'gig': return 'bg-green-100 text-green-800';
      case 'volunteer': return 'bg-blue-100 text-blue-800';
      case 'collaboration': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card hover onClick={onClick} className="space-y-4">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-white font-semibold text-lg mb-2">{task.title}</h3>
          <p className="text-white/70 text-sm mb-3 line-clamp-2">{task.description}</p>
        </div>
        <Tag variant="task-type" className={getTaskTypeColor(task.taskType)}>
          {task.taskType}
        </Tag>
      </div>
      
      <div className="flex items-center space-x-4 text-white/60 text-sm">
        <div className="flex items-center space-x-1">
          <MapPin className="w-4 h-4" />
          <span>{task.location.address}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Clock className="w-4 h-4" />
          <span>{new Date(task.createdAt).toLocaleDateString()}</span>
        </div>
        {task.compensation.type === 'paid' && (
          <div className="flex items-center space-x-1 text-green-400">
            <DollarSign className="w-4 h-4" />
            <span>${task.compensation.amount}</span>
          </div>
        )}
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <ProfileAvatar 
            src={task.postedBy.profileImageUrl} 
            alt={task.postedBy.displayName} 
          />
          <div>
            <p className="text-white font-medium text-sm">{task.postedBy.displayName}</p>
            <p className="text-white/60 text-xs">⭐ {task.postedBy.reputationScore}</p>
          </div>
        </div>
        
        {task.requiredSkills && task.requiredSkills.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {task.requiredSkills.slice(0, 2).map((skill, index) => (
              <Tag key={index} variant="skill" className="text-xs">
                {skill}
              </Tag>
            ))}
            {task.requiredSkills.length > 2 && (
              <span className="text-white/60 text-xs">+{task.requiredSkills.length - 2}</span>
            )}
          </div>
        )}
      </div>
    </Card>
  );
}
