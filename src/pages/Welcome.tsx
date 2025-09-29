import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Upload, Shield, Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Header */}
      <div className="text-center" style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#1e293b', marginBottom: '16px' }}>
          Welcome to the KMRL Document System Prototype
        </h1>
        <p style={{ fontSize: '20px', color: '#64748b', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
          A comprehensive document handling system for Kerala Metro Rail Limited
        </p>
        <div className="badge badge-info" style={{ marginTop: '16px', display: 'inline-flex' }}>
          Hackathon Prototype
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-4" style={{ marginBottom: '32px' }}>
        <div className="card" style={{ cursor: 'pointer', transition: 'box-shadow 0.2s ease' }} onClick={() => navigate('/upload')}>
          <div className="card-header text-center">
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '12px' }}>
              <Upload style={{ width: '48px', height: '48px', color: '#2563eb' }} />
            </div>
            <div className="card-title">Upload Documents</div>
            <div className="card-description">
              Upload PDFs, images, or emails for processing
            </div>
          </div>
          <div className="card-content">
            <button className="btn btn-secondary" style={{ width: '100%' }}>
              Go to Upload
            </button>
          </div>
        </div>

        <div className="card" style={{ cursor: 'pointer', transition: 'box-shadow 0.2s ease' }} onClick={() => navigate('/dashboard')}>
          <div className="card-header text-center">
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '12px' }}>
              <FileText style={{ width: '48px', height: '48px', color: '#2563eb' }} />
            </div>
            <div className="card-title">Document Dashboard</div>
            <div className="card-description">
              View and manage all documents with search and filters
            </div>
          </div>
          <div className="card-content">
            <button className="btn btn-secondary" style={{ width: '100%' }}>
              View Dashboard
            </button>
          </div>
        </div>

        <div className="card" style={{ cursor: 'pointer', transition: 'box-shadow 0.2s ease' }} onClick={() => navigate('/compliance')}>
          <div className="card-header text-center">
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '12px' }}>
              <Shield style={{ width: '48px', height: '48px', color: '#059669' }} />
            </div>
            <div className="card-title">Compliance</div>
            <div className="card-description">
              Track compliance status and audit trails
            </div>
          </div>
          <div className="card-content">
            <button className="btn btn-secondary" style={{ width: '100%' }}>
              Check Compliance
            </button>
          </div>
        </div>

        <div className="card" style={{ cursor: 'pointer', transition: 'box-shadow 0.2s ease' }} onClick={() => navigate('/notifications')}>
          <div className="card-header text-center">
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '12px' }}>
              <Bell style={{ width: '48px', height: '48px', color: '#d97706' }} />
            </div>
            <div className="card-title">Notifications</div>
            <div className="card-description">
              View alerts and deadline notifications
            </div>
          </div>
          <div className="card-content">
            <button className="btn btn-secondary" style={{ width: '100%' }}>
              View Alerts
            </button>
          </div>
        </div>
      </div>

      {/* System Overview */}
      <div className="card">
        <div className="card-header">
          <div className="card-title">System Overview</div>
          <div className="card-description">
            This prototype demonstrates a comprehensive document handling system for KMRL
          </div>
        </div>
        <div className="card-content">
          <div className="grid grid-cols-3 text-center" style={{ gap: '24px' }}>
            <div>
              <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#2563eb' }}>50+</div>
              <div style={{ fontSize: '14px', color: '#64748b' }}>Documents Processed</div>
            </div>
            <div>
              <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#059669' }}>12</div>
              <div style={{ fontSize: '14px', color: '#64748b' }}>Compliance Items</div>
            </div>
            <div>
              <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#d97706' }}>3</div>
              <div style={{ fontSize: '14px', color: '#64748b' }}>Pending Alerts</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;