// import { Link } from "react-router-dom";

// import "./customer_dashboard.css";

// function CustomerDashboard() {
//   return (
//     <main className="dashboard-page">
//       {/* 1. Page Header */}
//       <header className="dashboard-header">
//         <div>
//           <p className="eyebrow">YOUR WORKSPACE</p>
//           <h1>Good morning, Amara.</h1>
//         </div>
//         <Link to="/plans/new" className="primary-btn">
//           + Create New Plan
//         </Link>
//       </header>

//       {/* 2. Active Event Banner (Simplified) */}
//       <section className="active-event-banner" aria-label="Current event summary">
//         <div className="event-info">
//           <p className="event-label">PLANNING PROGRESS: 63%</p>
//           <h2>Amara’s Birthday Dinner</h2>
//           <div className="event-meta">
//             <span> 20 September 2026</span>
//             <span> Glasgow, Scotland</span>
//             <span> 120 guests</span>
//           </div>
//         </div>
        
//         <div className="event-stats-block">
//           <div className="stat-box">
//             <strong>84</strong>
//             <span>Days to go</span>
//           </div>
//         </div>
//       </section>

//       {/* 3. Main Workspace Grid */}
//       <div className="workspace-grid">
        
//         {/* Left Column: Action Items & Tasks */}
//         <div className="workspace-main">
          
//           {/* Urgent Needs */}
//           <section className="workspace-card">
//             <div className="card-header">
//               <h3>Needs Attention</h3>
//               <span className="urgent-badge">1 Urgent</span>
//             </div>
            
//             <div className="action-list">
//               <div className="action-item urgent">
//                 <div className="action-text">
//                   <strong>Confirm your caterer</strong>
//                   <p>Your caterer is shortlisted. Confirm their availability.</p>
//                 </div>
//                 <button className="action-btn">Resolve</button>
//               </div>
              
//               <div className="action-item">
//                 <div className="action-text">
//                   <strong>Guest replies missing</strong>
//                   <p>12 guests have not responded yet.</p>
//                 </div>
//                 {/* <Link to="/plans" className="text-link">Manage Guests →</Link> */}
//               </div>
//             </div>
//           </section>

//           {/* Smart Checklist */}
//           <section className="workspace-card">
//             <div className="card-header">
//               <h3>Smart Checklist</h3>
//               <Link to="/checklist" className="text-link">View all tasks →</Link>
//             </div>
            
//             <div className="simple-task-list">
//               <label className="task-row completed">
//                 <input type="checkbox" checked readOnly />
//                 <span>Book venue</span>
//               </label>
//               <label className="task-row">
//                 <input type="checkbox" readOnly />
//                 <span>Confirm caterer</span>
//                 <span className="due-tag">Due this week</span>
//               </label>
//               <label className="task-row">
//                 <input type="checkbox" readOnly />
//                 <span>Order birthday cake</span>
//               </label>
//             </div>
//           </section>
//         </div>

//         {/* Right Column: Providers & Budget */}
//         <div className="workspace-sidebar">
          
//           {/* Marketplace Updates */}
//           <section className="workspace-card">
//             <div className="card-header">
//               <h3>Provider Activity</h3>
//               <Link to="/marketplace" className="text-link">Explore →</Link>
//             </div>
            
//             <div className="provider-updates">
//               <div className="update-item new-update">
//                 <span className="status-dot green"></span>
//                 <div>
//                   <strong>Photography</strong>
//                   <p>2 providers interested!</p>
//                 </div>
//               </div>
//               <div className="update-item">
//                 <span className="status-dot orange"></span>
//                 <div>
//                   <strong>Catering</strong>
//                   <p>Request live, awaiting providers.</p>
//                 </div>
//               </div>
//             </div>
//           </section>

//           {/* Budget Snapshot */}
//           <section className="workspace-card budget-card">
//             <div className="card-header">
//               <h3>Budget Tracker</h3>
//               <strong className="budget-amount">£1,850 left</strong>
//             </div>
//             <div className="budget-bar">
//               <div className="budget-fill" style={{ width: '42%' }}></div>
//             </div>
//             <p className="budget-detail">£1,350 estimated of £3,200 total</p>
//           </section>
          
//         </div>
//       </div>
//     {/* ... previous workspace-grid code ... */}
      
