import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [selectedRole, setSelectedRole] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!selectedRole) return;
    
    const userData = {
      role: selectedRole,
      department: selectedDepartment,
      loginTime: new Date().toISOString()
    };
    
    localStorage.setItem('kmrl_user', JSON.stringify(userData));
    navigate('/dashboard');
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f1f5f9',
      padding: '20px'
    }}>
      <div className="card" style={{ maxWidth: '400px', width: '100%' }}>
        <div className="card-header text-center">
          <h1 className="card-title" style={{ fontSize: '24px', marginBottom: '8px' }}>
            KMRL Login
          </h1>
          <p className="card-description">
            Select your role to access the document management system
          </p>
        </div>
        
        <div className="card-content" style={{ padding: '24px' }}>
          <div className="form-group">
            <label className="form-label">Select Role</label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <label style={{ 
                display: 'flex', 
                alignItems: 'center', 
                padding: '12px', 
                border: '2px solid #e2e8f0', 
                borderRadius: '8px',
                cursor: 'pointer',
                backgroundColor: selectedRole === 'admin' ? '#dbeafe' : 'white',
                borderColor: selectedRole === 'admin' ? '#2563eb' : '#e2e8f0'
              }}>
                <input
                  type="radio"
                  name="role"
                  value="admin"
                  checked={selectedRole === 'admin'}
                  onChange={(e) => {
                    setSelectedRole(e.target.value);
                    setSelectedDepartment('');
                  }}
                  style={{ marginRight: '12px' }}
                />
                <div>
                  <div style={{ fontWeight: '600', color: '#1e293b' }}>Admin</div>
                  <div style={{ fontSize: '14px', color: '#64748b' }}>
                    See all departments, deadlines, and system overview
                  </div>
                </div>
              </label>

              <label style={{ 
                display: 'flex', 
                alignItems: 'center', 
                padding: '12px', 
                border: '2px solid #e2e8f0', 
                borderRadius: '8px',
                cursor: 'pointer',
                backgroundColor: selectedRole === 'hod' ? '#dbeafe' : 'white',
                borderColor: selectedRole === 'hod' ? '#2563eb' : '#e2e8f0'
              }}>
                <input
                  type="radio"
                  name="role"
                  value="hod"
                  checked={selectedRole === 'hod'}
                  onChange={(e) => {
                    setSelectedRole(e.target.value);
                    setSelectedDepartment('');
                  }}
                  style={{ marginRight: '12px' }}
                />
                <div>
                  <div style={{ fontWeight: '600', color: '#1e293b' }}>HOD (Head of Department)</div>
                  <div style={{ fontSize: '14px', color: '#64748b' }}>
                    View department summary and document overviews
                  </div>
                </div>
              </label>

              <label style={{ 
                display: 'flex', 
                alignItems: 'center', 
                padding: '12px', 
                border: '2px solid #e2e8f0', 
                borderRadius: '8px',
                cursor: 'pointer',
                backgroundColor: selectedRole === 'staff' ? '#dbeafe' : 'white',
                borderColor: selectedRole === 'staff' ? '#2563eb' : '#e2e8f0'
              }}>
                <input
                  type="radio"
                  name="role"
                  value="staff"
                  checked={selectedRole === 'staff'}
                  onChange={(e) => {
                    setSelectedRole(e.target.value);
                    setSelectedDepartment('');
                  }}
                  style={{ marginRight: '12px' }}
                />
                <div>
                  <div style={{ fontWeight: '600', color: '#1e293b' }}>Staff</div>
                  <div style={{ fontSize: '14px', color: '#64748b' }}>
                    View overdue, completed tasks for your department
                  </div>
                </div>
              </label>
            </div>
          </div>

          {(selectedRole === 'staff' || selectedRole === 'hod') && (
            <div className="form-group" style={{ marginTop: '20px' }}>
              <label className="form-label">Select Department</label>
              <select 
                className="form-input"
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                style={{ width: '100%' }}
              >
                <option value="">Choose Department</option>
                <option value="Operations">Operations</option>
                <option value="Finance">Finance</option>
                <option value="HR">Human Resources</option>
                <option value="Legal">Legal</option>
                <option value="Maintenance">Maintenance</option>
                <option value="IT">Information Technology</option>
              </select>
            </div>
          )}

          <button 
            className="btn btn-primary"
            onClick={handleLogin}
            disabled={!selectedRole || ((selectedRole === 'staff' || selectedRole === 'hod') && !selectedDepartment)}
            style={{ 
              width: '100%', 
              marginTop: '24px',
              opacity: (!selectedRole || ((selectedRole === 'staff' || selectedRole === 'hod') && !selectedDepartment)) ? 0.6 : 1
            }}
          >
            Login to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;