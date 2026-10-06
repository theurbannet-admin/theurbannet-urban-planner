import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./provider_dashboard.css";
// Including the imports for the Embla carousel
import useEmblaCarousel from "embla-carousel-react"; 


const PROVIDER_STORAGE_KEY = "urbanPlannerProviderProfile";

const SERVICE_OPTIONS = [
  { id: "food-catering", label: "Food & Catering" },
  { id: "fashion-styling", label: "Fashion & Styling" },
  { id: "wellness-fitness", label: "Wellness & Fitness" },
  { id: "beauty-grooming", label: "Beauty & Grooming" },
  { id: "home-lifestyle", label: "Home & Lifestyle" }
];

// Updated mock data to match your new 5 categories, 10 event requests
const eventRequests = [
  {
    id: 1,
    event: "Birthday Dinner",
    // requirement: "Provide a three-course dinner with vegetarian options",
    location: "Glasgow",
    date: "20 September 2026",
    guests: "100–120 guests",
    service: "Food & Catering",
    status: "New match",
    budget: "Budget shared",
  },
  {
    id: 2,
    event: "Corporate Gala",
    // requirement: "Design and set up modern table décor for the venue",
    location: "Edinburgh",
    date: "12 October 2026",
    guests: "200 guests",
    service: "Home & Lifestyle",
    status: "Open request",
    budget: "Budget private",
  },
  {
    id: 3,
    event: "Bridal Shower",
    // requirement: "Provide makeup services for the bride and four guests",
    location: "Aberdeen",
    date: "8 November 2026",
    guests: "45 guests",
    service: "Beauty & Grooming",
    status: "Open request",
    budget: "Budget shared",
  },
  {
    id: 4,
    event: "Graduation Celebration",
    // requirement: "Style two formal outfits for the graduate",
    location: "Stirling",
    date: "25 September 2026",
    guests: "30–40 guests",
    service: "Fashion & Styling",
    status: "New match",
    budget: "Budget shared",
  },
  {
    id: 5,
    event: "Community Wellness Day",
    // requirement: "Lead a beginner-friendly group fitness session",
    location: "Dundee",
    date: "10 October 2026",
    guests: "60–80 guests",
    service: "Wellness & Fitness",
    status: "Open request",
    budget: "Budget private",
  },
  {
    id: 6,
    event: "Wedding Reception",
    // requirement: "Provide buffet catering with African and Caribbean dishes",
    location: "Edinburgh",
    date: "14 November 2026",
    guests: "150–180 guests",
    service: "Food & Catering",
    status: "New match",
    budget: "Budget shared",
  },
  {
    id: 7,
    event: "Engagement Party",
    // requirement: "Create a balloon installation and decorated photo area",
    location: "Glasgow",
    date: "3 October 2026",
    guests: "60–80 guests",
    service: "Home & Lifestyle",
    status: "Open request",
    budget: "Budget shared",
  },
  {
    id: 8,
    event: "Fashion Photoshoot",
    // requirement: "Source and style three coordinated editorial looks",
    location: "Edinburgh",
    date: "29 August 2026",
    guests: "10–15 guests",
    service: "Fashion & Styling",
    status: "Open request",
    budget: "Budget private",
  },
  {
    id: 9,
    event: "Prom Preparation",
    // requirement: "Provide hairstyling and soft-glam makeup for three clients",
    location: "Livingston",
    date: "5 December 2026",
    guests: "5–10 guests",
    service: "Beauty & Grooming",
    status: "New match",
    budget: "Budget shared",
  },
  {
    id: 10,
    event: "Weekend Wellness Retreat",
    // requirement: "Lead a morning yoga and guided stretching session",
    location: "Perth",
    date: "18 October 2026",
    guests: "20–25 guests",
    service: "Wellness & Fitness",
    status: "Open request",
    budget: "Budget shared",
  },
];

