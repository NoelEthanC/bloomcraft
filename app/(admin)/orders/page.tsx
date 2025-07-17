import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function OrdersPage() {
  const orders = [
    { id: 1, customer: 'John Doe', product: 'Rose Bouquet', status: 'Processing', total: '$89.99' },
    { id: 2, customer: 'Jane Smith', product: 'Orchid Plant', status: 'Delivered', total: '$124.50' },
    { id: 3, customer: 'Mike Johnson', product: 'Tulip Arrangement', status: 'Pending', total: '$65.00' },
    { id: 4, customer: 'Sarah Wilson', product: 'Succulent Garden', status: 'Shipped', total: '$45.75' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Processing': return 'bg-yellow-100 text-yellow-800';
      case 'Delivered': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-gray-100 text-gray-800';
      case 'Shipped': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Orders</h1>
        <p className="text-gray-600 mt-2">Manage customer orders and fulfillment</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3">Order ID</th>
                  <th className="text-left p-3">Customer</th>
                  <th className="text-left p-3">Product</th>
                  <th className="text-left p-3">Status</th>
                  <th className="text-left p-3">Total</th>
                  <th className="text-left p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-b">
                    <td className="p-3 font-mono">#{order.id.toString().padStart(4, '0')}</td>
                    <td className="p-3">{order.customer}</td>
                    <td className="p-3">{order.product}</td>
                    <td className="p-3">
                      <Badge className={getStatusColor(order.status)}>
                        {order.status}
                      </Badge>
                    </td>
                    <td className="p-3 font-semibold">{order.total}</td>
                    <td className="p-3">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}