'use client';

import { AppShell } from './components/AppShell';
import { HeroSection } from './components/HeroSection';
import { TaskFeed } from './components/TaskFeed';
import { mockTasks } from './data/mockData';

export default function HomePage() {
  return (
    <AppShell>
      <HeroSection />
      <TaskFeed tasks={mockTasks} />
    </AppShell>
  );
}
