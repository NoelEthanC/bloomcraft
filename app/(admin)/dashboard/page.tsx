import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Package, MessageSquare, TrendingUp, Users } from 'lucide-react';

export default function AdminDashboard() {
  const stats = [
    { title: 'Total Orders', value: '2,456', icon: Package, change: '+12%' },
    { title: 'Chatbot Interactions', value: '8,721', icon: MessageSquare, change: '+23%' },
    { title: 'Revenue', value: '$45,231', icon: TrendingUp, change: '+8%' },
    { title: 'Active Customers', value: '1,234', icon: Users, change: '+5%' },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Overview of your flower business</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-gray-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <Badge variant="secondary" className="mt-1">
                {stat.change}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((order) => (
                <div key={order} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-semibold">Order #{order}0{order}</p>
                    <p className="text-sm text-gray-600">Rose Bouquet - Premium</p>
                  </div>
                  <Badge variant="outline">Processing</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Chatbot Usage Logs</CardTitle>
            <p className="text-sm text-gray-600">Real-time customer interactions</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((log) => (
                <div key={log} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-semibold">Customer #{log}23</p>
                    <p className="text-sm text-gray-600">Asked about flower care tips</p>
                  </div>
                  <span className="text-xs text-gray-500">2 min ago</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}