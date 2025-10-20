import { motion } from "framer-motion";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    projectType: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setFormData({ name: "", email: "", subject: "", message: "", projectType: "" });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactCards = [
    { icon: "✉️", label: "Email", value: "eve.wright@storyteller.com" },
    { icon: "📍", label: "Location", value: "Chicago, Illinois" },
    { icon: "🎬", label: "Focus", value: "Narrative Filmmaking" },
    { icon: "⏰", label: "Response", value: "24-48 hours" }
  ];

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#000000', 
      color: '#ffffff', 
      paddingTop: '96px', 
      paddingBottom: '64px' 
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 24px' 
      }}>
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ 
            textAlign: 'center', 
            marginBottom: '64px' 
          }}
        >
          <h1 style={{ 
            fontSize: '4rem', 
            fontWeight: '300', 
            marginBottom: '24px' 
          }}>
            Let's Connect
          </h1>
          <p style={{ 
            fontSize: '1.25rem', 
            color: 'rgba(255, 255, 255, 0.7)', 
            maxWidth: '600px', 
            margin: '0 auto' 
          }}>
            Ready to bring your vision to life? Let's discuss collaboration.
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
            marginBottom: '64px'
          }}
        >
          {contactCards.map((card, index) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                padding: '24px',
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }}
              whileHover={{
                background: 'rgba(255, 255, 255, 0.1)'
              }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>{card.icon}</div>
              <h3 style={{ 
                fontSize: '0.875rem', 
                textTransform: 'uppercase', 
                letterSpacing: '0.1em', 
                color: 'rgba(255, 255, 255, 0.5)', 
                marginBottom: '8px' 
              }}>
                {card.label}
              </h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.9)' }}>{card.value}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr',
          gap: '32px'
        }}>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '24px',
              padding: '40px'
            }}
          >
            <h2 style={{ 
              fontSize: '2rem', 
              fontWeight: '300', 
              marginBottom: '32px' 
            }}>
              Start a Conversation
            </h2>
            
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                <div>
                  <label style={{ 
                    display: 'block', 
                    fontSize: '0.875rem', 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.1em', 
                    color: 'rgba(255, 255, 255, 0.5)', 
                    marginBottom: '8px' 
                  }}>
                    Name
                  </label>
                  <input
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#ffffff',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    }}
                  />
                </div>
                <div>
                  <label style={{ 
                    display: 'block', 
                    fontSize: '0.875rem', 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.1em', 
                    color: 'rgba(255, 255, 255, 0.5)', 
                    marginBottom: '8px' 
                  }}>
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#ffffff',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                <div>
                  <label style={{ 
                    display: 'block', 
                    fontSize: '0.875rem', 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.1em', 
                    color: 'rgba(255, 255, 255, 0.5)', 
                    marginBottom: '8px' 
                  }}>
                    Project Type
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#ffffff',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    }}
                  >
                    <option value="" style={{ background: '#000000' }}>Select type</option>
                    <option value="feature" style={{ background: '#000000' }}>Feature Film</option>
                    <option value="short" style={{ background: '#000000' }}>Short Film</option>
                    <option value="documentary" style={{ background: '#000000' }}>Documentary</option>
                    <option value="commercial" style={{ background: '#000000' }}>Commercial</option>
                  </select>
                </div>
                <div>
                  <label style={{ 
                    display: 'block', 
                    fontSize: '0.875rem', 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.1em', 
                    color: 'rgba(255, 255, 255, 0.5)', 
                    marginBottom: '8px' 
                  }}>
                    Subject
                  </label>
                  <input
                    name="subject"
                    placeholder="Brief description"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#ffffff',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    }}
                  />
                </div>
              </div>
              
              <div>
                <label style={{ 
                  display: 'block', 
                  fontSize: '0.875rem', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.1em', 
                  color: 'rgba(255, 255, 255, 0.5)', 
                  marginBottom: '8px' 
                }}>
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Tell me about your vision..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#ffffff',
                    fontSize: '1rem',
                    outline: 'none',
                    resize: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  }}
                />
              </div>
              
              <button 
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  padding: '16px',
                  background: '#ffffff',
                  color: '#000000',
                  borderRadius: '50px',
                  border: 'none',
                  fontSize: '1rem',
                  fontWeight: '300',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  opacity: isSubmitting ? 0.6 : 1
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.background = '#ffffff';
                  }
                }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>

          {/* Sidebar Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                padding: '32px'
              }}
            >
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '300', 
                marginBottom: '24px' 
              }}>
                Looking For
              </h3>
              <ul style={{ 
                listStyle: 'none', 
                padding: 0, 
                margin: 0, 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '12px',
                color: 'rgba(255, 255, 255, 0.7)' 
              }}>
                <li>• Narrative-driven projects</li>
                <li>• Urban stories & themes</li>
                <li>• Collaborative partnerships</li>
                <li>• Innovative storytelling</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              style={{
                background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(59, 130, 246, 0.1))',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '16px',
                padding: '32px'
              }}
            >
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '300', 
                marginBottom: '24px' 
              }}>
                Process
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { num: "01", title: "Consultation", desc: "Discuss vision" },
                  { num: "02", title: "Development", desc: "Refine approach" },
                  { num: "03", title: "Pre-Production", desc: "Planning phase" },
                  { num: "04", title: "Production", desc: "Bring to life" }
                ].map((phase) => (
                  <div key={phase.num} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.875rem',
                      flexShrink: 0
                    }}>
                      {phase.num}
                    </div>
                    <div>
                      <h4 style={{ 
                        color: 'rgba(255, 255, 255, 0.9)', 
                        fontWeight: '300', 
                        marginBottom: '4px' 
                      }}>
                        {phase.title}
                      </h4>
                      <p style={{ 
                        fontSize: '0.875rem', 
                        color: 'rgba(255, 255, 255, 0.5)', 
                        margin: 0 
                      }}>
                        {phase.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  );
}