//       {/* 4. Event Recommendations */}
//       <section className="recommendations-section">
//         <div className="section-header">
//           <div>
//             <p className="eyebrow">CURATED FOR YOUR EVENT</p>
//             <h2>Recommended for your birthday dinner</h2>
//           </div>
//           <Link to="/marketplace" className="text-link">
//             View all services →
//           </Link>
//         </div>

//         <div className="recommendations-grid">
          
//           <article className="recommendation-card">
//             <div className="recommendation-image placeholder-img-1"></div>
//             <div className="recommendation-content">
//               <h3>Birthday dinner essentials</h3>
//               <p>Bring together the practical services that shape a relaxed, memorable celebration.</p>
//               <div className="tags">
//                 <span>Food & Catering</span>
//                 <span>Decorations</span>
//               </div>
//               <Link to="/marketplace" className="text-link">Explore services →</Link>
//             </div>
//           </article>

//           <article className="recommendation-card">
//             <div className="recommendation-image placeholder-img-2"></div>
//             <div className="recommendation-content">
//               <h3>Catering and cake</h3>
//               <p>Find caterers, private chefs, bakers, and cake makers for your guest count and celebration style.</p>
//               <div className="tags">
//                 <span>Food & Catering</span>
//                 <span>Cake makers</span>
//               </div>
//               <Link to="/marketplace" className="text-link">Browse providers →</Link>
//             </div>
//           </article>

//           <article className="recommendation-card">
//             <div className="recommendation-image placeholder-img-3"></div>
//             <div className="recommendation-content">
//               <h3>Photography and beauty</h3>
//               <p>Capture the occasion and pull your chosen soft-glam look together before the celebration begins.</p>
//               <div className="tags">
//                 <span>Photography</span>
//                 <span>Beauty & Grooming</span>
//               </div>
//               <Link to="/marketplace" className="text-link">View categories →</Link>
//             </div>
//           </article>

//         </div>
//       </section>

//     </main>
//   );
// }

// export default CustomerDashboard;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./customer_dashboard.css";

const PLAN_STORAGE_KEY = "urbanPlannerActivePlan";
const USER_STORAGE_KEY = "user";

const SERVICE_OPTIONS = [
  {
    id: "food-catering",
    code: "FC",
    label: "Food & Catering",
    description: "Caterers, private chefs, cake makers, and event dining services.",
  },
  {
    id: "fashion-styling",
    code: "FS",
    label: "Fashion & Styling",
    description: "Personal styling, tailoring, outfits, and event accessories.",
  },
  {
    id: "wellness-fitness",
    code: "WF",
    label: "Wellness & Fitness",
    description: "Personal trainers, yoga instructors, massage therapy, and wellness coaching.",
  },
  {
    id: "beauty-grooming",
    code: "BG",
    label: "Beauty & Grooming",
    description: "Makeup artists, hair styling, barbering, nails, and spa services.",
  },
  {
    id: "home-lifestyle",
    code: "HL",
    label: "Home & Lifestyle",
    description: "Interior styling, event decorations, home organization, and daily lifestyle services.",
  }
];

function readStoredUser() {
  try {
    const storedUser = localStorage.getItem(USER_STORAGE_KEY);

    if (!storedUser) {
      return null;
    }

    const parsedUser = JSON.parse(storedUser);

    // Supports either:
    // localStorage.setItem("user", JSON.stringify(data.user))
    // or an object containing { user: data.user }
    return parsedUser.user ?? parsedUser;
  } catch (error) {
    console.error("Unable to read the stored user:", error);
    return null;
  }
}

function readStoredPlan() {
  try {
    const storedPlan = localStorage.getItem(PLAN_STORAGE_KEY);

    return storedPlan ? JSON.parse(storedPlan) : null;
  } catch (error) {
    console.error("Unable to read the stored plan:", error);
    return null;
  }
}

function createPlanId() {
  if (globalThis.crypto?.randomUUID) {
    return globalThis.crypto.randomUUID();
  }

  return `plan-${Date.now()}`;
}

function getGreeting() {
  const currentHour = new Date().getHours();

  if (currentHour < 12) {
    return "Good morning";
  }

  if (currentHour < 18) {
    return "Good afternoon";
  }

  return "Good evening";
}

