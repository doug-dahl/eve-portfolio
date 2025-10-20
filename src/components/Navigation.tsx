import { motion } from "framer-motion";

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const pages = [
    { id: "about", label: "About" },
    { id: "work", label: "Work" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      style={{ 
        position: 'fixed',
        top: '0px',
        left: '0px',
        right: '0px',
        width: '100vw',
        minWidth: '100vw',
        maxWidth: '100vw',
        margin: '0px',
        padding: '0px',
        zIndex: 50,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      <div 
        style={{ 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100vw',
          minWidth: '100vw',
          maxWidth: '100vw',
          margin: '0px',
          padding: '24px 32px',
          boxSizing: 'border-box'
        }}
      >
        <motion.div 
          onClick={() => onPageChange("home")}
          whileHover={{ opacity: 0.7, scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          style={{
            fontSize: '16px',
            fontWeight: '300',
            color: 'white',
            cursor: 'pointer',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            userSelect: 'none'
          }}
        >
          Eve Wright
        </motion.div>
        
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '48px' 
        }}>
          {pages.map((page, index) => (
            <motion.button
              key={page.id}
              onClick={() => onPageChange(page.id)}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              style={{
                fontSize: '16px',
                fontWeight: '300',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: currentPage === page.id ? 'white' : 'rgba(255, 255, 255, 0.7)',
                cursor: 'pointer',
                userSelect: 'none',
                position: 'relative',
                background: 'none',
                border: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '0.7';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '1';
              }}
            >
              {page.label}
              {currentPage === page.id && (
                <motion.div
                  layoutId="activeTab"
                  initial={false}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  style={{
                    position: 'absolute',
                    bottom: '-4px',
                    left: '0',
                    right: '0',
                    height: '1px',
                    backgroundColor: 'white'
                  }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}