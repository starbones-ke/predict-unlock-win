Create a betting site application.
1.  **User Authentication**: Implement user registration and login using Supabase Auth.
2.  **Match Data**:
    *   Create a Supabase database table to store match information (e.g., teams, date, time, status).
    *   Develop backend logic (potentially Supabase Edge Functions) to fetch and display matches for the day.
3.  **Prediction System**:
    *   Allow users to select a match and make a prediction (e.g., win/loss/draw).
    *   Store user predictions in the Supabase database, linked to the user and the match.
4.  **Payment Gateway**:
    *   Integrate a payment gateway (e.g., Stripe) to handle small payments from users.
    *   Implement logic to unlock specific matches or prediction features upon successful payment.
    *   Store payment transaction details in the Supabase database.
5.  **Frontend Development**:
    *   Build a user interface for displaying matches, making predictions, and handling payments.
    *   Ensure a responsive design for various devices.
    *   The frontend engineer should use `generate_images_bulk` to create necessary assets before writing code.