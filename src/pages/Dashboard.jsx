import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, FileText, Wallet, Banknote, TrendingUp, CalendarClock } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Welcome Header */}
      <div className="text-2xl font-semibold">Welcome back, User 👋</div>
      <p className="text-muted-foreground">Here’s your financial snapshot for today.</p>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <Card className="bg-blue-50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm text-muted-foreground">Net Worth</h3>
                <input type="text" defaultValue="₹ 1,20,000" className="text-lg font-bold bg-transparent border-none focus:outline-none" />
              </div>
              <TrendingUp className="text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-green-50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm text-muted-foreground">Total Assets</h3>
                <input type="text" defaultValue="₹ 2,50,000" className="text-lg font-bold bg-transparent border-none focus:outline-none" />
              </div>
              <Banknote className="text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-red-50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm text-muted-foreground">Liabilities</h3>
                <input type="text" defaultValue="₹ 1,30,000" className="text-lg font-bold bg-transparent border-none focus:outline-none" />
              </div>
              <Wallet className="text-red-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-yellow-50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm text-muted-foreground">Monthly Expenses</h3>
                <input type="text" defaultValue="₹ 35,000" className="text-lg font-bold bg-transparent border-none focus:outline-none" />
              </div>
              <CalendarClock className="text-yellow-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-purple-50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm text-muted-foreground">Upcoming Payments</h3>
                <input type="text" defaultValue="₹ 10,000" className="text-lg font-bold bg-transparent border-none focus:outline-none" />
              </div>
              <BarChart3 className="text-purple-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-indigo-50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm text-muted-foreground">Savings Progress</h3>
                <input type="text" defaultValue="₹ 50,000" className="text-lg font-bold bg-transparent border-none focus:outline-none" />
              </div>
              <FileText className="text-indigo-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="flex gap-4">
        <Button>Add New Asset</Button>
        <Button>Add New Liability</Button>
        <Button>Go to Docs</Button>
        <Button>Write Diary Entry</Button>
      </div>

      {/* Placeholder for Charts */}
      <div className="bg-muted rounded-xl h-56 flex items-center justify-center text-muted-foreground mt-6">
        Charts and Graphs (D3.js) Coming Soon
      </div>
    </div>
  );
};

export default Dashboard;
