import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from '@/contexts/AuthContext';
import { Shield, Users, UserCog } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [selectedRole, setSelectedRole] = useState<'Staff' | 'HOD' | 'Admin' | null>(null);

  const roles = [
    {
      name: 'Staff' as const,
      icon: Users,
      description: 'Access to notifications, completed and overdue documents',
      color: 'text-blue-600'
    },
    {
      name: 'HOD' as const,
      icon: UserCog,
      description: 'Document summary with bilingual support + staff features',
      color: 'text-green-600'
    },
    {
      name: 'Admin' as const,
      icon: Shield,
      description: 'All departments overview with complete access',
      color: 'text-purple-600'
    }
  ];

  const handleLogin = () => {
    if (selectedRole) {
      login(selectedRole);
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-blue-600">KMRL Document System</CardTitle>
          <CardDescription className="text-lg">Select your role to continue</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {roles.map((role) => (
              <Card
                key={role.name}
                className={`cursor-pointer transition-all hover:shadow-lg ${
                  selectedRole === role.name ? 'ring-2 ring-blue-500 bg-blue-50' : ''
                }`}
                onClick={() => setSelectedRole(role.name)}
              >
                <CardContent className="flex items-center gap-4 p-6">
                  <role.icon className={`h-12 w-12 ${role.color}`} />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">{role.name}</h3>
                    <p className="text-sm text-muted-foreground">{role.description}</p>
                  </div>
                  <div className={`w-6 h-6 rounded-full border-2 ${
                    selectedRole === role.name 
                      ? 'bg-blue-500 border-blue-500' 
                      : 'border-gray-300'
                  } flex items-center justify-center`}>
                    {selectedRole === role.name && (
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <Button
            className="w-full mt-6"
            size="lg"
            onClick={handleLogin}
            disabled={!selectedRole}
          >
            Login as {selectedRole || '...'}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
