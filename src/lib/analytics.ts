// Google Analytics utility functions

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

// Track page views
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-BKS0T77ZCP', {
      page_path: url,
    });
  }
};

// Track custom events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track button clicks
export const trackButtonClick = (buttonName: string, page: string) => {
  trackEvent('click', 'button', `${buttonName} - ${page}`);
};

// Track form submissions
export const trackFormSubmission = (formName: string) => {
  trackEvent('submit', 'form', formName);
};

// Track navigation
export const trackNavigation = (from: string, to: string) => {
  trackEvent('navigation', 'page', `${from} to ${to}`);
};

// Track social media clicks
export const trackSocialClick = (platform: string) => {
  trackEvent('click', 'social', platform);
};

// Track phone number clicks
export const trackPhoneClick = () => {
  trackEvent('click', 'contact', 'phone');
};

// Track email clicks
export const trackEmailClick = () => {
  trackEvent('click', 'contact', 'email');
};

// Track program interest
export const trackProgramInterest = (programName: string) => {
  trackEvent('interest', 'program', programName);
};

// Track event registration
export const trackEventRegistration = (eventName: string) => {
  trackEvent('registration', 'event', eventName);
};

// Track training registration
export const trackTrainingRegistration = (trainingName: string) => {
  trackEvent('registration', 'training', trainingName);
};

// Track blog engagement
export const trackBlogEngagement = (action: string, blogTitle: string) => {
  trackEvent(action, 'blog', blogTitle);
};

// Track admin actions
export const trackAdminAction = (action: string) => {
  trackEvent(action, 'admin', 'admin_panel');
}; 