import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendEmail, zSmtpMessage } from "./utils/replitmail";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  // Email sending route for quotes and confirmations
  app.post("/api/mail/send-quote", async (req, res) => {
    try {
      const { customerEmail, packageDetails, pricing } = req.body;

      if (!customerEmail || !packageDetails) {
        return res.status(400).json({ 
          message: "Customer email and package details are required" 
        });
      }

      // Create email content
      const emailSubject = `AHTOB Postal Services - Quote Confirmation #${packageDetails.trackingNumber}`;
      
      const emailText = `
Dear Customer,

Thank you for choosing AHTOB Postal Services! Your quote has been confirmed.

Package Details:
- Tracking Number: ${packageDetails.trackingNumber}
- Service Type: ${packageDetails.serviceType}
- Weight: ${packageDetails.weight}kg
- Destination: ${packageDetails.destination}
- Estimated Cost: R${pricing?.total || 'TBD'}

Your package is now in our system and will be processed shortly.

Best regards,
AHTOB Postal Services Team
Calvin Botha, Founder & CEO
`;

      const emailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, hsl(180, 85%, 45%) 0%, hsl(200, 85%, 55%) 100%); color: white; padding: 20px; text-align: center;">
            <h1>AHTOB Postal Services</h1>
            <p>Quote Confirmation</p>
          </div>
          <div style="padding: 20px; background-color: #f8f9fa;">
            <h2>Dear Customer,</h2>
            <p>Thank you for choosing AHTOB Postal Services! Your quote has been confirmed.</p>
            
            <div style="background: white; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: hsl(180, 85%, 45%); margin-top: 0;">Package Details:</h3>
              <ul>
                <li><strong>Tracking Number:</strong> ${packageDetails.trackingNumber}</li>
                <li><strong>Service Type:</strong> ${packageDetails.serviceType}</li>
                <li><strong>Weight:</strong> ${packageDetails.weight}kg</li>
                <li><strong>Destination:</strong> ${packageDetails.destination}</li>
                <li><strong>Estimated Cost:</strong> R${pricing?.total || 'TBD'}</li>
              </ul>
            </div>
            
            <p>Your package is now in our system and will be processed shortly.</p>
            
            <div style="margin-top: 30px; text-align: center; color: #666;">
              <p>Best regards,<br>
              <strong>AHTOB Postal Services Team</strong><br>
              Calvin Botha, Founder & CEO</p>
            </div>
          </div>
        </div>
      `;

      // Send email using Replit Mail
      const result = await sendEmail({
        to: customerEmail,
        subject: emailSubject,
        text: emailText,
        html: emailHtml,
      });

      res.json({ 
        success: true, 
        message: "Quote confirmation email sent successfully",
        messageId: result.messageId 
      });

    } catch (error) {
      console.error("Email sending error:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to send email confirmation" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
