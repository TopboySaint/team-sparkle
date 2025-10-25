# Oja'ya - Login Credentials

## Test Accounts for Development

Use these credentials to access different dashboards in the Oja'ya application.

---

### 🛒 Consumer Account
Access the consumer shopping experience and account management.

**Email:** `consumer@ojaya.com`  
**Password:** `consumer123`  
**Role:** Consumer  
**Redirects to:** `/products`

---

### 🌾 Farmer Account
Access the farmer dashboard to manage products and track sales.

**Email:** `farmer@ojaya.com`  
**Password:** `farmer123`  
**Role:** Farmer  
**Redirects to:** `/farmer/dashboard`

---

### 👤 Admin Account
Access the admin dashboard with full system controls.

**Email:** `admin@ojaya.com`  
**Password:** `admin123`  
**Role:** Admin  
**Redirects to:** `/admin`

---

## Additional Test Accounts

### Consumer Test Account
**Email:** `john.consumer@test.com`  
**Password:** `test123`  
**Role:** Consumer

### Farmer Test Account
**Email:** `mary.farmer@test.com`  
**Password:** `test123`  
**Role:** Farmer

---

## How to Login

1. Navigate to `/login` page
2. Select the user type (Consumer, Farmer, or Admin)
3. Enter the email and password from above
4. Click "Sign In"
5. You will be redirected to the appropriate dashboard

---

## Important Notes

⚠️ **These are dummy credentials for development only**
- Do not use in production
- Credentials are stored in `client-side/lib/dummy-data.ts`
- Authentication is simulated and uses localStorage
- No actual backend authentication is performed

---

## Quick Access URLs

- **Login Page:** `http://localhost:3000/login`
- **Admin Dashboard:** `http://localhost:3000/admin`
- **Farmer Dashboard:** `http://localhost:3000/farmer/dashboard`
- **Products Page:** `http://localhost:3000/products`
- **Account Page:** `http://localhost:3000/account`

---

Last Updated: October 25, 2025
