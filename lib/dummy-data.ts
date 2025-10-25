// Dummy user accounts for testing
export const DUMMY_USERS = {
  consumer: {
    email: "consumer@ojaya.com",
    password: "consumer123",
    name: "Aisha Mohammed",
    role: "consumer" as const,
    id: "consumer_001",
  },
  farmer: {
    email: "farmer@ojaya.com",
    password: "farmer123",
    name: "Adeyemi Farms",
    role: "farmer" as const,
    id: "farmer_001",
  },
  admin: {
    email: "admin@ojaya.com",
    password: "admin123",
    name: "Admin User",
    role: "admin" as const,
    id: "admin_001",
  },
}

// Additional test accounts
export const TEST_ACCOUNTS = [
  {
    email: "john.consumer@test.com",
    password: "test123",
    name: "John Consumer",
    role: "consumer" as const,
    id: "consumer_002",
  },
  {
    email: "mary.farmer@test.com",
    password: "test123",
    name: "Mary's Farm",
    role: "farmer" as const,
    id: "farmer_002",
  },
]

// Combine all accounts for easy lookup
export const ALL_ACCOUNTS = [
  DUMMY_USERS.consumer,
  DUMMY_USERS.farmer,
  DUMMY_USERS.admin,
  ...TEST_ACCOUNTS,
]

// Helper function to validate credentials
export function validateCredentials(email: string, password: string, role: string) {
  const account = ALL_ACCOUNTS.find(
    (acc) => acc.email.toLowerCase() === email.toLowerCase() && acc.password === password && acc.role === role
  )
  return account || null
}
