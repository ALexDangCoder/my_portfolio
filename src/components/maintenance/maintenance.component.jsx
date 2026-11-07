import React, { useState } from 'react';
import { FEATURE_FLAGS } from '../../config/featureFlags';
import './maintenance.styles.css';

const Maintenance = ({ onUnlock }) => {
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passcode.trim() === FEATURE_FLAGS.ADMIN_PASSCODE) {
      localStorage.setItem('portfolio_preview_override', 'true');
      localStorage.setItem('portfolio_admin_logged', 'true');
      onUnlock();
    } else {
      setError('Mã truy cập không chính xác. Vui lòng kiểm tra lại.');
    }
  };

  return (
    <main className="maintenance">
      <div className="maintenance__card">
        <span className="maintenance__badge">Alex Dang Portfolio</span>
        <h1 className="maintenance__title">Portfolio In Private Mode</h1>
        <p className="maintenance__desc">
          Trang portfolio hiện đang tạm ẩn để cập nhật dự án mới và nâng cấp hạ tầng.
          Nếu bạn có lời mời hợp tác hoặc cần liên hệ trực tiếp, vui lòng kết nối qua các kênh dưới đây:
        </p>

        <div className="maintenance__contacts">
          <a href="mailto:AlexDangDev@gmail.com" className="maintenance__link">Email</a>
          <a href="https://www.linkedin.com/in/alexdang2000/" target="_blank" rel="noopener noreferrer" className="maintenance__link">LinkedIn</a>
          <a href="https://github.com/ALexDangCoder" target="_blank" rel="noopener noreferrer" className="maintenance__link">GitHub</a>
        </div>

        <form onSubmit={handleSubmit} className="maintenance__form">
          <label htmlFor="passcodeInput" className="maintenance__form-label">
            Quyền xem trước (Nhập mã truy cập):
          </label>
          <div className="maintenance__input-group">
            <input
              id="passcodeInput"
              type="password"
              value={passcode}
              onChange={(e) => {
                setPasscode(e.target.value);
                setError('');
              }}
              placeholder="Nhập mã truy cập..."
              className="maintenance__input"
              autoComplete="off"
            />
            <button type="submit" className="button button--dark">
              Mở khóa xem
            </button>
          </div>
          {error && <p className="maintenance__error">{error}</p>}
        </form>
      </div>
    </main>
  );
};

export default Maintenance;
