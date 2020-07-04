import config from "~/helpers/config";

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: any) => {
  gtag("config", config.googleAnalyticsID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: any) => {
  gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
};