function formatEventDate(dateValue) {
  if (!dateValue) {
    return "Date not set";
  }

  const date = new Date(`${dateValue}T00:00:00`);

  if (Number.isNaN(date.getTime())) {
    return dateValue;
  }

  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

function calculateDaysToGo(dateValue) {
  if (!dateValue) {
    return null;
  }

  const eventDate = new Date(`${dateValue}T00:00:00`);
  const today = new Date();

  today.setHours(0, 0, 0, 0);

  if (Number.isNaN(eventDate.getTime())) {
    return null;
  }

  const difference = eventDate.getTime() - today.getTime();

  return Math.max(0, Math.ceil(difference / 86400000));
}

function formatCurrency(value) {
  const numericValue = Number(value);

  if (!Number.isFinite(numericValue)) {
    return "Not set";
  }

  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(numericValue);
}

function getServiceById(serviceId) {
  return SERVICE_OPTIONS.find((service) => service.id === serviceId);
}

function CustomerDashboard() {
  const [user] = useState(() => readStoredUser());
  const [activePlan, setActivePlan] = useState(() => readStoredPlan());
  const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);

  const firstName = user?.first_name || "Amara";

  function handlePlanSaved(savedPlan) {
    localStorage.setItem(
      PLAN_STORAGE_KEY,
      JSON.stringify(savedPlan)
    );

    setActivePlan(savedPlan);
    setIsPlanModalOpen(false);
  }

  return (
    <main className="dashboard-page">
      {!activePlan ? (
        <EmptyDashboard
          firstName={firstName}
          onCreatePlan={() => setIsPlanModalOpen(true)}
        />
      ) : (
        <PopulatedDashboard
          firstName={firstName}
          plan={activePlan}
          onEditPlan={() => setIsPlanModalOpen(true)}
        />
      )}

      {isPlanModalOpen && (
        <CreatePlanModal
          initialPlan={activePlan}
          onClose={() => setIsPlanModalOpen(false)}
          onSave={handlePlanSaved}
        />
      )}
    </main>
  );
}

