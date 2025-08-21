# 📚 LearnSphere – LMS Platform  

LearnSphere is a full-stack **Learning Management System (LMS)** that enables instructors to create and publish courses, while students can purchase, enroll, and learn seamlessly.  

---

## 🚀 Features  

- 👨‍🏫 **Role-based Access** – Instructor & Student roles  
- 🎥 **Course Management** – Create, update, publish, and delete courses  
- 📂 **Lecture Management** – Upload and organize video lectures  
- 💳 **Secure Payments** – Integrated Razorpay for course purchases  
- 🔑 **Authentication & Authorization** – JWT-based login, signup, and role protection  
- 👥 **Student Enrollment** – Automatic enrollment after successful payment  
- 🖼️ **Media Management** – Course thumbnails & lecture videos  
- 📊 **Dashboard** – Track purchased/enrolled courses  
- 📱 **Responsive UI**  

---

## 🛠 Tech Stack  

**Frontend:** React, TailwindCSS  
**Backend:** Node.js, Express.js  
**Database:** MongoDB (Mongoose ORM)  
**Auth:** JWT, bcrypt  
**Payments:** Razorpay (Orders API + Webhooks)  
**Cloud Storage:** (Cloudinary / AWS S3 if used)  

---

## 🏗️ Project Architecture  

```mermaid
flowchart TD
    A[Frontend - React] -->|Buy Course| B[Backend - Express API]
    B -->|Create Order| C[Razorpay API]
    C -->|OrderId| B
    B -->|OrderId + Key| A
    A -->|Payment Success| B
    B -->|Verify Signature| D[Database - MongoDB]
    C -->|Webhook (confirmation)| B
    B -->|Update Status| D
    D -->|Grant Access| A


LearnSphere/
│── backend/
│   ├── models/
│   │   ├── User.js
│   │   ├── Course.js
│   │   ├── Lecture.js
│   │   └── CoursePurchase.js
│   ├── routes/
│   ├── controllers/
│   ├── utils/
│   └── server.js
│
│── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── App.js
│
│── README.md


💳 Payment Flow

Student clicks Buy Course → API request sent to backend.

Backend calls Razorpay Orders API and returns orderId + key.

Frontend opens Razorpay Checkout with course details.

On successful payment, Razorpay returns paymentId + signature.

Backend verifies signature using Razorpay secret.

If valid → Create entry in CoursePurchase → Mark course as unlocked.

Razorpay Webhook also confirms payment for redundancy.

🔐 Security Measures

Passwords hashed with bcrypt.

JWT tokens for session management.

Role-based authorization (Instructor / Student).

Payment signature verification only on server.

Payment amount always derived from DB (not client).

🚧 Future Improvements

📈 Instructor analytics dashboard

🌍 Multi-currency support in payments

📨 Email notifications (purchase confirmation, course updates)

📱 Mobile App with React Native

🎯 AI-based course recommendations

