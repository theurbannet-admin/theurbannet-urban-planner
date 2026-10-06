import { Link } from "react-router-dom";
import heroImage from "../assets/hero_image.png";
import "./home.css"; 

function Home() {
  return (
    <main className="home-page">

      {/* 1. Hero Section */}
      <section className="home-hero">
        <img 
          src={heroImage}
          alt="An event planner surrounded by planning materials and event décor" 
          className="hero-image" 
        />

        <div className="hero-content">

          <h1>Plan the event <br/><span>Find the people.</span></h1>
          <p>
            Build your checklist, timeline, and budget in one place, then connect with the local providers you need.
          </p>
          
          <div className="hero-actions">
            <Link to="/signup?role=customer" className="search-btn">
              Start Planning
            </Link>

            <Link to="/signup?role=provider" className="hero-provider-link">
              Join as a Provider
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Planning Story Section */}
      <section className="planning-story-section" id="the problem">
        <div className="planning-story-container">

          <div className="planning-story-copy">
            <p className="section-kicker">From scattered to structured</p>

            <h2>
              Planning an event should not live in six different places.
            </h2>

            <p>
              Urban Planner brings your checklist, budget, timeline, inspiration,
              and provider notes into one calm planning workspace.
            </p>

            <div className="story-points">
              <div className="problem-card">
                <div className="problem-number">
                  <span>01</span>
                </div>
                <div className="problem-content">
                  <h3>Details go missing</h3>
                  <p>Important dates, guest numbers, and provider notes live in separate
                    apps and conversations.
                  </p>
                </div>
              </div>
              <div className="problem-card">
                <div className="problem-number">
                  <span>02</span>
                </div>
                <div className="problem-content">
                  <h3>Deadlines creep up</h3>
                  <p>It is easy to forget the venue deposit, cake order, or invitation
                    deadline until it is suddenly urgent.
                  </p>
                </div>
              </div>
              <div className="problem-card">
                <div className="problem-number">
                  <span>03</span>
                </div>
                <div className="problem-content">
                  <h3>Finding services takes time</h3>
                  <p>You still have to search for the right caterer, photographer, or
                    stylist separately.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="planning-story-visual scattered-visual"
            aria-label="Urban Planner workspace preview, the scattered event-planning notes"
          >
            <div className="story-cards-grid">
              <article className="story-card guest-card">
                <span>Guest List</span>
                <strong>84 confirmed</strong>
                <p>Waiting on 12 replies</p>
              </article>

              <article className="story-card budget-card">
                <span>Catering Budget Estimate</span>
                <strong>£1,250</strong>
                <p>£600 remaining</p>
              </article>

              <article className="story-card provider-card">
                <span>Photographer</span>
                <strong>Waiting for availability</strong>
                <p>Sent last Tuesday</p>
              </article>

              <article className="story-card theme-card">
                <span>Theme</span>
                <strong>White & Gold; gold tables</strong>
                <p>Warm, Elegant</p>
              </article>
            </div>

            <div className="planner-preview-card">
              <div className="planner-preview-header">
                <div>
                  <span>Event Plan</span>
                  <h3>Amara’s Birthday Dinner</h3>
                </div>
              </div>

              <div className="planner-progress">
                <div className="progress-text">
                  <span>Planning progress</span>
                  <strong>63%</strong>
                </div>

                <div className="progress-track">
                  <div className="progress-fill"></div>
                </div>
              </div>

              <div className="planner-mini-grid">
                <article>
                  <span>Next task</span>
                  <strong>Confirm caterer</strong>
                </article>

                <article>
                  <span>Budget</span>
                  <strong>£1,850 left</strong>
                </article>

                <article>
                  <span>Providers</span>
                  <strong>4 shortlisted</strong>
                </article>

                <article>
                  <span>Theme</span>
                  <strong>Soft glam</strong>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. How it works Section */}
      <section className="how-section" id="how-it-works">
      <div className="section-heading">
        <p className="section-kicker">How it works</p>

        <h2>From a few event details to a plan that knows what comes next.</h2>
        <p>
          Urban Planner turns your event idea into a clear workspace built around
          your date, location, guests, budget, and service needs.
        </p>
      </div>

      <div className="steps-grid">
        <article className="step-card">
          <span className="step-number">01</span>
          <h3>Tell us about your event</h3>
          <p>
            Add your event type, date, location, guest count, budget, theme, and
            required services.
          </p>
        </article>

        <article className="step-card featured-step">
          <span className="step-number">02</span>
          <h3>Get your guided plan</h3>
          <p>
            Urban Planner creates a smart checklist, budget structure, and
            planning timeline based on your event.
          </p>
        </article>

        <article className="step-card">
          <span className="step-number">03</span>
          <h3>Stay on top of every detail</h3>
          <p>
            Track tasks, save inspiration, organise providers, and always know
            what to do next.
          </p>
        </article>
      </div>
    </section>

    {/* 4. Workspace Preview */}
    <section className="workspace-section" id="workspace">
      <div className="workspace-copy">
        <p className="section-kicker">Your planning workspace</p>
        <h2>Everything your event needs. Nothing scattered.</h2>
        <p>
          The dashboard brings together your event overview, countdown,
          checklist, budget, timeline, inspiration, and provider shortlist.
        </p>

        <ul className="feature-list">
          <li>Smart checklist based on event type and selected services</li>
          <li>Budget planner with estimated and actual costs</li>
          <li>Timeline milestones so deadlines never catch you off guard</li>
          <li>Guest list and event notes in one place</li>
        </ul>
      </div>

      <div className="workspace-preview">
        <div className="preview-top">
          <div>
            <h3>Amara’s 25th Birthday</h3>
            <span>Glasgow : 120 guests</span>
          </div>
          <p>84 days to go</p>
        </div>

        <div className="stats-row">
          <article>
            <span>Guests</span>
            <strong>120</strong>
          </article>
          <article>
            <span>Budget</span>
            <strong>£3,200</strong>
          </article>
          <article>
            <span>Progress</span>
            <strong>63%</strong>
          </article>
        </div>

        <div className="planner-columns">
          <div className="planner-panel">
            <h4>Smart checklist</h4>
            <label><input type="checkbox" checked /> Book venue</label>
            <label><input type="checkbox" checked /> Contact caterer</label>
            <label><input type="checkbox" /> Order cake</label>
            <label><input type="checkbox" /> Confirm decorations</label>
          </div>

          <div className="planner-panel warm-panel">
            <h4>Upcoming milestone</h4>
            <p>2 months before</p>
            <strong>Send invitations and confirm guest list.</strong>
          </div>
        </div>
          <div className="provider-activity">
            <div>
              <span>Provider activity</span>
              <strong>Photography : 2 Providers interested</strong>
            </div>

            <span className="provider-status">View details</span>
          </div>
      </div>
    </section>

    {/* 5. Provider Gateway Section */}
    <section className="provider-gateway" id="for-providers">
      <div>
        <p className="section-kicker">For Providers</p>
        <h2>Find event opportunities that suit your service.</h2>
        <p>Set your category and service area, review relevant event briefs, and
            express interest in opportunities that match your business.
        </p>
      </div>

      <div className="provider-gateway-action">
        <Link to="/signup?role=provider" className="search-btn provider-btn">
          Join as a Provider
        </Link>

        <p>
          Customers contact providers directly. Pricing and payment arrangements
          remain outside Urban Planner.
        </p>
      </div>
    </section>

    </main>
  );
}

export default Home;