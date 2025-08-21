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

----

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

<img width="2169" height="1201" alt="Screenshot 2025-08-21 163211" src="https://github.com/user-attachments/assets/f9e3b5d6-5b65-4031-9ae7-3c0aa3e316a6" />
<img width="2192" height="711" alt="Screenshot 2025-08-21 163253" src="https://github.com/user-attachments/assets/c576a181-5bbb-436d-a0d8-d03017fd78c2" />
<img width="2220" height="873" alt="Screenshot 2025-08-21 163307" src="https://github.com/user-attachments/assets/b0eb6bf8-e331-40c1-831c-e1c84ee71652" />
<img width="2217" height="978" alt="Screenshot 2025-08-21 163325" src="https://github.com/user-attachments/assets/d12b9f48-b52e-46af-a945-259e6a2f1122" />
<img width="2204" height="715" alt="Screenshot 2025-08-21 163336" src="https://github.com/user-attachments/assets/a612e913-3ebc-48f3-9c2f-3551010d9449" />
<img width="2184" height="706" alt="Screenshot 2025-08-21 163351" src="https://github.com/user-attachments/assets/92800df9-5cb6-4b06-a49f-aa806407959e" />


