import { 
    Grid3X3, 
    History, 
    Calendar, 
    Clock, 
    BarChart3, 
    TestTube, 
    MessageCircle, 
    HelpCircle, 
    Settings 
  } from 'lucide-react';
  
  export const navigationItems = [
    { icon: Grid3X3, label: 'Dashboard', active: true },
    { icon: History, label: 'History', active: false },
    { icon: Calendar, label: 'Calendar', active: false },
    { icon: Clock, label: 'Appointments', active: false },
    { icon: BarChart3, label: 'Statistics', active: false },
    { icon: TestTube, label: 'Tests', active: false },
    { icon: MessageCircle, label: 'Chat', active: false },
    { icon: HelpCircle, label: 'Support', active: false },
    { icon: Settings, label: 'Setting', active: false }
  ];