import { motion, AnimatePresence } from "framer-motion";
import { ShaderCanvas } from "../ShaderCanvas";
import { CenterReminderDisplay } from "../CenterReminderDisplay";
import { ShaderSelector } from "../ShaderSelector";
import { useReminderManager } from "../ReminderManager";
import { useState, useEffect } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "../ui/sidebar";
import { Button } from "../ui/button";
import { ReminderInput } from "../ReminderInput";
import { ReminderList } from "../ReminderList";
import { Settings, Bell, X, Menu } from "lucide-react";

interface HomeProps {
  onPageChange: (page: string) => void;
}

export function Home({ onPageChange }: HomeProps) {
  const [selectedShader, setSelectedShader] = useState(1);
  const [showInput, setShowInput] = useState(false);
  const [canvasSize, setCanvasSize] = useState(400);
  const {
    reminders,
    addReminder,
    removeReminder,
    clearAllReminders,
    hasUpcomingReminders,
    markReminderComplete
  } = useReminderManager();

  // Get active reminders for the center display
  const activeReminders = reminders.filter(r => !r.completed);
  const hasActiveReminders = activeReminders.length > 0;

  useEffect(() => {
    const handleResize = () => {
      // Account for sidebar - available width is reduced when sidebar is open
      const availableWidth = window.innerWidth - 300; // Approximate sidebar width
      const availableHeight = window.innerHeight;
      const size = Math.min(availableWidth * 0.7, availableHeight * 0.8);
      setCanvasSize(Math.max(600, size));
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <SidebarProvider defaultOpen={false}>
      <div className="min-h-screen bg-black text-white flex">
        {/* Options Sidebar */}
        <Sidebar side="left" variant="floating" className="bg-black/90 backdrop-blur-lg border-white/10">
          <SidebarHeader className="p-4">
            <div className="flex items-center gap-2">
              <Settings className="w-5 h-5" />
              <span className="font-medium">Options</span>
            </div>
          </SidebarHeader>
          
          <SidebarContent className="p-4 space-y-6">
            {/* Reminder Controls */}
            <SidebarGroup>
              <SidebarGroupLabel className="text-white/70 mb-3">
                Reminders
              </SidebarGroupLabel>
              <SidebarGroupContent className="space-y-3">
               
                
                {activeReminders.length > 0 && (
                  <Button
                    onClick={clearAllReminders}
                    className="w-full justify-start bg-red-500/20 hover:bg-red-500/30 border-red-500/30 text-red-200"
                    variant="outline"
                  >
                    <X className="w-4 h-4 mr-2" />
                    Clear All ({activeReminders.length})
                  </Button>
                )}
              </SidebarGroupContent>
            </SidebarGroup>

            {/* Reminder Input */}
            <AnimatePresence>
              {showInput && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <SidebarGroup>
                    <SidebarGroupLabel className="text-white/70 mb-3">
                      New Reminder
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                      <ReminderInput 
                        onAddReminder={(message, time) => {
                          addReminder(message, time);
                          setShowInput(false);
                        }} 
                      />
                    </SidebarGroupContent>
                  </SidebarGroup>
                </motion.div>
              )}
            </AnimatePresence>
          </SidebarContent>

          <SidebarFooter className="p-4 space-y-3">
        
          </SidebarFooter>
        </Sidebar>

        {/* Main Content */}
        <SidebarInset className="flex-1">
          <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Sidebar Toggle */}
            <div className="absolute top-4 left-4 z-20">
              <SidebarTrigger className="bg-white/10 hover:bg-white/20 border-white/20 text-white">
                <Menu className="w-4 h-4" />
              </SidebarTrigger>
            </div>

            {/* Shader Selection on the right */}
            <ShaderSelector
              selectedShader={selectedShader}
              onSelectShader={setSelectedShader}
            />

            {/* Background Shader - HUGE AND CENTERED */}
            <div className="fixed inset-0 flex items-center justify-center z-0" style={{ left: '50%', transform: 'translateX(-50%)' }}>
              <ShaderCanvas
                size={canvasSize}
                onClick={() => {}}
                hasActiveReminders={hasActiveReminders}
                hasUpcomingReminders={hasUpcomingReminders(5)}
                shaderId={selectedShader}
              />
            </div>

            {/* Center Reminder Display */}
            {hasActiveReminders && (
              <CenterReminderDisplay
                reminders={activeReminders}
                onRemove={removeReminder}
                size={canvasSize}
                onComplete={markReminderComplete}
              />
            )}

            {/* Active Reminders List (bottom) */}
            <AnimatePresence>
              {activeReminders.length > 0 && (
                <motion.div
                  className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  <ReminderList 
                    reminders={reminders} 
                    onRemove={removeReminder} 
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Welcome Message (when no reminders) */}
            {!hasActiveReminders && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <div className="text-center">
                  <motion.h1 
                    className="text-4xl md:text-6xl font-light mb-4 text-white drop-shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    Shader Reminder
                  </motion.h1>
                  <motion.p 
                    className="text-lg text-white/70 mb-8 drop-shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    Click the menu to add your first reminder
                  </motion.p>
                  
                  {/* Action Buttons */}
                  <motion.div
                    className="flex gap-4 justify-center mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <button 
                      className="px-8 py-3 bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 transition-all duration-300 text-lg font-light tracking-wide rounded-lg shadow-lg hover:shadow-xl"
                      onClick={() => onPageChange("work")}
                    >
                      See My Work
                    </button>
                    <button 
                      className="px-8 py-3 bg-white/90 text-black hover:bg-white transition-all duration-300 text-lg font-light tracking-wide rounded-lg shadow-lg hover:shadow-xl"
                      onClick={() => onPageChange("contact")}
                    >
                      Get in Touch
                    </button>
                  </motion.div>
                  
                  <motion.p 
                    className="text-sm text-white/50 mt-6 drop-shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    Canvas size: {canvasSize}px | Shader: {selectedShader}
                  </motion.p>
                </div>
              </motion.div>
            )}
          </div>
        </SidebarInset>
        
        {/* Hero Text and Buttons - CENTERED TOGETHER */}
        <motion.div
          className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-light mb-2 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            style={{ 
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.5)',
              lineHeight: '1.1',
              transform: 'translateY(-25px)'
            }}
          >
            I'm Eve Wright.
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-white/90 mb-20 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            style={{ 
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)',
              lineHeight: '1.4',
              transform: 'translateY(-25px)'
            }}
          >
            I'm creating cool stories in some windy city heaped in modern myth.
          </motion.p>
          
          {/* Buttons within the same container */}
          <motion.div
            className="flex gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            style={{ paddingTop: '25px' }}
          >
          <button 
            className="px-8 py-3 text-lg font-light tracking-wide rounded-lg cursor-pointer transition-all duration-300"
            onClick={() => onPageChange("work")}
            style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              color: 'white',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(20px)',
              transform: 'scale(1)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'white';
              e.currentTarget.style.color = 'black';
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            See My Work
          </button>
          <button 
            className="px-8 py-3 text-lg font-light tracking-wide rounded-lg cursor-pointer transition-all duration-300"
            onClick={() => onPageChange("contact")}
            style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              color: 'white',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.3)',
              backdropFilter: 'blur(20px)',
              transform: 'scale(1)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'white';
              e.currentTarget.style.color = 'black';
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            Get in Touch
          </button>
          </motion.div>
        </motion.div>
      </div>
    </SidebarProvider>
  );
}