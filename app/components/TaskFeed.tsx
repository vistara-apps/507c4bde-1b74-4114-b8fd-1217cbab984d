'use client';

import { useState } from 'react';
import { Task } from '../types';
import { TaskCard } from './TaskCard';
import { Card } from './Card';
import { Button } from './Button';
import { Plus, Filter } from 'lucide-react';

interface TaskFeedProps {
  tasks: Task[];
}

export function TaskFeed({ tasks }: TaskFeedProps) {
  const [filter, setFilter] = useState<string>('all');
  
  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    return task.taskType === filter;
  });

  return (
    <div className="px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Tasks Column */}
          <div className="lg:col-span-1">
            <Card className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-white">Tasks</h2>
                <Button variant="outline" size="sm">
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="space-y-4">
                {filteredTasks.map((task) => (
                  <div key={task.taskId} className="border-b border-white/10 pb-4 last:border-b-0">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-xs">
                          {task.postedBy.displayName.charAt(0)}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-white font-medium text-sm truncate">
                          {task.title}
                        </div>
                        <div className="text-white/60 text-xs">
                          {task.compensation.type === 'paid' ? `$${task.compensation.amount}` : 'Volunteer'}
                        </div>
                      </div>
                      <div className="text-white/60 text-xs">
                        {task.taskType === 'gig' ? 'Gig' : task.taskType === 'volunteer' ? 'Vol' : 'Col'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
          
          {/* Location Stats Column */}
          <div className="lg:col-span-1">
            <Card className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-white">Location</h2>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="text-2xl font-bold text-white">$549.06</div>
                  <div className="text-white/60 text-sm">Average compensation</div>
                  <div className="text-white/60 text-xs">12 minutes</div>
                </div>
                
                <div>
                  <div className="text-2xl font-bold text-white">$1.14%</div>
                  <div className="w-8 h-1 bg-yellow-400 rounded-full mt-2"></div>
                </div>
                
                {/* Mock chart area */}
                <div className="h-16 bg-white/5 rounded-md flex items-end justify-center space-x-1 p-2">
                  {[40, 60, 30, 80, 50, 70, 45].map((height, index) => (
                    <div 
                      key={index}
                      className="bg-purple-400 rounded-sm flex-1"
                      style={{ height: `${height}%` }}
                    ></div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
          
          {/* Transaction/Description Column */}
          <div className="lg:col-span-1">
            <Card className="space-y-6">
              <h2 className="text-xl font-semibold text-white">Transaction Description</h2>
              
              <div className="space-y-4">
                <p className="text-white/70 text-sm">
                  Track your local gig activity and collaboration metrics. 
                  View earnings and community impact.
                </p>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-white/70 text-sm">Active Tasks</span>
                    <span className="text-white font-medium">12</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/70 text-sm">Completed</span>
                    <span className="text-white font-medium">8</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/70 text-sm">Reputation</span>
                    <span className="text-white font-medium">4.8⭐</span>
                  </div>
                </div>
                
                <Button variant="primary" className="w-full">
                  View Detail
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
