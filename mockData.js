// Mock data for bills, payments, customers

export const mockCustomers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', serviceNumber: '1234567890123' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', serviceNumber: '9876543210987' },
];

export const mockBills = [
  { id: 1, customerId: 1, amount: 750.25, dueDate: '2025-10-30', status: 'unpaid' },
  { id: 2, customerId: 1, amount: 650.00, dueDate: '2025-09-30', status: 'paid' },
  { id: 3, customerId: 2, amount: 800.50, dueDate: '2025-10-15', status: 'unpaid' },
];

export const mockPayments = [
  { id: 1, billId: 2, customerId: 1, amount: 650.00, date: '2025-09-25', status: 'completed' },
];
