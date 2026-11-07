import React, { useState } from 'react';
import db from '../../utils/firebase';
import { FEATURE_FLAGS } from '../../config/featureFlags';
import './admin-bar.styles.css';

const AdminBar = ({ isSiteEnabled, onToggleLocal, onLogout }) => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleToggle = async () => {
    setLoading(true);
    setMessage('Đang cập nhật lên Firestore...');
    const nextState = !isSiteEnabled;
    try {
      await db
        .collection(FEATURE_FLAGS.FIRESTORE_COLLECTION)
        .doc(FEATURE_FLAGS.FIRESTORE_DOC)
        .set({ is_enabled: nextState, updated_at: new Date().toISOString() }, { merge: true });

      onToggleLocal(nextState);
      setMessage(`Đã chuyển trạng thái: ${nextState ? 'HIỂN THỊ (PUBLIC)' : 'ĐANG ẨN (PRIVATE)'}`);
      setTimeout(() => setMessage(''), 3000);
    } catch (err) {
      console.error('Failed to toggle Firestore feature flag:', err);
      setMessage('Lỗi cập nhật Firestore: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-bar">
      <div className="admin-bar__inner">
        <div className="admin-bar__status">
          <span>Quản trị viên (Alex Dang):</span>
          <span>Trạng thái công khai:</span>
          <span className={`admin-bar__badge ${isSiteEnabled ? 'admin-bar__badge--on' : 'admin-bar__badge--off'}`}>
            {isSiteEnabled ? 'Public (Đang Hiện)' : 'Private (Đang Ẩn)'}
          </span>
          {message && <span className="admin-bar__msg">{message}</span>}
        </div>

        <div className="admin-bar__actions">
          <button
            type="button"
            className="admin-bar__btn"
            onClick={handleToggle}
            disabled={loading}
          >
            {loading ? 'Đang lưu...' : isSiteEnabled ? 'Tắt Website (Chuyển sang Ẩn)' : 'Bật Website (Chuyển sang Hiện)'}
          </button>
          <button
            type="button"
            className="admin-bar__btn admin-bar__btn--ghost"
            onClick={onLogout}
          >
            Thoát Admin
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminBar;
