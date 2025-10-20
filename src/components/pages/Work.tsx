import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

interface WorkProps {
  onPageChange?: (page: string) => void;
}

export function Work({ onPageChange }: WorkProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedFilm, setSelectedFilm] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video && films[index].mediaType === 'video') {
        const setThumbnail = () => {
          video.currentTime = films[index].thumbnailTimestamp;
        };
        video.addEventListener('loadeddata', setThumbnail);
        return () => video.removeEventListener('loadeddata', setThumbnail);
      }
    });
  }, []);

  const films = [
    {
      title: "Steel & Bonemeal",
      year: "2024",
      type: "Feature Film",
      status: "In Production",
      description: "A haunting exploration of industrial decay and human resilience, following three generations of a Chicago family as their neighborhood transforms around them.",
      role: ["Director", "Writer", "Producer"],
      duration: "95 min",
      mediaType: "video",
      videoFile: "/src/trailer1.mp4",
      imageFile: null,
      thumbnailTimestamp: 40,
      header: "Steel & Bone",
      subtitle: "Feature Film • 2024 • In Production",
      body: [
        "Steel & Bone excavates the mythology embedded in Chicago's industrial landscape, following three generations of the Kowalski family as their neighborhood transforms from a thriving manufacturing hub to a contested site of gentrification and renewal.",
        "The film weaves together personal histories with the larger narrative of urban change, exploring how families and communities adapt, resist, and reinvent themselves in the face of economic and social transformation. Through intimate portraits and sweeping cinematography, it reveals the profound connections between place, memory, and identity.",
        "Set against the backdrop of Chicago's South Side, the story unfolds through the perspectives of Maria (82), who arrived as a young immigrant worker; her son Robert (54), who witnessed the plant closures of the 1980s; and her granddaughter Sofia (28), who navigates the neighborhood's complex present as both insider and outsider.",
        "Steel & Bone challenges traditional narratives about urban decay and renewal, instead presenting a nuanced portrait of resilience, loss, and the ongoing process of community-making in post-industrial America."
      ],
      quote: "Every brick holds a story, every empty lot remembers what once stood there. This film is about listening to those stories and understanding that what we call 'development' is always also about undoing."
    },
    {
      title: "The Cartographer's Daughter",
      year: "2023", 
      type: "Short Film",
      status: "Completed",
      description: "An experimental narrative about a woman who inherits her father's collection of hand-drawn maps of places that no longer exist.",
      role: ["Director", "Writer"],
      duration: "18 min",
      mediaType: "image",
      videoFile: null,
      imageFile: "/src/image.png",
      thumbnailTimestamp: 25,
      header: "The Cartographer's Daughter",
      subtitle: "Short Film • 2023 • Completed",
      body: [
        "When Claire inherits her father's study, she discovers drawers full of meticulously hand-drawn maps depicting neighborhoods, buildings, and entire city blocks that no longer exist. Each map is labeled with dates spanning sixty years, chronicling a Chicago that has been systematically erased and rebuilt.",
        "The film follows Claire as she retraces these lost geographies, using her father's maps as guides to understand both the city's hidden histories and her own relationship to place and memory. Through a blend of live-action and animation, the maps themselves become characters, revealing the stories of displacement, development, and disappearance that shaped her father's obsessive documentation.",
        "Part mystery, part meditation on urban change, The Cartographer's Daughter explores how we navigate spaces haunted by what once was. The film suggests that maps are not just tools for finding our way, but for preserving the memories of places that exist now only in the imagination."
      ],
      quote: "My father never threw away a map, even when the streets it showed had been torn up and rebuilt. 'These places still exist,' he would tell me. 'Just not where you can see them.'"
    },
    {
      title: "Beneath the L",
      year: "2023",
      type: "Documentary", 
      status: "Completed",
      description: "An intimate portrait of the communities that live and work beneath Chicago's elevated train system.",
      role: ["Director", "Cinematographer"],
      duration: "72 min",
      mediaType: "video",
      videoFile: "/src/trailer1.mp4",
      imageFile: null,
      thumbnailTimestamp: 47,
      header: "Beneath the L",
      subtitle: "Documentary • 2023 • Completed",
      body: [
        "The Chicago 'L' creates a unique urban ecosystem—not just above street level, but below it. Beneath the L explores the vibrant communities that exist in the shadows of the elevated train system, from street vendors and musicians to maintenance workers and commuters who have claimed these spaces as their own.",
        "Shot over the course of a year, the documentary follows several individuals whose daily lives unfold in the acoustic and architectural space created by the train tracks overhead. Their stories reveal how urban infrastructure doesn't just move people—it creates places, communities, and ways of being in the city.",
        "Through intimate cinematography and natural sound design, the film transforms overlooked urban spaces into rich narrative environments, suggesting that the most interesting aspects of city life often happen in the margins."
      ],
      quote: "The city has its official spaces and its unofficial ones. I'm most interested in the places that exist because no one planned them—the spaces that belong to everyone and no one."
    },
    {
      title: "River Ghosts",
      year: "2022",
      type: "Short Film",
      status: "Completed", 
      description: "A lyrical meditation on the Chicago River's industrial past and ecological future.",
      role: ["Director", "Writer", "Editor"],
      duration: "12 min",
      mediaType: "image",
      videoFile: null,
      imageFile: "/src/testImage.png",
      thumbnailTimestamp: 30,
      header: "River Ghosts",
      subtitle: "Short Film • 2022 • Completed",
      body: [
        "The Chicago River has been reversed, dyed green, and lined with concrete, but it remembers what it once was. River Ghosts is a poetic exploration of the waterway that runs through the heart of the city, examining how human engineering has transformed a natural system into something entirely new.",
        "Using underwater cinematography, archival footage, and experimental sound design, the film creates a sensory journey through the river's layered history. The narrative is structured around the river's own rhythm, following its flow from the lake through the city and beyond.",
        "More meditation than documentary, River Ghosts suggests that urban nature is not an oxymoron but a complex ecosystem that emerges from the interaction between human systems and natural processes."
      ],
      quote: "We think we've tamed the river, but rivers remember everything. They remember their original course, their original purpose. The question is: what do they plan to do with that memory?"
    },
    {
      title: "Urban Myths",
      year: "2021",
      type: "Short Film",
      status: "Completed",
      description: "A collection of interconnected stories exploring modern folklore in the digital age.",
      role: ["Director", "Writer"],
      duration: "22 min",
      mediaType: "video",
      videoFile: "/src/trailer1.mp4",
      imageFile: null,
      thumbnailTimestamp: 10,
      header: "Urban Myths",
      subtitle: "Short Film • 2021 • Completed",
      body: [
        "Urban Myths weaves together five interconnected stories that examine how folklore evolves and spreads in digital spaces. Set in contemporary Chicago, each vignette follows characters who encounter mysterious phenomena that blur the line between online and offline reality.",
        "From a ride-share driver who keeps picking up passengers that don't exist in the app, to a social media influencer who discovers that her followers are documenting events from her life that haven't happened yet, the film explores how technology creates new spaces for the uncanny and unexplained.",
        "Shot in a hyperreal digital style that mirrors social media aesthetics, Urban Myths suggests that our connected age hasn't eliminated mystery—it has simply given it new forms and new places to hide."
      ],
      quote: "Every technology creates its own ghosts. We used to have haunted houses; now we have haunted hashtags, cursed algorithms, digital doppelgängers. The question is: which version of the story do you believe?"
    },
    {
      title: "The Last Station",
      year: "2021",
      type: "Documentary",
      status: "Completed",
      description: "Following the final days of an abandoned subway station and the stories it holds.",
      role: ["Director", "Editor"],
      duration: "45 min",
      mediaType: "image",
      videoFile: null,
      imageFile: "/src/testImage.png",
      thumbnailTimestamp: 120,
      header: "The Last Station",
      subtitle: "Documentary • 2021 • Completed",
      body: [
        "Racine Station was supposed to be part of Chicago's expanded Blue Line, but construction stopped in 2006, leaving behind a fully built but never-opened subway platform deep beneath the city. For fifteen years, the station existed in limbo—complete with turnstiles, signage, and benches, but no trains and no passengers.",
        "The Last Station documents the final months before the CTA sealed the station permanently, following urban explorers, transit historians, and city officials who each have different relationships to this underground space. The film becomes a meditation on urban planning, public space, and the stories we tell about infrastructure and abandonment.",
        "Using the abandoned station as a metaphor for broader questions about urban development and civic memory, the documentary explores what happens to public spaces that never fulfill their intended purpose, and what it means for a place to exist without being used."
      ],
      quote: "There's something haunting about a place that was built for a future that never came. It makes you wonder: how many other futures are buried beneath our cities, waiting?"
    }
  ];

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
    const film = films[index];
    if (film.mediaType === 'video') {
      const video = videoRefs.current[index];
      if (video) {
        video.currentTime = 0;
        video.play();
      }
    }
  };

  const handleMouseLeave = (index: number) => {
    setHoveredIndex(null);
    const film = films[index];
    if (film.mediaType === 'video') {
      const video = videoRefs.current[index];
      if (video) {
        video.pause();
        video.currentTime = film.thumbnailTimestamp;
      }
    }
  };

  const handleCardClick = (index: number) => {
    setSelectedFilm(index);
  };

  const handleBackToWork = () => {
    setSelectedFilm(null);
  };

  // Film Detail Component
  const FilmDetail = ({ film }: { film: typeof films[0] }) => {
    const [videoError, setVideoError] = useState(false);
    const [isVideoHovered, setIsVideoHovered] = useState(false);
    const detailVideoRef = useRef<HTMLVideoElement | null>(null);

    const handleVideoMouseEnter = () => {
      if (film.mediaType === 'video') {
        setIsVideoHovered(true);
        const video = detailVideoRef.current;
        if (video) {
          video.currentTime = 0;
          video.play();
        }
      }
    };

    const handleVideoMouseLeave = () => {
      if (film.mediaType === 'video') {
        setIsVideoHovered(false);
        const video = detailVideoRef.current;
        if (video) {
          video.pause();
          video.currentTime = film.thumbnailTimestamp;
        }
      }
    };

    return (
      <div style={{ 
        maxWidth: '800px', 
        margin: '0 auto', 
        padding: '0 24px' 
      }}>

        {/* Header with Back Button */}
        <div style={{ position: 'relative', marginBottom: '64px' }}>
          {/* Back Button - Absolute positioned */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            onClick={handleBackToWork}
            style={{
              position: 'absolute',
              left: '0',
              top: '80px',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#ffffff',
              borderRadius: '8px',
              padding: '12px 24px',
              cursor: 'pointer',
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.3s ease',
              zIndex: 10
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
            }}
          >
            ← Back to Work
          </motion.button>

          {/* Header Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ 
              textAlign: 'center'
            }}
          >
            <h1 style={{ 
              fontSize: '4rem', 
              fontWeight: '300', 
              marginBottom: '24px' 
            }}>
              {film.header}
            </h1>
            <p style={{ 
              fontSize: '1.25rem', 
              color: 'rgba(255, 255, 255, 0.7)', 
              maxWidth: '600px', 
              margin: '0 auto' 
            }}>
              {film.subtitle}
            </p>
          </motion.div>
        </div>

        {/* Media */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '64px'
          }}
        >
          {film.mediaType === 'video' && film.videoFile && !videoError ? (
            <video
              ref={detailVideoRef}
              style={{
                width: '100%',
                maxWidth: '800px',
                height: '450px',
                borderRadius: '16px',
                objectFit: 'cover',
                border: '3px solid rgba(255, 255, 255, 0.2)'
              }}
              controls
              preload="metadata"
              onError={() => setVideoError(true)}
              onMouseEnter={handleVideoMouseEnter}
              onMouseLeave={handleVideoMouseLeave}
            >
              <source src={film.videoFile} type="video/mp4" />
            </video>
          ) : film.mediaType === 'image' && film.imageFile ? (
            <img
              src={film.imageFile}
              alt={film.title}
              style={{
                width: '100%',
                maxWidth: '800px',
                height: '450px',
                borderRadius: '16px',
                objectFit: 'cover',
                border: '3px solid rgba(255, 255, 255, 0.2)'
              }}
            />
          ) : (
            <div
              style={{
                width: '100%',
                maxWidth: '800px',
                height: '450px',
                borderRadius: '16px',
                backgroundColor: '#666666',
                border: '3px solid rgba(255, 255, 255, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '6rem',
                color: '#999999'
              }}
            >
              {film.mediaType === 'video' ? '🎬' : '🖼️'}
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
            padding: '48px'
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
            {film.body.map((paragraph, index) => (
              <p key={index}>
                {paragraph}
              </p>
            ))}
            
            <blockquote style={{ 
              fontStyle: 'italic', 
              fontSize: '1.25rem', 
              color: 'rgba(255, 255, 255, 0.8)',
              borderLeft: '3px solid rgba(255, 255, 255, 0.3)',
              paddingLeft: '24px',
              margin: '32px 0'
            }}>
              "{film.quote}"
            </blockquote>
          </div>
        </motion.div>
      </div>
    );
  };

  // Show film detail if selected
  if (selectedFilm !== null) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        backgroundColor: '#000000', 
        color: '#ffffff', 
        paddingTop: '96px', 
        paddingBottom: '64px' 
      }}>
        <FilmDetail film={films[selectedFilm]} />
      </div>
    );
  }

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
            Selected Works
          </h1>
          <p style={{ 
            fontSize: '1.25rem', 
            color: 'rgba(255, 255, 255, 0.7)', 
            maxWidth: '600px', 
            margin: '0 auto' 
          }}>
            Films exploring urban mythology and human experience
          </p>
        </motion.div>

        {/* Films Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '32px'
        }}>
          {films.map((film, index) => (
            <motion.div
              key={film.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                minHeight: '400px',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                cursor: 'pointer'
              }}
              whileHover={{
                background: 'rgba(255, 255, 255, 0.1)'
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              onClick={() => handleCardClick(index)}
            >
              {/* Media Thumbnail */}
              <div style={{
                position: 'relative',
                width: '100%',
                height: '200px',
                backgroundColor: '#1a1a1a',
                overflow: 'hidden'
              }}>
                {film.mediaType === 'video' && film.videoFile ? (
                  <video
                    ref={(el) => { videoRefs.current[index] = el; }}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                    muted={false}
                    loop
                    preload="metadata"
                  >
                    <source src={film.videoFile} type="video/mp4" />
                  </video>
                ) : film.mediaType === 'image' && film.imageFile ? (
                  <img
                    src={film.imageFile}
                    alt={film.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                ) : (
                  <div style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '3rem',
                    color: '#666666'
                  }}>
                    {film.mediaType === 'video' ? '🎬' : '🖼️'}
                  </div>
                )}
              </div>

              {/* Film Header */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'flex-start', 
                marginBottom: '16px',
                padding: '24px 32px 0 32px'
              }}>
                <div>
                  <h2 style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: '300', 
                    marginBottom: '8px' 
                  }}>
                    {film.title}
                  </h2>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '12px', 
                    fontSize: '0.875rem', 
                    color: 'rgba(255, 255, 255, 0.6)' 
                  }}>
                    <span>{film.year}</span>
                    <span>•</span>
                    <span>{film.type}</span>
                    <span>•</span>
                    <span>{film.duration}</span>
                  </div>
                </div>
                <span style={{
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  background: film.status === 'Completed' 
                    ? 'rgba(34, 197, 94, 0.2)' 
                    : 'rgba(234, 179, 8, 0.2)',
                  color: film.status === 'Completed' 
                    ? 'rgb(134, 239, 172)' 
                    : 'rgb(253, 224, 71)'
                }}>
                  {film.status}
                </span>
              </div>

              {/* Description */}
              <p style={{ 
                color: 'rgba(255, 255, 255, 0.8)', 
                lineHeight: '1.6', 
                marginBottom: '24px',
                flex: '1',
                padding: '0 32px'
              }}>
                {film.description}
              </p>

              {/* Roles */}
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '8px',
                padding: '0 32px 32px 32px'
              }}>
                {film.role.map((role) => (
                  <span 
                    key={role}
                    style={{
                      padding: '4px 12px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '20px',
                      fontSize: '0.75rem',
                      color: 'rgba(255, 255, 255, 0.7)'
                    }}
                  >
                    {role}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            marginTop: '128px',
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(59, 130, 246, 0.1))',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '24px',
            padding: '64px'
          }}
        >
          <h3 style={{ 
            fontSize: '2.5rem', 
            fontWeight: '300', 
            marginBottom: '24px' 
          }}>
            Let's Create Together
          </h3>
          <p style={{ 
            fontSize: '1.25rem', 
            color: 'rgba(255, 255, 255, 0.6)', 
            marginBottom: '40px', 
            maxWidth: '600px', 
            margin: '0 auto 40px' 
          }}>
            Have a story to tell? Let's discuss how we can bring your vision to life.
          </p>
          <button
            onClick={() => onPageChange && onPageChange('contact')}
            style={{
              padding: '16px 40px',
              background: '#ffffff',
              color: '#000000',
              borderRadius: '50px',
              border: 'none',
              fontSize: '1.125rem',
              fontWeight: '300',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#ffffff';
            }}
          >
            Start a Conversation
          </button>
        </motion.div>

      </div>
    </div>
  );
}