function EmptyDashboard({ firstName, onCreatePlan }) {
  return (
    <>
      <header className="dashboard-heading">
        <div>
          <p className="dashboard-eyebrow">Your workspace</p>

          <h1>
            {getGreeting()}, {firstName}.
          </h1>

          <p className="dashboard-heading-description">
            Bring every service, provider need, and next step for your
            occasion into one organised plan.
          </p>
        </div>
      </header>

      <section className="empty-plan-card">
        <div className="empty-plan-visual" aria-hidden="true">
          <span className="empty-plan-orbit empty-plan-orbit-one" />
          <span className="empty-plan-orbit empty-plan-orbit-two" />

          <div className="empty-plan-icon">
            <span>+</span>
          </div>

          <span className="empty-visual-tag empty-visual-tag-one">
            Services
          </span>

          <span className="empty-visual-tag empty-visual-tag-two">
            Timeline
          </span>

          <span className="empty-visual-tag empty-visual-tag-three">
            Providers
          </span>
        </div>

        <div className="empty-plan-copy">
          <p className="dashboard-eyebrow">Urban Planner</p>

          <h2>Create your first plan</h2>

          <p>
            Tell us about your occasion and choose the services you
            need. Urban Planner will turn those details into a clear,
            guided workspace.
          </p>

          <div className="empty-plan-actions">
            <button
              type="button"
              className="dashboard-btn dashboard-btn-primary"
              onClick={onCreatePlan}
            >
              Create your first plan
            </button>

            <Link
              to="/marketplace"
              className="dashboard-btn dashboard-btn-secondary"
            >
              Browse providers
            </Link>
          </div>
        </div>
      </section>

      <section className="empty-dashboard-guide">
        <div className="empty-guide-heading">
          <p className="dashboard-eyebrow">How it works</p>
          <h2>A clear path from idea to organised plan.</h2>
        </div>

        <div className="empty-guide-grid">
          <article>
            <span className="empty-guide-number">01</span>
            <h3>Add your occasion</h3>
            <p>
              Share your date, location, guest count, budget, and
              planning preferences.
            </p>
          </article>

          <article>
            <span className="empty-guide-number">02</span>
            <h3>Select your services</h3>
            <p>
              Choose every service you may need, from catering to
              photography and styling.
            </p>
          </article>

          <article>
            <span className="empty-guide-number">03</span>
            <h3>Discover providers</h3>
            <p>
              Explore relevant providers for each individual service
              requirement.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}

function CreatePlanModal({
  initialPlan,
  onClose,
  onSave,
}) {
  const isEditing = Boolean(initialPlan);

  const [currentStep, setCurrentStep] = useState(1);

  const [selectedServices, setSelectedServices] = useState(
    initialPlan?.service_ids ?? []
  );

  const [formData, setFormData] = useState({
    plan_name: initialPlan?.plan_name ?? "",
    event_type: initialPlan?.event_type ?? "",
    event_date: initialPlan?.event_date ?? "",
    event_location: initialPlan?.event_location ?? "",
    guest_count: initialPlan?.guest_count ?? "",
    budget: initialPlan?.budget ?? "",
    theme: initialPlan?.theme ?? "",
    notes: initialPlan?.notes ?? "",
  });

  const [formError, setFormError] = useState("");

  useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  function updateField(event) {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  }

  function toggleService(serviceId) {
    setSelectedServices((currentServices) => {
      if (currentServices.includes(serviceId)) {
        return currentServices.filter(
          (currentId) => currentId !== serviceId
        );
      }

      return [...currentServices, serviceId];
    });
  }

  function moveToServicesStep() {
    const requiredFields = [
      formData.plan_name,
      formData.event_type,
      formData.event_date,
      formData.event_location,
    ];

    if (requiredFields.some((field) => !String(field).trim())) {
      setFormError(
        "Please complete the required occasion details."
      );
      return;
    }

    setFormError("");
    setCurrentStep(2);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (selectedServices.length === 0) {
      setFormError(
        "Please select at least one service for your plan."
      );
      return;
    }

    const savedPlan = {
      id: initialPlan?.id ?? createPlanId(),
      plan_name: formData.plan_name.trim(),
      event_type: formData.event_type,
      event_date: formData.event_date,
      event_location: formData.event_location.trim(),
      guest_count: formData.guest_count
        ? Number(formData.guest_count)
        : null,
      budget: formData.budget
        ? Number(formData.budget)
        : null,
      theme: formData.theme.trim(),
      notes: formData.notes.trim(),
      service_ids: selectedServices,
      plan_type: "guided",
      status: "saved",
      progress: initialPlan?.progress ?? 20,
      created_at:
        initialPlan?.created_at ?? new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    onSave(savedPlan);
  }

  return (
    <div
      className="plan-modal-backdrop"
      role="presentation"
      onMouseDown={onClose}
    >
      <section
        className="plan-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="create-plan-title"
        aria-describedby="create-plan-description"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="plan-modal-close"
          aria-label="Close plan form"
          onClick={onClose}
        >
          ×
        </button>

        <div className="plan-modal-heading">
          <p className="dashboard-eyebrow">
            Step {currentStep} of 2
          </p>

          <h2 id="create-plan-title">
            {currentStep === 1
              ? isEditing
                ? "Update your occasion"
                : "Tell us about your occasion"
              : "Which services do you need?"}
          </h2>

          <p id="create-plan-description">
            {currentStep === 1
              ? "Start with the details that will shape your guided plan."
              : "Choose all the services that may be part of your occasion. You can edit these later."}
          </p>
        </div>

        <div className="plan-modal-progress" aria-hidden="true">
          <span className="active" />
          <span className={currentStep === 2 ? "active" : ""} />
        </div>

        {formError && (
          <p className="plan-form-error" role="alert">
            {formError}
          </p>
        )}

        <form onSubmit={handleSubmit}>
          {currentStep === 1 && (
            <div className="plan-form-grid">
              <label className="plan-form-full">
                <span>Plan name *</span>

                <input
                  type="text"
                  name="plan_name"
                  value={formData.plan_name}
                  onChange={updateField}
                  placeholder="Amara’s Birthday Dinner"
                  autoFocus
                />
              </label>

              <label>
                <span>Occasion type *</span>

                <select
                  name="event_type"
                  value={formData.event_type}
                  onChange={updateField}
                >
                  <option value="">
                    Choose an occasion
                  </option>
                  <option value="Birthday">Birthday</option>
                  <option value="Wedding">Wedding</option>
                  <option value="Graduation">Graduation</option>
                  <option value="Photoshoot">Photoshoot</option>
                  <option value="Business event">
                    Business event
                  </option>
                  <option value="Dinner or celebration">
                    Dinner or celebration
                  </option>
                  <option value="Other">Other</option>
                </select>
              </label>

              <label>
                <span>Date *</span>

                <input
                  type="date"
                  name="event_date"
                  value={formData.event_date}
                  onChange={updateField}
                />
              </label>

              <label className="plan-form-full">
                <span>Location *</span>

                <input
                  type="text"
                  name="event_location"
                  value={formData.event_location}
                  onChange={updateField}
                  placeholder="Glasgow, Scotland"
                />
              </label>

              <label>
                <span>Guest count</span>

                <input
                  type="number"
                  min="1"
                  name="guest_count"
                  value={formData.guest_count}
                  onChange={updateField}
                  placeholder="120"
                />
              </label>

              <label>
                <span>Estimated budget</span>

                <div className="currency-input">
                  <span>£</span>

                  <input
                    type="number"
                    min="0"
                    name="budget"
                    value={formData.budget}
                    onChange={updateField}
                    placeholder="3200"
                  />
                </div>
              </label>

              <div className="plan-modal-actions plan-form-full">
                <button
                  type="button"
                  className="dashboard-btn dashboard-btn-primary"
                  onClick={moveToServicesStep}
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <>
              <div className="service-options-grid">
                {SERVICE_OPTIONS.map((service) => {
                  const isSelected =
                    selectedServices.includes(service.id);

                  return (
                    <button
                      key={service.id}
                      type="button"
                      className={`service-option-card ${
                        isSelected ? "selected" : ""
                      }`}
                      aria-pressed={isSelected}
                      onClick={() =>
                        toggleService(service.id)
                      }
                    >
                      <span className="service-option-top">
                        <span className="service-option-code">
                          {service.code}
                        </span>

                        <span className="service-option-check">
                          {isSelected ? "✓" : "+"}
                        </span>
                      </span>

                      <strong>{service.label}</strong>
                    </button>
                  );
                })}
              </div>

              <div className="optional-plan-fields">
                <label>
                  <span>Theme or style</span>

                  <input
                    type="text"
                    name="theme"
                    value={formData.theme}
                    onChange={updateField}
                    placeholder="Soft glam, warm and elegant"
                  />
                </label>

                <label>
                  <span>Additional notes</span>

                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={updateField}
                    rows="3"
                    placeholder="Share any preferences, accessibility requirements, or useful planning notes."
                  />
                </label>
              </div>

              <div className="plan-modal-actions plan-modal-actions-split">
                <button
                  type="button"
                  className="dashboard-btn dashboard-btn-secondary"
                  onClick={() => {
                    setFormError("");
                    setCurrentStep(1);
                  }}
                >
                  Back
                </button>

                <button
                  type="submit"
                  className="dashboard-btn dashboard-btn-primary"
                >
                  {isEditing
                    ? "Save changes"
                    : "Create my plan"}
                </button>
              </div>
            </>
          )}
        </form>
      </section>
    </div>
  );
}

function PopulatedDashboard({
  firstName,
  plan,
  onEditPlan,
}) {
  const daysToGo = calculateDaysToGo(plan.event_date);

  const progress = Math.min(
    100,
    Math.max(0, Number(plan.progress) || 20)
  );

  const selectedServices = plan.service_ids
    .map(getServiceById)
    .filter(Boolean);

  const highlightedServices = selectedServices.slice(0, 2);
  const recommendedServices = selectedServices.slice(0, 3);

  const totalBudget = Number(plan.budget) || 0;

  const firstService =
    selectedServices[0]?.label || "your selected services";

  return (
    <>
      <header className="dashboard-heading dashboard-heading-with-action">
        <div>
          <p className="dashboard-eyebrow">Your workspace</p>

          <h1>
            {getGreeting()}, {firstName}.
          </h1>
        </div>

        <button
          type="button"
          className="dashboard-btn dashboard-btn-primary"
          onClick={onEditPlan}
        >
          Edit plan
        </button>
      </header>

      <section
        className="active-event-banner"
        aria-label="Current event summary"
      >
        <div className="active-event-information">
          <p className="active-event-label">
            Planning progress: {progress}%
          </p>

          <h2>{plan.plan_name}</h2>

          <div className="active-event-meta">
            <span>{formatEventDate(plan.event_date)}</span>
            <span>{plan.event_location}</span>

            {plan.guest_count && (
              <span>{plan.guest_count} guests</span>
            )}
          </div>
        </div>

        <div className="active-event-stat">
          <strong>
            {daysToGo === null ? "—" : daysToGo}
          </strong>
          <span>Days to go</span>
        </div>
      </section>

      <div className="dashboard-workspace-grid">
        <div className="dashboard-workspace-main">
          <section className="dashboard-workspace-card">
            <div className="dashboard-card-header">
              <div>
                <p className="dashboard-card-kicker">
                  Next steps
                </p>
                <h3>Needs Attention</h3>
              </div>

              <span className="dashboard-status-badge">
                Getting started
              </span>
            </div>

            <div className="dashboard-action-list">
              <div className="dashboard-action-item">
                <div>
                  <strong>
                    Explore providers for {firstService}
                  </strong>

                  <p>
                    Compare relevant profiles and add suitable
                    providers to your shortlist.
                  </p>
                </div>

                <Link
                  to="/marketplace"
                  className="dashboard-small-btn"
                >
                  Explore
                </Link>
              </div>

              <div className="dashboard-action-item">
                <div>
                  <strong>Review your plan details</strong>

                  <p>
                    Add notes or adjust your selected services as
                    your plans develop.
                  </p>
                </div>

                <button
                  type="button"
                  className="dashboard-text-button"
                  onClick={onEditPlan}
                >
                  Edit plan
                </button>
              </div>
            </div>
          </section>

          <section className="dashboard-workspace-card">
            <div className="dashboard-card-header">
              <div>
                <p className="dashboard-card-kicker">
                  Guided plan
                </p>
                <h3>Smart Checklist</h3>
              </div>
            </div>

            <div className="dashboard-task-list">
              <label className="dashboard-task-row completed">
                <input
                  type="checkbox"
                  checked
                  readOnly
                />
                <span>Create your Urban Planner plan</span>
              </label>

              <label className="dashboard-task-row">
                <input type="checkbox" readOnly />
                <span>
                  Explore providers for {firstService}
                </span>
                <span className="dashboard-due-tag">
                  Next step
                </span>
              </label>

              <label className="dashboard-task-row">
                <input type="checkbox" readOnly />
                <span>
                  Add your preferred providers to a shortlist
                </span>
              </label>
            </div>
          </section>
        </div>

        <aside className="dashboard-workspace-sidebar">
          <section className="dashboard-workspace-card">
            <div className="dashboard-card-header">
              <div>
                <p className="dashboard-card-kicker">
                  Service activity
                </p>
                <h3>Provider Activity</h3>
              </div>

              <Link
                to="/marketplace"
                className="dashboard-text-link"
              >
                Explore
              </Link>
            </div>

            <div className="provider-update-list">
              {highlightedServices.map(
                (service, index) => (
                  <div
                    className="provider-update-item"
                    key={service.id}
                  >
                    <span
                      className={`provider-status-dot ${
                        index === 0 ? "orange" : "brown"
                      }`}
                    />

                    <div>
                      <strong>{service.label}</strong>
                      <p>
                        Open to provider interest.
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </section>

          <section className="dashboard-workspace-card">
            <div className="dashboard-card-header">
              <div>
                <p className="dashboard-card-kicker">
                  Current estimate
                </p>
                <h3>Budget Tracker</h3>
              </div>

              <strong className="dashboard-budget-amount">
                {totalBudget
                  ? `${formatCurrency(totalBudget)} left`
                  : "Not set"}
              </strong>
            </div>

            <div className="dashboard-budget-bar">
              <div
                className="dashboard-budget-fill"
                style={{ width: "0%" }}
              />
            </div>

            <p className="dashboard-budget-detail">
              {totalBudget
                ? `£0 currently estimated of ${formatCurrency(
                    totalBudget
                  )} total`
                : "Add a budget to begin tracking estimates."}
            </p>
          </section>
        </aside>
      </div>

      <section className="dashboard-recommendations">
        <div className="dashboard-section-header">
          <div>
            <p className="dashboard-eyebrow">
              Selected for your plan
            </p>

            <h2>Explore services for {plan.plan_name}</h2>
          </div>

          <Link
            to="/marketplace"
            className="dashboard-text-link"
          >
            View all services
          </Link>
        </div>

        <div className="dashboard-recommendations-grid">
          {recommendedServices.map(
            (service, index) => (
              <article
                className="dashboard-recommendation-card"
                key={service.id}
              >
                <div
                  className={`dashboard-recommendation-image dashboard-recommendation-image-${
                    index + 1
                  }`}
                >
                  <span>{service.code}</span>
                </div>

                <div className="dashboard-recommendation-content">
                  <span className="dashboard-category-tag">
                    {service.label}
                  </span>

                  <h3>{service.label}</h3>

                  <p>{service.description}</p>

                  <Link
                    to="/marketplace"
                    className="dashboard-text-link"
                  >
                    Browse providers
                  </Link>
                </div>
              </article>
            )
          )}
        </div>
      </section>
    </>
  );
}

export default CustomerDashboard;