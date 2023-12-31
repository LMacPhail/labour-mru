import posthog from 'posthog-js'
import "vanilla-cookieconsent/dist/cookieconsent.css";
import * as CookieConsent from "vanilla-cookieconsent";
import { useEffect } from 'react';

export async function enablePosthog() {
  if (!process.env.REACT_APP_POSTHOG_API_KEY || !process.env.REACT_APP_POSTHOG_API_URL) {
    return
  }
  posthog.init(process.env.REACT_APP_POSTHOG_API_KEY!, {
    api_host: process.env.REACT_APP_POSTHOG_API_URL
  })
  posthog.opt_in_capturing()
}

export async function disablePosthog() {
  posthog.opt_out_capturing()
}

export function showPrivacyPreferences () {
  CookieConsent.show();
}

export function captureAnalyticsEvent (event: string, properties: any) {
  posthog.capture(event, properties)
}

export function captureAnalyticsPageView (page: string) {
  posthog.capture('change tab', { page })
}

export function useAnalytics () {
  useEffect(() => {
    CookieConsent.run({
        revision: 1,
        categories: {
          analytics: {
            enabled: true,
            readOnly: false,
            services: {
              posthog: {
                label: 'PostHog',
                onAccept: () => {
                  enablePosthog()
                },
                onReject: () => {
                  disablePosthog()
                }
              }
            }
          }
        },
        language: {
          default: 'en',
          translations: {
            en: {
              consentModal: {
                title: 'Can we use cookies to track usage?',
                description: "You'll help us learn how to improve the tool for others",
                acceptAllBtn: 'Accept',
                acceptNecessaryBtn: 'Reject',
                showPreferencesBtn: 'Manage privacy preferences'
              },
              preferencesModal: {
                title: 'Manage privacy preferences',
                acceptAllBtn: 'Accept',
                acceptNecessaryBtn: 'Reject',
                savePreferencesBtn: 'Save preferences',
                closeIconLabel: 'Close',
                sections: [
                  {
                    title: 'Usage analytics',
                    description: 'Tracks how the tool is used to help us improve it',
                    linkedCategory: 'analytics'
                  }
                ]
              }
            }
          }
        }
    });
  }, []);
}

// TODO:
// - enable PII filter
// - show cookies CookieConsent.show();