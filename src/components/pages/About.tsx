import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

export function About() {
  const [imageError, setImageError] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isVideoHovered, setIsVideoHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const directorsReel = {
    videoFile: "/src/trailer1.mp4",
    thumbnailTimestamp: 15
  };

  const handleVideoMouseEnter = () => {
    setIsVideoHovered(true);
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      video.play();
    }
  };

  const handleVideoMouseLeave = () => {
    setIsVideoHovered(false);
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = directorsReel.thumbnailTimestamp;
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const setThumbnail = () => {
        video.currentTime = directorsReel.thumbnailTimestamp;
      };
      video.addEventListener('loadeddata', setThumbnail);
      return () => video.removeEventListener('loadeddata', setThumbnail);
    }
  }, []);

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#000000', 
      color: '#ffffff', 
      paddingTop: '96px', 
      paddingBottom: '64px' 
    }}>
      <div style={{ 
        maxWidth: '800px', 
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
            About Eve
          </h1>
          <p style={{ 
            fontSize: '1.25rem', 
            color: 'rgba(255, 255, 255, 0.7)', 
            maxWidth: '600px', 
            margin: '0 auto' 
          }}>
            Filmmaker exploring urban mythology through contemporary storytelling
          </p>
        </motion.div>

        {/* Headshot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '64px'
          }}
        >
          {!imageError ? (
            <img
              src="src/image.png"
              alt="Eve Wright"
              style={{
                width: '400px',
                height: '400px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '3px solid rgba(255, 255, 255, 0.2)'
              }}
              onError={() => setImageError(true)}
            />
          ) : (
            <div
              style={{
                width: '400px',
                height: '400px',
                borderRadius: '50%',
                backgroundColor: '#666666',
                border: '3px solid rgba(255, 255, 255, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '8rem',
                color: '#999999'
              }}
            >
              👤
            </div>
          )}
        </motion.div>

        {/* Bio Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '24px',
            padding: '48px',
            marginBottom: '64px'
          }}
        >
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '32px', 
            fontSize: '1.125rem', 
            lineHeight: '1.8',
            color: 'rgba(255, 255, 255, 0.9)' 
          }}>
            <p>
              Eve Wright is an avant-garde filmmaker whose work excavates the mythological undercurrents 
              of contemporary urban life. Based in Chicago, she creates narratives that blur the 
              boundaries between reality and legend, revealing the epic stories embedded in everyday 
              city spaces.
            </p>
            
            <p>
              Her approach to filmmaking is both visceral and poetic, drawing from the city's 
              industrial heritage and its persistent capacity for reinvention. Wright's films 
              explore themes of transformation, memory, and the hidden histories that shape our 
              understanding of place and community.
            </p>
            
            <p>
              Through her lens, ordinary urban environments become stages for extraordinary human 
              drama. Her work has been featured at numerous international festivals, including 
              Sundance, Chicago International Film Festival, and SXSW, earning recognition for 
              its distinctive visual language and narrative innovation.
            </p>
            
            <p>
              Wright's filmography spans feature films, documentaries, and experimental shorts, 
              each piece contributing to her larger exploration of how cities and their inhabitants 
              create and recreate themselves through story. Her latest feature, "Steel & Bone," 
              is currently in production and follows three generations of a Chicago family as 
              their neighborhood transforms around them.
            </p>
            
            <blockquote style={{ 
              fontStyle: 'italic', 
              fontSize: '1.25rem', 
              color: 'rgba(255, 255, 255, 0.8)',
              borderLeft: '3px solid rgba(255, 255, 255, 0.3)',
              paddingLeft: '24px',
              margin: '32px 0'
            }}>
              "I believe that every city is a story waiting to be told, and every story is a city 
              waiting to be built. My work exists in that space between what was, what is, and 
              what could be."
            </blockquote>
          </div>
        </motion.div>

        {/* Director's Reel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            marginBottom: '64px'
          }}
        >
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '300',
            textAlign: 'center',
            marginBottom: '32px',
            color: '#ffffff'
          }}>
            Director's Reel
          </h2>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '32px'
          }}>
            {!videoError ? (
              <video
                ref={videoRef}
                style={{
                  width: '100%',
                  maxWidth: '700px',
                  height: '400px',
                  borderRadius: '16px',
                  objectFit: 'cover',
                  border: '3px solid rgba(255, 255, 255, 0.2)'
                }}
                controls
                muted={false}
                loop
                preload="metadata"
                onError={() => setVideoError(true)}
                onMouseEnter={handleVideoMouseEnter}
                onMouseLeave={handleVideoMouseLeave}
              >
                <source src={directorsReel.videoFile} type="video/mp4" />
              </video>
            ) : (
              <div
                style={{
                  width: '100%',
                  maxWidth: '700px',
                  height: '400px',
                  borderRadius: '16px',
                  backgroundColor: '#666666',
                  border: '3px solid rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '5rem',
                  color: '#999999'
                }}
              >
                🎬
              </div>
            )}
          </div>

          <p style={{
            textAlign: 'center',
            fontSize: '1rem',
            color: 'rgba(255, 255, 255, 0.6)',
            fontStyle: 'italic'
          }}>
            A collection of scenes showcasing Eve's distinctive visual style and storytelling approach
          </p>
        </motion.div>

      </div>
    </div>
  );
}