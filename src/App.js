import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './views/homepage/home.page';
import Maintenance from './components/maintenance/maintenance.component';
import AdminBar from './components/admin/admin-bar.component';
import db from './utils/firebase';
import { FEATURE_FLAGS } from './config/featureFlags';

function App() {
  const [isSiteEnabled, setIsSiteEnabled] = useState(FEATURE_FLAGS.DEFAULT_SITE_ENABLED);
  const [isAdmin, setIsAdmin] = useState(false);
  const [hasOverride, setHasOverride] = useState(false);

  // Check URL params (?admin=alex2026, ?preview=alex2026) and localStorage
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const adminParam = params.get('admin');
      const previewParam = params.get('preview');

      const isStoredAdmin = localStorage.getItem('portfolio_admin_logged') === 'true';
      const isStoredOverride = localStorage.getItem('portfolio_preview_override') === 'true';

      if (adminParam === FEATURE_FLAGS.ADMIN_PASSCODE || isStoredAdmin) {
        setIsAdmin(true);
        setHasOverride(true);
        localStorage.setItem('portfolio_admin_logged', 'true');
        localStorage.setItem('portfolio_preview_override', 'true');
      } else if (previewParam === FEATURE_FLAGS.ADMIN_PASSCODE || previewParam === 'true' || isStoredOverride) {
        setHasOverride(true);
        localStorage.setItem('portfolio_preview_override', 'true');
      }
    } catch (e) {
      console.warn('Storage or URL parsing error:', e);
    }
  }, []);

  // Real-time Firestore synchronization for feature flag
  useEffect(() => {
    let unsub = () => {};
    try {
      unsub = db
        .collection(FEATURE_FLAGS.FIRESTORE_COLLECTION)
        .doc(FEATURE_FLAGS.FIRESTORE_DOC)
        .onSnapshot(
          (doc) => {
            if (doc.exists) {
              const data = doc.data();
              if (typeof data?.is_enabled === 'boolean') {
                setIsSiteEnabled(data.is_enabled);
              }
            }
          },
          (err) => {
            console.warn('Firestore feature flag listener error:', err);
          }
        );
    } catch (err) {
      console.warn('Firebase error initializing feature flag listener:', err);
    }

    return () => unsub();
  }, []);

  const isVisible = isSiteEnabled || hasOverride || isAdmin;

  // Reveal animations
  useEffect(() => {
    if (!isVisible) return;

    document.documentElement.classList.add('js');
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('is-in');
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 }
    );

    const targets = document.querySelectorAll('[data-reveal]');
    targets.forEach((el) => io.observe(el));

    // Fallback: reveal all elements after 1.5s
    const timer = setTimeout(() => {
      targets.forEach((el) => el.classList.add('is-in'));
    }, 1500);

    return () => {
      clearTimeout(timer);
      io.disconnect();
    };
  }, [isVisible]);

  if (!isVisible) {
    return (
      <Maintenance
        onUnlock={() => {
          setHasOverride(true);
          setIsAdmin(true);
        }}
      />
    );
  }

  return (
    <div>
      {isAdmin && (
        <AdminBar
          isSiteEnabled={isSiteEnabled}
          onToggleLocal={(next) => setIsSiteEnabled(next)}
          onLogout={() => {
            localStorage.removeItem('portfolio_admin_logged');
            localStorage.removeItem('portfolio_preview_override');
            setIsAdmin(false);
            setHasOverride(false);
          }}
        />
      )}
      <Home />
    </div>
  );
}

export default App;