function ProviderDashboard() {
  const [profile, setProfile] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "start"});
  // use loop: true if I want the carousel to loop continuously,

  // const [scrollProgress, setScrollProgress] = useState(0);
  // const [thumbSize, setThumbSize] = useState(0.3);
  // const [canPrev, setCanPrev] = useState(false);
  // const [canNext, setCanNext] = useState(false);


  // Load profile on start
  useEffect(() => {
    const savedProfile = localStorage.getItem(PROVIDER_STORAGE_KEY);
    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    }
  }, []);

  // useEffect(() => {
  //   if (!emblaApi) return;

  //   const updateScrollar = () => {
  //     setScrollProgress(emblaApi.scrollProgress());
  //     setThumbSize(emblaApi.slidesInView().length / emblaApi.slideNodes().length);
  //     setCanPrev(emblaApi.canScrollPrev());
  //     setCanNext(emblaApi.canScrollNext());
  //   };

  //   emblaApi.on("scroll", updateScrollar);
  //   emblaApi.on("reInit", updateScrollar);
  //   emblaApi.on("select", updateScrollar);
  //   updateScrollar(); // Initial update

  //   return () => {
  //     emblaApi.off("scroll", updateScrollar);
  //     emblaApi.off("reInit", updateScrollar);
  //     emblaApi.off("select", updateScrollar);
  //   };
  // }, [emblaApi]);

  const handleSaveProfile = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newProfile = {
      businessName: formData.get("businessName"),
      serviceCategory: formData.get("serviceCategory"),
      location: formData.get("location"),
    };
    
    localStorage.setItem(PROVIDER_STORAGE_KEY, JSON.stringify(newProfile));
    setProfile(newProfile);
    setIsModalOpen(false);
  };

  return (
    <main className="provider-page">
      
      {/* =========================================
          SCENARIO A: EMPTY STATE (No Profile Yet)
          ========================================= */}
      {!profile && (
        <section className="empty-state-wrapper">
          <div className="empty-state-card">
            <div className="empty-state-icon">🏬</div>
            <h1>Set up your storefront.</h1>
            <p>
              You haven't set up your provider profile yet. Tell us what services you offer 
              and where you operate to start matching with open event requests.
            </p>
            <button onClick={() => setIsModalOpen(true)} className="provider-primary-button pulse-btn">
              + Create Business Profile
            </button>
          </div>
        </section>
      )}

      {/* =========================================
          SCENARIO B: POPULATED DASHBOARD (Job Feed)
          ========================================= */}
      {profile && (
        <>
          <section className="provider-hero">
            <div>
              <p className="provider-eyebrow">MARKETPLACE FEED</p>
              <h1>Find requests that match your service.</h1>
              <p>
                Browse open event needs across Scotland, review the event brief, and
                express interest when the work suits your business.
              </p>
            </div>

            <div className="provider-profile-card">
              <span>Your Business</span>
              <strong>{profile.businessName}</strong>
              <p>{profile.serviceCategory} • {profile.location}</p>
              <button onClick={() => setIsModalOpen(true)} className="provider-card-link no-border-btn" style={{color: "var(--light-orange)"}}>
                Edit Profile →
              </button>
            </div>
          </section>

          <section className="provider-stats-grid">
            <article>
              <span>New matches</span>
              <strong>8</strong>
              <p>This week</p>
            </article>
            <article>
              <span>Open requests</span>
              <strong>24</strong>
              <p>Across your area</p>
            </article>
            <article>
              <span>Your responses</span>
              <strong>5</strong>
              <p>Awaiting customer decision</p>
            </article>
            <article>
              <span>Profile strength</span>
              <strong>100%</strong>
              <p>Ready for jobs</p>
            </article>
          </section>

          <section className="provider-board-section">
            <div className="provider-section-header">
              <div>
                <p className="provider-eyebrow">Open opportunities</p>
                <h2>Event requests near {profile.location}</h2>
              </div>
            </div>

            <div className="provider-filters">
              <button type="button" className="active">All</button>
              <button type="button">Food & Catering</button>
              <button type="button">Beauty & Grooming</button>
              <button type="button">Home & Lifestyle</button>
            </div>

            <div className="embla">
              <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                  {eventRequests.map((request) => (
                    <div className="embla__slide" key={request.id}>
                    <article className="event-request-card">
                      <div className="request-top">
                        <span className="request-status">{request.status}</span>
                        <span>{request.location}</span>
                      </div>
                      <h3>{request.event}</h3>
                      <div className="request-meta">
                        <span>{request.date}</span>
                        <span>{request.guests}</span>
                        <span>{request.budget}</span>
                      </div>
                      <div className="request-service">
                        <span>Service needed</span>
                        <strong>{request.service}</strong>
                      </div>
                      <p>
                        Review the customer’s event brief. Express interest so they can view
                        your provider details.
                      </p>
                      <div className="request-actions">
                        <button type="button" className="provider-secondary-button">
                          Express interest
                        </button>
                      </div>
                    </article>
                    </div>
                  ))}
                </div>
              </div>

              <button className="embla__prev" onClick={() => emblaApi?.scrollPrev()}>‹</button>
              <button className="embla__next" onClick={() => emblaApi?.scrollNext()}>›</button>

                {/* <button
                  className="embla__prev"
                  onClick={() => emblaApi?.scrollPrev()}
                  disabled={!canPrev}
                  aria-label="Previous event requests"
                >
                  ‹
                </button>
                <button
                  className="embla__next"
                  onClick={() => emblaApi?.scrollNext()}
                  disabled={!canNext}
                  aria-label="Next event requests"
                >
                  ›
                </button>

                <div className="embla__scrollbar" aria-hidden="true">
                  <div
                    className="embla__scrollbar-thumb"
                    style={{
                      width: `${thumbSize * 100}%`,
                      left: `${scrollProgress * (100 - thumbSize * 100)}%`,
                    }}
                  />
                </div> */}
            </div>
          </section>
        </>
      )}

      {/* =========================================
          THE MODAL (Simplified setup form)
          ========================================= */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h2>{profile ? "Edit Profile" : "Create Profile"}</h2>
              <button className="close-btn" onClick={() => setIsModalOpen(false)}>✕</button>
            </div>
            
            <form className="modal-form" onSubmit={handleSaveProfile}>
              <div className="form-group">
                <label>Business Name</label>
                <input type="text" name="businessName" defaultValue={profile?.businessName || ""} placeholder="e.g. Bella's Catering" required />
              </div>
              
              <div className="form-group">
                <label>Primary Service Category</label>
                <select name="serviceCategory" defaultValue={profile?.serviceCategory || ""} required style={{padding: '12px 15px', borderRadius: '10px', border: '1px solid #ddd', background: 'var(--cream)'}}>
                  <option value="" disabled>Select a category</option>
                  {SERVICE_OPTIONS.map(opt => (
                    <option key={opt.id} value={opt.label}>{opt.label}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Base Location</label>
                <input type="text" name="location" defaultValue={profile?.location || ""} placeholder="e.g. Glasgow" required />
              </div>

              <div className="modal-actions">
                <button type="button" className="secondary-btn" onClick={() => setIsModalOpen(false)}>Cancel</button>
                <button type="submit" className="provider-primary-button" style={{border: 'none', cursor: 'pointer'}}>
                  Save & View Jobs
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </main>
  );
}

export default ProviderDashboard;