import CONSTANTS from "@/utils/constants"

/*
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-9S4KDLPP0C"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-9S4KDLPP0C');
  </script>
*/

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = url => {
  window.gtag('config', CONSTANTS.GA_TRACKING_ID, {
    page_location: url
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  })
}